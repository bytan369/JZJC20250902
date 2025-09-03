
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Org
 * 
 */
export type Org = $Result.DefaultSelection<Prisma.$OrgPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model StandardDoc
 * 
 */
export type StandardDoc = $Result.DefaultSelection<Prisma.$StandardDocPayload>
/**
 * Model QAFinding
 * 
 */
export type QAFinding = $Result.DefaultSelection<Prisma.$QAFindingPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  FINANCE: 'FINANCE',
  QA: 'QA',
  SALESPM: 'SALESPM',
  READONLY: 'READONLY'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ContractStatus: {
  FOLLOW_UP: 'FOLLOW_UP',
  SIGNED: 'SIGNED',
  EXECUTING: 'EXECUTING',
  DONE: 'DONE'
};

export type ContractStatus = (typeof ContractStatus)[keyof typeof ContractStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ContractStatus = $Enums.ContractStatus

export const ContractStatus: typeof $Enums.ContractStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orgs
 * const orgs = await prisma.org.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Orgs
   * const orgs = await prisma.org.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.org`: Exposes CRUD operations for the **Org** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orgs
    * const orgs = await prisma.org.findMany()
    * ```
    */
  get org(): Prisma.OrgDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.standardDoc`: Exposes CRUD operations for the **StandardDoc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StandardDocs
    * const standardDocs = await prisma.standardDoc.findMany()
    * ```
    */
  get standardDoc(): Prisma.StandardDocDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qAFinding`: Exposes CRUD operations for the **QAFinding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QAFindings
    * const qAFindings = await prisma.qAFinding.findMany()
    * ```
    */
  get qAFinding(): Prisma.QAFindingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Org: 'Org',
    User: 'User',
    Project: 'Project',
    Contract: 'Contract',
    Payment: 'Payment',
    Report: 'Report',
    StandardDoc: 'StandardDoc',
    QAFinding: 'QAFinding',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "org" | "user" | "project" | "contract" | "payment" | "report" | "standardDoc" | "qAFinding" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Org: {
        payload: Prisma.$OrgPayload<ExtArgs>
        fields: Prisma.OrgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          findFirst: {
            args: Prisma.OrgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          findMany: {
            args: Prisma.OrgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>[]
          }
          create: {
            args: Prisma.OrgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          createMany: {
            args: Prisma.OrgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>[]
          }
          delete: {
            args: Prisma.OrgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          update: {
            args: Prisma.OrgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          deleteMany: {
            args: Prisma.OrgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrgUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>[]
          }
          upsert: {
            args: Prisma.OrgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrgPayload>
          }
          aggregate: {
            args: Prisma.OrgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrg>
          }
          groupBy: {
            args: Prisma.OrgGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrgGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrgCountArgs<ExtArgs>
            result: $Utils.Optional<OrgCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      StandardDoc: {
        payload: Prisma.$StandardDocPayload<ExtArgs>
        fields: Prisma.StandardDocFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StandardDocFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardDocPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StandardDocFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardDocPayload>
          }
          findFirst: {
            args: Prisma.StandardDocFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardDocPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StandardDocFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardDocPayload>
          }
          findMany: {
            args: Prisma.StandardDocFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardDocPayload>[]
          }
          create: {
            args: Prisma.StandardDocCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardDocPayload>
          }
          createMany: {
            args: Prisma.StandardDocCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StandardDocCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardDocPayload>[]
          }
          delete: {
            args: Prisma.StandardDocDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardDocPayload>
          }
          update: {
            args: Prisma.StandardDocUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardDocPayload>
          }
          deleteMany: {
            args: Prisma.StandardDocDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StandardDocUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StandardDocUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardDocPayload>[]
          }
          upsert: {
            args: Prisma.StandardDocUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StandardDocPayload>
          }
          aggregate: {
            args: Prisma.StandardDocAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStandardDoc>
          }
          groupBy: {
            args: Prisma.StandardDocGroupByArgs<ExtArgs>
            result: $Utils.Optional<StandardDocGroupByOutputType>[]
          }
          count: {
            args: Prisma.StandardDocCountArgs<ExtArgs>
            result: $Utils.Optional<StandardDocCountAggregateOutputType> | number
          }
        }
      }
      QAFinding: {
        payload: Prisma.$QAFindingPayload<ExtArgs>
        fields: Prisma.QAFindingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QAFindingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAFindingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QAFindingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAFindingPayload>
          }
          findFirst: {
            args: Prisma.QAFindingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAFindingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QAFindingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAFindingPayload>
          }
          findMany: {
            args: Prisma.QAFindingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAFindingPayload>[]
          }
          create: {
            args: Prisma.QAFindingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAFindingPayload>
          }
          createMany: {
            args: Prisma.QAFindingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QAFindingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAFindingPayload>[]
          }
          delete: {
            args: Prisma.QAFindingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAFindingPayload>
          }
          update: {
            args: Prisma.QAFindingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAFindingPayload>
          }
          deleteMany: {
            args: Prisma.QAFindingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QAFindingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QAFindingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAFindingPayload>[]
          }
          upsert: {
            args: Prisma.QAFindingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QAFindingPayload>
          }
          aggregate: {
            args: Prisma.QAFindingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQAFinding>
          }
          groupBy: {
            args: Prisma.QAFindingGroupByArgs<ExtArgs>
            result: $Utils.Optional<QAFindingGroupByOutputType>[]
          }
          count: {
            args: Prisma.QAFindingCountArgs<ExtArgs>
            result: $Utils.Optional<QAFindingCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    org?: OrgOmit
    user?: UserOmit
    project?: ProjectOmit
    contract?: ContractOmit
    payment?: PaymentOmit
    report?: ReportOmit
    standardDoc?: StandardDocOmit
    qAFinding?: QAFindingOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrgCountOutputType
   */

  export type OrgCountOutputType = {
    users: number
    projects: number
    contracts: number
    reports: number
  }

  export type OrgCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | OrgCountOutputTypeCountUsersArgs
    projects?: boolean | OrgCountOutputTypeCountProjectsArgs
    contracts?: boolean | OrgCountOutputTypeCountContractsArgs
    reports?: boolean | OrgCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrgCountOutputType
     */
    select?: OrgCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }

  /**
   * OrgCountOutputType without action
   */
  export type OrgCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Count Type ContractCountOutputType
   */

  export type ContractCountOutputType = {
    payments: number
    reports: number
  }

  export type ContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | ContractCountOutputTypeCountPaymentsArgs
    reports?: boolean | ContractCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     */
    select?: ContractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Count Type ReportCountOutputType
   */

  export type ReportCountOutputType = {
    findings: number
  }

  export type ReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    findings?: boolean | ReportCountOutputTypeCountFindingsArgs
  }

  // Custom InputTypes
  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCountOutputType
     */
    select?: ReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountFindingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QAFindingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Org
   */

  export type AggregateOrg = {
    _count: OrgCountAggregateOutputType | null
    _min: OrgMinAggregateOutputType | null
    _max: OrgMaxAggregateOutputType | null
  }

  export type OrgMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type OrgMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type OrgCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type OrgMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type OrgMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type OrgCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type OrgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Org to aggregate.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orgs
    **/
    _count?: true | OrgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrgMaxAggregateInputType
  }

  export type GetOrgAggregateType<T extends OrgAggregateArgs> = {
        [P in keyof T & keyof AggregateOrg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrg[P]>
      : GetScalarType<T[P], AggregateOrg[P]>
  }




  export type OrgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrgWhereInput
    orderBy?: OrgOrderByWithAggregationInput | OrgOrderByWithAggregationInput[]
    by: OrgScalarFieldEnum[] | OrgScalarFieldEnum
    having?: OrgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrgCountAggregateInputType | true
    _min?: OrgMinAggregateInputType
    _max?: OrgMaxAggregateInputType
  }

  export type OrgGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: OrgCountAggregateOutputType | null
    _min: OrgMinAggregateOutputType | null
    _max: OrgMaxAggregateOutputType | null
  }

  type GetOrgGroupByPayload<T extends OrgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrgGroupByOutputType[P]>
            : GetScalarType<T[P], OrgGroupByOutputType[P]>
        }
      >
    >


  export type OrgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    users?: boolean | Org$usersArgs<ExtArgs>
    projects?: boolean | Org$projectsArgs<ExtArgs>
    contracts?: boolean | Org$contractsArgs<ExtArgs>
    reports?: boolean | Org$reportsArgs<ExtArgs>
    _count?: boolean | OrgCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["org"]>

  export type OrgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["org"]>

  export type OrgSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["org"]>

  export type OrgSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type OrgOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["org"]>
  export type OrgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Org$usersArgs<ExtArgs>
    projects?: boolean | Org$projectsArgs<ExtArgs>
    contracts?: boolean | Org$contractsArgs<ExtArgs>
    reports?: boolean | Org$reportsArgs<ExtArgs>
    _count?: boolean | OrgCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrgIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrgIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Org"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      contracts: Prisma.$ContractPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["org"]>
    composites: {}
  }

  type OrgGetPayload<S extends boolean | null | undefined | OrgDefaultArgs> = $Result.GetResult<Prisma.$OrgPayload, S>

  type OrgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrgFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrgCountAggregateInputType | true
    }

  export interface OrgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Org'], meta: { name: 'Org' } }
    /**
     * Find zero or one Org that matches the filter.
     * @param {OrgFindUniqueArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrgFindUniqueArgs>(args: SelectSubset<T, OrgFindUniqueArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Org that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrgFindUniqueOrThrowArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrgFindUniqueOrThrowArgs>(args: SelectSubset<T, OrgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Org that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgFindFirstArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrgFindFirstArgs>(args?: SelectSubset<T, OrgFindFirstArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Org that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgFindFirstOrThrowArgs} args - Arguments to find a Org
     * @example
     * // Get one Org
     * const org = await prisma.org.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrgFindFirstOrThrowArgs>(args?: SelectSubset<T, OrgFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orgs
     * const orgs = await prisma.org.findMany()
     * 
     * // Get first 10 Orgs
     * const orgs = await prisma.org.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orgWithIdOnly = await prisma.org.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrgFindManyArgs>(args?: SelectSubset<T, OrgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Org.
     * @param {OrgCreateArgs} args - Arguments to create a Org.
     * @example
     * // Create one Org
     * const Org = await prisma.org.create({
     *   data: {
     *     // ... data to create a Org
     *   }
     * })
     * 
     */
    create<T extends OrgCreateArgs>(args: SelectSubset<T, OrgCreateArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orgs.
     * @param {OrgCreateManyArgs} args - Arguments to create many Orgs.
     * @example
     * // Create many Orgs
     * const org = await prisma.org.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrgCreateManyArgs>(args?: SelectSubset<T, OrgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orgs and returns the data saved in the database.
     * @param {OrgCreateManyAndReturnArgs} args - Arguments to create many Orgs.
     * @example
     * // Create many Orgs
     * const org = await prisma.org.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orgs and only return the `id`
     * const orgWithIdOnly = await prisma.org.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrgCreateManyAndReturnArgs>(args?: SelectSubset<T, OrgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Org.
     * @param {OrgDeleteArgs} args - Arguments to delete one Org.
     * @example
     * // Delete one Org
     * const Org = await prisma.org.delete({
     *   where: {
     *     // ... filter to delete one Org
     *   }
     * })
     * 
     */
    delete<T extends OrgDeleteArgs>(args: SelectSubset<T, OrgDeleteArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Org.
     * @param {OrgUpdateArgs} args - Arguments to update one Org.
     * @example
     * // Update one Org
     * const org = await prisma.org.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrgUpdateArgs>(args: SelectSubset<T, OrgUpdateArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orgs.
     * @param {OrgDeleteManyArgs} args - Arguments to filter Orgs to delete.
     * @example
     * // Delete a few Orgs
     * const { count } = await prisma.org.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrgDeleteManyArgs>(args?: SelectSubset<T, OrgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orgs
     * const org = await prisma.org.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrgUpdateManyArgs>(args: SelectSubset<T, OrgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orgs and returns the data updated in the database.
     * @param {OrgUpdateManyAndReturnArgs} args - Arguments to update many Orgs.
     * @example
     * // Update many Orgs
     * const org = await prisma.org.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orgs and only return the `id`
     * const orgWithIdOnly = await prisma.org.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrgUpdateManyAndReturnArgs>(args: SelectSubset<T, OrgUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Org.
     * @param {OrgUpsertArgs} args - Arguments to update or create a Org.
     * @example
     * // Update or create a Org
     * const org = await prisma.org.upsert({
     *   create: {
     *     // ... data to create a Org
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Org we want to update
     *   }
     * })
     */
    upsert<T extends OrgUpsertArgs>(args: SelectSubset<T, OrgUpsertArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgCountArgs} args - Arguments to filter Orgs to count.
     * @example
     * // Count the number of Orgs
     * const count = await prisma.org.count({
     *   where: {
     *     // ... the filter for the Orgs we want to count
     *   }
     * })
    **/
    count<T extends OrgCountArgs>(
      args?: Subset<T, OrgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Org.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrgAggregateArgs>(args: Subset<T, OrgAggregateArgs>): Prisma.PrismaPromise<GetOrgAggregateType<T>>

    /**
     * Group by Org.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrgGroupByArgs['orderBy'] }
        : { orderBy?: OrgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Org model
   */
  readonly fields: OrgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Org.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Org$usersArgs<ExtArgs> = {}>(args?: Subset<T, Org$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Org$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Org$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contracts<T extends Org$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Org$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends Org$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Org$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Org model
   */
  interface OrgFieldRefs {
    readonly id: FieldRef<"Org", 'String'>
    readonly name: FieldRef<"Org", 'String'>
    readonly createdAt: FieldRef<"Org", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Org findUnique
   */
  export type OrgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org findUniqueOrThrow
   */
  export type OrgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org findFirst
   */
  export type OrgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orgs.
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orgs.
     */
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * Org findFirstOrThrow
   */
  export type OrgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Org to fetch.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orgs.
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orgs.
     */
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * Org findMany
   */
  export type OrgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter, which Orgs to fetch.
     */
    where?: OrgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orgs to fetch.
     */
    orderBy?: OrgOrderByWithRelationInput | OrgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orgs.
     */
    cursor?: OrgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orgs.
     */
    skip?: number
    distinct?: OrgScalarFieldEnum | OrgScalarFieldEnum[]
  }

  /**
   * Org create
   */
  export type OrgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * The data needed to create a Org.
     */
    data: XOR<OrgCreateInput, OrgUncheckedCreateInput>
  }

  /**
   * Org createMany
   */
  export type OrgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orgs.
     */
    data: OrgCreateManyInput | OrgCreateManyInput[]
  }

  /**
   * Org createManyAndReturn
   */
  export type OrgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * The data used to create many Orgs.
     */
    data: OrgCreateManyInput | OrgCreateManyInput[]
  }

  /**
   * Org update
   */
  export type OrgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * The data needed to update a Org.
     */
    data: XOR<OrgUpdateInput, OrgUncheckedUpdateInput>
    /**
     * Choose, which Org to update.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org updateMany
   */
  export type OrgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orgs.
     */
    data: XOR<OrgUpdateManyMutationInput, OrgUncheckedUpdateManyInput>
    /**
     * Filter which Orgs to update
     */
    where?: OrgWhereInput
    /**
     * Limit how many Orgs to update.
     */
    limit?: number
  }

  /**
   * Org updateManyAndReturn
   */
  export type OrgUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * The data used to update Orgs.
     */
    data: XOR<OrgUpdateManyMutationInput, OrgUncheckedUpdateManyInput>
    /**
     * Filter which Orgs to update
     */
    where?: OrgWhereInput
    /**
     * Limit how many Orgs to update.
     */
    limit?: number
  }

  /**
   * Org upsert
   */
  export type OrgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * The filter to search for the Org to update in case it exists.
     */
    where: OrgWhereUniqueInput
    /**
     * In case the Org found by the `where` argument doesn't exist, create a new Org with this data.
     */
    create: XOR<OrgCreateInput, OrgUncheckedCreateInput>
    /**
     * In case the Org was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrgUpdateInput, OrgUncheckedUpdateInput>
  }

  /**
   * Org delete
   */
  export type OrgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
    /**
     * Filter which Org to delete.
     */
    where: OrgWhereUniqueInput
  }

  /**
   * Org deleteMany
   */
  export type OrgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orgs to delete
     */
    where?: OrgWhereInput
    /**
     * Limit how many Orgs to delete.
     */
    limit?: number
  }

  /**
   * Org.users
   */
  export type Org$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Org.projects
   */
  export type Org$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Org.contracts
   */
  export type Org$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Org.reports
   */
  export type Org$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Org without action
   */
  export type OrgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Org
     */
    select?: OrgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Org
     */
    omit?: OrgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrgInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    orgId: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    orgId: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    orgId: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    orgId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    orgId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    orgId?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    orgId: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    orgId?: boolean
    createdAt?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    orgId?: boolean
    createdAt?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    orgId?: boolean
    createdAt?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    orgId?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "orgId" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      org: Prisma.$OrgPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.Role
      orgId: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrgDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrgDefaultArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly orgId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    createdAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    name: string | null
    createdAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    orgId: number
    name: number
    createdAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    createdAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    createdAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    orgId?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    orgId: string
    name: string
    createdAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    createdAt?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    createdAt?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    name?: boolean
    createdAt?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    orgId?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "name" | "createdAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      org: Prisma.$OrgPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrgDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrgDefaultArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly orgId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    totalAmount: number | null
    arAmount: number | null
    paidAmount: number | null
  }

  export type ContractSumAggregateOutputType = {
    totalAmount: number | null
    arAmount: number | null
    paidAmount: number | null
  }

  export type ContractMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    customer: string | null
    projectName: string | null
    totalAmount: number | null
    currency: string | null
    status: $Enums.ContractStatus | null
    signedDate: Date | null
    startDate: Date | null
    endDate: Date | null
    arAmount: number | null
    paidAmount: number | null
    filePath: string | null
    text: string | null
    metaJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    customer: string | null
    projectName: string | null
    totalAmount: number | null
    currency: string | null
    status: $Enums.ContractStatus | null
    signedDate: Date | null
    startDate: Date | null
    endDate: Date | null
    arAmount: number | null
    paidAmount: number | null
    filePath: string | null
    text: string | null
    metaJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    orgId: number
    customer: number
    projectName: number
    totalAmount: number
    currency: number
    status: number
    signedDate: number
    startDate: number
    endDate: number
    arAmount: number
    paidAmount: number
    filePath: number
    text: number
    metaJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    totalAmount?: true
    arAmount?: true
    paidAmount?: true
  }

  export type ContractSumAggregateInputType = {
    totalAmount?: true
    arAmount?: true
    paidAmount?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    orgId?: true
    customer?: true
    projectName?: true
    totalAmount?: true
    currency?: true
    status?: true
    signedDate?: true
    startDate?: true
    endDate?: true
    arAmount?: true
    paidAmount?: true
    filePath?: true
    text?: true
    metaJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    orgId?: true
    customer?: true
    projectName?: true
    totalAmount?: true
    currency?: true
    status?: true
    signedDate?: true
    startDate?: true
    endDate?: true
    arAmount?: true
    paidAmount?: true
    filePath?: true
    text?: true
    metaJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    orgId?: true
    customer?: true
    projectName?: true
    totalAmount?: true
    currency?: true
    status?: true
    signedDate?: true
    startDate?: true
    endDate?: true
    arAmount?: true
    paidAmount?: true
    filePath?: true
    text?: true
    metaJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: string
    orgId: string
    customer: string
    projectName: string
    totalAmount: number
    currency: string
    status: $Enums.ContractStatus
    signedDate: Date | null
    startDate: Date | null
    endDate: Date | null
    arAmount: number
    paidAmount: number
    filePath: string
    text: string
    metaJson: string
    createdAt: Date
    updatedAt: Date
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    customer?: boolean
    projectName?: boolean
    totalAmount?: boolean
    currency?: boolean
    status?: boolean
    signedDate?: boolean
    startDate?: boolean
    endDate?: boolean
    arAmount?: boolean
    paidAmount?: boolean
    filePath?: boolean
    text?: boolean
    metaJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
    payments?: boolean | Contract$paymentsArgs<ExtArgs>
    reports?: boolean | Contract$reportsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    customer?: boolean
    projectName?: boolean
    totalAmount?: boolean
    currency?: boolean
    status?: boolean
    signedDate?: boolean
    startDate?: boolean
    endDate?: boolean
    arAmount?: boolean
    paidAmount?: boolean
    filePath?: boolean
    text?: boolean
    metaJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    customer?: boolean
    projectName?: boolean
    totalAmount?: boolean
    currency?: boolean
    status?: boolean
    signedDate?: boolean
    startDate?: boolean
    endDate?: boolean
    arAmount?: boolean
    paidAmount?: boolean
    filePath?: boolean
    text?: boolean
    metaJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    orgId?: boolean
    customer?: boolean
    projectName?: boolean
    totalAmount?: boolean
    currency?: boolean
    status?: boolean
    signedDate?: boolean
    startDate?: boolean
    endDate?: boolean
    arAmount?: boolean
    paidAmount?: boolean
    filePath?: boolean
    text?: boolean
    metaJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "customer" | "projectName" | "totalAmount" | "currency" | "status" | "signedDate" | "startDate" | "endDate" | "arAmount" | "paidAmount" | "filePath" | "text" | "metaJson" | "createdAt" | "updatedAt", ExtArgs["result"]["contract"]>
  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
    payments?: boolean | Contract$paymentsArgs<ExtArgs>
    reports?: boolean | Contract$reportsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }
  export type ContractIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
  }

  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      org: Prisma.$OrgPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      customer: string
      projectName: string
      totalAmount: number
      currency: string
      status: $Enums.ContractStatus
      signedDate: Date | null
      startDate: Date | null
      endDate: Date | null
      arAmount: number
      paidAmount: number
      filePath: string
      text: string
      metaJson: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }

  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractFindUniqueArgs>(args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractFindFirstArgs>(args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractFindManyArgs>(args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
     */
    create<T extends ContractCreateArgs>(args: SelectSubset<T, ContractCreateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractCreateManyArgs>(args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contract = await prisma.contract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
     */
    delete<T extends ContractDeleteArgs>(args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractUpdateArgs>(args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractDeleteManyArgs>(args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractUpdateManyArgs>(args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractWithIdOnly = await prisma.contract.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
     */
    upsert<T extends ContractUpsertArgs>(args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrgDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrgDefaultArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Contract$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends Contract$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contract model
   */
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'String'>
    readonly orgId: FieldRef<"Contract", 'String'>
    readonly customer: FieldRef<"Contract", 'String'>
    readonly projectName: FieldRef<"Contract", 'String'>
    readonly totalAmount: FieldRef<"Contract", 'Float'>
    readonly currency: FieldRef<"Contract", 'String'>
    readonly status: FieldRef<"Contract", 'ContractStatus'>
    readonly signedDate: FieldRef<"Contract", 'DateTime'>
    readonly startDate: FieldRef<"Contract", 'DateTime'>
    readonly endDate: FieldRef<"Contract", 'DateTime'>
    readonly arAmount: FieldRef<"Contract", 'Float'>
    readonly paidAmount: FieldRef<"Contract", 'Float'>
    readonly filePath: FieldRef<"Contract", 'String'>
    readonly text: FieldRef<"Contract", 'String'>
    readonly metaJson: FieldRef<"Contract", 'String'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
  }

  /**
   * Contract createManyAndReturn
   */
  export type ContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contract updateManyAndReturn
   */
  export type ContractUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contract.payments
   */
  export type Contract$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Contract.reports
   */
  export type Contract$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    amount: number | null
    paidDate: Date | null
    note: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    amount: number | null
    paidDate: Date | null
    note: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    contractId: number
    amount: number
    paidDate: number
    note: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    contractId?: true
    amount?: true
    paidDate?: true
    note?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    contractId?: true
    amount?: true
    paidDate?: true
    note?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    contractId?: true
    amount?: true
    paidDate?: true
    note?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    contractId: string
    amount: number
    paidDate: Date
    note: string | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    amount?: boolean
    paidDate?: boolean
    note?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    amount?: boolean
    paidDate?: boolean
    note?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    amount?: boolean
    paidDate?: boolean
    note?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    contractId?: boolean
    amount?: boolean
    paidDate?: boolean
    note?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "amount" | "paidDate" | "note", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractId: string
      amount: number
      paidDate: Date
      note: string | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly contractId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly paidDate: FieldRef<"Payment", 'DateTime'>
    readonly note: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    orgId: string | null
    contractId: string | null
    reportNo: string | null
    sampleDate: Date | null
    receiveDate: Date | null
    issueDate: Date | null
    filePath: string | null
    text: string | null
    createdAt: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    orgId: string | null
    contractId: string | null
    reportNo: string | null
    sampleDate: Date | null
    receiveDate: Date | null
    issueDate: Date | null
    filePath: string | null
    text: string | null
    createdAt: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    orgId: number
    contractId: number
    reportNo: number
    sampleDate: number
    receiveDate: number
    issueDate: number
    filePath: number
    text: number
    createdAt: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    orgId?: true
    contractId?: true
    reportNo?: true
    sampleDate?: true
    receiveDate?: true
    issueDate?: true
    filePath?: true
    text?: true
    createdAt?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    orgId?: true
    contractId?: true
    reportNo?: true
    sampleDate?: true
    receiveDate?: true
    issueDate?: true
    filePath?: true
    text?: true
    createdAt?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    orgId?: true
    contractId?: true
    reportNo?: true
    sampleDate?: true
    receiveDate?: true
    issueDate?: true
    filePath?: true
    text?: true
    createdAt?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    orgId: string
    contractId: string | null
    reportNo: string
    sampleDate: Date | null
    receiveDate: Date | null
    issueDate: Date | null
    filePath: string
    text: string
    createdAt: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    contractId?: boolean
    reportNo?: boolean
    sampleDate?: boolean
    receiveDate?: boolean
    issueDate?: boolean
    filePath?: boolean
    text?: boolean
    createdAt?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
    contract?: boolean | Report$contractArgs<ExtArgs>
    findings?: boolean | Report$findingsArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    contractId?: boolean
    reportNo?: boolean
    sampleDate?: boolean
    receiveDate?: boolean
    issueDate?: boolean
    filePath?: boolean
    text?: boolean
    createdAt?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
    contract?: boolean | Report$contractArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orgId?: boolean
    contractId?: boolean
    reportNo?: boolean
    sampleDate?: boolean
    receiveDate?: boolean
    issueDate?: boolean
    filePath?: boolean
    text?: boolean
    createdAt?: boolean
    org?: boolean | OrgDefaultArgs<ExtArgs>
    contract?: boolean | Report$contractArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    orgId?: boolean
    contractId?: boolean
    reportNo?: boolean
    sampleDate?: boolean
    receiveDate?: boolean
    issueDate?: boolean
    filePath?: boolean
    text?: boolean
    createdAt?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orgId" | "contractId" | "reportNo" | "sampleDate" | "receiveDate" | "issueDate" | "filePath" | "text" | "createdAt", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
    contract?: boolean | Report$contractArgs<ExtArgs>
    findings?: boolean | Report$findingsArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
    contract?: boolean | Report$contractArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrgDefaultArgs<ExtArgs>
    contract?: boolean | Report$contractArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      org: Prisma.$OrgPayload<ExtArgs>
      contract: Prisma.$ContractPayload<ExtArgs> | null
      findings: Prisma.$QAFindingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orgId: string
      contractId: string | null
      reportNo: string
      sampleDate: Date | null
      receiveDate: Date | null
      issueDate: Date | null
      filePath: string
      text: string
      createdAt: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrgDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrgDefaultArgs<ExtArgs>>): Prisma__OrgClient<$Result.GetResult<Prisma.$OrgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contract<T extends Report$contractArgs<ExtArgs> = {}>(args?: Subset<T, Report$contractArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    findings<T extends Report$findingsArgs<ExtArgs> = {}>(args?: Subset<T, Report$findingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAFindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly orgId: FieldRef<"Report", 'String'>
    readonly contractId: FieldRef<"Report", 'String'>
    readonly reportNo: FieldRef<"Report", 'String'>
    readonly sampleDate: FieldRef<"Report", 'DateTime'>
    readonly receiveDate: FieldRef<"Report", 'DateTime'>
    readonly issueDate: FieldRef<"Report", 'DateTime'>
    readonly filePath: FieldRef<"Report", 'String'>
    readonly text: FieldRef<"Report", 'String'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report.contract
   */
  export type Report$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract
     */
    omit?: ContractOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
  }

  /**
   * Report.findings
   */
  export type Report$findingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingInclude<ExtArgs> | null
    where?: QAFindingWhereInput
    orderBy?: QAFindingOrderByWithRelationInput | QAFindingOrderByWithRelationInput[]
    cursor?: QAFindingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QAFindingScalarFieldEnum | QAFindingScalarFieldEnum[]
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model StandardDoc
   */

  export type AggregateStandardDoc = {
    _count: StandardDocCountAggregateOutputType | null
    _min: StandardDocMinAggregateOutputType | null
    _max: StandardDocMaxAggregateOutputType | null
  }

  export type StandardDocMinAggregateOutputType = {
    id: string | null
    title: string | null
    filePath: string | null
    text: string | null
    createdAt: Date | null
    deleted: boolean | null
  }

  export type StandardDocMaxAggregateOutputType = {
    id: string | null
    title: string | null
    filePath: string | null
    text: string | null
    createdAt: Date | null
    deleted: boolean | null
  }

  export type StandardDocCountAggregateOutputType = {
    id: number
    title: number
    filePath: number
    text: number
    createdAt: number
    deleted: number
    _all: number
  }


  export type StandardDocMinAggregateInputType = {
    id?: true
    title?: true
    filePath?: true
    text?: true
    createdAt?: true
    deleted?: true
  }

  export type StandardDocMaxAggregateInputType = {
    id?: true
    title?: true
    filePath?: true
    text?: true
    createdAt?: true
    deleted?: true
  }

  export type StandardDocCountAggregateInputType = {
    id?: true
    title?: true
    filePath?: true
    text?: true
    createdAt?: true
    deleted?: true
    _all?: true
  }

  export type StandardDocAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StandardDoc to aggregate.
     */
    where?: StandardDocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandardDocs to fetch.
     */
    orderBy?: StandardDocOrderByWithRelationInput | StandardDocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StandardDocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandardDocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandardDocs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StandardDocs
    **/
    _count?: true | StandardDocCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StandardDocMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StandardDocMaxAggregateInputType
  }

  export type GetStandardDocAggregateType<T extends StandardDocAggregateArgs> = {
        [P in keyof T & keyof AggregateStandardDoc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStandardDoc[P]>
      : GetScalarType<T[P], AggregateStandardDoc[P]>
  }




  export type StandardDocGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StandardDocWhereInput
    orderBy?: StandardDocOrderByWithAggregationInput | StandardDocOrderByWithAggregationInput[]
    by: StandardDocScalarFieldEnum[] | StandardDocScalarFieldEnum
    having?: StandardDocScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StandardDocCountAggregateInputType | true
    _min?: StandardDocMinAggregateInputType
    _max?: StandardDocMaxAggregateInputType
  }

  export type StandardDocGroupByOutputType = {
    id: string
    title: string
    filePath: string
    text: string
    createdAt: Date
    deleted: boolean
    _count: StandardDocCountAggregateOutputType | null
    _min: StandardDocMinAggregateOutputType | null
    _max: StandardDocMaxAggregateOutputType | null
  }

  type GetStandardDocGroupByPayload<T extends StandardDocGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StandardDocGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StandardDocGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StandardDocGroupByOutputType[P]>
            : GetScalarType<T[P], StandardDocGroupByOutputType[P]>
        }
      >
    >


  export type StandardDocSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    filePath?: boolean
    text?: boolean
    createdAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["standardDoc"]>

  export type StandardDocSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    filePath?: boolean
    text?: boolean
    createdAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["standardDoc"]>

  export type StandardDocSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    filePath?: boolean
    text?: boolean
    createdAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["standardDoc"]>

  export type StandardDocSelectScalar = {
    id?: boolean
    title?: boolean
    filePath?: boolean
    text?: boolean
    createdAt?: boolean
    deleted?: boolean
  }

  export type StandardDocOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "filePath" | "text" | "createdAt" | "deleted", ExtArgs["result"]["standardDoc"]>

  export type $StandardDocPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StandardDoc"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      filePath: string
      text: string
      createdAt: Date
      deleted: boolean
    }, ExtArgs["result"]["standardDoc"]>
    composites: {}
  }

  type StandardDocGetPayload<S extends boolean | null | undefined | StandardDocDefaultArgs> = $Result.GetResult<Prisma.$StandardDocPayload, S>

  type StandardDocCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StandardDocFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StandardDocCountAggregateInputType | true
    }

  export interface StandardDocDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StandardDoc'], meta: { name: 'StandardDoc' } }
    /**
     * Find zero or one StandardDoc that matches the filter.
     * @param {StandardDocFindUniqueArgs} args - Arguments to find a StandardDoc
     * @example
     * // Get one StandardDoc
     * const standardDoc = await prisma.standardDoc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StandardDocFindUniqueArgs>(args: SelectSubset<T, StandardDocFindUniqueArgs<ExtArgs>>): Prisma__StandardDocClient<$Result.GetResult<Prisma.$StandardDocPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StandardDoc that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StandardDocFindUniqueOrThrowArgs} args - Arguments to find a StandardDoc
     * @example
     * // Get one StandardDoc
     * const standardDoc = await prisma.standardDoc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StandardDocFindUniqueOrThrowArgs>(args: SelectSubset<T, StandardDocFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StandardDocClient<$Result.GetResult<Prisma.$StandardDocPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StandardDoc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardDocFindFirstArgs} args - Arguments to find a StandardDoc
     * @example
     * // Get one StandardDoc
     * const standardDoc = await prisma.standardDoc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StandardDocFindFirstArgs>(args?: SelectSubset<T, StandardDocFindFirstArgs<ExtArgs>>): Prisma__StandardDocClient<$Result.GetResult<Prisma.$StandardDocPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StandardDoc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardDocFindFirstOrThrowArgs} args - Arguments to find a StandardDoc
     * @example
     * // Get one StandardDoc
     * const standardDoc = await prisma.standardDoc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StandardDocFindFirstOrThrowArgs>(args?: SelectSubset<T, StandardDocFindFirstOrThrowArgs<ExtArgs>>): Prisma__StandardDocClient<$Result.GetResult<Prisma.$StandardDocPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StandardDocs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardDocFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StandardDocs
     * const standardDocs = await prisma.standardDoc.findMany()
     * 
     * // Get first 10 StandardDocs
     * const standardDocs = await prisma.standardDoc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const standardDocWithIdOnly = await prisma.standardDoc.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StandardDocFindManyArgs>(args?: SelectSubset<T, StandardDocFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandardDocPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StandardDoc.
     * @param {StandardDocCreateArgs} args - Arguments to create a StandardDoc.
     * @example
     * // Create one StandardDoc
     * const StandardDoc = await prisma.standardDoc.create({
     *   data: {
     *     // ... data to create a StandardDoc
     *   }
     * })
     * 
     */
    create<T extends StandardDocCreateArgs>(args: SelectSubset<T, StandardDocCreateArgs<ExtArgs>>): Prisma__StandardDocClient<$Result.GetResult<Prisma.$StandardDocPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StandardDocs.
     * @param {StandardDocCreateManyArgs} args - Arguments to create many StandardDocs.
     * @example
     * // Create many StandardDocs
     * const standardDoc = await prisma.standardDoc.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StandardDocCreateManyArgs>(args?: SelectSubset<T, StandardDocCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StandardDocs and returns the data saved in the database.
     * @param {StandardDocCreateManyAndReturnArgs} args - Arguments to create many StandardDocs.
     * @example
     * // Create many StandardDocs
     * const standardDoc = await prisma.standardDoc.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StandardDocs and only return the `id`
     * const standardDocWithIdOnly = await prisma.standardDoc.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StandardDocCreateManyAndReturnArgs>(args?: SelectSubset<T, StandardDocCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandardDocPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StandardDoc.
     * @param {StandardDocDeleteArgs} args - Arguments to delete one StandardDoc.
     * @example
     * // Delete one StandardDoc
     * const StandardDoc = await prisma.standardDoc.delete({
     *   where: {
     *     // ... filter to delete one StandardDoc
     *   }
     * })
     * 
     */
    delete<T extends StandardDocDeleteArgs>(args: SelectSubset<T, StandardDocDeleteArgs<ExtArgs>>): Prisma__StandardDocClient<$Result.GetResult<Prisma.$StandardDocPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StandardDoc.
     * @param {StandardDocUpdateArgs} args - Arguments to update one StandardDoc.
     * @example
     * // Update one StandardDoc
     * const standardDoc = await prisma.standardDoc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StandardDocUpdateArgs>(args: SelectSubset<T, StandardDocUpdateArgs<ExtArgs>>): Prisma__StandardDocClient<$Result.GetResult<Prisma.$StandardDocPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StandardDocs.
     * @param {StandardDocDeleteManyArgs} args - Arguments to filter StandardDocs to delete.
     * @example
     * // Delete a few StandardDocs
     * const { count } = await prisma.standardDoc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StandardDocDeleteManyArgs>(args?: SelectSubset<T, StandardDocDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StandardDocs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardDocUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StandardDocs
     * const standardDoc = await prisma.standardDoc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StandardDocUpdateManyArgs>(args: SelectSubset<T, StandardDocUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StandardDocs and returns the data updated in the database.
     * @param {StandardDocUpdateManyAndReturnArgs} args - Arguments to update many StandardDocs.
     * @example
     * // Update many StandardDocs
     * const standardDoc = await prisma.standardDoc.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StandardDocs and only return the `id`
     * const standardDocWithIdOnly = await prisma.standardDoc.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StandardDocUpdateManyAndReturnArgs>(args: SelectSubset<T, StandardDocUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StandardDocPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StandardDoc.
     * @param {StandardDocUpsertArgs} args - Arguments to update or create a StandardDoc.
     * @example
     * // Update or create a StandardDoc
     * const standardDoc = await prisma.standardDoc.upsert({
     *   create: {
     *     // ... data to create a StandardDoc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StandardDoc we want to update
     *   }
     * })
     */
    upsert<T extends StandardDocUpsertArgs>(args: SelectSubset<T, StandardDocUpsertArgs<ExtArgs>>): Prisma__StandardDocClient<$Result.GetResult<Prisma.$StandardDocPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StandardDocs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardDocCountArgs} args - Arguments to filter StandardDocs to count.
     * @example
     * // Count the number of StandardDocs
     * const count = await prisma.standardDoc.count({
     *   where: {
     *     // ... the filter for the StandardDocs we want to count
     *   }
     * })
    **/
    count<T extends StandardDocCountArgs>(
      args?: Subset<T, StandardDocCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StandardDocCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StandardDoc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardDocAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StandardDocAggregateArgs>(args: Subset<T, StandardDocAggregateArgs>): Prisma.PrismaPromise<GetStandardDocAggregateType<T>>

    /**
     * Group by StandardDoc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StandardDocGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StandardDocGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StandardDocGroupByArgs['orderBy'] }
        : { orderBy?: StandardDocGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StandardDocGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStandardDocGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StandardDoc model
   */
  readonly fields: StandardDocFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StandardDoc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StandardDocClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StandardDoc model
   */
  interface StandardDocFieldRefs {
    readonly id: FieldRef<"StandardDoc", 'String'>
    readonly title: FieldRef<"StandardDoc", 'String'>
    readonly filePath: FieldRef<"StandardDoc", 'String'>
    readonly text: FieldRef<"StandardDoc", 'String'>
    readonly createdAt: FieldRef<"StandardDoc", 'DateTime'>
    readonly deleted: FieldRef<"StandardDoc", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * StandardDoc findUnique
   */
  export type StandardDocFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardDoc
     */
    select?: StandardDocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandardDoc
     */
    omit?: StandardDocOmit<ExtArgs> | null
    /**
     * Filter, which StandardDoc to fetch.
     */
    where: StandardDocWhereUniqueInput
  }

  /**
   * StandardDoc findUniqueOrThrow
   */
  export type StandardDocFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardDoc
     */
    select?: StandardDocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandardDoc
     */
    omit?: StandardDocOmit<ExtArgs> | null
    /**
     * Filter, which StandardDoc to fetch.
     */
    where: StandardDocWhereUniqueInput
  }

  /**
   * StandardDoc findFirst
   */
  export type StandardDocFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardDoc
     */
    select?: StandardDocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandardDoc
     */
    omit?: StandardDocOmit<ExtArgs> | null
    /**
     * Filter, which StandardDoc to fetch.
     */
    where?: StandardDocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandardDocs to fetch.
     */
    orderBy?: StandardDocOrderByWithRelationInput | StandardDocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StandardDocs.
     */
    cursor?: StandardDocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandardDocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandardDocs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StandardDocs.
     */
    distinct?: StandardDocScalarFieldEnum | StandardDocScalarFieldEnum[]
  }

  /**
   * StandardDoc findFirstOrThrow
   */
  export type StandardDocFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardDoc
     */
    select?: StandardDocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandardDoc
     */
    omit?: StandardDocOmit<ExtArgs> | null
    /**
     * Filter, which StandardDoc to fetch.
     */
    where?: StandardDocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandardDocs to fetch.
     */
    orderBy?: StandardDocOrderByWithRelationInput | StandardDocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StandardDocs.
     */
    cursor?: StandardDocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandardDocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandardDocs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StandardDocs.
     */
    distinct?: StandardDocScalarFieldEnum | StandardDocScalarFieldEnum[]
  }

  /**
   * StandardDoc findMany
   */
  export type StandardDocFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardDoc
     */
    select?: StandardDocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandardDoc
     */
    omit?: StandardDocOmit<ExtArgs> | null
    /**
     * Filter, which StandardDocs to fetch.
     */
    where?: StandardDocWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StandardDocs to fetch.
     */
    orderBy?: StandardDocOrderByWithRelationInput | StandardDocOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StandardDocs.
     */
    cursor?: StandardDocWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StandardDocs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StandardDocs.
     */
    skip?: number
    distinct?: StandardDocScalarFieldEnum | StandardDocScalarFieldEnum[]
  }

  /**
   * StandardDoc create
   */
  export type StandardDocCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardDoc
     */
    select?: StandardDocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandardDoc
     */
    omit?: StandardDocOmit<ExtArgs> | null
    /**
     * The data needed to create a StandardDoc.
     */
    data: XOR<StandardDocCreateInput, StandardDocUncheckedCreateInput>
  }

  /**
   * StandardDoc createMany
   */
  export type StandardDocCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StandardDocs.
     */
    data: StandardDocCreateManyInput | StandardDocCreateManyInput[]
  }

  /**
   * StandardDoc createManyAndReturn
   */
  export type StandardDocCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardDoc
     */
    select?: StandardDocSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StandardDoc
     */
    omit?: StandardDocOmit<ExtArgs> | null
    /**
     * The data used to create many StandardDocs.
     */
    data: StandardDocCreateManyInput | StandardDocCreateManyInput[]
  }

  /**
   * StandardDoc update
   */
  export type StandardDocUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardDoc
     */
    select?: StandardDocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandardDoc
     */
    omit?: StandardDocOmit<ExtArgs> | null
    /**
     * The data needed to update a StandardDoc.
     */
    data: XOR<StandardDocUpdateInput, StandardDocUncheckedUpdateInput>
    /**
     * Choose, which StandardDoc to update.
     */
    where: StandardDocWhereUniqueInput
  }

  /**
   * StandardDoc updateMany
   */
  export type StandardDocUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StandardDocs.
     */
    data: XOR<StandardDocUpdateManyMutationInput, StandardDocUncheckedUpdateManyInput>
    /**
     * Filter which StandardDocs to update
     */
    where?: StandardDocWhereInput
    /**
     * Limit how many StandardDocs to update.
     */
    limit?: number
  }

  /**
   * StandardDoc updateManyAndReturn
   */
  export type StandardDocUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardDoc
     */
    select?: StandardDocSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StandardDoc
     */
    omit?: StandardDocOmit<ExtArgs> | null
    /**
     * The data used to update StandardDocs.
     */
    data: XOR<StandardDocUpdateManyMutationInput, StandardDocUncheckedUpdateManyInput>
    /**
     * Filter which StandardDocs to update
     */
    where?: StandardDocWhereInput
    /**
     * Limit how many StandardDocs to update.
     */
    limit?: number
  }

  /**
   * StandardDoc upsert
   */
  export type StandardDocUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardDoc
     */
    select?: StandardDocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandardDoc
     */
    omit?: StandardDocOmit<ExtArgs> | null
    /**
     * The filter to search for the StandardDoc to update in case it exists.
     */
    where: StandardDocWhereUniqueInput
    /**
     * In case the StandardDoc found by the `where` argument doesn't exist, create a new StandardDoc with this data.
     */
    create: XOR<StandardDocCreateInput, StandardDocUncheckedCreateInput>
    /**
     * In case the StandardDoc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StandardDocUpdateInput, StandardDocUncheckedUpdateInput>
  }

  /**
   * StandardDoc delete
   */
  export type StandardDocDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardDoc
     */
    select?: StandardDocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandardDoc
     */
    omit?: StandardDocOmit<ExtArgs> | null
    /**
     * Filter which StandardDoc to delete.
     */
    where: StandardDocWhereUniqueInput
  }

  /**
   * StandardDoc deleteMany
   */
  export type StandardDocDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StandardDocs to delete
     */
    where?: StandardDocWhereInput
    /**
     * Limit how many StandardDocs to delete.
     */
    limit?: number
  }

  /**
   * StandardDoc without action
   */
  export type StandardDocDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StandardDoc
     */
    select?: StandardDocSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StandardDoc
     */
    omit?: StandardDocOmit<ExtArgs> | null
  }


  /**
   * Model QAFinding
   */

  export type AggregateQAFinding = {
    _count: QAFindingCountAggregateOutputType | null
    _min: QAFindingMinAggregateOutputType | null
    _max: QAFindingMaxAggregateOutputType | null
  }

  export type QAFindingMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    type: string | null
    detail: string | null
    severity: string | null
    createdAt: Date | null
  }

  export type QAFindingMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    type: string | null
    detail: string | null
    severity: string | null
    createdAt: Date | null
  }

  export type QAFindingCountAggregateOutputType = {
    id: number
    reportId: number
    type: number
    detail: number
    severity: number
    createdAt: number
    _all: number
  }


  export type QAFindingMinAggregateInputType = {
    id?: true
    reportId?: true
    type?: true
    detail?: true
    severity?: true
    createdAt?: true
  }

  export type QAFindingMaxAggregateInputType = {
    id?: true
    reportId?: true
    type?: true
    detail?: true
    severity?: true
    createdAt?: true
  }

  export type QAFindingCountAggregateInputType = {
    id?: true
    reportId?: true
    type?: true
    detail?: true
    severity?: true
    createdAt?: true
    _all?: true
  }

  export type QAFindingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QAFinding to aggregate.
     */
    where?: QAFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QAFindings to fetch.
     */
    orderBy?: QAFindingOrderByWithRelationInput | QAFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QAFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QAFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QAFindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QAFindings
    **/
    _count?: true | QAFindingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QAFindingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QAFindingMaxAggregateInputType
  }

  export type GetQAFindingAggregateType<T extends QAFindingAggregateArgs> = {
        [P in keyof T & keyof AggregateQAFinding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQAFinding[P]>
      : GetScalarType<T[P], AggregateQAFinding[P]>
  }




  export type QAFindingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QAFindingWhereInput
    orderBy?: QAFindingOrderByWithAggregationInput | QAFindingOrderByWithAggregationInput[]
    by: QAFindingScalarFieldEnum[] | QAFindingScalarFieldEnum
    having?: QAFindingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QAFindingCountAggregateInputType | true
    _min?: QAFindingMinAggregateInputType
    _max?: QAFindingMaxAggregateInputType
  }

  export type QAFindingGroupByOutputType = {
    id: string
    reportId: string
    type: string
    detail: string
    severity: string
    createdAt: Date
    _count: QAFindingCountAggregateOutputType | null
    _min: QAFindingMinAggregateOutputType | null
    _max: QAFindingMaxAggregateOutputType | null
  }

  type GetQAFindingGroupByPayload<T extends QAFindingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QAFindingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QAFindingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QAFindingGroupByOutputType[P]>
            : GetScalarType<T[P], QAFindingGroupByOutputType[P]>
        }
      >
    >


  export type QAFindingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    type?: boolean
    detail?: boolean
    severity?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qAFinding"]>

  export type QAFindingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    type?: boolean
    detail?: boolean
    severity?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qAFinding"]>

  export type QAFindingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    type?: boolean
    detail?: boolean
    severity?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qAFinding"]>

  export type QAFindingSelectScalar = {
    id?: boolean
    reportId?: boolean
    type?: boolean
    detail?: boolean
    severity?: boolean
    createdAt?: boolean
  }

  export type QAFindingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "type" | "detail" | "severity" | "createdAt", ExtArgs["result"]["qAFinding"]>
  export type QAFindingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type QAFindingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type QAFindingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }

  export type $QAFindingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QAFinding"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string
      type: string
      detail: string
      severity: string
      createdAt: Date
    }, ExtArgs["result"]["qAFinding"]>
    composites: {}
  }

  type QAFindingGetPayload<S extends boolean | null | undefined | QAFindingDefaultArgs> = $Result.GetResult<Prisma.$QAFindingPayload, S>

  type QAFindingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QAFindingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QAFindingCountAggregateInputType | true
    }

  export interface QAFindingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QAFinding'], meta: { name: 'QAFinding' } }
    /**
     * Find zero or one QAFinding that matches the filter.
     * @param {QAFindingFindUniqueArgs} args - Arguments to find a QAFinding
     * @example
     * // Get one QAFinding
     * const qAFinding = await prisma.qAFinding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QAFindingFindUniqueArgs>(args: SelectSubset<T, QAFindingFindUniqueArgs<ExtArgs>>): Prisma__QAFindingClient<$Result.GetResult<Prisma.$QAFindingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QAFinding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QAFindingFindUniqueOrThrowArgs} args - Arguments to find a QAFinding
     * @example
     * // Get one QAFinding
     * const qAFinding = await prisma.qAFinding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QAFindingFindUniqueOrThrowArgs>(args: SelectSubset<T, QAFindingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QAFindingClient<$Result.GetResult<Prisma.$QAFindingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QAFinding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAFindingFindFirstArgs} args - Arguments to find a QAFinding
     * @example
     * // Get one QAFinding
     * const qAFinding = await prisma.qAFinding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QAFindingFindFirstArgs>(args?: SelectSubset<T, QAFindingFindFirstArgs<ExtArgs>>): Prisma__QAFindingClient<$Result.GetResult<Prisma.$QAFindingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QAFinding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAFindingFindFirstOrThrowArgs} args - Arguments to find a QAFinding
     * @example
     * // Get one QAFinding
     * const qAFinding = await prisma.qAFinding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QAFindingFindFirstOrThrowArgs>(args?: SelectSubset<T, QAFindingFindFirstOrThrowArgs<ExtArgs>>): Prisma__QAFindingClient<$Result.GetResult<Prisma.$QAFindingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QAFindings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAFindingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QAFindings
     * const qAFindings = await prisma.qAFinding.findMany()
     * 
     * // Get first 10 QAFindings
     * const qAFindings = await prisma.qAFinding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qAFindingWithIdOnly = await prisma.qAFinding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QAFindingFindManyArgs>(args?: SelectSubset<T, QAFindingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAFindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QAFinding.
     * @param {QAFindingCreateArgs} args - Arguments to create a QAFinding.
     * @example
     * // Create one QAFinding
     * const QAFinding = await prisma.qAFinding.create({
     *   data: {
     *     // ... data to create a QAFinding
     *   }
     * })
     * 
     */
    create<T extends QAFindingCreateArgs>(args: SelectSubset<T, QAFindingCreateArgs<ExtArgs>>): Prisma__QAFindingClient<$Result.GetResult<Prisma.$QAFindingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QAFindings.
     * @param {QAFindingCreateManyArgs} args - Arguments to create many QAFindings.
     * @example
     * // Create many QAFindings
     * const qAFinding = await prisma.qAFinding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QAFindingCreateManyArgs>(args?: SelectSubset<T, QAFindingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QAFindings and returns the data saved in the database.
     * @param {QAFindingCreateManyAndReturnArgs} args - Arguments to create many QAFindings.
     * @example
     * // Create many QAFindings
     * const qAFinding = await prisma.qAFinding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QAFindings and only return the `id`
     * const qAFindingWithIdOnly = await prisma.qAFinding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QAFindingCreateManyAndReturnArgs>(args?: SelectSubset<T, QAFindingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAFindingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QAFinding.
     * @param {QAFindingDeleteArgs} args - Arguments to delete one QAFinding.
     * @example
     * // Delete one QAFinding
     * const QAFinding = await prisma.qAFinding.delete({
     *   where: {
     *     // ... filter to delete one QAFinding
     *   }
     * })
     * 
     */
    delete<T extends QAFindingDeleteArgs>(args: SelectSubset<T, QAFindingDeleteArgs<ExtArgs>>): Prisma__QAFindingClient<$Result.GetResult<Prisma.$QAFindingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QAFinding.
     * @param {QAFindingUpdateArgs} args - Arguments to update one QAFinding.
     * @example
     * // Update one QAFinding
     * const qAFinding = await prisma.qAFinding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QAFindingUpdateArgs>(args: SelectSubset<T, QAFindingUpdateArgs<ExtArgs>>): Prisma__QAFindingClient<$Result.GetResult<Prisma.$QAFindingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QAFindings.
     * @param {QAFindingDeleteManyArgs} args - Arguments to filter QAFindings to delete.
     * @example
     * // Delete a few QAFindings
     * const { count } = await prisma.qAFinding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QAFindingDeleteManyArgs>(args?: SelectSubset<T, QAFindingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QAFindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAFindingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QAFindings
     * const qAFinding = await prisma.qAFinding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QAFindingUpdateManyArgs>(args: SelectSubset<T, QAFindingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QAFindings and returns the data updated in the database.
     * @param {QAFindingUpdateManyAndReturnArgs} args - Arguments to update many QAFindings.
     * @example
     * // Update many QAFindings
     * const qAFinding = await prisma.qAFinding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QAFindings and only return the `id`
     * const qAFindingWithIdOnly = await prisma.qAFinding.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QAFindingUpdateManyAndReturnArgs>(args: SelectSubset<T, QAFindingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QAFindingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QAFinding.
     * @param {QAFindingUpsertArgs} args - Arguments to update or create a QAFinding.
     * @example
     * // Update or create a QAFinding
     * const qAFinding = await prisma.qAFinding.upsert({
     *   create: {
     *     // ... data to create a QAFinding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QAFinding we want to update
     *   }
     * })
     */
    upsert<T extends QAFindingUpsertArgs>(args: SelectSubset<T, QAFindingUpsertArgs<ExtArgs>>): Prisma__QAFindingClient<$Result.GetResult<Prisma.$QAFindingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QAFindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAFindingCountArgs} args - Arguments to filter QAFindings to count.
     * @example
     * // Count the number of QAFindings
     * const count = await prisma.qAFinding.count({
     *   where: {
     *     // ... the filter for the QAFindings we want to count
     *   }
     * })
    **/
    count<T extends QAFindingCountArgs>(
      args?: Subset<T, QAFindingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QAFindingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QAFinding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAFindingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QAFindingAggregateArgs>(args: Subset<T, QAFindingAggregateArgs>): Prisma.PrismaPromise<GetQAFindingAggregateType<T>>

    /**
     * Group by QAFinding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QAFindingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QAFindingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QAFindingGroupByArgs['orderBy'] }
        : { orderBy?: QAFindingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QAFindingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQAFindingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QAFinding model
   */
  readonly fields: QAFindingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QAFinding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QAFindingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportDefaultArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QAFinding model
   */
  interface QAFindingFieldRefs {
    readonly id: FieldRef<"QAFinding", 'String'>
    readonly reportId: FieldRef<"QAFinding", 'String'>
    readonly type: FieldRef<"QAFinding", 'String'>
    readonly detail: FieldRef<"QAFinding", 'String'>
    readonly severity: FieldRef<"QAFinding", 'String'>
    readonly createdAt: FieldRef<"QAFinding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QAFinding findUnique
   */
  export type QAFindingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingInclude<ExtArgs> | null
    /**
     * Filter, which QAFinding to fetch.
     */
    where: QAFindingWhereUniqueInput
  }

  /**
   * QAFinding findUniqueOrThrow
   */
  export type QAFindingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingInclude<ExtArgs> | null
    /**
     * Filter, which QAFinding to fetch.
     */
    where: QAFindingWhereUniqueInput
  }

  /**
   * QAFinding findFirst
   */
  export type QAFindingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingInclude<ExtArgs> | null
    /**
     * Filter, which QAFinding to fetch.
     */
    where?: QAFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QAFindings to fetch.
     */
    orderBy?: QAFindingOrderByWithRelationInput | QAFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QAFindings.
     */
    cursor?: QAFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QAFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QAFindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QAFindings.
     */
    distinct?: QAFindingScalarFieldEnum | QAFindingScalarFieldEnum[]
  }

  /**
   * QAFinding findFirstOrThrow
   */
  export type QAFindingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingInclude<ExtArgs> | null
    /**
     * Filter, which QAFinding to fetch.
     */
    where?: QAFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QAFindings to fetch.
     */
    orderBy?: QAFindingOrderByWithRelationInput | QAFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QAFindings.
     */
    cursor?: QAFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QAFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QAFindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QAFindings.
     */
    distinct?: QAFindingScalarFieldEnum | QAFindingScalarFieldEnum[]
  }

  /**
   * QAFinding findMany
   */
  export type QAFindingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingInclude<ExtArgs> | null
    /**
     * Filter, which QAFindings to fetch.
     */
    where?: QAFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QAFindings to fetch.
     */
    orderBy?: QAFindingOrderByWithRelationInput | QAFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QAFindings.
     */
    cursor?: QAFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QAFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QAFindings.
     */
    skip?: number
    distinct?: QAFindingScalarFieldEnum | QAFindingScalarFieldEnum[]
  }

  /**
   * QAFinding create
   */
  export type QAFindingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingInclude<ExtArgs> | null
    /**
     * The data needed to create a QAFinding.
     */
    data: XOR<QAFindingCreateInput, QAFindingUncheckedCreateInput>
  }

  /**
   * QAFinding createMany
   */
  export type QAFindingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QAFindings.
     */
    data: QAFindingCreateManyInput | QAFindingCreateManyInput[]
  }

  /**
   * QAFinding createManyAndReturn
   */
  export type QAFindingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * The data used to create many QAFindings.
     */
    data: QAFindingCreateManyInput | QAFindingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QAFinding update
   */
  export type QAFindingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingInclude<ExtArgs> | null
    /**
     * The data needed to update a QAFinding.
     */
    data: XOR<QAFindingUpdateInput, QAFindingUncheckedUpdateInput>
    /**
     * Choose, which QAFinding to update.
     */
    where: QAFindingWhereUniqueInput
  }

  /**
   * QAFinding updateMany
   */
  export type QAFindingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QAFindings.
     */
    data: XOR<QAFindingUpdateManyMutationInput, QAFindingUncheckedUpdateManyInput>
    /**
     * Filter which QAFindings to update
     */
    where?: QAFindingWhereInput
    /**
     * Limit how many QAFindings to update.
     */
    limit?: number
  }

  /**
   * QAFinding updateManyAndReturn
   */
  export type QAFindingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * The data used to update QAFindings.
     */
    data: XOR<QAFindingUpdateManyMutationInput, QAFindingUncheckedUpdateManyInput>
    /**
     * Filter which QAFindings to update
     */
    where?: QAFindingWhereInput
    /**
     * Limit how many QAFindings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QAFinding upsert
   */
  export type QAFindingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingInclude<ExtArgs> | null
    /**
     * The filter to search for the QAFinding to update in case it exists.
     */
    where: QAFindingWhereUniqueInput
    /**
     * In case the QAFinding found by the `where` argument doesn't exist, create a new QAFinding with this data.
     */
    create: XOR<QAFindingCreateInput, QAFindingUncheckedCreateInput>
    /**
     * In case the QAFinding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QAFindingUpdateInput, QAFindingUncheckedUpdateInput>
  }

  /**
   * QAFinding delete
   */
  export type QAFindingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingInclude<ExtArgs> | null
    /**
     * Filter which QAFinding to delete.
     */
    where: QAFindingWhereUniqueInput
  }

  /**
   * QAFinding deleteMany
   */
  export type QAFindingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QAFindings to delete
     */
    where?: QAFindingWhereInput
    /**
     * Limit how many QAFindings to delete.
     */
    limit?: number
  }

  /**
   * QAFinding without action
   */
  export type QAFindingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QAFinding
     */
    select?: QAFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QAFinding
     */
    omit?: QAFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QAFindingInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    payload: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    payload: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    payload: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    payload?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    payload?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    payload?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string
    action: string
    payload: string
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    payload?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "payload" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      payload: string
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly payload: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrgScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type OrgScalarFieldEnum = (typeof OrgScalarFieldEnum)[keyof typeof OrgScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    orgId: 'orgId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    customer: 'customer',
    projectName: 'projectName',
    totalAmount: 'totalAmount',
    currency: 'currency',
    status: 'status',
    signedDate: 'signedDate',
    startDate: 'startDate',
    endDate: 'endDate',
    arAmount: 'arAmount',
    paidAmount: 'paidAmount',
    filePath: 'filePath',
    text: 'text',
    metaJson: 'metaJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    amount: 'amount',
    paidDate: 'paidDate',
    note: 'note'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    orgId: 'orgId',
    contractId: 'contractId',
    reportNo: 'reportNo',
    sampleDate: 'sampleDate',
    receiveDate: 'receiveDate',
    issueDate: 'issueDate',
    filePath: 'filePath',
    text: 'text',
    createdAt: 'createdAt'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const StandardDocScalarFieldEnum: {
    id: 'id',
    title: 'title',
    filePath: 'filePath',
    text: 'text',
    createdAt: 'createdAt',
    deleted: 'deleted'
  };

  export type StandardDocScalarFieldEnum = (typeof StandardDocScalarFieldEnum)[keyof typeof StandardDocScalarFieldEnum]


  export const QAFindingScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    type: 'type',
    detail: 'detail',
    severity: 'severity',
    createdAt: 'createdAt'
  };

  export type QAFindingScalarFieldEnum = (typeof QAFindingScalarFieldEnum)[keyof typeof QAFindingScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    payload: 'payload',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'ContractStatus'
   */
  export type EnumContractStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContractStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type OrgWhereInput = {
    AND?: OrgWhereInput | OrgWhereInput[]
    OR?: OrgWhereInput[]
    NOT?: OrgWhereInput | OrgWhereInput[]
    id?: StringFilter<"Org"> | string
    name?: StringFilter<"Org"> | string
    createdAt?: DateTimeFilter<"Org"> | Date | string
    users?: UserListRelationFilter
    projects?: ProjectListRelationFilter
    contracts?: ContractListRelationFilter
    reports?: ReportListRelationFilter
  }

  export type OrgOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    contracts?: ContractOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
  }

  export type OrgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrgWhereInput | OrgWhereInput[]
    OR?: OrgWhereInput[]
    NOT?: OrgWhereInput | OrgWhereInput[]
    name?: StringFilter<"Org"> | string
    createdAt?: DateTimeFilter<"Org"> | Date | string
    users?: UserListRelationFilter
    projects?: ProjectListRelationFilter
    contracts?: ContractListRelationFilter
    reports?: ReportListRelationFilter
  }, "id">

  export type OrgOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: OrgCountOrderByAggregateInput
    _max?: OrgMaxOrderByAggregateInput
    _min?: OrgMinOrderByAggregateInput
  }

  export type OrgScalarWhereWithAggregatesInput = {
    AND?: OrgScalarWhereWithAggregatesInput | OrgScalarWhereWithAggregatesInput[]
    OR?: OrgScalarWhereWithAggregatesInput[]
    NOT?: OrgScalarWhereWithAggregatesInput | OrgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Org"> | string
    name?: StringWithAggregatesFilter<"Org"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Org"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    orgId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    org?: XOR<OrgScalarRelationFilter, OrgWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
    org?: OrgOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    orgId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    org?: XOR<OrgScalarRelationFilter, OrgWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    orgId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    orgId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    org?: XOR<OrgScalarRelationFilter, OrgWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    org?: OrgOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    orgId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    org?: XOR<OrgScalarRelationFilter, OrgWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    orgId?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: StringFilter<"Contract"> | string
    orgId?: StringFilter<"Contract"> | string
    customer?: StringFilter<"Contract"> | string
    projectName?: StringFilter<"Contract"> | string
    totalAmount?: FloatFilter<"Contract"> | number
    currency?: StringFilter<"Contract"> | string
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    signedDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    startDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    arAmount?: FloatFilter<"Contract"> | number
    paidAmount?: FloatFilter<"Contract"> | number
    filePath?: StringFilter<"Contract"> | string
    text?: StringFilter<"Contract"> | string
    metaJson?: StringFilter<"Contract"> | string
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    org?: XOR<OrgScalarRelationFilter, OrgWhereInput>
    payments?: PaymentListRelationFilter
    reports?: ReportListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    customer?: SortOrder
    projectName?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    signedDate?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    arAmount?: SortOrder
    paidAmount?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    metaJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    org?: OrgOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    orgId?: StringFilter<"Contract"> | string
    customer?: StringFilter<"Contract"> | string
    projectName?: StringFilter<"Contract"> | string
    totalAmount?: FloatFilter<"Contract"> | number
    currency?: StringFilter<"Contract"> | string
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    signedDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    startDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    arAmount?: FloatFilter<"Contract"> | number
    paidAmount?: FloatFilter<"Contract"> | number
    filePath?: StringFilter<"Contract"> | string
    text?: StringFilter<"Contract"> | string
    metaJson?: StringFilter<"Contract"> | string
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    org?: XOR<OrgScalarRelationFilter, OrgWhereInput>
    payments?: PaymentListRelationFilter
    reports?: ReportListRelationFilter
  }, "id">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    customer?: SortOrder
    projectName?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    signedDate?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    arAmount?: SortOrder
    paidAmount?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    metaJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contract"> | string
    orgId?: StringWithAggregatesFilter<"Contract"> | string
    customer?: StringWithAggregatesFilter<"Contract"> | string
    projectName?: StringWithAggregatesFilter<"Contract"> | string
    totalAmount?: FloatWithAggregatesFilter<"Contract"> | number
    currency?: StringWithAggregatesFilter<"Contract"> | string
    status?: EnumContractStatusWithAggregatesFilter<"Contract"> | $Enums.ContractStatus
    signedDate?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Contract"> | Date | string | null
    arAmount?: FloatWithAggregatesFilter<"Contract"> | number
    paidAmount?: FloatWithAggregatesFilter<"Contract"> | number
    filePath?: StringWithAggregatesFilter<"Contract"> | string
    text?: StringWithAggregatesFilter<"Contract"> | string
    metaJson?: StringWithAggregatesFilter<"Contract"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    contractId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paidDate?: DateTimeFilter<"Payment"> | Date | string
    note?: StringNullableFilter<"Payment"> | string | null
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
    note?: SortOrderInput | SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    contractId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paidDate?: DateTimeFilter<"Payment"> | Date | string
    note?: StringNullableFilter<"Payment"> | string | null
    contract?: XOR<ContractScalarRelationFilter, ContractWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    contractId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    paidDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    note?: StringNullableWithAggregatesFilter<"Payment"> | string | null
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    orgId?: StringFilter<"Report"> | string
    contractId?: StringNullableFilter<"Report"> | string | null
    reportNo?: StringFilter<"Report"> | string
    sampleDate?: DateTimeNullableFilter<"Report"> | Date | string | null
    receiveDate?: DateTimeNullableFilter<"Report"> | Date | string | null
    issueDate?: DateTimeNullableFilter<"Report"> | Date | string | null
    filePath?: StringFilter<"Report"> | string
    text?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    org?: XOR<OrgScalarRelationFilter, OrgWhereInput>
    contract?: XOR<ContractNullableScalarRelationFilter, ContractWhereInput> | null
    findings?: QAFindingListRelationFilter
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    orgId?: SortOrder
    contractId?: SortOrderInput | SortOrder
    reportNo?: SortOrder
    sampleDate?: SortOrderInput | SortOrder
    receiveDate?: SortOrderInput | SortOrder
    issueDate?: SortOrderInput | SortOrder
    filePath?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    org?: OrgOrderByWithRelationInput
    contract?: ContractOrderByWithRelationInput
    findings?: QAFindingOrderByRelationAggregateInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    orgId?: StringFilter<"Report"> | string
    contractId?: StringNullableFilter<"Report"> | string | null
    reportNo?: StringFilter<"Report"> | string
    sampleDate?: DateTimeNullableFilter<"Report"> | Date | string | null
    receiveDate?: DateTimeNullableFilter<"Report"> | Date | string | null
    issueDate?: DateTimeNullableFilter<"Report"> | Date | string | null
    filePath?: StringFilter<"Report"> | string
    text?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
    org?: XOR<OrgScalarRelationFilter, OrgWhereInput>
    contract?: XOR<ContractNullableScalarRelationFilter, ContractWhereInput> | null
    findings?: QAFindingListRelationFilter
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    orgId?: SortOrder
    contractId?: SortOrderInput | SortOrder
    reportNo?: SortOrder
    sampleDate?: SortOrderInput | SortOrder
    receiveDate?: SortOrderInput | SortOrder
    issueDate?: SortOrderInput | SortOrder
    filePath?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    orgId?: StringWithAggregatesFilter<"Report"> | string
    contractId?: StringNullableWithAggregatesFilter<"Report"> | string | null
    reportNo?: StringWithAggregatesFilter<"Report"> | string
    sampleDate?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
    receiveDate?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
    issueDate?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
    filePath?: StringWithAggregatesFilter<"Report"> | string
    text?: StringWithAggregatesFilter<"Report"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type StandardDocWhereInput = {
    AND?: StandardDocWhereInput | StandardDocWhereInput[]
    OR?: StandardDocWhereInput[]
    NOT?: StandardDocWhereInput | StandardDocWhereInput[]
    id?: StringFilter<"StandardDoc"> | string
    title?: StringFilter<"StandardDoc"> | string
    filePath?: StringFilter<"StandardDoc"> | string
    text?: StringFilter<"StandardDoc"> | string
    createdAt?: DateTimeFilter<"StandardDoc"> | Date | string
    deleted?: BoolFilter<"StandardDoc"> | boolean
  }

  export type StandardDocOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type StandardDocWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StandardDocWhereInput | StandardDocWhereInput[]
    OR?: StandardDocWhereInput[]
    NOT?: StandardDocWhereInput | StandardDocWhereInput[]
    title?: StringFilter<"StandardDoc"> | string
    filePath?: StringFilter<"StandardDoc"> | string
    text?: StringFilter<"StandardDoc"> | string
    createdAt?: DateTimeFilter<"StandardDoc"> | Date | string
    deleted?: BoolFilter<"StandardDoc"> | boolean
  }, "id">

  export type StandardDocOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
    _count?: StandardDocCountOrderByAggregateInput
    _max?: StandardDocMaxOrderByAggregateInput
    _min?: StandardDocMinOrderByAggregateInput
  }

  export type StandardDocScalarWhereWithAggregatesInput = {
    AND?: StandardDocScalarWhereWithAggregatesInput | StandardDocScalarWhereWithAggregatesInput[]
    OR?: StandardDocScalarWhereWithAggregatesInput[]
    NOT?: StandardDocScalarWhereWithAggregatesInput | StandardDocScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StandardDoc"> | string
    title?: StringWithAggregatesFilter<"StandardDoc"> | string
    filePath?: StringWithAggregatesFilter<"StandardDoc"> | string
    text?: StringWithAggregatesFilter<"StandardDoc"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StandardDoc"> | Date | string
    deleted?: BoolWithAggregatesFilter<"StandardDoc"> | boolean
  }

  export type QAFindingWhereInput = {
    AND?: QAFindingWhereInput | QAFindingWhereInput[]
    OR?: QAFindingWhereInput[]
    NOT?: QAFindingWhereInput | QAFindingWhereInput[]
    id?: StringFilter<"QAFinding"> | string
    reportId?: StringFilter<"QAFinding"> | string
    type?: StringFilter<"QAFinding"> | string
    detail?: StringFilter<"QAFinding"> | string
    severity?: StringFilter<"QAFinding"> | string
    createdAt?: DateTimeFilter<"QAFinding"> | Date | string
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }

  export type QAFindingOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    type?: SortOrder
    detail?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    report?: ReportOrderByWithRelationInput
  }

  export type QAFindingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QAFindingWhereInput | QAFindingWhereInput[]
    OR?: QAFindingWhereInput[]
    NOT?: QAFindingWhereInput | QAFindingWhereInput[]
    reportId?: StringFilter<"QAFinding"> | string
    type?: StringFilter<"QAFinding"> | string
    detail?: StringFilter<"QAFinding"> | string
    severity?: StringFilter<"QAFinding"> | string
    createdAt?: DateTimeFilter<"QAFinding"> | Date | string
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }, "id">

  export type QAFindingOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    type?: SortOrder
    detail?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
    _count?: QAFindingCountOrderByAggregateInput
    _max?: QAFindingMaxOrderByAggregateInput
    _min?: QAFindingMinOrderByAggregateInput
  }

  export type QAFindingScalarWhereWithAggregatesInput = {
    AND?: QAFindingScalarWhereWithAggregatesInput | QAFindingScalarWhereWithAggregatesInput[]
    OR?: QAFindingScalarWhereWithAggregatesInput[]
    NOT?: QAFindingScalarWhereWithAggregatesInput | QAFindingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QAFinding"> | string
    reportId?: StringWithAggregatesFilter<"QAFinding"> | string
    type?: StringWithAggregatesFilter<"QAFinding"> | string
    detail?: StringWithAggregatesFilter<"QAFinding"> | string
    severity?: StringWithAggregatesFilter<"QAFinding"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QAFinding"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    payload?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    payload?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    payload?: StringWithAggregatesFilter<"AuditLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type OrgCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    projects?: ProjectCreateNestedManyWithoutOrgInput
    contracts?: ContractCreateNestedManyWithoutOrgInput
    reports?: ReportCreateNestedManyWithoutOrgInput
  }

  export type OrgUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOrgInput
    contracts?: ContractUncheckedCreateNestedManyWithoutOrgInput
    reports?: ReportUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    projects?: ProjectUpdateManyWithoutOrgNestedInput
    contracts?: ContractUpdateManyWithoutOrgNestedInput
    reports?: ReportUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOrgNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutOrgNestedInput
    reports?: ReportUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrgCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type OrgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt?: Date | string
    org: OrgCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    orgId: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    orgId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    orgId: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    orgId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    org: OrgCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    orgId: string
    name: string
    createdAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    orgId: string
    name: string
    createdAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractCreateInput = {
    id?: string
    customer: string
    projectName: string
    totalAmount: number
    currency: string
    status: $Enums.ContractStatus
    signedDate?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    arAmount?: number
    paidAmount?: number
    filePath: string
    text: string
    metaJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrgCreateNestedOneWithoutContractsInput
    payments?: PaymentCreateNestedManyWithoutContractInput
    reports?: ReportCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: string
    orgId: string
    customer: string
    projectName: string
    totalAmount: number
    currency: string
    status: $Enums.ContractStatus
    signedDate?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    arAmount?: number
    paidAmount?: number
    filePath: string
    text: string
    metaJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutContractInput
    reports?: ReportUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    signedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metaJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutContractsNestedInput
    payments?: PaymentUpdateManyWithoutContractNestedInput
    reports?: ReportUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    signedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metaJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutContractNestedInput
    reports?: ReportUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: string
    orgId: string
    customer: string
    projectName: string
    totalAmount: number
    currency: string
    status: $Enums.ContractStatus
    signedDate?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    arAmount?: number
    paidAmount?: number
    filePath: string
    text: string
    metaJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    signedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metaJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    signedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metaJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    paidDate: Date | string
    note?: string | null
    contract: ContractCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    contractId: string
    amount: number
    paidDate: Date | string
    note?: string | null
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    contract?: ContractUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateManyInput = {
    id?: string
    contractId: string
    amount: number
    paidDate: Date | string
    note?: string | null
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportCreateInput = {
    id?: string
    reportNo: string
    sampleDate?: Date | string | null
    receiveDate?: Date | string | null
    issueDate?: Date | string | null
    filePath: string
    text: string
    createdAt?: Date | string
    org: OrgCreateNestedOneWithoutReportsInput
    contract?: ContractCreateNestedOneWithoutReportsInput
    findings?: QAFindingCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    orgId: string
    contractId?: string | null
    reportNo: string
    sampleDate?: Date | string | null
    receiveDate?: Date | string | null
    issueDate?: Date | string | null
    filePath: string
    text: string
    createdAt?: Date | string
    findings?: QAFindingUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportNo?: StringFieldUpdateOperationsInput | string
    sampleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutReportsNestedInput
    contract?: ContractUpdateOneWithoutReportsNestedInput
    findings?: QAFindingUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    reportNo?: StringFieldUpdateOperationsInput | string
    sampleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    findings?: QAFindingUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateManyInput = {
    id?: string
    orgId: string
    contractId?: string | null
    reportNo: string
    sampleDate?: Date | string | null
    receiveDate?: Date | string | null
    issueDate?: Date | string | null
    filePath: string
    text: string
    createdAt?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportNo?: StringFieldUpdateOperationsInput | string
    sampleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    reportNo?: StringFieldUpdateOperationsInput | string
    sampleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StandardDocCreateInput = {
    id?: string
    title: string
    filePath: string
    text: string
    createdAt?: Date | string
    deleted?: boolean
  }

  export type StandardDocUncheckedCreateInput = {
    id?: string
    title: string
    filePath: string
    text: string
    createdAt?: Date | string
    deleted?: boolean
  }

  export type StandardDocUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StandardDocUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StandardDocCreateManyInput = {
    id?: string
    title: string
    filePath: string
    text: string
    createdAt?: Date | string
    deleted?: boolean
  }

  export type StandardDocUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StandardDocUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QAFindingCreateInput = {
    id?: string
    type: string
    detail: string
    severity: string
    createdAt?: Date | string
    report: ReportCreateNestedOneWithoutFindingsInput
  }

  export type QAFindingUncheckedCreateInput = {
    id?: string
    reportId: string
    type: string
    detail: string
    severity: string
    createdAt?: Date | string
  }

  export type QAFindingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUpdateOneRequiredWithoutFindingsNestedInput
  }

  export type QAFindingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAFindingCreateManyInput = {
    id?: string
    reportId: string
    type: string
    detail: string
    severity: string
    createdAt?: Date | string
  }

  export type QAFindingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAFindingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    userId: string
    action: string
    payload: string
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    payload: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId: string
    action: string
    payload: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrgCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type OrgMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type OrgMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type OrgScalarRelationFilter = {
    is?: OrgWhereInput
    isNot?: OrgWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    orgId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[]
    notIn?: $Enums.ContractStatus[]
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    customer?: SortOrder
    projectName?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    signedDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    arAmount?: SortOrder
    paidAmount?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    metaJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
    arAmount?: SortOrder
    paidAmount?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    customer?: SortOrder
    projectName?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    signedDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    arAmount?: SortOrder
    paidAmount?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    metaJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    customer?: SortOrder
    projectName?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    signedDate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    arAmount?: SortOrder
    paidAmount?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    metaJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    totalAmount?: SortOrder
    arAmount?: SortOrder
    paidAmount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[]
    notIn?: $Enums.ContractStatus[]
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ContractScalarRelationFilter = {
    is?: ContractWhereInput
    isNot?: ContractWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
    note?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
    note?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
    note?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ContractNullableScalarRelationFilter = {
    is?: ContractWhereInput | null
    isNot?: ContractWhereInput | null
  }

  export type QAFindingListRelationFilter = {
    every?: QAFindingWhereInput
    some?: QAFindingWhereInput
    none?: QAFindingWhereInput
  }

  export type QAFindingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    contractId?: SortOrder
    reportNo?: SortOrder
    sampleDate?: SortOrder
    receiveDate?: SortOrder
    issueDate?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    contractId?: SortOrder
    reportNo?: SortOrder
    sampleDate?: SortOrder
    receiveDate?: SortOrder
    issueDate?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    orgId?: SortOrder
    contractId?: SortOrder
    reportNo?: SortOrder
    sampleDate?: SortOrder
    receiveDate?: SortOrder
    issueDate?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StandardDocCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type StandardDocMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type StandardDocMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    filePath?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    deleted?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReportScalarRelationFilter = {
    is?: ReportWhereInput
    isNot?: ReportWhereInput
  }

  export type QAFindingCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    type?: SortOrder
    detail?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
  }

  export type QAFindingMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    type?: SortOrder
    detail?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
  }

  export type QAFindingMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    type?: SortOrder
    detail?: SortOrder
    severity?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutOrgInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutOrgInput = {
    create?: XOR<ProjectCreateWithoutOrgInput, ProjectUncheckedCreateWithoutOrgInput> | ProjectCreateWithoutOrgInput[] | ProjectUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrgInput | ProjectCreateOrConnectWithoutOrgInput[]
    createMany?: ProjectCreateManyOrgInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ContractCreateNestedManyWithoutOrgInput = {
    create?: XOR<ContractCreateWithoutOrgInput, ContractUncheckedCreateWithoutOrgInput> | ContractCreateWithoutOrgInput[] | ContractUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutOrgInput | ContractCreateOrConnectWithoutOrgInput[]
    createMany?: ContractCreateManyOrgInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutOrgInput = {
    create?: XOR<ReportCreateWithoutOrgInput, ReportUncheckedCreateWithoutOrgInput> | ReportCreateWithoutOrgInput[] | ReportUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutOrgInput | ReportCreateOrConnectWithoutOrgInput[]
    createMany?: ReportCreateManyOrgInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<ProjectCreateWithoutOrgInput, ProjectUncheckedCreateWithoutOrgInput> | ProjectCreateWithoutOrgInput[] | ProjectUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrgInput | ProjectCreateOrConnectWithoutOrgInput[]
    createMany?: ProjectCreateManyOrgInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<ContractCreateWithoutOrgInput, ContractUncheckedCreateWithoutOrgInput> | ContractCreateWithoutOrgInput[] | ContractUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutOrgInput | ContractCreateOrConnectWithoutOrgInput[]
    createMany?: ContractCreateManyOrgInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<ReportCreateWithoutOrgInput, ReportUncheckedCreateWithoutOrgInput> | ReportCreateWithoutOrgInput[] | ReportUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutOrgInput | ReportCreateOrConnectWithoutOrgInput[]
    createMany?: ReportCreateManyOrgInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrgInput | UserUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrgInput | UserUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrgInput | UserUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ProjectCreateWithoutOrgInput, ProjectUncheckedCreateWithoutOrgInput> | ProjectCreateWithoutOrgInput[] | ProjectUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrgInput | ProjectCreateOrConnectWithoutOrgInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOrgInput | ProjectUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ProjectCreateManyOrgInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOrgInput | ProjectUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOrgInput | ProjectUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ContractUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ContractCreateWithoutOrgInput, ContractUncheckedCreateWithoutOrgInput> | ContractCreateWithoutOrgInput[] | ContractUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutOrgInput | ContractCreateOrConnectWithoutOrgInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutOrgInput | ContractUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ContractCreateManyOrgInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutOrgInput | ContractUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutOrgInput | ContractUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ReportCreateWithoutOrgInput, ReportUncheckedCreateWithoutOrgInput> | ReportCreateWithoutOrgInput[] | ReportUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutOrgInput | ReportCreateOrConnectWithoutOrgInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutOrgInput | ReportUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ReportCreateManyOrgInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutOrgInput | ReportUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutOrgInput | ReportUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput> | UserCreateWithoutOrgInput[] | UserUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrgInput | UserCreateOrConnectWithoutOrgInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrgInput | UserUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: UserCreateManyOrgInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrgInput | UserUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrgInput | UserUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ProjectCreateWithoutOrgInput, ProjectUncheckedCreateWithoutOrgInput> | ProjectCreateWithoutOrgInput[] | ProjectUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrgInput | ProjectCreateOrConnectWithoutOrgInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOrgInput | ProjectUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ProjectCreateManyOrgInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOrgInput | ProjectUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOrgInput | ProjectUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ContractCreateWithoutOrgInput, ContractUncheckedCreateWithoutOrgInput> | ContractCreateWithoutOrgInput[] | ContractUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutOrgInput | ContractCreateOrConnectWithoutOrgInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutOrgInput | ContractUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ContractCreateManyOrgInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutOrgInput | ContractUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutOrgInput | ContractUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<ReportCreateWithoutOrgInput, ReportUncheckedCreateWithoutOrgInput> | ReportCreateWithoutOrgInput[] | ReportUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutOrgInput | ReportCreateOrConnectWithoutOrgInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutOrgInput | ReportUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: ReportCreateManyOrgInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutOrgInput | ReportUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutOrgInput | ReportUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type OrgCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrgCreateWithoutUsersInput, OrgUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrgCreateOrConnectWithoutUsersInput
    connect?: OrgWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type OrgUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<OrgCreateWithoutUsersInput, OrgUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrgCreateOrConnectWithoutUsersInput
    upsert?: OrgUpsertWithoutUsersInput
    connect?: OrgWhereUniqueInput
    update?: XOR<XOR<OrgUpdateToOneWithWhereWithoutUsersInput, OrgUpdateWithoutUsersInput>, OrgUncheckedUpdateWithoutUsersInput>
  }

  export type OrgCreateNestedOneWithoutProjectsInput = {
    create?: XOR<OrgCreateWithoutProjectsInput, OrgUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: OrgCreateOrConnectWithoutProjectsInput
    connect?: OrgWhereUniqueInput
  }

  export type OrgUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<OrgCreateWithoutProjectsInput, OrgUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: OrgCreateOrConnectWithoutProjectsInput
    upsert?: OrgUpsertWithoutProjectsInput
    connect?: OrgWhereUniqueInput
    update?: XOR<XOR<OrgUpdateToOneWithWhereWithoutProjectsInput, OrgUpdateWithoutProjectsInput>, OrgUncheckedUpdateWithoutProjectsInput>
  }

  export type OrgCreateNestedOneWithoutContractsInput = {
    create?: XOR<OrgCreateWithoutContractsInput, OrgUncheckedCreateWithoutContractsInput>
    connectOrCreate?: OrgCreateOrConnectWithoutContractsInput
    connect?: OrgWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutContractInput = {
    create?: XOR<PaymentCreateWithoutContractInput, PaymentUncheckedCreateWithoutContractInput> | PaymentCreateWithoutContractInput[] | PaymentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutContractInput | PaymentCreateOrConnectWithoutContractInput[]
    createMany?: PaymentCreateManyContractInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutContractInput = {
    create?: XOR<ReportCreateWithoutContractInput, ReportUncheckedCreateWithoutContractInput> | ReportCreateWithoutContractInput[] | ReportUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutContractInput | ReportCreateOrConnectWithoutContractInput[]
    createMany?: ReportCreateManyContractInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<PaymentCreateWithoutContractInput, PaymentUncheckedCreateWithoutContractInput> | PaymentCreateWithoutContractInput[] | PaymentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutContractInput | PaymentCreateOrConnectWithoutContractInput[]
    createMany?: PaymentCreateManyContractInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<ReportCreateWithoutContractInput, ReportUncheckedCreateWithoutContractInput> | ReportCreateWithoutContractInput[] | ReportUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutContractInput | ReportCreateOrConnectWithoutContractInput[]
    createMany?: ReportCreateManyContractInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumContractStatusFieldUpdateOperationsInput = {
    set?: $Enums.ContractStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrgUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<OrgCreateWithoutContractsInput, OrgUncheckedCreateWithoutContractsInput>
    connectOrCreate?: OrgCreateOrConnectWithoutContractsInput
    upsert?: OrgUpsertWithoutContractsInput
    connect?: OrgWhereUniqueInput
    update?: XOR<XOR<OrgUpdateToOneWithWhereWithoutContractsInput, OrgUpdateWithoutContractsInput>, OrgUncheckedUpdateWithoutContractsInput>
  }

  export type PaymentUpdateManyWithoutContractNestedInput = {
    create?: XOR<PaymentCreateWithoutContractInput, PaymentUncheckedCreateWithoutContractInput> | PaymentCreateWithoutContractInput[] | PaymentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutContractInput | PaymentCreateOrConnectWithoutContractInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutContractInput | PaymentUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: PaymentCreateManyContractInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutContractInput | PaymentUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutContractInput | PaymentUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutContractNestedInput = {
    create?: XOR<ReportCreateWithoutContractInput, ReportUncheckedCreateWithoutContractInput> | ReportCreateWithoutContractInput[] | ReportUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutContractInput | ReportCreateOrConnectWithoutContractInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutContractInput | ReportUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ReportCreateManyContractInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutContractInput | ReportUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutContractInput | ReportUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<PaymentCreateWithoutContractInput, PaymentUncheckedCreateWithoutContractInput> | PaymentCreateWithoutContractInput[] | PaymentUncheckedCreateWithoutContractInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutContractInput | PaymentCreateOrConnectWithoutContractInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutContractInput | PaymentUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: PaymentCreateManyContractInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutContractInput | PaymentUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutContractInput | PaymentUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<ReportCreateWithoutContractInput, ReportUncheckedCreateWithoutContractInput> | ReportCreateWithoutContractInput[] | ReportUncheckedCreateWithoutContractInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutContractInput | ReportCreateOrConnectWithoutContractInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutContractInput | ReportUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: ReportCreateManyContractInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutContractInput | ReportUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutContractInput | ReportUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ContractCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ContractCreateWithoutPaymentsInput, ContractUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutPaymentsInput
    connect?: ContractWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ContractUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<ContractCreateWithoutPaymentsInput, ContractUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutPaymentsInput
    upsert?: ContractUpsertWithoutPaymentsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutPaymentsInput, ContractUpdateWithoutPaymentsInput>, ContractUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrgCreateNestedOneWithoutReportsInput = {
    create?: XOR<OrgCreateWithoutReportsInput, OrgUncheckedCreateWithoutReportsInput>
    connectOrCreate?: OrgCreateOrConnectWithoutReportsInput
    connect?: OrgWhereUniqueInput
  }

  export type ContractCreateNestedOneWithoutReportsInput = {
    create?: XOR<ContractCreateWithoutReportsInput, ContractUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutReportsInput
    connect?: ContractWhereUniqueInput
  }

  export type QAFindingCreateNestedManyWithoutReportInput = {
    create?: XOR<QAFindingCreateWithoutReportInput, QAFindingUncheckedCreateWithoutReportInput> | QAFindingCreateWithoutReportInput[] | QAFindingUncheckedCreateWithoutReportInput[]
    connectOrCreate?: QAFindingCreateOrConnectWithoutReportInput | QAFindingCreateOrConnectWithoutReportInput[]
    createMany?: QAFindingCreateManyReportInputEnvelope
    connect?: QAFindingWhereUniqueInput | QAFindingWhereUniqueInput[]
  }

  export type QAFindingUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<QAFindingCreateWithoutReportInput, QAFindingUncheckedCreateWithoutReportInput> | QAFindingCreateWithoutReportInput[] | QAFindingUncheckedCreateWithoutReportInput[]
    connectOrCreate?: QAFindingCreateOrConnectWithoutReportInput | QAFindingCreateOrConnectWithoutReportInput[]
    createMany?: QAFindingCreateManyReportInputEnvelope
    connect?: QAFindingWhereUniqueInput | QAFindingWhereUniqueInput[]
  }

  export type OrgUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<OrgCreateWithoutReportsInput, OrgUncheckedCreateWithoutReportsInput>
    connectOrCreate?: OrgCreateOrConnectWithoutReportsInput
    upsert?: OrgUpsertWithoutReportsInput
    connect?: OrgWhereUniqueInput
    update?: XOR<XOR<OrgUpdateToOneWithWhereWithoutReportsInput, OrgUpdateWithoutReportsInput>, OrgUncheckedUpdateWithoutReportsInput>
  }

  export type ContractUpdateOneWithoutReportsNestedInput = {
    create?: XOR<ContractCreateWithoutReportsInput, ContractUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutReportsInput
    upsert?: ContractUpsertWithoutReportsInput
    disconnect?: ContractWhereInput | boolean
    delete?: ContractWhereInput | boolean
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutReportsInput, ContractUpdateWithoutReportsInput>, ContractUncheckedUpdateWithoutReportsInput>
  }

  export type QAFindingUpdateManyWithoutReportNestedInput = {
    create?: XOR<QAFindingCreateWithoutReportInput, QAFindingUncheckedCreateWithoutReportInput> | QAFindingCreateWithoutReportInput[] | QAFindingUncheckedCreateWithoutReportInput[]
    connectOrCreate?: QAFindingCreateOrConnectWithoutReportInput | QAFindingCreateOrConnectWithoutReportInput[]
    upsert?: QAFindingUpsertWithWhereUniqueWithoutReportInput | QAFindingUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: QAFindingCreateManyReportInputEnvelope
    set?: QAFindingWhereUniqueInput | QAFindingWhereUniqueInput[]
    disconnect?: QAFindingWhereUniqueInput | QAFindingWhereUniqueInput[]
    delete?: QAFindingWhereUniqueInput | QAFindingWhereUniqueInput[]
    connect?: QAFindingWhereUniqueInput | QAFindingWhereUniqueInput[]
    update?: QAFindingUpdateWithWhereUniqueWithoutReportInput | QAFindingUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: QAFindingUpdateManyWithWhereWithoutReportInput | QAFindingUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: QAFindingScalarWhereInput | QAFindingScalarWhereInput[]
  }

  export type QAFindingUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<QAFindingCreateWithoutReportInput, QAFindingUncheckedCreateWithoutReportInput> | QAFindingCreateWithoutReportInput[] | QAFindingUncheckedCreateWithoutReportInput[]
    connectOrCreate?: QAFindingCreateOrConnectWithoutReportInput | QAFindingCreateOrConnectWithoutReportInput[]
    upsert?: QAFindingUpsertWithWhereUniqueWithoutReportInput | QAFindingUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: QAFindingCreateManyReportInputEnvelope
    set?: QAFindingWhereUniqueInput | QAFindingWhereUniqueInput[]
    disconnect?: QAFindingWhereUniqueInput | QAFindingWhereUniqueInput[]
    delete?: QAFindingWhereUniqueInput | QAFindingWhereUniqueInput[]
    connect?: QAFindingWhereUniqueInput | QAFindingWhereUniqueInput[]
    update?: QAFindingUpdateWithWhereUniqueWithoutReportInput | QAFindingUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: QAFindingUpdateManyWithWhereWithoutReportInput | QAFindingUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: QAFindingScalarWhereInput | QAFindingScalarWhereInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ReportCreateNestedOneWithoutFindingsInput = {
    create?: XOR<ReportCreateWithoutFindingsInput, ReportUncheckedCreateWithoutFindingsInput>
    connectOrCreate?: ReportCreateOrConnectWithoutFindingsInput
    connect?: ReportWhereUniqueInput
  }

  export type ReportUpdateOneRequiredWithoutFindingsNestedInput = {
    create?: XOR<ReportCreateWithoutFindingsInput, ReportUncheckedCreateWithoutFindingsInput>
    connectOrCreate?: ReportCreateOrConnectWithoutFindingsInput
    upsert?: ReportUpsertWithoutFindingsInput
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutFindingsInput, ReportUpdateWithoutFindingsInput>, ReportUncheckedUpdateWithoutFindingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumContractStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[]
    notIn?: $Enums.ContractStatus[]
    not?: NestedEnumContractStatusFilter<$PrismaModel> | $Enums.ContractStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumContractStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContractStatus | EnumContractStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ContractStatus[]
    notIn?: $Enums.ContractStatus[]
    not?: NestedEnumContractStatusWithAggregatesFilter<$PrismaModel> | $Enums.ContractStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContractStatusFilter<$PrismaModel>
    _max?: NestedEnumContractStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutOrgInput = {
    id?: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutOrgInput = {
    id?: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutOrgInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput>
  }

  export type UserCreateManyOrgInputEnvelope = {
    data: UserCreateManyOrgInput | UserCreateManyOrgInput[]
  }

  export type ProjectCreateWithoutOrgInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutOrgInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutOrgInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOrgInput, ProjectUncheckedCreateWithoutOrgInput>
  }

  export type ProjectCreateManyOrgInputEnvelope = {
    data: ProjectCreateManyOrgInput | ProjectCreateManyOrgInput[]
  }

  export type ContractCreateWithoutOrgInput = {
    id?: string
    customer: string
    projectName: string
    totalAmount: number
    currency: string
    status: $Enums.ContractStatus
    signedDate?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    arAmount?: number
    paidAmount?: number
    filePath: string
    text: string
    metaJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutContractInput
    reports?: ReportCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutOrgInput = {
    id?: string
    customer: string
    projectName: string
    totalAmount: number
    currency: string
    status: $Enums.ContractStatus
    signedDate?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    arAmount?: number
    paidAmount?: number
    filePath: string
    text: string
    metaJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutContractInput
    reports?: ReportUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutOrgInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutOrgInput, ContractUncheckedCreateWithoutOrgInput>
  }

  export type ContractCreateManyOrgInputEnvelope = {
    data: ContractCreateManyOrgInput | ContractCreateManyOrgInput[]
  }

  export type ReportCreateWithoutOrgInput = {
    id?: string
    reportNo: string
    sampleDate?: Date | string | null
    receiveDate?: Date | string | null
    issueDate?: Date | string | null
    filePath: string
    text: string
    createdAt?: Date | string
    contract?: ContractCreateNestedOneWithoutReportsInput
    findings?: QAFindingCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutOrgInput = {
    id?: string
    contractId?: string | null
    reportNo: string
    sampleDate?: Date | string | null
    receiveDate?: Date | string | null
    issueDate?: Date | string | null
    filePath: string
    text: string
    createdAt?: Date | string
    findings?: QAFindingUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutOrgInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutOrgInput, ReportUncheckedCreateWithoutOrgInput>
  }

  export type ReportCreateManyOrgInputEnvelope = {
    data: ReportCreateManyOrgInput | ReportCreateManyOrgInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutOrgInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrgInput, UserUncheckedUpdateWithoutOrgInput>
    create: XOR<UserCreateWithoutOrgInput, UserUncheckedCreateWithoutOrgInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrgInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrgInput, UserUncheckedUpdateWithoutOrgInput>
  }

  export type UserUpdateManyWithWhereWithoutOrgInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrgInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    orgId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutOrgInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOrgInput, ProjectUncheckedUpdateWithoutOrgInput>
    create: XOR<ProjectCreateWithoutOrgInput, ProjectUncheckedCreateWithoutOrgInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOrgInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOrgInput, ProjectUncheckedUpdateWithoutOrgInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOrgInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOrgInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    orgId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ContractUpsertWithWhereUniqueWithoutOrgInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutOrgInput, ContractUncheckedUpdateWithoutOrgInput>
    create: XOR<ContractCreateWithoutOrgInput, ContractUncheckedCreateWithoutOrgInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutOrgInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutOrgInput, ContractUncheckedUpdateWithoutOrgInput>
  }

  export type ContractUpdateManyWithWhereWithoutOrgInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutOrgInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: StringFilter<"Contract"> | string
    orgId?: StringFilter<"Contract"> | string
    customer?: StringFilter<"Contract"> | string
    projectName?: StringFilter<"Contract"> | string
    totalAmount?: FloatFilter<"Contract"> | number
    currency?: StringFilter<"Contract"> | string
    status?: EnumContractStatusFilter<"Contract"> | $Enums.ContractStatus
    signedDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    startDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Contract"> | Date | string | null
    arAmount?: FloatFilter<"Contract"> | number
    paidAmount?: FloatFilter<"Contract"> | number
    filePath?: StringFilter<"Contract"> | string
    text?: StringFilter<"Contract"> | string
    metaJson?: StringFilter<"Contract"> | string
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
  }

  export type ReportUpsertWithWhereUniqueWithoutOrgInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutOrgInput, ReportUncheckedUpdateWithoutOrgInput>
    create: XOR<ReportCreateWithoutOrgInput, ReportUncheckedCreateWithoutOrgInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutOrgInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutOrgInput, ReportUncheckedUpdateWithoutOrgInput>
  }

  export type ReportUpdateManyWithWhereWithoutOrgInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutOrgInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    orgId?: StringFilter<"Report"> | string
    contractId?: StringNullableFilter<"Report"> | string | null
    reportNo?: StringFilter<"Report"> | string
    sampleDate?: DateTimeNullableFilter<"Report"> | Date | string | null
    receiveDate?: DateTimeNullableFilter<"Report"> | Date | string | null
    issueDate?: DateTimeNullableFilter<"Report"> | Date | string | null
    filePath?: StringFilter<"Report"> | string
    text?: StringFilter<"Report"> | string
    createdAt?: DateTimeFilter<"Report"> | Date | string
  }

  export type OrgCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutOrgInput
    contracts?: ContractCreateNestedManyWithoutOrgInput
    reports?: ReportCreateNestedManyWithoutOrgInput
  }

  export type OrgUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutOrgInput
    contracts?: ContractUncheckedCreateNestedManyWithoutOrgInput
    reports?: ReportUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrgCreateOrConnectWithoutUsersInput = {
    where: OrgWhereUniqueInput
    create: XOR<OrgCreateWithoutUsersInput, OrgUncheckedCreateWithoutUsersInput>
  }

  export type OrgUpsertWithoutUsersInput = {
    update: XOR<OrgUpdateWithoutUsersInput, OrgUncheckedUpdateWithoutUsersInput>
    create: XOR<OrgCreateWithoutUsersInput, OrgUncheckedCreateWithoutUsersInput>
    where?: OrgWhereInput
  }

  export type OrgUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrgWhereInput
    data: XOR<OrgUpdateWithoutUsersInput, OrgUncheckedUpdateWithoutUsersInput>
  }

  export type OrgUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutOrgNestedInput
    contracts?: ContractUpdateManyWithoutOrgNestedInput
    reports?: ReportUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutOrgNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutOrgNestedInput
    reports?: ReportUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrgCreateWithoutProjectsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    contracts?: ContractCreateNestedManyWithoutOrgInput
    reports?: ReportCreateNestedManyWithoutOrgInput
  }

  export type OrgUncheckedCreateWithoutProjectsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    contracts?: ContractUncheckedCreateNestedManyWithoutOrgInput
    reports?: ReportUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrgCreateOrConnectWithoutProjectsInput = {
    where: OrgWhereUniqueInput
    create: XOR<OrgCreateWithoutProjectsInput, OrgUncheckedCreateWithoutProjectsInput>
  }

  export type OrgUpsertWithoutProjectsInput = {
    update: XOR<OrgUpdateWithoutProjectsInput, OrgUncheckedUpdateWithoutProjectsInput>
    create: XOR<OrgCreateWithoutProjectsInput, OrgUncheckedCreateWithoutProjectsInput>
    where?: OrgWhereInput
  }

  export type OrgUpdateToOneWithWhereWithoutProjectsInput = {
    where?: OrgWhereInput
    data: XOR<OrgUpdateWithoutProjectsInput, OrgUncheckedUpdateWithoutProjectsInput>
  }

  export type OrgUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    contracts?: ContractUpdateManyWithoutOrgNestedInput
    reports?: ReportUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutOrgNestedInput
    reports?: ReportUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrgCreateWithoutContractsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    projects?: ProjectCreateNestedManyWithoutOrgInput
    reports?: ReportCreateNestedManyWithoutOrgInput
  }

  export type OrgUncheckedCreateWithoutContractsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOrgInput
    reports?: ReportUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrgCreateOrConnectWithoutContractsInput = {
    where: OrgWhereUniqueInput
    create: XOR<OrgCreateWithoutContractsInput, OrgUncheckedCreateWithoutContractsInput>
  }

  export type PaymentCreateWithoutContractInput = {
    id?: string
    amount: number
    paidDate: Date | string
    note?: string | null
  }

  export type PaymentUncheckedCreateWithoutContractInput = {
    id?: string
    amount: number
    paidDate: Date | string
    note?: string | null
  }

  export type PaymentCreateOrConnectWithoutContractInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutContractInput, PaymentUncheckedCreateWithoutContractInput>
  }

  export type PaymentCreateManyContractInputEnvelope = {
    data: PaymentCreateManyContractInput | PaymentCreateManyContractInput[]
  }

  export type ReportCreateWithoutContractInput = {
    id?: string
    reportNo: string
    sampleDate?: Date | string | null
    receiveDate?: Date | string | null
    issueDate?: Date | string | null
    filePath: string
    text: string
    createdAt?: Date | string
    org: OrgCreateNestedOneWithoutReportsInput
    findings?: QAFindingCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutContractInput = {
    id?: string
    orgId: string
    reportNo: string
    sampleDate?: Date | string | null
    receiveDate?: Date | string | null
    issueDate?: Date | string | null
    filePath: string
    text: string
    createdAt?: Date | string
    findings?: QAFindingUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutContractInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutContractInput, ReportUncheckedCreateWithoutContractInput>
  }

  export type ReportCreateManyContractInputEnvelope = {
    data: ReportCreateManyContractInput | ReportCreateManyContractInput[]
  }

  export type OrgUpsertWithoutContractsInput = {
    update: XOR<OrgUpdateWithoutContractsInput, OrgUncheckedUpdateWithoutContractsInput>
    create: XOR<OrgCreateWithoutContractsInput, OrgUncheckedCreateWithoutContractsInput>
    where?: OrgWhereInput
  }

  export type OrgUpdateToOneWithWhereWithoutContractsInput = {
    where?: OrgWhereInput
    data: XOR<OrgUpdateWithoutContractsInput, OrgUncheckedUpdateWithoutContractsInput>
  }

  export type OrgUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    projects?: ProjectUpdateManyWithoutOrgNestedInput
    reports?: ReportUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOrgNestedInput
    reports?: ReportUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutContractInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutContractInput, PaymentUncheckedUpdateWithoutContractInput>
    create: XOR<PaymentCreateWithoutContractInput, PaymentUncheckedCreateWithoutContractInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutContractInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutContractInput, PaymentUncheckedUpdateWithoutContractInput>
  }

  export type PaymentUpdateManyWithWhereWithoutContractInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutContractInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    contractId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paidDate?: DateTimeFilter<"Payment"> | Date | string
    note?: StringNullableFilter<"Payment"> | string | null
  }

  export type ReportUpsertWithWhereUniqueWithoutContractInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutContractInput, ReportUncheckedUpdateWithoutContractInput>
    create: XOR<ReportCreateWithoutContractInput, ReportUncheckedCreateWithoutContractInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutContractInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutContractInput, ReportUncheckedUpdateWithoutContractInput>
  }

  export type ReportUpdateManyWithWhereWithoutContractInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutContractInput>
  }

  export type ContractCreateWithoutPaymentsInput = {
    id?: string
    customer: string
    projectName: string
    totalAmount: number
    currency: string
    status: $Enums.ContractStatus
    signedDate?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    arAmount?: number
    paidAmount?: number
    filePath: string
    text: string
    metaJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrgCreateNestedOneWithoutContractsInput
    reports?: ReportCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutPaymentsInput = {
    id?: string
    orgId: string
    customer: string
    projectName: string
    totalAmount: number
    currency: string
    status: $Enums.ContractStatus
    signedDate?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    arAmount?: number
    paidAmount?: number
    filePath: string
    text: string
    metaJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: ReportUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutPaymentsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutPaymentsInput, ContractUncheckedCreateWithoutPaymentsInput>
  }

  export type ContractUpsertWithoutPaymentsInput = {
    update: XOR<ContractUpdateWithoutPaymentsInput, ContractUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ContractCreateWithoutPaymentsInput, ContractUncheckedCreateWithoutPaymentsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutPaymentsInput, ContractUncheckedUpdateWithoutPaymentsInput>
  }

  export type ContractUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    signedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metaJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutContractsNestedInput
    reports?: ReportUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    signedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metaJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: ReportUncheckedUpdateManyWithoutContractNestedInput
  }

  export type OrgCreateWithoutReportsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutOrgInput
    projects?: ProjectCreateNestedManyWithoutOrgInput
    contracts?: ContractCreateNestedManyWithoutOrgInput
  }

  export type OrgUncheckedCreateWithoutReportsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrgInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOrgInput
    contracts?: ContractUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrgCreateOrConnectWithoutReportsInput = {
    where: OrgWhereUniqueInput
    create: XOR<OrgCreateWithoutReportsInput, OrgUncheckedCreateWithoutReportsInput>
  }

  export type ContractCreateWithoutReportsInput = {
    id?: string
    customer: string
    projectName: string
    totalAmount: number
    currency: string
    status: $Enums.ContractStatus
    signedDate?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    arAmount?: number
    paidAmount?: number
    filePath: string
    text: string
    metaJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    org: OrgCreateNestedOneWithoutContractsInput
    payments?: PaymentCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutReportsInput = {
    id?: string
    orgId: string
    customer: string
    projectName: string
    totalAmount: number
    currency: string
    status: $Enums.ContractStatus
    signedDate?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    arAmount?: number
    paidAmount?: number
    filePath: string
    text: string
    metaJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutReportsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutReportsInput, ContractUncheckedCreateWithoutReportsInput>
  }

  export type QAFindingCreateWithoutReportInput = {
    id?: string
    type: string
    detail: string
    severity: string
    createdAt?: Date | string
  }

  export type QAFindingUncheckedCreateWithoutReportInput = {
    id?: string
    type: string
    detail: string
    severity: string
    createdAt?: Date | string
  }

  export type QAFindingCreateOrConnectWithoutReportInput = {
    where: QAFindingWhereUniqueInput
    create: XOR<QAFindingCreateWithoutReportInput, QAFindingUncheckedCreateWithoutReportInput>
  }

  export type QAFindingCreateManyReportInputEnvelope = {
    data: QAFindingCreateManyReportInput | QAFindingCreateManyReportInput[]
  }

  export type OrgUpsertWithoutReportsInput = {
    update: XOR<OrgUpdateWithoutReportsInput, OrgUncheckedUpdateWithoutReportsInput>
    create: XOR<OrgCreateWithoutReportsInput, OrgUncheckedCreateWithoutReportsInput>
    where?: OrgWhereInput
  }

  export type OrgUpdateToOneWithWhereWithoutReportsInput = {
    where?: OrgWhereInput
    data: XOR<OrgUpdateWithoutReportsInput, OrgUncheckedUpdateWithoutReportsInput>
  }

  export type OrgUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrgNestedInput
    projects?: ProjectUpdateManyWithoutOrgNestedInput
    contracts?: ContractUpdateManyWithoutOrgNestedInput
  }

  export type OrgUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrgNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOrgNestedInput
    contracts?: ContractUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type ContractUpsertWithoutReportsInput = {
    update: XOR<ContractUpdateWithoutReportsInput, ContractUncheckedUpdateWithoutReportsInput>
    create: XOR<ContractCreateWithoutReportsInput, ContractUncheckedCreateWithoutReportsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutReportsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutReportsInput, ContractUncheckedUpdateWithoutReportsInput>
  }

  export type ContractUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    signedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metaJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutContractsNestedInput
    payments?: PaymentUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    signedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metaJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutContractNestedInput
  }

  export type QAFindingUpsertWithWhereUniqueWithoutReportInput = {
    where: QAFindingWhereUniqueInput
    update: XOR<QAFindingUpdateWithoutReportInput, QAFindingUncheckedUpdateWithoutReportInput>
    create: XOR<QAFindingCreateWithoutReportInput, QAFindingUncheckedCreateWithoutReportInput>
  }

  export type QAFindingUpdateWithWhereUniqueWithoutReportInput = {
    where: QAFindingWhereUniqueInput
    data: XOR<QAFindingUpdateWithoutReportInput, QAFindingUncheckedUpdateWithoutReportInput>
  }

  export type QAFindingUpdateManyWithWhereWithoutReportInput = {
    where: QAFindingScalarWhereInput
    data: XOR<QAFindingUpdateManyMutationInput, QAFindingUncheckedUpdateManyWithoutReportInput>
  }

  export type QAFindingScalarWhereInput = {
    AND?: QAFindingScalarWhereInput | QAFindingScalarWhereInput[]
    OR?: QAFindingScalarWhereInput[]
    NOT?: QAFindingScalarWhereInput | QAFindingScalarWhereInput[]
    id?: StringFilter<"QAFinding"> | string
    reportId?: StringFilter<"QAFinding"> | string
    type?: StringFilter<"QAFinding"> | string
    detail?: StringFilter<"QAFinding"> | string
    severity?: StringFilter<"QAFinding"> | string
    createdAt?: DateTimeFilter<"QAFinding"> | Date | string
  }

  export type ReportCreateWithoutFindingsInput = {
    id?: string
    reportNo: string
    sampleDate?: Date | string | null
    receiveDate?: Date | string | null
    issueDate?: Date | string | null
    filePath: string
    text: string
    createdAt?: Date | string
    org: OrgCreateNestedOneWithoutReportsInput
    contract?: ContractCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateWithoutFindingsInput = {
    id?: string
    orgId: string
    contractId?: string | null
    reportNo: string
    sampleDate?: Date | string | null
    receiveDate?: Date | string | null
    issueDate?: Date | string | null
    filePath: string
    text: string
    createdAt?: Date | string
  }

  export type ReportCreateOrConnectWithoutFindingsInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutFindingsInput, ReportUncheckedCreateWithoutFindingsInput>
  }

  export type ReportUpsertWithoutFindingsInput = {
    update: XOR<ReportUpdateWithoutFindingsInput, ReportUncheckedUpdateWithoutFindingsInput>
    create: XOR<ReportCreateWithoutFindingsInput, ReportUncheckedCreateWithoutFindingsInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutFindingsInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutFindingsInput, ReportUncheckedUpdateWithoutFindingsInput>
  }

  export type ReportUpdateWithoutFindingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportNo?: StringFieldUpdateOperationsInput | string
    sampleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutReportsNestedInput
    contract?: ContractUpdateOneWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateWithoutFindingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    reportNo?: StringFieldUpdateOperationsInput | string
    sampleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyOrgInput = {
    id?: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type ProjectCreateManyOrgInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type ContractCreateManyOrgInput = {
    id?: string
    customer: string
    projectName: string
    totalAmount: number
    currency: string
    status: $Enums.ContractStatus
    signedDate?: Date | string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    arAmount?: number
    paidAmount?: number
    filePath: string
    text: string
    metaJson: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportCreateManyOrgInput = {
    id?: string
    contractId?: string | null
    reportNo: string
    sampleDate?: Date | string | null
    receiveDate?: Date | string | null
    issueDate?: Date | string | null
    filePath: string
    text: string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    signedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metaJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutContractNestedInput
    reports?: ReportUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    signedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metaJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutContractNestedInput
    reports?: ReportUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    totalAmount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumContractStatusFieldUpdateOperationsInput | $Enums.ContractStatus
    signedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    arAmount?: FloatFieldUpdateOperationsInput | number
    paidAmount?: FloatFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    metaJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportNo?: StringFieldUpdateOperationsInput | string
    sampleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractUpdateOneWithoutReportsNestedInput
    findings?: QAFindingUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    reportNo?: StringFieldUpdateOperationsInput | string
    sampleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    findings?: QAFindingUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    reportNo?: StringFieldUpdateOperationsInput | string
    sampleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyContractInput = {
    id?: string
    amount: number
    paidDate: Date | string
    note?: string | null
  }

  export type ReportCreateManyContractInput = {
    id?: string
    orgId: string
    reportNo: string
    sampleDate?: Date | string | null
    receiveDate?: Date | string | null
    issueDate?: Date | string | null
    filePath: string
    text: string
    createdAt?: Date | string
  }

  export type PaymentUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportNo?: StringFieldUpdateOperationsInput | string
    sampleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrgUpdateOneRequiredWithoutReportsNestedInput
    findings?: QAFindingUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    reportNo?: StringFieldUpdateOperationsInput | string
    sampleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    findings?: QAFindingUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    orgId?: StringFieldUpdateOperationsInput | string
    reportNo?: StringFieldUpdateOperationsInput | string
    sampleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAFindingCreateManyReportInput = {
    id?: string
    type: string
    detail: string
    severity: string
    createdAt?: Date | string
  }

  export type QAFindingUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAFindingUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QAFindingUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    detail?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}