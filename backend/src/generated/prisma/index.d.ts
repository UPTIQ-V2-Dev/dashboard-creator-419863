
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model DashboardStats
 * 
 */
export type DashboardStats = $Result.DefaultSelection<Prisma.$DashboardStatsPayload>
/**
 * Model RecentItem
 * 
 */
export type RecentItem = $Result.DefaultSelection<Prisma.$RecentItemPayload>
/**
 * Model QuickAction
 * 
 */
export type QuickAction = $Result.DefaultSelection<Prisma.$QuickActionPayload>
/**
 * Model WelcomeVideo
 * 
 */
export type WelcomeVideo = $Result.DefaultSelection<Prisma.$WelcomeVideoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TokenType: {
  ACCESS: 'ACCESS',
  REFRESH: 'REFRESH',
  RESET_PASSWORD: 'RESET_PASSWORD',
  VERIFY_EMAIL: 'VERIFY_EMAIL'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dashboardStats`: Exposes CRUD operations for the **DashboardStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DashboardStats
    * const dashboardStats = await prisma.dashboardStats.findMany()
    * ```
    */
  get dashboardStats(): Prisma.DashboardStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recentItem`: Exposes CRUD operations for the **RecentItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecentItems
    * const recentItems = await prisma.recentItem.findMany()
    * ```
    */
  get recentItem(): Prisma.RecentItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quickAction`: Exposes CRUD operations for the **QuickAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuickActions
    * const quickActions = await prisma.quickAction.findMany()
    * ```
    */
  get quickAction(): Prisma.QuickActionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.welcomeVideo`: Exposes CRUD operations for the **WelcomeVideo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WelcomeVideos
    * const welcomeVideos = await prisma.welcomeVideo.findMany()
    * ```
    */
  get welcomeVideo(): Prisma.WelcomeVideoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    User: 'User',
    Token: 'Token',
    DashboardStats: 'DashboardStats',
    RecentItem: 'RecentItem',
    QuickAction: 'QuickAction',
    WelcomeVideo: 'WelcomeVideo'
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
      modelProps: "user" | "token" | "dashboardStats" | "recentItem" | "quickAction" | "welcomeVideo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      DashboardStats: {
        payload: Prisma.$DashboardStatsPayload<ExtArgs>
        fields: Prisma.DashboardStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DashboardStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DashboardStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardStatsPayload>
          }
          findFirst: {
            args: Prisma.DashboardStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DashboardStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardStatsPayload>
          }
          findMany: {
            args: Prisma.DashboardStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardStatsPayload>[]
          }
          create: {
            args: Prisma.DashboardStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardStatsPayload>
          }
          createMany: {
            args: Prisma.DashboardStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DashboardStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardStatsPayload>[]
          }
          delete: {
            args: Prisma.DashboardStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardStatsPayload>
          }
          update: {
            args: Prisma.DashboardStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardStatsPayload>
          }
          deleteMany: {
            args: Prisma.DashboardStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DashboardStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DashboardStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardStatsPayload>[]
          }
          upsert: {
            args: Prisma.DashboardStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardStatsPayload>
          }
          aggregate: {
            args: Prisma.DashboardStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDashboardStats>
          }
          groupBy: {
            args: Prisma.DashboardStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DashboardStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DashboardStatsCountArgs<ExtArgs>
            result: $Utils.Optional<DashboardStatsCountAggregateOutputType> | number
          }
        }
      }
      RecentItem: {
        payload: Prisma.$RecentItemPayload<ExtArgs>
        fields: Prisma.RecentItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecentItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecentItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentItemPayload>
          }
          findFirst: {
            args: Prisma.RecentItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecentItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentItemPayload>
          }
          findMany: {
            args: Prisma.RecentItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentItemPayload>[]
          }
          create: {
            args: Prisma.RecentItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentItemPayload>
          }
          createMany: {
            args: Prisma.RecentItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecentItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentItemPayload>[]
          }
          delete: {
            args: Prisma.RecentItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentItemPayload>
          }
          update: {
            args: Prisma.RecentItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentItemPayload>
          }
          deleteMany: {
            args: Prisma.RecentItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecentItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecentItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentItemPayload>[]
          }
          upsert: {
            args: Prisma.RecentItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecentItemPayload>
          }
          aggregate: {
            args: Prisma.RecentItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecentItem>
          }
          groupBy: {
            args: Prisma.RecentItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecentItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecentItemCountArgs<ExtArgs>
            result: $Utils.Optional<RecentItemCountAggregateOutputType> | number
          }
        }
      }
      QuickAction: {
        payload: Prisma.$QuickActionPayload<ExtArgs>
        fields: Prisma.QuickActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuickActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuickActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickActionPayload>
          }
          findFirst: {
            args: Prisma.QuickActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuickActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickActionPayload>
          }
          findMany: {
            args: Prisma.QuickActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickActionPayload>[]
          }
          create: {
            args: Prisma.QuickActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickActionPayload>
          }
          createMany: {
            args: Prisma.QuickActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuickActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickActionPayload>[]
          }
          delete: {
            args: Prisma.QuickActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickActionPayload>
          }
          update: {
            args: Prisma.QuickActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickActionPayload>
          }
          deleteMany: {
            args: Prisma.QuickActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuickActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuickActionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickActionPayload>[]
          }
          upsert: {
            args: Prisma.QuickActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuickActionPayload>
          }
          aggregate: {
            args: Prisma.QuickActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuickAction>
          }
          groupBy: {
            args: Prisma.QuickActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuickActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuickActionCountArgs<ExtArgs>
            result: $Utils.Optional<QuickActionCountAggregateOutputType> | number
          }
        }
      }
      WelcomeVideo: {
        payload: Prisma.$WelcomeVideoPayload<ExtArgs>
        fields: Prisma.WelcomeVideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WelcomeVideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WelcomeVideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WelcomeVideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WelcomeVideoPayload>
          }
          findFirst: {
            args: Prisma.WelcomeVideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WelcomeVideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WelcomeVideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WelcomeVideoPayload>
          }
          findMany: {
            args: Prisma.WelcomeVideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WelcomeVideoPayload>[]
          }
          create: {
            args: Prisma.WelcomeVideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WelcomeVideoPayload>
          }
          createMany: {
            args: Prisma.WelcomeVideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WelcomeVideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WelcomeVideoPayload>[]
          }
          delete: {
            args: Prisma.WelcomeVideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WelcomeVideoPayload>
          }
          update: {
            args: Prisma.WelcomeVideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WelcomeVideoPayload>
          }
          deleteMany: {
            args: Prisma.WelcomeVideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WelcomeVideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WelcomeVideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WelcomeVideoPayload>[]
          }
          upsert: {
            args: Prisma.WelcomeVideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WelcomeVideoPayload>
          }
          aggregate: {
            args: Prisma.WelcomeVideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWelcomeVideo>
          }
          groupBy: {
            args: Prisma.WelcomeVideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<WelcomeVideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.WelcomeVideoCountArgs<ExtArgs>
            result: $Utils.Optional<WelcomeVideoCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    token?: TokenOmit
    dashboardStats?: DashboardStatsOmit
    recentItem?: RecentItemOmit
    quickAction?: QuickActionOmit
    welcomeVideo?: WelcomeVideoOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Token: number
    recentItems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Token?: boolean | UserCountOutputTypeCountTokenArgs
    recentItems?: boolean | UserCountOutputTypeCountRecentItemsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecentItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecentItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    isEmailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    isEmailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    isEmailVerified?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    password: string
    role: $Enums.Role
    isEmailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Token?: boolean | User$TokenArgs<ExtArgs>
    dashboardStats?: boolean | User$dashboardStatsArgs<ExtArgs>
    recentItems?: boolean | User$recentItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "isEmailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Token?: boolean | User$TokenArgs<ExtArgs>
    dashboardStats?: boolean | User$dashboardStatsArgs<ExtArgs>
    recentItems?: boolean | User$recentItemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Token: Prisma.$TokenPayload<ExtArgs>[]
      dashboardStats: Prisma.$DashboardStatsPayload<ExtArgs> | null
      recentItems: Prisma.$RecentItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
      role: $Enums.Role
      isEmailVerified: boolean
      createdAt: Date
      updatedAt: Date
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
    Token<T extends User$TokenArgs<ExtArgs> = {}>(args?: Subset<T, User$TokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dashboardStats<T extends User$dashboardStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$dashboardStatsArgs<ExtArgs>>): Prisma__DashboardStatsClient<$Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recentItems<T extends User$recentItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$recentItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * User.Token
   */
  export type User$TokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User.dashboardStats
   */
  export type User$dashboardStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsInclude<ExtArgs> | null
    where?: DashboardStatsWhereInput
  }

  /**
   * User.recentItems
   */
  export type User$recentItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemInclude<ExtArgs> | null
    where?: RecentItemWhereInput
    orderBy?: RecentItemOrderByWithRelationInput | RecentItemOrderByWithRelationInput[]
    cursor?: RecentItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecentItemScalarFieldEnum | RecentItemScalarFieldEnum[]
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
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    type: $Enums.TokenType | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    type: $Enums.TokenType | null
    expires: Date | null
    blacklisted: boolean | null
    createdAt: Date | null
    userId: number | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    token: number
    type: number
    expires: number
    blacklisted: number
    createdAt: number
    userId: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    token?: true
    type?: true
    expires?: true
    blacklisted?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: number
    token: string
    type: $Enums.TokenType
    expires: Date
    blacklisted: boolean
    createdAt: Date
    userId: number
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    token?: boolean
    type?: boolean
    expires?: boolean
    blacklisted?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "type" | "expires" | "blacklisted" | "createdAt" | "userId", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      type: $Enums.TokenType
      expires: Date
      blacklisted: boolean
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'Int'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'TokenType'>
    readonly expires: FieldRef<"Token", 'DateTime'>
    readonly blacklisted: FieldRef<"Token", 'Boolean'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly userId: FieldRef<"Token", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model DashboardStats
   */

  export type AggregateDashboardStats = {
    _count: DashboardStatsCountAggregateOutputType | null
    _avg: DashboardStatsAvgAggregateOutputType | null
    _sum: DashboardStatsSumAggregateOutputType | null
    _min: DashboardStatsMinAggregateOutputType | null
    _max: DashboardStatsMaxAggregateOutputType | null
  }

  export type DashboardStatsAvgAggregateOutputType = {
    id: number | null
    skillsCount: number | null
    totalApps: number | null
    totalAgents: number | null
    activeProjects: number | null
    userId: number | null
  }

  export type DashboardStatsSumAggregateOutputType = {
    id: number | null
    skillsCount: number | null
    totalApps: number | null
    totalAgents: number | null
    activeProjects: number | null
    userId: number | null
  }

  export type DashboardStatsMinAggregateOutputType = {
    id: number | null
    skillsCount: number | null
    totalApps: number | null
    totalAgents: number | null
    activeProjects: number | null
    userId: number | null
  }

  export type DashboardStatsMaxAggregateOutputType = {
    id: number | null
    skillsCount: number | null
    totalApps: number | null
    totalAgents: number | null
    activeProjects: number | null
    userId: number | null
  }

  export type DashboardStatsCountAggregateOutputType = {
    id: number
    skillsCount: number
    totalApps: number
    totalAgents: number
    activeProjects: number
    userId: number
    _all: number
  }


  export type DashboardStatsAvgAggregateInputType = {
    id?: true
    skillsCount?: true
    totalApps?: true
    totalAgents?: true
    activeProjects?: true
    userId?: true
  }

  export type DashboardStatsSumAggregateInputType = {
    id?: true
    skillsCount?: true
    totalApps?: true
    totalAgents?: true
    activeProjects?: true
    userId?: true
  }

  export type DashboardStatsMinAggregateInputType = {
    id?: true
    skillsCount?: true
    totalApps?: true
    totalAgents?: true
    activeProjects?: true
    userId?: true
  }

  export type DashboardStatsMaxAggregateInputType = {
    id?: true
    skillsCount?: true
    totalApps?: true
    totalAgents?: true
    activeProjects?: true
    userId?: true
  }

  export type DashboardStatsCountAggregateInputType = {
    id?: true
    skillsCount?: true
    totalApps?: true
    totalAgents?: true
    activeProjects?: true
    userId?: true
    _all?: true
  }

  export type DashboardStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardStats to aggregate.
     */
    where?: DashboardStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardStats to fetch.
     */
    orderBy?: DashboardStatsOrderByWithRelationInput | DashboardStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DashboardStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DashboardStats
    **/
    _count?: true | DashboardStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DashboardStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DashboardStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardStatsMaxAggregateInputType
  }

  export type GetDashboardStatsAggregateType<T extends DashboardStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboardStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboardStats[P]>
      : GetScalarType<T[P], AggregateDashboardStats[P]>
  }




  export type DashboardStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardStatsWhereInput
    orderBy?: DashboardStatsOrderByWithAggregationInput | DashboardStatsOrderByWithAggregationInput[]
    by: DashboardStatsScalarFieldEnum[] | DashboardStatsScalarFieldEnum
    having?: DashboardStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardStatsCountAggregateInputType | true
    _avg?: DashboardStatsAvgAggregateInputType
    _sum?: DashboardStatsSumAggregateInputType
    _min?: DashboardStatsMinAggregateInputType
    _max?: DashboardStatsMaxAggregateInputType
  }

  export type DashboardStatsGroupByOutputType = {
    id: number
    skillsCount: number
    totalApps: number
    totalAgents: number
    activeProjects: number
    userId: number
    _count: DashboardStatsCountAggregateOutputType | null
    _avg: DashboardStatsAvgAggregateOutputType | null
    _sum: DashboardStatsSumAggregateOutputType | null
    _min: DashboardStatsMinAggregateOutputType | null
    _max: DashboardStatsMaxAggregateOutputType | null
  }

  type GetDashboardStatsGroupByPayload<T extends DashboardStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardStatsGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardStatsGroupByOutputType[P]>
        }
      >
    >


  export type DashboardStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillsCount?: boolean
    totalApps?: boolean
    totalAgents?: boolean
    activeProjects?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardStats"]>

  export type DashboardStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillsCount?: boolean
    totalApps?: boolean
    totalAgents?: boolean
    activeProjects?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardStats"]>

  export type DashboardStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skillsCount?: boolean
    totalApps?: boolean
    totalAgents?: boolean
    activeProjects?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardStats"]>

  export type DashboardStatsSelectScalar = {
    id?: boolean
    skillsCount?: boolean
    totalApps?: boolean
    totalAgents?: boolean
    activeProjects?: boolean
    userId?: boolean
  }

  export type DashboardStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skillsCount" | "totalApps" | "totalAgents" | "activeProjects" | "userId", ExtArgs["result"]["dashboardStats"]>
  export type DashboardStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DashboardStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DashboardStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DashboardStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DashboardStats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      skillsCount: number
      totalApps: number
      totalAgents: number
      activeProjects: number
      userId: number
    }, ExtArgs["result"]["dashboardStats"]>
    composites: {}
  }

  type DashboardStatsGetPayload<S extends boolean | null | undefined | DashboardStatsDefaultArgs> = $Result.GetResult<Prisma.$DashboardStatsPayload, S>

  type DashboardStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DashboardStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DashboardStatsCountAggregateInputType | true
    }

  export interface DashboardStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DashboardStats'], meta: { name: 'DashboardStats' } }
    /**
     * Find zero or one DashboardStats that matches the filter.
     * @param {DashboardStatsFindUniqueArgs} args - Arguments to find a DashboardStats
     * @example
     * // Get one DashboardStats
     * const dashboardStats = await prisma.dashboardStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DashboardStatsFindUniqueArgs>(args: SelectSubset<T, DashboardStatsFindUniqueArgs<ExtArgs>>): Prisma__DashboardStatsClient<$Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DashboardStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DashboardStatsFindUniqueOrThrowArgs} args - Arguments to find a DashboardStats
     * @example
     * // Get one DashboardStats
     * const dashboardStats = await prisma.dashboardStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DashboardStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, DashboardStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DashboardStatsClient<$Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DashboardStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardStatsFindFirstArgs} args - Arguments to find a DashboardStats
     * @example
     * // Get one DashboardStats
     * const dashboardStats = await prisma.dashboardStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DashboardStatsFindFirstArgs>(args?: SelectSubset<T, DashboardStatsFindFirstArgs<ExtArgs>>): Prisma__DashboardStatsClient<$Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DashboardStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardStatsFindFirstOrThrowArgs} args - Arguments to find a DashboardStats
     * @example
     * // Get one DashboardStats
     * const dashboardStats = await prisma.dashboardStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DashboardStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, DashboardStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DashboardStatsClient<$Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DashboardStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DashboardStats
     * const dashboardStats = await prisma.dashboardStats.findMany()
     * 
     * // Get first 10 DashboardStats
     * const dashboardStats = await prisma.dashboardStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardStatsWithIdOnly = await prisma.dashboardStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DashboardStatsFindManyArgs>(args?: SelectSubset<T, DashboardStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DashboardStats.
     * @param {DashboardStatsCreateArgs} args - Arguments to create a DashboardStats.
     * @example
     * // Create one DashboardStats
     * const DashboardStats = await prisma.dashboardStats.create({
     *   data: {
     *     // ... data to create a DashboardStats
     *   }
     * })
     * 
     */
    create<T extends DashboardStatsCreateArgs>(args: SelectSubset<T, DashboardStatsCreateArgs<ExtArgs>>): Prisma__DashboardStatsClient<$Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DashboardStats.
     * @param {DashboardStatsCreateManyArgs} args - Arguments to create many DashboardStats.
     * @example
     * // Create many DashboardStats
     * const dashboardStats = await prisma.dashboardStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DashboardStatsCreateManyArgs>(args?: SelectSubset<T, DashboardStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DashboardStats and returns the data saved in the database.
     * @param {DashboardStatsCreateManyAndReturnArgs} args - Arguments to create many DashboardStats.
     * @example
     * // Create many DashboardStats
     * const dashboardStats = await prisma.dashboardStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DashboardStats and only return the `id`
     * const dashboardStatsWithIdOnly = await prisma.dashboardStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DashboardStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, DashboardStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DashboardStats.
     * @param {DashboardStatsDeleteArgs} args - Arguments to delete one DashboardStats.
     * @example
     * // Delete one DashboardStats
     * const DashboardStats = await prisma.dashboardStats.delete({
     *   where: {
     *     // ... filter to delete one DashboardStats
     *   }
     * })
     * 
     */
    delete<T extends DashboardStatsDeleteArgs>(args: SelectSubset<T, DashboardStatsDeleteArgs<ExtArgs>>): Prisma__DashboardStatsClient<$Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DashboardStats.
     * @param {DashboardStatsUpdateArgs} args - Arguments to update one DashboardStats.
     * @example
     * // Update one DashboardStats
     * const dashboardStats = await prisma.dashboardStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DashboardStatsUpdateArgs>(args: SelectSubset<T, DashboardStatsUpdateArgs<ExtArgs>>): Prisma__DashboardStatsClient<$Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DashboardStats.
     * @param {DashboardStatsDeleteManyArgs} args - Arguments to filter DashboardStats to delete.
     * @example
     * // Delete a few DashboardStats
     * const { count } = await prisma.dashboardStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DashboardStatsDeleteManyArgs>(args?: SelectSubset<T, DashboardStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DashboardStats
     * const dashboardStats = await prisma.dashboardStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DashboardStatsUpdateManyArgs>(args: SelectSubset<T, DashboardStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardStats and returns the data updated in the database.
     * @param {DashboardStatsUpdateManyAndReturnArgs} args - Arguments to update many DashboardStats.
     * @example
     * // Update many DashboardStats
     * const dashboardStats = await prisma.dashboardStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DashboardStats and only return the `id`
     * const dashboardStatsWithIdOnly = await prisma.dashboardStats.updateManyAndReturn({
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
    updateManyAndReturn<T extends DashboardStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, DashboardStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DashboardStats.
     * @param {DashboardStatsUpsertArgs} args - Arguments to update or create a DashboardStats.
     * @example
     * // Update or create a DashboardStats
     * const dashboardStats = await prisma.dashboardStats.upsert({
     *   create: {
     *     // ... data to create a DashboardStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DashboardStats we want to update
     *   }
     * })
     */
    upsert<T extends DashboardStatsUpsertArgs>(args: SelectSubset<T, DashboardStatsUpsertArgs<ExtArgs>>): Prisma__DashboardStatsClient<$Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DashboardStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardStatsCountArgs} args - Arguments to filter DashboardStats to count.
     * @example
     * // Count the number of DashboardStats
     * const count = await prisma.dashboardStats.count({
     *   where: {
     *     // ... the filter for the DashboardStats we want to count
     *   }
     * })
    **/
    count<T extends DashboardStatsCountArgs>(
      args?: Subset<T, DashboardStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DashboardStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DashboardStatsAggregateArgs>(args: Subset<T, DashboardStatsAggregateArgs>): Prisma.PrismaPromise<GetDashboardStatsAggregateType<T>>

    /**
     * Group by DashboardStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardStatsGroupByArgs} args - Group by arguments.
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
      T extends DashboardStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DashboardStatsGroupByArgs['orderBy'] }
        : { orderBy?: DashboardStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DashboardStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DashboardStats model
   */
  readonly fields: DashboardStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DashboardStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DashboardStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DashboardStats model
   */
  interface DashboardStatsFieldRefs {
    readonly id: FieldRef<"DashboardStats", 'Int'>
    readonly skillsCount: FieldRef<"DashboardStats", 'Int'>
    readonly totalApps: FieldRef<"DashboardStats", 'Int'>
    readonly totalAgents: FieldRef<"DashboardStats", 'Int'>
    readonly activeProjects: FieldRef<"DashboardStats", 'Int'>
    readonly userId: FieldRef<"DashboardStats", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DashboardStats findUnique
   */
  export type DashboardStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsInclude<ExtArgs> | null
    /**
     * Filter, which DashboardStats to fetch.
     */
    where: DashboardStatsWhereUniqueInput
  }

  /**
   * DashboardStats findUniqueOrThrow
   */
  export type DashboardStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsInclude<ExtArgs> | null
    /**
     * Filter, which DashboardStats to fetch.
     */
    where: DashboardStatsWhereUniqueInput
  }

  /**
   * DashboardStats findFirst
   */
  export type DashboardStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsInclude<ExtArgs> | null
    /**
     * Filter, which DashboardStats to fetch.
     */
    where?: DashboardStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardStats to fetch.
     */
    orderBy?: DashboardStatsOrderByWithRelationInput | DashboardStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardStats.
     */
    cursor?: DashboardStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardStats.
     */
    distinct?: DashboardStatsScalarFieldEnum | DashboardStatsScalarFieldEnum[]
  }

  /**
   * DashboardStats findFirstOrThrow
   */
  export type DashboardStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsInclude<ExtArgs> | null
    /**
     * Filter, which DashboardStats to fetch.
     */
    where?: DashboardStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardStats to fetch.
     */
    orderBy?: DashboardStatsOrderByWithRelationInput | DashboardStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardStats.
     */
    cursor?: DashboardStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardStats.
     */
    distinct?: DashboardStatsScalarFieldEnum | DashboardStatsScalarFieldEnum[]
  }

  /**
   * DashboardStats findMany
   */
  export type DashboardStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsInclude<ExtArgs> | null
    /**
     * Filter, which DashboardStats to fetch.
     */
    where?: DashboardStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardStats to fetch.
     */
    orderBy?: DashboardStatsOrderByWithRelationInput | DashboardStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DashboardStats.
     */
    cursor?: DashboardStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardStats.
     */
    skip?: number
    distinct?: DashboardStatsScalarFieldEnum | DashboardStatsScalarFieldEnum[]
  }

  /**
   * DashboardStats create
   */
  export type DashboardStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a DashboardStats.
     */
    data: XOR<DashboardStatsCreateInput, DashboardStatsUncheckedCreateInput>
  }

  /**
   * DashboardStats createMany
   */
  export type DashboardStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DashboardStats.
     */
    data: DashboardStatsCreateManyInput | DashboardStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DashboardStats createManyAndReturn
   */
  export type DashboardStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * The data used to create many DashboardStats.
     */
    data: DashboardStatsCreateManyInput | DashboardStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DashboardStats update
   */
  export type DashboardStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a DashboardStats.
     */
    data: XOR<DashboardStatsUpdateInput, DashboardStatsUncheckedUpdateInput>
    /**
     * Choose, which DashboardStats to update.
     */
    where: DashboardStatsWhereUniqueInput
  }

  /**
   * DashboardStats updateMany
   */
  export type DashboardStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DashboardStats.
     */
    data: XOR<DashboardStatsUpdateManyMutationInput, DashboardStatsUncheckedUpdateManyInput>
    /**
     * Filter which DashboardStats to update
     */
    where?: DashboardStatsWhereInput
    /**
     * Limit how many DashboardStats to update.
     */
    limit?: number
  }

  /**
   * DashboardStats updateManyAndReturn
   */
  export type DashboardStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * The data used to update DashboardStats.
     */
    data: XOR<DashboardStatsUpdateManyMutationInput, DashboardStatsUncheckedUpdateManyInput>
    /**
     * Filter which DashboardStats to update
     */
    where?: DashboardStatsWhereInput
    /**
     * Limit how many DashboardStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DashboardStats upsert
   */
  export type DashboardStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the DashboardStats to update in case it exists.
     */
    where: DashboardStatsWhereUniqueInput
    /**
     * In case the DashboardStats found by the `where` argument doesn't exist, create a new DashboardStats with this data.
     */
    create: XOR<DashboardStatsCreateInput, DashboardStatsUncheckedCreateInput>
    /**
     * In case the DashboardStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DashboardStatsUpdateInput, DashboardStatsUncheckedUpdateInput>
  }

  /**
   * DashboardStats delete
   */
  export type DashboardStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsInclude<ExtArgs> | null
    /**
     * Filter which DashboardStats to delete.
     */
    where: DashboardStatsWhereUniqueInput
  }

  /**
   * DashboardStats deleteMany
   */
  export type DashboardStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardStats to delete
     */
    where?: DashboardStatsWhereInput
    /**
     * Limit how many DashboardStats to delete.
     */
    limit?: number
  }

  /**
   * DashboardStats without action
   */
  export type DashboardStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardStats
     */
    select?: DashboardStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardStats
     */
    omit?: DashboardStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardStatsInclude<ExtArgs> | null
  }


  /**
   * Model RecentItem
   */

  export type AggregateRecentItem = {
    _count: RecentItemCountAggregateOutputType | null
    _avg: RecentItemAvgAggregateOutputType | null
    _sum: RecentItemSumAggregateOutputType | null
    _min: RecentItemMinAggregateOutputType | null
    _max: RecentItemMaxAggregateOutputType | null
  }

  export type RecentItemAvgAggregateOutputType = {
    userId: number | null
  }

  export type RecentItemSumAggregateOutputType = {
    userId: number | null
  }

  export type RecentItemMinAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    description: string | null
    lastUpdated: Date | null
    status: string | null
    userId: number | null
  }

  export type RecentItemMaxAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    description: string | null
    lastUpdated: Date | null
    status: string | null
    userId: number | null
  }

  export type RecentItemCountAggregateOutputType = {
    id: number
    type: number
    name: number
    description: number
    lastUpdated: number
    status: number
    userId: number
    _all: number
  }


  export type RecentItemAvgAggregateInputType = {
    userId?: true
  }

  export type RecentItemSumAggregateInputType = {
    userId?: true
  }

  export type RecentItemMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    description?: true
    lastUpdated?: true
    status?: true
    userId?: true
  }

  export type RecentItemMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    description?: true
    lastUpdated?: true
    status?: true
    userId?: true
  }

  export type RecentItemCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    description?: true
    lastUpdated?: true
    status?: true
    userId?: true
    _all?: true
  }

  export type RecentItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecentItem to aggregate.
     */
    where?: RecentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecentItems to fetch.
     */
    orderBy?: RecentItemOrderByWithRelationInput | RecentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecentItems
    **/
    _count?: true | RecentItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecentItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecentItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecentItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecentItemMaxAggregateInputType
  }

  export type GetRecentItemAggregateType<T extends RecentItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRecentItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecentItem[P]>
      : GetScalarType<T[P], AggregateRecentItem[P]>
  }




  export type RecentItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecentItemWhereInput
    orderBy?: RecentItemOrderByWithAggregationInput | RecentItemOrderByWithAggregationInput[]
    by: RecentItemScalarFieldEnum[] | RecentItemScalarFieldEnum
    having?: RecentItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecentItemCountAggregateInputType | true
    _avg?: RecentItemAvgAggregateInputType
    _sum?: RecentItemSumAggregateInputType
    _min?: RecentItemMinAggregateInputType
    _max?: RecentItemMaxAggregateInputType
  }

  export type RecentItemGroupByOutputType = {
    id: string
    type: string
    name: string
    description: string | null
    lastUpdated: Date
    status: string
    userId: number
    _count: RecentItemCountAggregateOutputType | null
    _avg: RecentItemAvgAggregateOutputType | null
    _sum: RecentItemSumAggregateOutputType | null
    _min: RecentItemMinAggregateOutputType | null
    _max: RecentItemMaxAggregateOutputType | null
  }

  type GetRecentItemGroupByPayload<T extends RecentItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecentItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecentItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecentItemGroupByOutputType[P]>
            : GetScalarType<T[P], RecentItemGroupByOutputType[P]>
        }
      >
    >


  export type RecentItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    lastUpdated?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recentItem"]>

  export type RecentItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    lastUpdated?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recentItem"]>

  export type RecentItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    lastUpdated?: boolean
    status?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recentItem"]>

  export type RecentItemSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    description?: boolean
    lastUpdated?: boolean
    status?: boolean
    userId?: boolean
  }

  export type RecentItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "description" | "lastUpdated" | "status" | "userId", ExtArgs["result"]["recentItem"]>
  export type RecentItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecentItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RecentItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RecentItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecentItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      name: string
      description: string | null
      lastUpdated: Date
      status: string
      userId: number
    }, ExtArgs["result"]["recentItem"]>
    composites: {}
  }

  type RecentItemGetPayload<S extends boolean | null | undefined | RecentItemDefaultArgs> = $Result.GetResult<Prisma.$RecentItemPayload, S>

  type RecentItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecentItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecentItemCountAggregateInputType | true
    }

  export interface RecentItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecentItem'], meta: { name: 'RecentItem' } }
    /**
     * Find zero or one RecentItem that matches the filter.
     * @param {RecentItemFindUniqueArgs} args - Arguments to find a RecentItem
     * @example
     * // Get one RecentItem
     * const recentItem = await prisma.recentItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecentItemFindUniqueArgs>(args: SelectSubset<T, RecentItemFindUniqueArgs<ExtArgs>>): Prisma__RecentItemClient<$Result.GetResult<Prisma.$RecentItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecentItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecentItemFindUniqueOrThrowArgs} args - Arguments to find a RecentItem
     * @example
     * // Get one RecentItem
     * const recentItem = await prisma.recentItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecentItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RecentItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecentItemClient<$Result.GetResult<Prisma.$RecentItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecentItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentItemFindFirstArgs} args - Arguments to find a RecentItem
     * @example
     * // Get one RecentItem
     * const recentItem = await prisma.recentItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecentItemFindFirstArgs>(args?: SelectSubset<T, RecentItemFindFirstArgs<ExtArgs>>): Prisma__RecentItemClient<$Result.GetResult<Prisma.$RecentItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecentItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentItemFindFirstOrThrowArgs} args - Arguments to find a RecentItem
     * @example
     * // Get one RecentItem
     * const recentItem = await prisma.recentItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecentItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RecentItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecentItemClient<$Result.GetResult<Prisma.$RecentItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecentItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecentItems
     * const recentItems = await prisma.recentItem.findMany()
     * 
     * // Get first 10 RecentItems
     * const recentItems = await prisma.recentItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recentItemWithIdOnly = await prisma.recentItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecentItemFindManyArgs>(args?: SelectSubset<T, RecentItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecentItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecentItem.
     * @param {RecentItemCreateArgs} args - Arguments to create a RecentItem.
     * @example
     * // Create one RecentItem
     * const RecentItem = await prisma.recentItem.create({
     *   data: {
     *     // ... data to create a RecentItem
     *   }
     * })
     * 
     */
    create<T extends RecentItemCreateArgs>(args: SelectSubset<T, RecentItemCreateArgs<ExtArgs>>): Prisma__RecentItemClient<$Result.GetResult<Prisma.$RecentItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecentItems.
     * @param {RecentItemCreateManyArgs} args - Arguments to create many RecentItems.
     * @example
     * // Create many RecentItems
     * const recentItem = await prisma.recentItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecentItemCreateManyArgs>(args?: SelectSubset<T, RecentItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecentItems and returns the data saved in the database.
     * @param {RecentItemCreateManyAndReturnArgs} args - Arguments to create many RecentItems.
     * @example
     * // Create many RecentItems
     * const recentItem = await prisma.recentItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecentItems and only return the `id`
     * const recentItemWithIdOnly = await prisma.recentItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecentItemCreateManyAndReturnArgs>(args?: SelectSubset<T, RecentItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecentItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecentItem.
     * @param {RecentItemDeleteArgs} args - Arguments to delete one RecentItem.
     * @example
     * // Delete one RecentItem
     * const RecentItem = await prisma.recentItem.delete({
     *   where: {
     *     // ... filter to delete one RecentItem
     *   }
     * })
     * 
     */
    delete<T extends RecentItemDeleteArgs>(args: SelectSubset<T, RecentItemDeleteArgs<ExtArgs>>): Prisma__RecentItemClient<$Result.GetResult<Prisma.$RecentItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecentItem.
     * @param {RecentItemUpdateArgs} args - Arguments to update one RecentItem.
     * @example
     * // Update one RecentItem
     * const recentItem = await prisma.recentItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecentItemUpdateArgs>(args: SelectSubset<T, RecentItemUpdateArgs<ExtArgs>>): Prisma__RecentItemClient<$Result.GetResult<Prisma.$RecentItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecentItems.
     * @param {RecentItemDeleteManyArgs} args - Arguments to filter RecentItems to delete.
     * @example
     * // Delete a few RecentItems
     * const { count } = await prisma.recentItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecentItemDeleteManyArgs>(args?: SelectSubset<T, RecentItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecentItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecentItems
     * const recentItem = await prisma.recentItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecentItemUpdateManyArgs>(args: SelectSubset<T, RecentItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecentItems and returns the data updated in the database.
     * @param {RecentItemUpdateManyAndReturnArgs} args - Arguments to update many RecentItems.
     * @example
     * // Update many RecentItems
     * const recentItem = await prisma.recentItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecentItems and only return the `id`
     * const recentItemWithIdOnly = await prisma.recentItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecentItemUpdateManyAndReturnArgs>(args: SelectSubset<T, RecentItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecentItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecentItem.
     * @param {RecentItemUpsertArgs} args - Arguments to update or create a RecentItem.
     * @example
     * // Update or create a RecentItem
     * const recentItem = await prisma.recentItem.upsert({
     *   create: {
     *     // ... data to create a RecentItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecentItem we want to update
     *   }
     * })
     */
    upsert<T extends RecentItemUpsertArgs>(args: SelectSubset<T, RecentItemUpsertArgs<ExtArgs>>): Prisma__RecentItemClient<$Result.GetResult<Prisma.$RecentItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecentItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentItemCountArgs} args - Arguments to filter RecentItems to count.
     * @example
     * // Count the number of RecentItems
     * const count = await prisma.recentItem.count({
     *   where: {
     *     // ... the filter for the RecentItems we want to count
     *   }
     * })
    **/
    count<T extends RecentItemCountArgs>(
      args?: Subset<T, RecentItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecentItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecentItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecentItemAggregateArgs>(args: Subset<T, RecentItemAggregateArgs>): Prisma.PrismaPromise<GetRecentItemAggregateType<T>>

    /**
     * Group by RecentItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecentItemGroupByArgs} args - Group by arguments.
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
      T extends RecentItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecentItemGroupByArgs['orderBy'] }
        : { orderBy?: RecentItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecentItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecentItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecentItem model
   */
  readonly fields: RecentItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecentItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecentItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RecentItem model
   */
  interface RecentItemFieldRefs {
    readonly id: FieldRef<"RecentItem", 'String'>
    readonly type: FieldRef<"RecentItem", 'String'>
    readonly name: FieldRef<"RecentItem", 'String'>
    readonly description: FieldRef<"RecentItem", 'String'>
    readonly lastUpdated: FieldRef<"RecentItem", 'DateTime'>
    readonly status: FieldRef<"RecentItem", 'String'>
    readonly userId: FieldRef<"RecentItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RecentItem findUnique
   */
  export type RecentItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemInclude<ExtArgs> | null
    /**
     * Filter, which RecentItem to fetch.
     */
    where: RecentItemWhereUniqueInput
  }

  /**
   * RecentItem findUniqueOrThrow
   */
  export type RecentItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemInclude<ExtArgs> | null
    /**
     * Filter, which RecentItem to fetch.
     */
    where: RecentItemWhereUniqueInput
  }

  /**
   * RecentItem findFirst
   */
  export type RecentItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemInclude<ExtArgs> | null
    /**
     * Filter, which RecentItem to fetch.
     */
    where?: RecentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecentItems to fetch.
     */
    orderBy?: RecentItemOrderByWithRelationInput | RecentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecentItems.
     */
    cursor?: RecentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecentItems.
     */
    distinct?: RecentItemScalarFieldEnum | RecentItemScalarFieldEnum[]
  }

  /**
   * RecentItem findFirstOrThrow
   */
  export type RecentItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemInclude<ExtArgs> | null
    /**
     * Filter, which RecentItem to fetch.
     */
    where?: RecentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecentItems to fetch.
     */
    orderBy?: RecentItemOrderByWithRelationInput | RecentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecentItems.
     */
    cursor?: RecentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecentItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecentItems.
     */
    distinct?: RecentItemScalarFieldEnum | RecentItemScalarFieldEnum[]
  }

  /**
   * RecentItem findMany
   */
  export type RecentItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemInclude<ExtArgs> | null
    /**
     * Filter, which RecentItems to fetch.
     */
    where?: RecentItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecentItems to fetch.
     */
    orderBy?: RecentItemOrderByWithRelationInput | RecentItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecentItems.
     */
    cursor?: RecentItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecentItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecentItems.
     */
    skip?: number
    distinct?: RecentItemScalarFieldEnum | RecentItemScalarFieldEnum[]
  }

  /**
   * RecentItem create
   */
  export type RecentItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RecentItem.
     */
    data: XOR<RecentItemCreateInput, RecentItemUncheckedCreateInput>
  }

  /**
   * RecentItem createMany
   */
  export type RecentItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecentItems.
     */
    data: RecentItemCreateManyInput | RecentItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RecentItem createManyAndReturn
   */
  export type RecentItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * The data used to create many RecentItems.
     */
    data: RecentItemCreateManyInput | RecentItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecentItem update
   */
  export type RecentItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RecentItem.
     */
    data: XOR<RecentItemUpdateInput, RecentItemUncheckedUpdateInput>
    /**
     * Choose, which RecentItem to update.
     */
    where: RecentItemWhereUniqueInput
  }

  /**
   * RecentItem updateMany
   */
  export type RecentItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecentItems.
     */
    data: XOR<RecentItemUpdateManyMutationInput, RecentItemUncheckedUpdateManyInput>
    /**
     * Filter which RecentItems to update
     */
    where?: RecentItemWhereInput
    /**
     * Limit how many RecentItems to update.
     */
    limit?: number
  }

  /**
   * RecentItem updateManyAndReturn
   */
  export type RecentItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * The data used to update RecentItems.
     */
    data: XOR<RecentItemUpdateManyMutationInput, RecentItemUncheckedUpdateManyInput>
    /**
     * Filter which RecentItems to update
     */
    where?: RecentItemWhereInput
    /**
     * Limit how many RecentItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RecentItem upsert
   */
  export type RecentItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RecentItem to update in case it exists.
     */
    where: RecentItemWhereUniqueInput
    /**
     * In case the RecentItem found by the `where` argument doesn't exist, create a new RecentItem with this data.
     */
    create: XOR<RecentItemCreateInput, RecentItemUncheckedCreateInput>
    /**
     * In case the RecentItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecentItemUpdateInput, RecentItemUncheckedUpdateInput>
  }

  /**
   * RecentItem delete
   */
  export type RecentItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemInclude<ExtArgs> | null
    /**
     * Filter which RecentItem to delete.
     */
    where: RecentItemWhereUniqueInput
  }

  /**
   * RecentItem deleteMany
   */
  export type RecentItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecentItems to delete
     */
    where?: RecentItemWhereInput
    /**
     * Limit how many RecentItems to delete.
     */
    limit?: number
  }

  /**
   * RecentItem without action
   */
  export type RecentItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecentItem
     */
    select?: RecentItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecentItem
     */
    omit?: RecentItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecentItemInclude<ExtArgs> | null
  }


  /**
   * Model QuickAction
   */

  export type AggregateQuickAction = {
    _count: QuickActionCountAggregateOutputType | null
    _min: QuickActionMinAggregateOutputType | null
    _max: QuickActionMaxAggregateOutputType | null
  }

  export type QuickActionMinAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    description: string | null
    icon: string | null
    primaryColor: string | null
  }

  export type QuickActionMaxAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    description: string | null
    icon: string | null
    primaryColor: string | null
  }

  export type QuickActionCountAggregateOutputType = {
    id: number
    type: number
    title: number
    description: number
    icon: number
    primaryColor: number
    _all: number
  }


  export type QuickActionMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    icon?: true
    primaryColor?: true
  }

  export type QuickActionMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    icon?: true
    primaryColor?: true
  }

  export type QuickActionCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    icon?: true
    primaryColor?: true
    _all?: true
  }

  export type QuickActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuickAction to aggregate.
     */
    where?: QuickActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuickActions to fetch.
     */
    orderBy?: QuickActionOrderByWithRelationInput | QuickActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuickActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuickActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuickActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuickActions
    **/
    _count?: true | QuickActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuickActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuickActionMaxAggregateInputType
  }

  export type GetQuickActionAggregateType<T extends QuickActionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuickAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuickAction[P]>
      : GetScalarType<T[P], AggregateQuickAction[P]>
  }




  export type QuickActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuickActionWhereInput
    orderBy?: QuickActionOrderByWithAggregationInput | QuickActionOrderByWithAggregationInput[]
    by: QuickActionScalarFieldEnum[] | QuickActionScalarFieldEnum
    having?: QuickActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuickActionCountAggregateInputType | true
    _min?: QuickActionMinAggregateInputType
    _max?: QuickActionMaxAggregateInputType
  }

  export type QuickActionGroupByOutputType = {
    id: string
    type: string
    title: string
    description: string
    icon: string
    primaryColor: string
    _count: QuickActionCountAggregateOutputType | null
    _min: QuickActionMinAggregateOutputType | null
    _max: QuickActionMaxAggregateOutputType | null
  }

  type GetQuickActionGroupByPayload<T extends QuickActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuickActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuickActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuickActionGroupByOutputType[P]>
            : GetScalarType<T[P], QuickActionGroupByOutputType[P]>
        }
      >
    >


  export type QuickActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    primaryColor?: boolean
  }, ExtArgs["result"]["quickAction"]>

  export type QuickActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    primaryColor?: boolean
  }, ExtArgs["result"]["quickAction"]>

  export type QuickActionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    primaryColor?: boolean
  }, ExtArgs["result"]["quickAction"]>

  export type QuickActionSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    primaryColor?: boolean
  }

  export type QuickActionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "description" | "icon" | "primaryColor", ExtArgs["result"]["quickAction"]>

  export type $QuickActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuickAction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      title: string
      description: string
      icon: string
      primaryColor: string
    }, ExtArgs["result"]["quickAction"]>
    composites: {}
  }

  type QuickActionGetPayload<S extends boolean | null | undefined | QuickActionDefaultArgs> = $Result.GetResult<Prisma.$QuickActionPayload, S>

  type QuickActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuickActionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuickActionCountAggregateInputType | true
    }

  export interface QuickActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuickAction'], meta: { name: 'QuickAction' } }
    /**
     * Find zero or one QuickAction that matches the filter.
     * @param {QuickActionFindUniqueArgs} args - Arguments to find a QuickAction
     * @example
     * // Get one QuickAction
     * const quickAction = await prisma.quickAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuickActionFindUniqueArgs>(args: SelectSubset<T, QuickActionFindUniqueArgs<ExtArgs>>): Prisma__QuickActionClient<$Result.GetResult<Prisma.$QuickActionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuickAction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuickActionFindUniqueOrThrowArgs} args - Arguments to find a QuickAction
     * @example
     * // Get one QuickAction
     * const quickAction = await prisma.quickAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuickActionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuickActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuickActionClient<$Result.GetResult<Prisma.$QuickActionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuickAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickActionFindFirstArgs} args - Arguments to find a QuickAction
     * @example
     * // Get one QuickAction
     * const quickAction = await prisma.quickAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuickActionFindFirstArgs>(args?: SelectSubset<T, QuickActionFindFirstArgs<ExtArgs>>): Prisma__QuickActionClient<$Result.GetResult<Prisma.$QuickActionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuickAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickActionFindFirstOrThrowArgs} args - Arguments to find a QuickAction
     * @example
     * // Get one QuickAction
     * const quickAction = await prisma.quickAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuickActionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuickActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuickActionClient<$Result.GetResult<Prisma.$QuickActionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuickActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuickActions
     * const quickActions = await prisma.quickAction.findMany()
     * 
     * // Get first 10 QuickActions
     * const quickActions = await prisma.quickAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quickActionWithIdOnly = await prisma.quickAction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuickActionFindManyArgs>(args?: SelectSubset<T, QuickActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuickActionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuickAction.
     * @param {QuickActionCreateArgs} args - Arguments to create a QuickAction.
     * @example
     * // Create one QuickAction
     * const QuickAction = await prisma.quickAction.create({
     *   data: {
     *     // ... data to create a QuickAction
     *   }
     * })
     * 
     */
    create<T extends QuickActionCreateArgs>(args: SelectSubset<T, QuickActionCreateArgs<ExtArgs>>): Prisma__QuickActionClient<$Result.GetResult<Prisma.$QuickActionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuickActions.
     * @param {QuickActionCreateManyArgs} args - Arguments to create many QuickActions.
     * @example
     * // Create many QuickActions
     * const quickAction = await prisma.quickAction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuickActionCreateManyArgs>(args?: SelectSubset<T, QuickActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuickActions and returns the data saved in the database.
     * @param {QuickActionCreateManyAndReturnArgs} args - Arguments to create many QuickActions.
     * @example
     * // Create many QuickActions
     * const quickAction = await prisma.quickAction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuickActions and only return the `id`
     * const quickActionWithIdOnly = await prisma.quickAction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuickActionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuickActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuickActionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuickAction.
     * @param {QuickActionDeleteArgs} args - Arguments to delete one QuickAction.
     * @example
     * // Delete one QuickAction
     * const QuickAction = await prisma.quickAction.delete({
     *   where: {
     *     // ... filter to delete one QuickAction
     *   }
     * })
     * 
     */
    delete<T extends QuickActionDeleteArgs>(args: SelectSubset<T, QuickActionDeleteArgs<ExtArgs>>): Prisma__QuickActionClient<$Result.GetResult<Prisma.$QuickActionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuickAction.
     * @param {QuickActionUpdateArgs} args - Arguments to update one QuickAction.
     * @example
     * // Update one QuickAction
     * const quickAction = await prisma.quickAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuickActionUpdateArgs>(args: SelectSubset<T, QuickActionUpdateArgs<ExtArgs>>): Prisma__QuickActionClient<$Result.GetResult<Prisma.$QuickActionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuickActions.
     * @param {QuickActionDeleteManyArgs} args - Arguments to filter QuickActions to delete.
     * @example
     * // Delete a few QuickActions
     * const { count } = await prisma.quickAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuickActionDeleteManyArgs>(args?: SelectSubset<T, QuickActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuickActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuickActions
     * const quickAction = await prisma.quickAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuickActionUpdateManyArgs>(args: SelectSubset<T, QuickActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuickActions and returns the data updated in the database.
     * @param {QuickActionUpdateManyAndReturnArgs} args - Arguments to update many QuickActions.
     * @example
     * // Update many QuickActions
     * const quickAction = await prisma.quickAction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuickActions and only return the `id`
     * const quickActionWithIdOnly = await prisma.quickAction.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuickActionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuickActionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuickActionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuickAction.
     * @param {QuickActionUpsertArgs} args - Arguments to update or create a QuickAction.
     * @example
     * // Update or create a QuickAction
     * const quickAction = await prisma.quickAction.upsert({
     *   create: {
     *     // ... data to create a QuickAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuickAction we want to update
     *   }
     * })
     */
    upsert<T extends QuickActionUpsertArgs>(args: SelectSubset<T, QuickActionUpsertArgs<ExtArgs>>): Prisma__QuickActionClient<$Result.GetResult<Prisma.$QuickActionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuickActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickActionCountArgs} args - Arguments to filter QuickActions to count.
     * @example
     * // Count the number of QuickActions
     * const count = await prisma.quickAction.count({
     *   where: {
     *     // ... the filter for the QuickActions we want to count
     *   }
     * })
    **/
    count<T extends QuickActionCountArgs>(
      args?: Subset<T, QuickActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuickActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuickAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuickActionAggregateArgs>(args: Subset<T, QuickActionAggregateArgs>): Prisma.PrismaPromise<GetQuickActionAggregateType<T>>

    /**
     * Group by QuickAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuickActionGroupByArgs} args - Group by arguments.
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
      T extends QuickActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuickActionGroupByArgs['orderBy'] }
        : { orderBy?: QuickActionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuickActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuickActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuickAction model
   */
  readonly fields: QuickActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuickAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuickActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the QuickAction model
   */
  interface QuickActionFieldRefs {
    readonly id: FieldRef<"QuickAction", 'String'>
    readonly type: FieldRef<"QuickAction", 'String'>
    readonly title: FieldRef<"QuickAction", 'String'>
    readonly description: FieldRef<"QuickAction", 'String'>
    readonly icon: FieldRef<"QuickAction", 'String'>
    readonly primaryColor: FieldRef<"QuickAction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QuickAction findUnique
   */
  export type QuickActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickAction
     */
    select?: QuickActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickAction
     */
    omit?: QuickActionOmit<ExtArgs> | null
    /**
     * Filter, which QuickAction to fetch.
     */
    where: QuickActionWhereUniqueInput
  }

  /**
   * QuickAction findUniqueOrThrow
   */
  export type QuickActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickAction
     */
    select?: QuickActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickAction
     */
    omit?: QuickActionOmit<ExtArgs> | null
    /**
     * Filter, which QuickAction to fetch.
     */
    where: QuickActionWhereUniqueInput
  }

  /**
   * QuickAction findFirst
   */
  export type QuickActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickAction
     */
    select?: QuickActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickAction
     */
    omit?: QuickActionOmit<ExtArgs> | null
    /**
     * Filter, which QuickAction to fetch.
     */
    where?: QuickActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuickActions to fetch.
     */
    orderBy?: QuickActionOrderByWithRelationInput | QuickActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuickActions.
     */
    cursor?: QuickActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuickActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuickActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuickActions.
     */
    distinct?: QuickActionScalarFieldEnum | QuickActionScalarFieldEnum[]
  }

  /**
   * QuickAction findFirstOrThrow
   */
  export type QuickActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickAction
     */
    select?: QuickActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickAction
     */
    omit?: QuickActionOmit<ExtArgs> | null
    /**
     * Filter, which QuickAction to fetch.
     */
    where?: QuickActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuickActions to fetch.
     */
    orderBy?: QuickActionOrderByWithRelationInput | QuickActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuickActions.
     */
    cursor?: QuickActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuickActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuickActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuickActions.
     */
    distinct?: QuickActionScalarFieldEnum | QuickActionScalarFieldEnum[]
  }

  /**
   * QuickAction findMany
   */
  export type QuickActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickAction
     */
    select?: QuickActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickAction
     */
    omit?: QuickActionOmit<ExtArgs> | null
    /**
     * Filter, which QuickActions to fetch.
     */
    where?: QuickActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuickActions to fetch.
     */
    orderBy?: QuickActionOrderByWithRelationInput | QuickActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuickActions.
     */
    cursor?: QuickActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuickActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuickActions.
     */
    skip?: number
    distinct?: QuickActionScalarFieldEnum | QuickActionScalarFieldEnum[]
  }

  /**
   * QuickAction create
   */
  export type QuickActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickAction
     */
    select?: QuickActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickAction
     */
    omit?: QuickActionOmit<ExtArgs> | null
    /**
     * The data needed to create a QuickAction.
     */
    data: XOR<QuickActionCreateInput, QuickActionUncheckedCreateInput>
  }

  /**
   * QuickAction createMany
   */
  export type QuickActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuickActions.
     */
    data: QuickActionCreateManyInput | QuickActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuickAction createManyAndReturn
   */
  export type QuickActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickAction
     */
    select?: QuickActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuickAction
     */
    omit?: QuickActionOmit<ExtArgs> | null
    /**
     * The data used to create many QuickActions.
     */
    data: QuickActionCreateManyInput | QuickActionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuickAction update
   */
  export type QuickActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickAction
     */
    select?: QuickActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickAction
     */
    omit?: QuickActionOmit<ExtArgs> | null
    /**
     * The data needed to update a QuickAction.
     */
    data: XOR<QuickActionUpdateInput, QuickActionUncheckedUpdateInput>
    /**
     * Choose, which QuickAction to update.
     */
    where: QuickActionWhereUniqueInput
  }

  /**
   * QuickAction updateMany
   */
  export type QuickActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuickActions.
     */
    data: XOR<QuickActionUpdateManyMutationInput, QuickActionUncheckedUpdateManyInput>
    /**
     * Filter which QuickActions to update
     */
    where?: QuickActionWhereInput
    /**
     * Limit how many QuickActions to update.
     */
    limit?: number
  }

  /**
   * QuickAction updateManyAndReturn
   */
  export type QuickActionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickAction
     */
    select?: QuickActionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuickAction
     */
    omit?: QuickActionOmit<ExtArgs> | null
    /**
     * The data used to update QuickActions.
     */
    data: XOR<QuickActionUpdateManyMutationInput, QuickActionUncheckedUpdateManyInput>
    /**
     * Filter which QuickActions to update
     */
    where?: QuickActionWhereInput
    /**
     * Limit how many QuickActions to update.
     */
    limit?: number
  }

  /**
   * QuickAction upsert
   */
  export type QuickActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickAction
     */
    select?: QuickActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickAction
     */
    omit?: QuickActionOmit<ExtArgs> | null
    /**
     * The filter to search for the QuickAction to update in case it exists.
     */
    where: QuickActionWhereUniqueInput
    /**
     * In case the QuickAction found by the `where` argument doesn't exist, create a new QuickAction with this data.
     */
    create: XOR<QuickActionCreateInput, QuickActionUncheckedCreateInput>
    /**
     * In case the QuickAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuickActionUpdateInput, QuickActionUncheckedUpdateInput>
  }

  /**
   * QuickAction delete
   */
  export type QuickActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickAction
     */
    select?: QuickActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickAction
     */
    omit?: QuickActionOmit<ExtArgs> | null
    /**
     * Filter which QuickAction to delete.
     */
    where: QuickActionWhereUniqueInput
  }

  /**
   * QuickAction deleteMany
   */
  export type QuickActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuickActions to delete
     */
    where?: QuickActionWhereInput
    /**
     * Limit how many QuickActions to delete.
     */
    limit?: number
  }

  /**
   * QuickAction without action
   */
  export type QuickActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuickAction
     */
    select?: QuickActionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuickAction
     */
    omit?: QuickActionOmit<ExtArgs> | null
  }


  /**
   * Model WelcomeVideo
   */

  export type AggregateWelcomeVideo = {
    _count: WelcomeVideoCountAggregateOutputType | null
    _min: WelcomeVideoMinAggregateOutputType | null
    _max: WelcomeVideoMaxAggregateOutputType | null
  }

  export type WelcomeVideoMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    thumbnail: string | null
    duration: string | null
    url: string | null
  }

  export type WelcomeVideoMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    thumbnail: string | null
    duration: string | null
    url: string | null
  }

  export type WelcomeVideoCountAggregateOutputType = {
    id: number
    title: number
    description: number
    thumbnail: number
    duration: number
    url: number
    _all: number
  }


  export type WelcomeVideoMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    duration?: true
    url?: true
  }

  export type WelcomeVideoMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    duration?: true
    url?: true
  }

  export type WelcomeVideoCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    duration?: true
    url?: true
    _all?: true
  }

  export type WelcomeVideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WelcomeVideo to aggregate.
     */
    where?: WelcomeVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WelcomeVideos to fetch.
     */
    orderBy?: WelcomeVideoOrderByWithRelationInput | WelcomeVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WelcomeVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WelcomeVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WelcomeVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WelcomeVideos
    **/
    _count?: true | WelcomeVideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WelcomeVideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WelcomeVideoMaxAggregateInputType
  }

  export type GetWelcomeVideoAggregateType<T extends WelcomeVideoAggregateArgs> = {
        [P in keyof T & keyof AggregateWelcomeVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWelcomeVideo[P]>
      : GetScalarType<T[P], AggregateWelcomeVideo[P]>
  }




  export type WelcomeVideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WelcomeVideoWhereInput
    orderBy?: WelcomeVideoOrderByWithAggregationInput | WelcomeVideoOrderByWithAggregationInput[]
    by: WelcomeVideoScalarFieldEnum[] | WelcomeVideoScalarFieldEnum
    having?: WelcomeVideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WelcomeVideoCountAggregateInputType | true
    _min?: WelcomeVideoMinAggregateInputType
    _max?: WelcomeVideoMaxAggregateInputType
  }

  export type WelcomeVideoGroupByOutputType = {
    id: string
    title: string
    description: string
    thumbnail: string
    duration: string
    url: string
    _count: WelcomeVideoCountAggregateOutputType | null
    _min: WelcomeVideoMinAggregateOutputType | null
    _max: WelcomeVideoMaxAggregateOutputType | null
  }

  type GetWelcomeVideoGroupByPayload<T extends WelcomeVideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WelcomeVideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WelcomeVideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WelcomeVideoGroupByOutputType[P]>
            : GetScalarType<T[P], WelcomeVideoGroupByOutputType[P]>
        }
      >
    >


  export type WelcomeVideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    duration?: boolean
    url?: boolean
  }, ExtArgs["result"]["welcomeVideo"]>

  export type WelcomeVideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    duration?: boolean
    url?: boolean
  }, ExtArgs["result"]["welcomeVideo"]>

  export type WelcomeVideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    duration?: boolean
    url?: boolean
  }, ExtArgs["result"]["welcomeVideo"]>

  export type WelcomeVideoSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    thumbnail?: boolean
    duration?: boolean
    url?: boolean
  }

  export type WelcomeVideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "thumbnail" | "duration" | "url", ExtArgs["result"]["welcomeVideo"]>

  export type $WelcomeVideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WelcomeVideo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      thumbnail: string
      duration: string
      url: string
    }, ExtArgs["result"]["welcomeVideo"]>
    composites: {}
  }

  type WelcomeVideoGetPayload<S extends boolean | null | undefined | WelcomeVideoDefaultArgs> = $Result.GetResult<Prisma.$WelcomeVideoPayload, S>

  type WelcomeVideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WelcomeVideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WelcomeVideoCountAggregateInputType | true
    }

  export interface WelcomeVideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WelcomeVideo'], meta: { name: 'WelcomeVideo' } }
    /**
     * Find zero or one WelcomeVideo that matches the filter.
     * @param {WelcomeVideoFindUniqueArgs} args - Arguments to find a WelcomeVideo
     * @example
     * // Get one WelcomeVideo
     * const welcomeVideo = await prisma.welcomeVideo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WelcomeVideoFindUniqueArgs>(args: SelectSubset<T, WelcomeVideoFindUniqueArgs<ExtArgs>>): Prisma__WelcomeVideoClient<$Result.GetResult<Prisma.$WelcomeVideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WelcomeVideo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WelcomeVideoFindUniqueOrThrowArgs} args - Arguments to find a WelcomeVideo
     * @example
     * // Get one WelcomeVideo
     * const welcomeVideo = await prisma.welcomeVideo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WelcomeVideoFindUniqueOrThrowArgs>(args: SelectSubset<T, WelcomeVideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WelcomeVideoClient<$Result.GetResult<Prisma.$WelcomeVideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WelcomeVideo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WelcomeVideoFindFirstArgs} args - Arguments to find a WelcomeVideo
     * @example
     * // Get one WelcomeVideo
     * const welcomeVideo = await prisma.welcomeVideo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WelcomeVideoFindFirstArgs>(args?: SelectSubset<T, WelcomeVideoFindFirstArgs<ExtArgs>>): Prisma__WelcomeVideoClient<$Result.GetResult<Prisma.$WelcomeVideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WelcomeVideo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WelcomeVideoFindFirstOrThrowArgs} args - Arguments to find a WelcomeVideo
     * @example
     * // Get one WelcomeVideo
     * const welcomeVideo = await prisma.welcomeVideo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WelcomeVideoFindFirstOrThrowArgs>(args?: SelectSubset<T, WelcomeVideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__WelcomeVideoClient<$Result.GetResult<Prisma.$WelcomeVideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WelcomeVideos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WelcomeVideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WelcomeVideos
     * const welcomeVideos = await prisma.welcomeVideo.findMany()
     * 
     * // Get first 10 WelcomeVideos
     * const welcomeVideos = await prisma.welcomeVideo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const welcomeVideoWithIdOnly = await prisma.welcomeVideo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WelcomeVideoFindManyArgs>(args?: SelectSubset<T, WelcomeVideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WelcomeVideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WelcomeVideo.
     * @param {WelcomeVideoCreateArgs} args - Arguments to create a WelcomeVideo.
     * @example
     * // Create one WelcomeVideo
     * const WelcomeVideo = await prisma.welcomeVideo.create({
     *   data: {
     *     // ... data to create a WelcomeVideo
     *   }
     * })
     * 
     */
    create<T extends WelcomeVideoCreateArgs>(args: SelectSubset<T, WelcomeVideoCreateArgs<ExtArgs>>): Prisma__WelcomeVideoClient<$Result.GetResult<Prisma.$WelcomeVideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WelcomeVideos.
     * @param {WelcomeVideoCreateManyArgs} args - Arguments to create many WelcomeVideos.
     * @example
     * // Create many WelcomeVideos
     * const welcomeVideo = await prisma.welcomeVideo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WelcomeVideoCreateManyArgs>(args?: SelectSubset<T, WelcomeVideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WelcomeVideos and returns the data saved in the database.
     * @param {WelcomeVideoCreateManyAndReturnArgs} args - Arguments to create many WelcomeVideos.
     * @example
     * // Create many WelcomeVideos
     * const welcomeVideo = await prisma.welcomeVideo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WelcomeVideos and only return the `id`
     * const welcomeVideoWithIdOnly = await prisma.welcomeVideo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WelcomeVideoCreateManyAndReturnArgs>(args?: SelectSubset<T, WelcomeVideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WelcomeVideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WelcomeVideo.
     * @param {WelcomeVideoDeleteArgs} args - Arguments to delete one WelcomeVideo.
     * @example
     * // Delete one WelcomeVideo
     * const WelcomeVideo = await prisma.welcomeVideo.delete({
     *   where: {
     *     // ... filter to delete one WelcomeVideo
     *   }
     * })
     * 
     */
    delete<T extends WelcomeVideoDeleteArgs>(args: SelectSubset<T, WelcomeVideoDeleteArgs<ExtArgs>>): Prisma__WelcomeVideoClient<$Result.GetResult<Prisma.$WelcomeVideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WelcomeVideo.
     * @param {WelcomeVideoUpdateArgs} args - Arguments to update one WelcomeVideo.
     * @example
     * // Update one WelcomeVideo
     * const welcomeVideo = await prisma.welcomeVideo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WelcomeVideoUpdateArgs>(args: SelectSubset<T, WelcomeVideoUpdateArgs<ExtArgs>>): Prisma__WelcomeVideoClient<$Result.GetResult<Prisma.$WelcomeVideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WelcomeVideos.
     * @param {WelcomeVideoDeleteManyArgs} args - Arguments to filter WelcomeVideos to delete.
     * @example
     * // Delete a few WelcomeVideos
     * const { count } = await prisma.welcomeVideo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WelcomeVideoDeleteManyArgs>(args?: SelectSubset<T, WelcomeVideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WelcomeVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WelcomeVideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WelcomeVideos
     * const welcomeVideo = await prisma.welcomeVideo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WelcomeVideoUpdateManyArgs>(args: SelectSubset<T, WelcomeVideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WelcomeVideos and returns the data updated in the database.
     * @param {WelcomeVideoUpdateManyAndReturnArgs} args - Arguments to update many WelcomeVideos.
     * @example
     * // Update many WelcomeVideos
     * const welcomeVideo = await prisma.welcomeVideo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WelcomeVideos and only return the `id`
     * const welcomeVideoWithIdOnly = await prisma.welcomeVideo.updateManyAndReturn({
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
    updateManyAndReturn<T extends WelcomeVideoUpdateManyAndReturnArgs>(args: SelectSubset<T, WelcomeVideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WelcomeVideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WelcomeVideo.
     * @param {WelcomeVideoUpsertArgs} args - Arguments to update or create a WelcomeVideo.
     * @example
     * // Update or create a WelcomeVideo
     * const welcomeVideo = await prisma.welcomeVideo.upsert({
     *   create: {
     *     // ... data to create a WelcomeVideo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WelcomeVideo we want to update
     *   }
     * })
     */
    upsert<T extends WelcomeVideoUpsertArgs>(args: SelectSubset<T, WelcomeVideoUpsertArgs<ExtArgs>>): Prisma__WelcomeVideoClient<$Result.GetResult<Prisma.$WelcomeVideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WelcomeVideos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WelcomeVideoCountArgs} args - Arguments to filter WelcomeVideos to count.
     * @example
     * // Count the number of WelcomeVideos
     * const count = await prisma.welcomeVideo.count({
     *   where: {
     *     // ... the filter for the WelcomeVideos we want to count
     *   }
     * })
    **/
    count<T extends WelcomeVideoCountArgs>(
      args?: Subset<T, WelcomeVideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WelcomeVideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WelcomeVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WelcomeVideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WelcomeVideoAggregateArgs>(args: Subset<T, WelcomeVideoAggregateArgs>): Prisma.PrismaPromise<GetWelcomeVideoAggregateType<T>>

    /**
     * Group by WelcomeVideo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WelcomeVideoGroupByArgs} args - Group by arguments.
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
      T extends WelcomeVideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WelcomeVideoGroupByArgs['orderBy'] }
        : { orderBy?: WelcomeVideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WelcomeVideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWelcomeVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WelcomeVideo model
   */
  readonly fields: WelcomeVideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WelcomeVideo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WelcomeVideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the WelcomeVideo model
   */
  interface WelcomeVideoFieldRefs {
    readonly id: FieldRef<"WelcomeVideo", 'String'>
    readonly title: FieldRef<"WelcomeVideo", 'String'>
    readonly description: FieldRef<"WelcomeVideo", 'String'>
    readonly thumbnail: FieldRef<"WelcomeVideo", 'String'>
    readonly duration: FieldRef<"WelcomeVideo", 'String'>
    readonly url: FieldRef<"WelcomeVideo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WelcomeVideo findUnique
   */
  export type WelcomeVideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WelcomeVideo
     */
    select?: WelcomeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WelcomeVideo
     */
    omit?: WelcomeVideoOmit<ExtArgs> | null
    /**
     * Filter, which WelcomeVideo to fetch.
     */
    where: WelcomeVideoWhereUniqueInput
  }

  /**
   * WelcomeVideo findUniqueOrThrow
   */
  export type WelcomeVideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WelcomeVideo
     */
    select?: WelcomeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WelcomeVideo
     */
    omit?: WelcomeVideoOmit<ExtArgs> | null
    /**
     * Filter, which WelcomeVideo to fetch.
     */
    where: WelcomeVideoWhereUniqueInput
  }

  /**
   * WelcomeVideo findFirst
   */
  export type WelcomeVideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WelcomeVideo
     */
    select?: WelcomeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WelcomeVideo
     */
    omit?: WelcomeVideoOmit<ExtArgs> | null
    /**
     * Filter, which WelcomeVideo to fetch.
     */
    where?: WelcomeVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WelcomeVideos to fetch.
     */
    orderBy?: WelcomeVideoOrderByWithRelationInput | WelcomeVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WelcomeVideos.
     */
    cursor?: WelcomeVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WelcomeVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WelcomeVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WelcomeVideos.
     */
    distinct?: WelcomeVideoScalarFieldEnum | WelcomeVideoScalarFieldEnum[]
  }

  /**
   * WelcomeVideo findFirstOrThrow
   */
  export type WelcomeVideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WelcomeVideo
     */
    select?: WelcomeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WelcomeVideo
     */
    omit?: WelcomeVideoOmit<ExtArgs> | null
    /**
     * Filter, which WelcomeVideo to fetch.
     */
    where?: WelcomeVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WelcomeVideos to fetch.
     */
    orderBy?: WelcomeVideoOrderByWithRelationInput | WelcomeVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WelcomeVideos.
     */
    cursor?: WelcomeVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WelcomeVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WelcomeVideos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WelcomeVideos.
     */
    distinct?: WelcomeVideoScalarFieldEnum | WelcomeVideoScalarFieldEnum[]
  }

  /**
   * WelcomeVideo findMany
   */
  export type WelcomeVideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WelcomeVideo
     */
    select?: WelcomeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WelcomeVideo
     */
    omit?: WelcomeVideoOmit<ExtArgs> | null
    /**
     * Filter, which WelcomeVideos to fetch.
     */
    where?: WelcomeVideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WelcomeVideos to fetch.
     */
    orderBy?: WelcomeVideoOrderByWithRelationInput | WelcomeVideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WelcomeVideos.
     */
    cursor?: WelcomeVideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WelcomeVideos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WelcomeVideos.
     */
    skip?: number
    distinct?: WelcomeVideoScalarFieldEnum | WelcomeVideoScalarFieldEnum[]
  }

  /**
   * WelcomeVideo create
   */
  export type WelcomeVideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WelcomeVideo
     */
    select?: WelcomeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WelcomeVideo
     */
    omit?: WelcomeVideoOmit<ExtArgs> | null
    /**
     * The data needed to create a WelcomeVideo.
     */
    data: XOR<WelcomeVideoCreateInput, WelcomeVideoUncheckedCreateInput>
  }

  /**
   * WelcomeVideo createMany
   */
  export type WelcomeVideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WelcomeVideos.
     */
    data: WelcomeVideoCreateManyInput | WelcomeVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WelcomeVideo createManyAndReturn
   */
  export type WelcomeVideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WelcomeVideo
     */
    select?: WelcomeVideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WelcomeVideo
     */
    omit?: WelcomeVideoOmit<ExtArgs> | null
    /**
     * The data used to create many WelcomeVideos.
     */
    data: WelcomeVideoCreateManyInput | WelcomeVideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WelcomeVideo update
   */
  export type WelcomeVideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WelcomeVideo
     */
    select?: WelcomeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WelcomeVideo
     */
    omit?: WelcomeVideoOmit<ExtArgs> | null
    /**
     * The data needed to update a WelcomeVideo.
     */
    data: XOR<WelcomeVideoUpdateInput, WelcomeVideoUncheckedUpdateInput>
    /**
     * Choose, which WelcomeVideo to update.
     */
    where: WelcomeVideoWhereUniqueInput
  }

  /**
   * WelcomeVideo updateMany
   */
  export type WelcomeVideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WelcomeVideos.
     */
    data: XOR<WelcomeVideoUpdateManyMutationInput, WelcomeVideoUncheckedUpdateManyInput>
    /**
     * Filter which WelcomeVideos to update
     */
    where?: WelcomeVideoWhereInput
    /**
     * Limit how many WelcomeVideos to update.
     */
    limit?: number
  }

  /**
   * WelcomeVideo updateManyAndReturn
   */
  export type WelcomeVideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WelcomeVideo
     */
    select?: WelcomeVideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WelcomeVideo
     */
    omit?: WelcomeVideoOmit<ExtArgs> | null
    /**
     * The data used to update WelcomeVideos.
     */
    data: XOR<WelcomeVideoUpdateManyMutationInput, WelcomeVideoUncheckedUpdateManyInput>
    /**
     * Filter which WelcomeVideos to update
     */
    where?: WelcomeVideoWhereInput
    /**
     * Limit how many WelcomeVideos to update.
     */
    limit?: number
  }

  /**
   * WelcomeVideo upsert
   */
  export type WelcomeVideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WelcomeVideo
     */
    select?: WelcomeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WelcomeVideo
     */
    omit?: WelcomeVideoOmit<ExtArgs> | null
    /**
     * The filter to search for the WelcomeVideo to update in case it exists.
     */
    where: WelcomeVideoWhereUniqueInput
    /**
     * In case the WelcomeVideo found by the `where` argument doesn't exist, create a new WelcomeVideo with this data.
     */
    create: XOR<WelcomeVideoCreateInput, WelcomeVideoUncheckedCreateInput>
    /**
     * In case the WelcomeVideo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WelcomeVideoUpdateInput, WelcomeVideoUncheckedUpdateInput>
  }

  /**
   * WelcomeVideo delete
   */
  export type WelcomeVideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WelcomeVideo
     */
    select?: WelcomeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WelcomeVideo
     */
    omit?: WelcomeVideoOmit<ExtArgs> | null
    /**
     * Filter which WelcomeVideo to delete.
     */
    where: WelcomeVideoWhereUniqueInput
  }

  /**
   * WelcomeVideo deleteMany
   */
  export type WelcomeVideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WelcomeVideos to delete
     */
    where?: WelcomeVideoWhereInput
    /**
     * Limit how many WelcomeVideos to delete.
     */
    limit?: number
  }

  /**
   * WelcomeVideo without action
   */
  export type WelcomeVideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WelcomeVideo
     */
    select?: WelcomeVideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WelcomeVideo
     */
    omit?: WelcomeVideoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    isEmailVerified: 'isEmailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    type: 'type',
    expires: 'expires',
    blacklisted: 'blacklisted',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const DashboardStatsScalarFieldEnum: {
    id: 'id',
    skillsCount: 'skillsCount',
    totalApps: 'totalApps',
    totalAgents: 'totalAgents',
    activeProjects: 'activeProjects',
    userId: 'userId'
  };

  export type DashboardStatsScalarFieldEnum = (typeof DashboardStatsScalarFieldEnum)[keyof typeof DashboardStatsScalarFieldEnum]


  export const RecentItemScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    description: 'description',
    lastUpdated: 'lastUpdated',
    status: 'status',
    userId: 'userId'
  };

  export type RecentItemScalarFieldEnum = (typeof RecentItemScalarFieldEnum)[keyof typeof RecentItemScalarFieldEnum]


  export const QuickActionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    description: 'description',
    icon: 'icon',
    primaryColor: 'primaryColor'
  };

  export type QuickActionScalarFieldEnum = (typeof QuickActionScalarFieldEnum)[keyof typeof QuickActionScalarFieldEnum]


  export const WelcomeVideoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    thumbnail: 'thumbnail',
    duration: 'duration',
    url: 'url'
  };

  export type WelcomeVideoScalarFieldEnum = (typeof WelcomeVideoScalarFieldEnum)[keyof typeof WelcomeVideoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Token?: TokenListRelationFilter
    dashboardStats?: XOR<DashboardStatsNullableScalarRelationFilter, DashboardStatsWhereInput> | null
    recentItems?: RecentItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Token?: TokenOrderByRelationAggregateInput
    dashboardStats?: DashboardStatsOrderByWithRelationInput
    recentItems?: RecentItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isEmailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Token?: TokenListRelationFilter
    dashboardStats?: XOR<DashboardStatsNullableScalarRelationFilter, DashboardStatsWhereInput> | null
    recentItems?: RecentItemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Token"> | number
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    blacklisted?: BoolWithAggregatesFilter<"Token"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    userId?: IntWithAggregatesFilter<"Token"> | number
  }

  export type DashboardStatsWhereInput = {
    AND?: DashboardStatsWhereInput | DashboardStatsWhereInput[]
    OR?: DashboardStatsWhereInput[]
    NOT?: DashboardStatsWhereInput | DashboardStatsWhereInput[]
    id?: IntFilter<"DashboardStats"> | number
    skillsCount?: IntFilter<"DashboardStats"> | number
    totalApps?: IntFilter<"DashboardStats"> | number
    totalAgents?: IntFilter<"DashboardStats"> | number
    activeProjects?: IntFilter<"DashboardStats"> | number
    userId?: IntFilter<"DashboardStats"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DashboardStatsOrderByWithRelationInput = {
    id?: SortOrder
    skillsCount?: SortOrder
    totalApps?: SortOrder
    totalAgents?: SortOrder
    activeProjects?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DashboardStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: DashboardStatsWhereInput | DashboardStatsWhereInput[]
    OR?: DashboardStatsWhereInput[]
    NOT?: DashboardStatsWhereInput | DashboardStatsWhereInput[]
    skillsCount?: IntFilter<"DashboardStats"> | number
    totalApps?: IntFilter<"DashboardStats"> | number
    totalAgents?: IntFilter<"DashboardStats"> | number
    activeProjects?: IntFilter<"DashboardStats"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type DashboardStatsOrderByWithAggregationInput = {
    id?: SortOrder
    skillsCount?: SortOrder
    totalApps?: SortOrder
    totalAgents?: SortOrder
    activeProjects?: SortOrder
    userId?: SortOrder
    _count?: DashboardStatsCountOrderByAggregateInput
    _avg?: DashboardStatsAvgOrderByAggregateInput
    _max?: DashboardStatsMaxOrderByAggregateInput
    _min?: DashboardStatsMinOrderByAggregateInput
    _sum?: DashboardStatsSumOrderByAggregateInput
  }

  export type DashboardStatsScalarWhereWithAggregatesInput = {
    AND?: DashboardStatsScalarWhereWithAggregatesInput | DashboardStatsScalarWhereWithAggregatesInput[]
    OR?: DashboardStatsScalarWhereWithAggregatesInput[]
    NOT?: DashboardStatsScalarWhereWithAggregatesInput | DashboardStatsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DashboardStats"> | number
    skillsCount?: IntWithAggregatesFilter<"DashboardStats"> | number
    totalApps?: IntWithAggregatesFilter<"DashboardStats"> | number
    totalAgents?: IntWithAggregatesFilter<"DashboardStats"> | number
    activeProjects?: IntWithAggregatesFilter<"DashboardStats"> | number
    userId?: IntWithAggregatesFilter<"DashboardStats"> | number
  }

  export type RecentItemWhereInput = {
    AND?: RecentItemWhereInput | RecentItemWhereInput[]
    OR?: RecentItemWhereInput[]
    NOT?: RecentItemWhereInput | RecentItemWhereInput[]
    id?: StringFilter<"RecentItem"> | string
    type?: StringFilter<"RecentItem"> | string
    name?: StringFilter<"RecentItem"> | string
    description?: StringNullableFilter<"RecentItem"> | string | null
    lastUpdated?: DateTimeFilter<"RecentItem"> | Date | string
    status?: StringFilter<"RecentItem"> | string
    userId?: IntFilter<"RecentItem"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RecentItemOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RecentItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecentItemWhereInput | RecentItemWhereInput[]
    OR?: RecentItemWhereInput[]
    NOT?: RecentItemWhereInput | RecentItemWhereInput[]
    type?: StringFilter<"RecentItem"> | string
    name?: StringFilter<"RecentItem"> | string
    description?: StringNullableFilter<"RecentItem"> | string | null
    lastUpdated?: DateTimeFilter<"RecentItem"> | Date | string
    status?: StringFilter<"RecentItem"> | string
    userId?: IntFilter<"RecentItem"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RecentItemOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    _count?: RecentItemCountOrderByAggregateInput
    _avg?: RecentItemAvgOrderByAggregateInput
    _max?: RecentItemMaxOrderByAggregateInput
    _min?: RecentItemMinOrderByAggregateInput
    _sum?: RecentItemSumOrderByAggregateInput
  }

  export type RecentItemScalarWhereWithAggregatesInput = {
    AND?: RecentItemScalarWhereWithAggregatesInput | RecentItemScalarWhereWithAggregatesInput[]
    OR?: RecentItemScalarWhereWithAggregatesInput[]
    NOT?: RecentItemScalarWhereWithAggregatesInput | RecentItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecentItem"> | string
    type?: StringWithAggregatesFilter<"RecentItem"> | string
    name?: StringWithAggregatesFilter<"RecentItem"> | string
    description?: StringNullableWithAggregatesFilter<"RecentItem"> | string | null
    lastUpdated?: DateTimeWithAggregatesFilter<"RecentItem"> | Date | string
    status?: StringWithAggregatesFilter<"RecentItem"> | string
    userId?: IntWithAggregatesFilter<"RecentItem"> | number
  }

  export type QuickActionWhereInput = {
    AND?: QuickActionWhereInput | QuickActionWhereInput[]
    OR?: QuickActionWhereInput[]
    NOT?: QuickActionWhereInput | QuickActionWhereInput[]
    id?: StringFilter<"QuickAction"> | string
    type?: StringFilter<"QuickAction"> | string
    title?: StringFilter<"QuickAction"> | string
    description?: StringFilter<"QuickAction"> | string
    icon?: StringFilter<"QuickAction"> | string
    primaryColor?: StringFilter<"QuickAction"> | string
  }

  export type QuickActionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    primaryColor?: SortOrder
  }

  export type QuickActionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuickActionWhereInput | QuickActionWhereInput[]
    OR?: QuickActionWhereInput[]
    NOT?: QuickActionWhereInput | QuickActionWhereInput[]
    type?: StringFilter<"QuickAction"> | string
    title?: StringFilter<"QuickAction"> | string
    description?: StringFilter<"QuickAction"> | string
    icon?: StringFilter<"QuickAction"> | string
    primaryColor?: StringFilter<"QuickAction"> | string
  }, "id">

  export type QuickActionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    primaryColor?: SortOrder
    _count?: QuickActionCountOrderByAggregateInput
    _max?: QuickActionMaxOrderByAggregateInput
    _min?: QuickActionMinOrderByAggregateInput
  }

  export type QuickActionScalarWhereWithAggregatesInput = {
    AND?: QuickActionScalarWhereWithAggregatesInput | QuickActionScalarWhereWithAggregatesInput[]
    OR?: QuickActionScalarWhereWithAggregatesInput[]
    NOT?: QuickActionScalarWhereWithAggregatesInput | QuickActionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuickAction"> | string
    type?: StringWithAggregatesFilter<"QuickAction"> | string
    title?: StringWithAggregatesFilter<"QuickAction"> | string
    description?: StringWithAggregatesFilter<"QuickAction"> | string
    icon?: StringWithAggregatesFilter<"QuickAction"> | string
    primaryColor?: StringWithAggregatesFilter<"QuickAction"> | string
  }

  export type WelcomeVideoWhereInput = {
    AND?: WelcomeVideoWhereInput | WelcomeVideoWhereInput[]
    OR?: WelcomeVideoWhereInput[]
    NOT?: WelcomeVideoWhereInput | WelcomeVideoWhereInput[]
    id?: StringFilter<"WelcomeVideo"> | string
    title?: StringFilter<"WelcomeVideo"> | string
    description?: StringFilter<"WelcomeVideo"> | string
    thumbnail?: StringFilter<"WelcomeVideo"> | string
    duration?: StringFilter<"WelcomeVideo"> | string
    url?: StringFilter<"WelcomeVideo"> | string
  }

  export type WelcomeVideoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    duration?: SortOrder
    url?: SortOrder
  }

  export type WelcomeVideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WelcomeVideoWhereInput | WelcomeVideoWhereInput[]
    OR?: WelcomeVideoWhereInput[]
    NOT?: WelcomeVideoWhereInput | WelcomeVideoWhereInput[]
    title?: StringFilter<"WelcomeVideo"> | string
    description?: StringFilter<"WelcomeVideo"> | string
    thumbnail?: StringFilter<"WelcomeVideo"> | string
    duration?: StringFilter<"WelcomeVideo"> | string
    url?: StringFilter<"WelcomeVideo"> | string
  }, "id">

  export type WelcomeVideoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    duration?: SortOrder
    url?: SortOrder
    _count?: WelcomeVideoCountOrderByAggregateInput
    _max?: WelcomeVideoMaxOrderByAggregateInput
    _min?: WelcomeVideoMinOrderByAggregateInput
  }

  export type WelcomeVideoScalarWhereWithAggregatesInput = {
    AND?: WelcomeVideoScalarWhereWithAggregatesInput | WelcomeVideoScalarWhereWithAggregatesInput[]
    OR?: WelcomeVideoScalarWhereWithAggregatesInput[]
    NOT?: WelcomeVideoScalarWhereWithAggregatesInput | WelcomeVideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WelcomeVideo"> | string
    title?: StringWithAggregatesFilter<"WelcomeVideo"> | string
    description?: StringWithAggregatesFilter<"WelcomeVideo"> | string
    thumbnail?: StringWithAggregatesFilter<"WelcomeVideo"> | string
    duration?: StringWithAggregatesFilter<"WelcomeVideo"> | string
    url?: StringWithAggregatesFilter<"WelcomeVideo"> | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    dashboardStats?: DashboardStatsCreateNestedOneWithoutUserInput
    recentItems?: RecentItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    dashboardStats?: DashboardStatsUncheckedCreateNestedOneWithoutUserInput
    recentItems?: RecentItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    dashboardStats?: DashboardStatsUpdateOneWithoutUserNestedInput
    recentItems?: RecentItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    dashboardStats?: DashboardStatsUncheckedUpdateOneWithoutUserNestedInput
    recentItems?: RecentItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokenInput
  }

  export type TokenUncheckedCreateInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokenNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TokenCreateManyInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
    userId: number
  }

  export type TokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DashboardStatsCreateInput = {
    skillsCount?: number
    totalApps?: number
    totalAgents?: number
    activeProjects?: number
    user: UserCreateNestedOneWithoutDashboardStatsInput
  }

  export type DashboardStatsUncheckedCreateInput = {
    id?: number
    skillsCount?: number
    totalApps?: number
    totalAgents?: number
    activeProjects?: number
    userId: number
  }

  export type DashboardStatsUpdateInput = {
    skillsCount?: IntFieldUpdateOperationsInput | number
    totalApps?: IntFieldUpdateOperationsInput | number
    totalAgents?: IntFieldUpdateOperationsInput | number
    activeProjects?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutDashboardStatsNestedInput
  }

  export type DashboardStatsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillsCount?: IntFieldUpdateOperationsInput | number
    totalApps?: IntFieldUpdateOperationsInput | number
    totalAgents?: IntFieldUpdateOperationsInput | number
    activeProjects?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DashboardStatsCreateManyInput = {
    id?: number
    skillsCount?: number
    totalApps?: number
    totalAgents?: number
    activeProjects?: number
    userId: number
  }

  export type DashboardStatsUpdateManyMutationInput = {
    skillsCount?: IntFieldUpdateOperationsInput | number
    totalApps?: IntFieldUpdateOperationsInput | number
    totalAgents?: IntFieldUpdateOperationsInput | number
    activeProjects?: IntFieldUpdateOperationsInput | number
  }

  export type DashboardStatsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillsCount?: IntFieldUpdateOperationsInput | number
    totalApps?: IntFieldUpdateOperationsInput | number
    totalAgents?: IntFieldUpdateOperationsInput | number
    activeProjects?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RecentItemCreateInput = {
    id?: string
    type: string
    name: string
    description?: string | null
    lastUpdated?: Date | string
    status?: string
    user: UserCreateNestedOneWithoutRecentItemsInput
  }

  export type RecentItemUncheckedCreateInput = {
    id?: string
    type: string
    name: string
    description?: string | null
    lastUpdated?: Date | string
    status?: string
    userId: number
  }

  export type RecentItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutRecentItemsNestedInput
  }

  export type RecentItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RecentItemCreateManyInput = {
    id?: string
    type: string
    name: string
    description?: string | null
    lastUpdated?: Date | string
    status?: string
    userId: number
  }

  export type RecentItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RecentItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type QuickActionCreateInput = {
    id?: string
    type: string
    title: string
    description: string
    icon: string
    primaryColor: string
  }

  export type QuickActionUncheckedCreateInput = {
    id?: string
    type: string
    title: string
    description: string
    icon: string
    primaryColor: string
  }

  export type QuickActionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
  }

  export type QuickActionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
  }

  export type QuickActionCreateManyInput = {
    id?: string
    type: string
    title: string
    description: string
    icon: string
    primaryColor: string
  }

  export type QuickActionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
  }

  export type QuickActionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    primaryColor?: StringFieldUpdateOperationsInput | string
  }

  export type WelcomeVideoCreateInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    duration: string
    url: string
  }

  export type WelcomeVideoUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    duration: string
    url: string
  }

  export type WelcomeVideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type WelcomeVideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type WelcomeVideoCreateManyInput = {
    id?: string
    title: string
    description: string
    thumbnail: string
    duration: string
    url: string
  }

  export type WelcomeVideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type WelcomeVideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type DashboardStatsNullableScalarRelationFilter = {
    is?: DashboardStatsWhereInput | null
    isNot?: DashboardStatsWhereInput | null
  }

  export type RecentItemListRelationFilter = {
    every?: RecentItemWhereInput
    some?: RecentItemWhereInput
    none?: RecentItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecentItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expires?: SortOrder
    blacklisted?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type DashboardStatsCountOrderByAggregateInput = {
    id?: SortOrder
    skillsCount?: SortOrder
    totalApps?: SortOrder
    totalAgents?: SortOrder
    activeProjects?: SortOrder
    userId?: SortOrder
  }

  export type DashboardStatsAvgOrderByAggregateInput = {
    id?: SortOrder
    skillsCount?: SortOrder
    totalApps?: SortOrder
    totalAgents?: SortOrder
    activeProjects?: SortOrder
    userId?: SortOrder
  }

  export type DashboardStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    skillsCount?: SortOrder
    totalApps?: SortOrder
    totalAgents?: SortOrder
    activeProjects?: SortOrder
    userId?: SortOrder
  }

  export type DashboardStatsMinOrderByAggregateInput = {
    id?: SortOrder
    skillsCount?: SortOrder
    totalApps?: SortOrder
    totalAgents?: SortOrder
    activeProjects?: SortOrder
    userId?: SortOrder
  }

  export type DashboardStatsSumOrderByAggregateInput = {
    id?: SortOrder
    skillsCount?: SortOrder
    totalApps?: SortOrder
    totalAgents?: SortOrder
    activeProjects?: SortOrder
    userId?: SortOrder
  }

  export type RecentItemCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type RecentItemAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type RecentItemMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type RecentItemMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    description?: SortOrder
    lastUpdated?: SortOrder
    status?: SortOrder
    userId?: SortOrder
  }

  export type RecentItemSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type QuickActionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    primaryColor?: SortOrder
  }

  export type QuickActionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    primaryColor?: SortOrder
  }

  export type QuickActionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    primaryColor?: SortOrder
  }

  export type WelcomeVideoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    duration?: SortOrder
    url?: SortOrder
  }

  export type WelcomeVideoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    duration?: SortOrder
    url?: SortOrder
  }

  export type WelcomeVideoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    duration?: SortOrder
    url?: SortOrder
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type DashboardStatsCreateNestedOneWithoutUserInput = {
    create?: XOR<DashboardStatsCreateWithoutUserInput, DashboardStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: DashboardStatsCreateOrConnectWithoutUserInput
    connect?: DashboardStatsWhereUniqueInput
  }

  export type RecentItemCreateNestedManyWithoutUserInput = {
    create?: XOR<RecentItemCreateWithoutUserInput, RecentItemUncheckedCreateWithoutUserInput> | RecentItemCreateWithoutUserInput[] | RecentItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecentItemCreateOrConnectWithoutUserInput | RecentItemCreateOrConnectWithoutUserInput[]
    createMany?: RecentItemCreateManyUserInputEnvelope
    connect?: RecentItemWhereUniqueInput | RecentItemWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type DashboardStatsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DashboardStatsCreateWithoutUserInput, DashboardStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: DashboardStatsCreateOrConnectWithoutUserInput
    connect?: DashboardStatsWhereUniqueInput
  }

  export type RecentItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RecentItemCreateWithoutUserInput, RecentItemUncheckedCreateWithoutUserInput> | RecentItemCreateWithoutUserInput[] | RecentItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecentItemCreateOrConnectWithoutUserInput | RecentItemCreateOrConnectWithoutUserInput[]
    createMany?: RecentItemCreateManyUserInputEnvelope
    connect?: RecentItemWhereUniqueInput | RecentItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type DashboardStatsUpdateOneWithoutUserNestedInput = {
    create?: XOR<DashboardStatsCreateWithoutUserInput, DashboardStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: DashboardStatsCreateOrConnectWithoutUserInput
    upsert?: DashboardStatsUpsertWithoutUserInput
    disconnect?: DashboardStatsWhereInput | boolean
    delete?: DashboardStatsWhereInput | boolean
    connect?: DashboardStatsWhereUniqueInput
    update?: XOR<XOR<DashboardStatsUpdateToOneWithWhereWithoutUserInput, DashboardStatsUpdateWithoutUserInput>, DashboardStatsUncheckedUpdateWithoutUserInput>
  }

  export type RecentItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecentItemCreateWithoutUserInput, RecentItemUncheckedCreateWithoutUserInput> | RecentItemCreateWithoutUserInput[] | RecentItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecentItemCreateOrConnectWithoutUserInput | RecentItemCreateOrConnectWithoutUserInput[]
    upsert?: RecentItemUpsertWithWhereUniqueWithoutUserInput | RecentItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecentItemCreateManyUserInputEnvelope
    set?: RecentItemWhereUniqueInput | RecentItemWhereUniqueInput[]
    disconnect?: RecentItemWhereUniqueInput | RecentItemWhereUniqueInput[]
    delete?: RecentItemWhereUniqueInput | RecentItemWhereUniqueInput[]
    connect?: RecentItemWhereUniqueInput | RecentItemWhereUniqueInput[]
    update?: RecentItemUpdateWithWhereUniqueWithoutUserInput | RecentItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecentItemUpdateManyWithWhereWithoutUserInput | RecentItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecentItemScalarWhereInput | RecentItemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type DashboardStatsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DashboardStatsCreateWithoutUserInput, DashboardStatsUncheckedCreateWithoutUserInput>
    connectOrCreate?: DashboardStatsCreateOrConnectWithoutUserInput
    upsert?: DashboardStatsUpsertWithoutUserInput
    disconnect?: DashboardStatsWhereInput | boolean
    delete?: DashboardStatsWhereInput | boolean
    connect?: DashboardStatsWhereUniqueInput
    update?: XOR<XOR<DashboardStatsUpdateToOneWithWhereWithoutUserInput, DashboardStatsUpdateWithoutUserInput>, DashboardStatsUncheckedUpdateWithoutUserInput>
  }

  export type RecentItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RecentItemCreateWithoutUserInput, RecentItemUncheckedCreateWithoutUserInput> | RecentItemCreateWithoutUserInput[] | RecentItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RecentItemCreateOrConnectWithoutUserInput | RecentItemCreateOrConnectWithoutUserInput[]
    upsert?: RecentItemUpsertWithWhereUniqueWithoutUserInput | RecentItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RecentItemCreateManyUserInputEnvelope
    set?: RecentItemWhereUniqueInput | RecentItemWhereUniqueInput[]
    disconnect?: RecentItemWhereUniqueInput | RecentItemWhereUniqueInput[]
    delete?: RecentItemWhereUniqueInput | RecentItemWhereUniqueInput[]
    connect?: RecentItemWhereUniqueInput | RecentItemWhereUniqueInput[]
    update?: RecentItemUpdateWithWhereUniqueWithoutUserInput | RecentItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RecentItemUpdateManyWithWhereWithoutUserInput | RecentItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RecentItemScalarWhereInput | RecentItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type UserUpdateOneRequiredWithoutTokenNestedInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    upsert?: UserUpsertWithoutTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokenInput, UserUpdateWithoutTokenInput>, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserCreateNestedOneWithoutDashboardStatsInput = {
    create?: XOR<UserCreateWithoutDashboardStatsInput, UserUncheckedCreateWithoutDashboardStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDashboardStatsNestedInput = {
    create?: XOR<UserCreateWithoutDashboardStatsInput, UserUncheckedCreateWithoutDashboardStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardStatsInput
    upsert?: UserUpsertWithoutDashboardStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDashboardStatsInput, UserUpdateWithoutDashboardStatsInput>, UserUncheckedUpdateWithoutDashboardStatsInput>
  }

  export type UserCreateNestedOneWithoutRecentItemsInput = {
    create?: XOR<UserCreateWithoutRecentItemsInput, UserUncheckedCreateWithoutRecentItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecentItemsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecentItemsNestedInput = {
    create?: XOR<UserCreateWithoutRecentItemsInput, UserUncheckedCreateWithoutRecentItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecentItemsInput
    upsert?: UserUpsertWithoutRecentItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecentItemsInput, UserUpdateWithoutRecentItemsInput>, UserUncheckedUpdateWithoutRecentItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type TokenCreateWithoutUserInput = {
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DashboardStatsCreateWithoutUserInput = {
    skillsCount?: number
    totalApps?: number
    totalAgents?: number
    activeProjects?: number
  }

  export type DashboardStatsUncheckedCreateWithoutUserInput = {
    id?: number
    skillsCount?: number
    totalApps?: number
    totalAgents?: number
    activeProjects?: number
  }

  export type DashboardStatsCreateOrConnectWithoutUserInput = {
    where: DashboardStatsWhereUniqueInput
    create: XOR<DashboardStatsCreateWithoutUserInput, DashboardStatsUncheckedCreateWithoutUserInput>
  }

  export type RecentItemCreateWithoutUserInput = {
    id?: string
    type: string
    name: string
    description?: string | null
    lastUpdated?: Date | string
    status?: string
  }

  export type RecentItemUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    name: string
    description?: string | null
    lastUpdated?: Date | string
    status?: string
  }

  export type RecentItemCreateOrConnectWithoutUserInput = {
    where: RecentItemWhereUniqueInput
    create: XOR<RecentItemCreateWithoutUserInput, RecentItemUncheckedCreateWithoutUserInput>
  }

  export type RecentItemCreateManyUserInputEnvelope = {
    data: RecentItemCreateManyUserInput | RecentItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: IntFilter<"Token"> | number
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expires?: DateTimeFilter<"Token"> | Date | string
    blacklisted?: BoolFilter<"Token"> | boolean
    createdAt?: DateTimeFilter<"Token"> | Date | string
    userId?: IntFilter<"Token"> | number
  }

  export type DashboardStatsUpsertWithoutUserInput = {
    update: XOR<DashboardStatsUpdateWithoutUserInput, DashboardStatsUncheckedUpdateWithoutUserInput>
    create: XOR<DashboardStatsCreateWithoutUserInput, DashboardStatsUncheckedCreateWithoutUserInput>
    where?: DashboardStatsWhereInput
  }

  export type DashboardStatsUpdateToOneWithWhereWithoutUserInput = {
    where?: DashboardStatsWhereInput
    data: XOR<DashboardStatsUpdateWithoutUserInput, DashboardStatsUncheckedUpdateWithoutUserInput>
  }

  export type DashboardStatsUpdateWithoutUserInput = {
    skillsCount?: IntFieldUpdateOperationsInput | number
    totalApps?: IntFieldUpdateOperationsInput | number
    totalAgents?: IntFieldUpdateOperationsInput | number
    activeProjects?: IntFieldUpdateOperationsInput | number
  }

  export type DashboardStatsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    skillsCount?: IntFieldUpdateOperationsInput | number
    totalApps?: IntFieldUpdateOperationsInput | number
    totalAgents?: IntFieldUpdateOperationsInput | number
    activeProjects?: IntFieldUpdateOperationsInput | number
  }

  export type RecentItemUpsertWithWhereUniqueWithoutUserInput = {
    where: RecentItemWhereUniqueInput
    update: XOR<RecentItemUpdateWithoutUserInput, RecentItemUncheckedUpdateWithoutUserInput>
    create: XOR<RecentItemCreateWithoutUserInput, RecentItemUncheckedCreateWithoutUserInput>
  }

  export type RecentItemUpdateWithWhereUniqueWithoutUserInput = {
    where: RecentItemWhereUniqueInput
    data: XOR<RecentItemUpdateWithoutUserInput, RecentItemUncheckedUpdateWithoutUserInput>
  }

  export type RecentItemUpdateManyWithWhereWithoutUserInput = {
    where: RecentItemScalarWhereInput
    data: XOR<RecentItemUpdateManyMutationInput, RecentItemUncheckedUpdateManyWithoutUserInput>
  }

  export type RecentItemScalarWhereInput = {
    AND?: RecentItemScalarWhereInput | RecentItemScalarWhereInput[]
    OR?: RecentItemScalarWhereInput[]
    NOT?: RecentItemScalarWhereInput | RecentItemScalarWhereInput[]
    id?: StringFilter<"RecentItem"> | string
    type?: StringFilter<"RecentItem"> | string
    name?: StringFilter<"RecentItem"> | string
    description?: StringNullableFilter<"RecentItem"> | string | null
    lastUpdated?: DateTimeFilter<"RecentItem"> | Date | string
    status?: StringFilter<"RecentItem"> | string
    userId?: IntFilter<"RecentItem"> | number
  }

  export type UserCreateWithoutTokenInput = {
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dashboardStats?: DashboardStatsCreateNestedOneWithoutUserInput
    recentItems?: RecentItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    dashboardStats?: DashboardStatsUncheckedCreateNestedOneWithoutUserInput
    recentItems?: RecentItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type UserUpsertWithoutTokenInput = {
    update: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
  }

  export type UserUpdateWithoutTokenInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboardStats?: DashboardStatsUpdateOneWithoutUserNestedInput
    recentItems?: RecentItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboardStats?: DashboardStatsUncheckedUpdateOneWithoutUserNestedInput
    recentItems?: RecentItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDashboardStatsInput = {
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    recentItems?: RecentItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDashboardStatsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    recentItems?: RecentItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDashboardStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDashboardStatsInput, UserUncheckedCreateWithoutDashboardStatsInput>
  }

  export type UserUpsertWithoutDashboardStatsInput = {
    update: XOR<UserUpdateWithoutDashboardStatsInput, UserUncheckedUpdateWithoutDashboardStatsInput>
    create: XOR<UserCreateWithoutDashboardStatsInput, UserUncheckedCreateWithoutDashboardStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDashboardStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDashboardStatsInput, UserUncheckedUpdateWithoutDashboardStatsInput>
  }

  export type UserUpdateWithoutDashboardStatsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    recentItems?: RecentItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDashboardStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    recentItems?: RecentItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRecentItemsInput = {
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenCreateNestedManyWithoutUserInput
    dashboardStats?: DashboardStatsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecentItemsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Token?: TokenUncheckedCreateNestedManyWithoutUserInput
    dashboardStats?: DashboardStatsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecentItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecentItemsInput, UserUncheckedCreateWithoutRecentItemsInput>
  }

  export type UserUpsertWithoutRecentItemsInput = {
    update: XOR<UserUpdateWithoutRecentItemsInput, UserUncheckedUpdateWithoutRecentItemsInput>
    create: XOR<UserCreateWithoutRecentItemsInput, UserUncheckedCreateWithoutRecentItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecentItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecentItemsInput, UserUncheckedUpdateWithoutRecentItemsInput>
  }

  export type UserUpdateWithoutRecentItemsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUpdateManyWithoutUserNestedInput
    dashboardStats?: DashboardStatsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecentItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Token?: TokenUncheckedUpdateManyWithoutUserNestedInput
    dashboardStats?: DashboardStatsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TokenCreateManyUserInput = {
    id?: number
    token: string
    type: $Enums.TokenType
    expires: Date | string
    blacklisted: boolean
    createdAt?: Date | string
  }

  export type RecentItemCreateManyUserInput = {
    id?: string
    type: string
    name: string
    description?: string | null
    lastUpdated?: Date | string
    status?: string
  }

  export type TokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    blacklisted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecentItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RecentItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RecentItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
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