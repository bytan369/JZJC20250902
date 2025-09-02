import axios from "axios";

const baseURL = process.env.LLM_BASE_URL as string;
const apiKey = process.env.LLM_API_KEY as string;
const model = process.env.LLM_MODEL as string;

export async function chatJson(prompt: string): Promise<any> {
	if (!baseURL || !model || !apiKey) {
		console.warn("LLM配置不完整，跳过智能分析");
		return {};
	}
	
	try {
		const url = `${baseURL}/chat/completions`;
		const { data } = await axios.post(
			url,
			{
				model,
				messages: [
					{ 
						role: "system", 
						content: "你是一个专业的文档分析助手。请根据用户提供的文档内容，只输出严格合法的JSON格式结果，不要包含任何解释文字。" 
					},
					{ role: "user", content: prompt }
				],
				temperature: 0.2,
				max_tokens: 2000
			},
			{
				headers: { 
					Authorization: `Bearer ${apiKey}`,
					"Content-Type": "application/json"
				},
				timeout: 30000 // 30秒超时
			}
		);
		
		const text = data?.choices?.[0]?.message?.content ?? "{}";
		return JSON.parse(text);
	} catch (error) {
		console.error("LLM API调用失败:", error);
		return {};
	}
}

export async function chatText(prompt: string): Promise<string> {
	if (!baseURL || !model || !apiKey) {
		return "LLM服务未配置";
	}
	
	try {
		const url = `${baseURL}/chat/completions`;
		const { data } = await axios.post(
			url,
			{
				model,
				messages: [
					{ 
						role: "system", 
						content: "你是一个专业的文档分析助手。请根据用户提供的文档内容进行分析和回答。" 
					},
					{ role: "user", content: prompt }
				],
				temperature: 0.3,
				max_tokens: 1000
			},
			{
				headers: { 
					Authorization: `Bearer ${apiKey}`,
					"Content-Type": "application/json"
				},
				timeout: 30000
			}
		);
		
		return data?.choices?.[0]?.message?.content ?? "分析失败";
	} catch (error) {
		console.error("LLM API调用失败:", error);
		return "分析服务暂时不可用";
	}
}
