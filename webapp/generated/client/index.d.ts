
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Expert
 * 
 */
export type Expert = $Result.DefaultSelection<Prisma.$ExpertPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model ExpertField
 * 
 */
export type ExpertField = $Result.DefaultSelection<Prisma.$ExpertFieldPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectRelation
 * 
 */
export type ProjectRelation = $Result.DefaultSelection<Prisma.$ProjectRelationPayload>
/**
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Experts
 * const experts = await prisma.expert.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Experts
   * const experts = await prisma.expert.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.expert`: Exposes CRUD operations for the **Expert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experts
    * const experts = await prisma.expert.findMany()
    * ```
    */
  get expert(): Prisma.ExpertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expertField`: Exposes CRUD operations for the **ExpertField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpertFields
    * const expertFields = await prisma.expertField.findMany()
    * ```
    */
  get expertField(): Prisma.ExpertFieldDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.projectRelation`: Exposes CRUD operations for the **ProjectRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectRelations
    * const projectRelations = await prisma.projectRelation.findMany()
    * ```
    */
  get projectRelation(): Prisma.ProjectRelationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Expert: 'Expert',
    Organization: 'Organization',
    ExpertField: 'ExpertField',
    Project: 'Project',
    ProjectRelation: 'ProjectRelation',
    Problem: 'Problem',
    Test: 'Test'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "expert" | "organization" | "expertField" | "project" | "projectRelation" | "problem" | "test"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Expert: {
        payload: Prisma.$ExpertPayload<ExtArgs>
        fields: Prisma.ExpertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          findFirst: {
            args: Prisma.ExpertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          findMany: {
            args: Prisma.ExpertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>[]
          }
          create: {
            args: Prisma.ExpertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          createMany: {
            args: Prisma.ExpertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>[]
          }
          delete: {
            args: Prisma.ExpertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          update: {
            args: Prisma.ExpertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          deleteMany: {
            args: Prisma.ExpertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>[]
          }
          upsert: {
            args: Prisma.ExpertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertPayload>
          }
          aggregate: {
            args: Prisma.ExpertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpert>
          }
          groupBy: {
            args: Prisma.ExpertGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpertGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpertCountArgs<ExtArgs>
            result: $Utils.Optional<ExpertCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      ExpertField: {
        payload: Prisma.$ExpertFieldPayload<ExtArgs>
        fields: Prisma.ExpertFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertFieldPayload>
          }
          findFirst: {
            args: Prisma.ExpertFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertFieldPayload>
          }
          findMany: {
            args: Prisma.ExpertFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertFieldPayload>[]
          }
          create: {
            args: Prisma.ExpertFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertFieldPayload>
          }
          createMany: {
            args: Prisma.ExpertFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpertFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertFieldPayload>[]
          }
          delete: {
            args: Prisma.ExpertFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertFieldPayload>
          }
          update: {
            args: Prisma.ExpertFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertFieldPayload>
          }
          deleteMany: {
            args: Prisma.ExpertFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpertFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertFieldPayload>[]
          }
          upsert: {
            args: Prisma.ExpertFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertFieldPayload>
          }
          aggregate: {
            args: Prisma.ExpertFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpertField>
          }
          groupBy: {
            args: Prisma.ExpertFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpertFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpertFieldCountArgs<ExtArgs>
            result: $Utils.Optional<ExpertFieldCountAggregateOutputType> | number
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
      ProjectRelation: {
        payload: Prisma.$ProjectRelationPayload<ExtArgs>
        fields: Prisma.ProjectRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRelationPayload>
          }
          findFirst: {
            args: Prisma.ProjectRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRelationPayload>
          }
          findMany: {
            args: Prisma.ProjectRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRelationPayload>[]
          }
          create: {
            args: Prisma.ProjectRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRelationPayload>
          }
          createMany: {
            args: Prisma.ProjectRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRelationPayload>[]
          }
          delete: {
            args: Prisma.ProjectRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRelationPayload>
          }
          update: {
            args: Prisma.ProjectRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRelationPayload>
          }
          deleteMany: {
            args: Prisma.ProjectRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectRelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRelationPayload>[]
          }
          upsert: {
            args: Prisma.ProjectRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectRelationPayload>
          }
          aggregate: {
            args: Prisma.ProjectRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectRelation>
          }
          groupBy: {
            args: Prisma.ProjectRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectRelationCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectRelationCountAggregateOutputType> | number
          }
        }
      }
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    expert?: ExpertOmit
    organization?: OrganizationOmit
    expertField?: ExpertFieldOmit
    project?: ProjectOmit
    projectRelation?: ProjectRelationOmit
    problem?: ProblemOmit
    test?: TestOmit
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
   * Count Type ExpertCountOutputType
   */

  export type ExpertCountOutputType = {
    expert_fields: number
    problems: number
    projectRelations: number
  }

  export type ExpertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert_fields?: boolean | ExpertCountOutputTypeCountExpert_fieldsArgs
    problems?: boolean | ExpertCountOutputTypeCountProblemsArgs
    projectRelations?: boolean | ExpertCountOutputTypeCountProjectRelationsArgs
  }

  // Custom InputTypes
  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertCountOutputType
     */
    select?: ExpertCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountExpert_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertFieldWhereInput
  }

  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }

  /**
   * ExpertCountOutputType without action
   */
  export type ExpertCountOutputTypeCountProjectRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRelationWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    experts: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experts?: boolean | OrganizationCountOutputTypeCountExpertsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountExpertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    relations: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relations?: boolean | ProjectCountOutputTypeCountRelationsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRelationWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    projectRelations: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectRelations?: boolean | ProblemCountOutputTypeCountProjectRelationsArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProjectRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRelationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Expert
   */

  export type AggregateExpert = {
    _count: ExpertCountAggregateOutputType | null
    _avg: ExpertAvgAggregateOutputType | null
    _sum: ExpertSumAggregateOutputType | null
    _min: ExpertMinAggregateOutputType | null
    _max: ExpertMaxAggregateOutputType | null
  }

  export type ExpertAvgAggregateOutputType = {
    expert_id: number | null
    primary_organization_id: number | null
  }

  export type ExpertSumAggregateOutputType = {
    expert_id: number | null
    primary_organization_id: number | null
  }

  export type ExpertMinAggregateOutputType = {
    expert_id: number | null
    name: string | null
    prename: string | null
    title: string | null
    email: string | null
    description: string | null
    location: string | null
    network: string | null
    last_contact: Date | null
    primary_organization_id: number | null
  }

  export type ExpertMaxAggregateOutputType = {
    expert_id: number | null
    name: string | null
    prename: string | null
    title: string | null
    email: string | null
    description: string | null
    location: string | null
    network: string | null
    last_contact: Date | null
    primary_organization_id: number | null
  }

  export type ExpertCountAggregateOutputType = {
    expert_id: number
    name: number
    prename: number
    title: number
    email: number
    description: number
    location: number
    network: number
    last_contact: number
    primary_organization_id: number
    _all: number
  }


  export type ExpertAvgAggregateInputType = {
    expert_id?: true
    primary_organization_id?: true
  }

  export type ExpertSumAggregateInputType = {
    expert_id?: true
    primary_organization_id?: true
  }

  export type ExpertMinAggregateInputType = {
    expert_id?: true
    name?: true
    prename?: true
    title?: true
    email?: true
    description?: true
    location?: true
    network?: true
    last_contact?: true
    primary_organization_id?: true
  }

  export type ExpertMaxAggregateInputType = {
    expert_id?: true
    name?: true
    prename?: true
    title?: true
    email?: true
    description?: true
    location?: true
    network?: true
    last_contact?: true
    primary_organization_id?: true
  }

  export type ExpertCountAggregateInputType = {
    expert_id?: true
    name?: true
    prename?: true
    title?: true
    email?: true
    description?: true
    location?: true
    network?: true
    last_contact?: true
    primary_organization_id?: true
    _all?: true
  }

  export type ExpertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expert to aggregate.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experts
    **/
    _count?: true | ExpertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertMaxAggregateInputType
  }

  export type GetExpertAggregateType<T extends ExpertAggregateArgs> = {
        [P in keyof T & keyof AggregateExpert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpert[P]>
      : GetScalarType<T[P], AggregateExpert[P]>
  }




  export type ExpertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertWhereInput
    orderBy?: ExpertOrderByWithAggregationInput | ExpertOrderByWithAggregationInput[]
    by: ExpertScalarFieldEnum[] | ExpertScalarFieldEnum
    having?: ExpertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertCountAggregateInputType | true
    _avg?: ExpertAvgAggregateInputType
    _sum?: ExpertSumAggregateInputType
    _min?: ExpertMinAggregateInputType
    _max?: ExpertMaxAggregateInputType
  }

  export type ExpertGroupByOutputType = {
    expert_id: number
    name: string
    prename: string
    title: string | null
    email: string | null
    description: string | null
    location: string | null
    network: string | null
    last_contact: Date
    primary_organization_id: number
    _count: ExpertCountAggregateOutputType | null
    _avg: ExpertAvgAggregateOutputType | null
    _sum: ExpertSumAggregateOutputType | null
    _min: ExpertMinAggregateOutputType | null
    _max: ExpertMaxAggregateOutputType | null
  }

  type GetExpertGroupByPayload<T extends ExpertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertGroupByOutputType[P]>
        }
      >
    >


  export type ExpertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expert_id?: boolean
    name?: boolean
    prename?: boolean
    title?: boolean
    email?: boolean
    description?: boolean
    location?: boolean
    network?: boolean
    last_contact?: boolean
    primary_organization_id?: boolean
    primary_organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    expert_fields?: boolean | Expert$expert_fieldsArgs<ExtArgs>
    problems?: boolean | Expert$problemsArgs<ExtArgs>
    projectRelations?: boolean | Expert$projectRelationsArgs<ExtArgs>
    _count?: boolean | ExpertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expert"]>

  export type ExpertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expert_id?: boolean
    name?: boolean
    prename?: boolean
    title?: boolean
    email?: boolean
    description?: boolean
    location?: boolean
    network?: boolean
    last_contact?: boolean
    primary_organization_id?: boolean
    primary_organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expert"]>

  export type ExpertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    expert_id?: boolean
    name?: boolean
    prename?: boolean
    title?: boolean
    email?: boolean
    description?: boolean
    location?: boolean
    network?: boolean
    last_contact?: boolean
    primary_organization_id?: boolean
    primary_organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expert"]>

  export type ExpertSelectScalar = {
    expert_id?: boolean
    name?: boolean
    prename?: boolean
    title?: boolean
    email?: boolean
    description?: boolean
    location?: boolean
    network?: boolean
    last_contact?: boolean
    primary_organization_id?: boolean
  }

  export type ExpertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"expert_id" | "name" | "prename" | "title" | "email" | "description" | "location" | "network" | "last_contact" | "primary_organization_id", ExtArgs["result"]["expert"]>
  export type ExpertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primary_organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    expert_fields?: boolean | Expert$expert_fieldsArgs<ExtArgs>
    problems?: boolean | Expert$problemsArgs<ExtArgs>
    projectRelations?: boolean | Expert$projectRelationsArgs<ExtArgs>
    _count?: boolean | ExpertCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primary_organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ExpertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    primary_organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $ExpertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expert"
    objects: {
      primary_organization: Prisma.$OrganizationPayload<ExtArgs>
      expert_fields: Prisma.$ExpertFieldPayload<ExtArgs>[]
      problems: Prisma.$ProblemPayload<ExtArgs>[]
      projectRelations: Prisma.$ProjectRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      expert_id: number
      name: string
      prename: string
      title: string | null
      email: string | null
      description: string | null
      location: string | null
      network: string | null
      last_contact: Date
      primary_organization_id: number
    }, ExtArgs["result"]["expert"]>
    composites: {}
  }

  type ExpertGetPayload<S extends boolean | null | undefined | ExpertDefaultArgs> = $Result.GetResult<Prisma.$ExpertPayload, S>

  type ExpertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpertCountAggregateInputType | true
    }

  export interface ExpertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expert'], meta: { name: 'Expert' } }
    /**
     * Find zero or one Expert that matches the filter.
     * @param {ExpertFindUniqueArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpertFindUniqueArgs>(args: SelectSubset<T, ExpertFindUniqueArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpertFindUniqueOrThrowArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpertFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindFirstArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpertFindFirstArgs>(args?: SelectSubset<T, ExpertFindFirstArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindFirstOrThrowArgs} args - Arguments to find a Expert
     * @example
     * // Get one Expert
     * const expert = await prisma.expert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpertFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpertFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experts
     * const experts = await prisma.expert.findMany()
     * 
     * // Get first 10 Experts
     * const experts = await prisma.expert.findMany({ take: 10 })
     * 
     * // Only select the `expert_id`
     * const expertWithExpert_idOnly = await prisma.expert.findMany({ select: { expert_id: true } })
     * 
     */
    findMany<T extends ExpertFindManyArgs>(args?: SelectSubset<T, ExpertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expert.
     * @param {ExpertCreateArgs} args - Arguments to create a Expert.
     * @example
     * // Create one Expert
     * const Expert = await prisma.expert.create({
     *   data: {
     *     // ... data to create a Expert
     *   }
     * })
     * 
     */
    create<T extends ExpertCreateArgs>(args: SelectSubset<T, ExpertCreateArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experts.
     * @param {ExpertCreateManyArgs} args - Arguments to create many Experts.
     * @example
     * // Create many Experts
     * const expert = await prisma.expert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpertCreateManyArgs>(args?: SelectSubset<T, ExpertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experts and returns the data saved in the database.
     * @param {ExpertCreateManyAndReturnArgs} args - Arguments to create many Experts.
     * @example
     * // Create many Experts
     * const expert = await prisma.expert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experts and only return the `expert_id`
     * const expertWithExpert_idOnly = await prisma.expert.createManyAndReturn({
     *   select: { expert_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpertCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expert.
     * @param {ExpertDeleteArgs} args - Arguments to delete one Expert.
     * @example
     * // Delete one Expert
     * const Expert = await prisma.expert.delete({
     *   where: {
     *     // ... filter to delete one Expert
     *   }
     * })
     * 
     */
    delete<T extends ExpertDeleteArgs>(args: SelectSubset<T, ExpertDeleteArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expert.
     * @param {ExpertUpdateArgs} args - Arguments to update one Expert.
     * @example
     * // Update one Expert
     * const expert = await prisma.expert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpertUpdateArgs>(args: SelectSubset<T, ExpertUpdateArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experts.
     * @param {ExpertDeleteManyArgs} args - Arguments to filter Experts to delete.
     * @example
     * // Delete a few Experts
     * const { count } = await prisma.expert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpertDeleteManyArgs>(args?: SelectSubset<T, ExpertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experts
     * const expert = await prisma.expert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpertUpdateManyArgs>(args: SelectSubset<T, ExpertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experts and returns the data updated in the database.
     * @param {ExpertUpdateManyAndReturnArgs} args - Arguments to update many Experts.
     * @example
     * // Update many Experts
     * const expert = await prisma.expert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experts and only return the `expert_id`
     * const expertWithExpert_idOnly = await prisma.expert.updateManyAndReturn({
     *   select: { expert_id: true },
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
    updateManyAndReturn<T extends ExpertUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expert.
     * @param {ExpertUpsertArgs} args - Arguments to update or create a Expert.
     * @example
     * // Update or create a Expert
     * const expert = await prisma.expert.upsert({
     *   create: {
     *     // ... data to create a Expert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expert we want to update
     *   }
     * })
     */
    upsert<T extends ExpertUpsertArgs>(args: SelectSubset<T, ExpertUpsertArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertCountArgs} args - Arguments to filter Experts to count.
     * @example
     * // Count the number of Experts
     * const count = await prisma.expert.count({
     *   where: {
     *     // ... the filter for the Experts we want to count
     *   }
     * })
    **/
    count<T extends ExpertCountArgs>(
      args?: Subset<T, ExpertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpertAggregateArgs>(args: Subset<T, ExpertAggregateArgs>): Prisma.PrismaPromise<GetExpertAggregateType<T>>

    /**
     * Group by Expert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertGroupByArgs} args - Group by arguments.
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
      T extends ExpertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertGroupByArgs['orderBy'] }
        : { orderBy?: ExpertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expert model
   */
  readonly fields: ExpertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    primary_organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expert_fields<T extends Expert$expert_fieldsArgs<ExtArgs> = {}>(args?: Subset<T, Expert$expert_fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problems<T extends Expert$problemsArgs<ExtArgs> = {}>(args?: Subset<T, Expert$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectRelations<T extends Expert$projectRelationsArgs<ExtArgs> = {}>(args?: Subset<T, Expert$projectRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Expert model
   */
  interface ExpertFieldRefs {
    readonly expert_id: FieldRef<"Expert", 'Int'>
    readonly name: FieldRef<"Expert", 'String'>
    readonly prename: FieldRef<"Expert", 'String'>
    readonly title: FieldRef<"Expert", 'String'>
    readonly email: FieldRef<"Expert", 'String'>
    readonly description: FieldRef<"Expert", 'String'>
    readonly location: FieldRef<"Expert", 'String'>
    readonly network: FieldRef<"Expert", 'String'>
    readonly last_contact: FieldRef<"Expert", 'DateTime'>
    readonly primary_organization_id: FieldRef<"Expert", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Expert findUnique
   */
  export type ExpertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert findUniqueOrThrow
   */
  export type ExpertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert findFirst
   */
  export type ExpertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experts.
     */
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Expert findFirstOrThrow
   */
  export type ExpertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Expert to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experts.
     */
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Expert findMany
   */
  export type ExpertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter, which Experts to fetch.
     */
    where?: ExpertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experts to fetch.
     */
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experts.
     */
    cursor?: ExpertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experts.
     */
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Expert create
   */
  export type ExpertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * The data needed to create a Expert.
     */
    data: XOR<ExpertCreateInput, ExpertUncheckedCreateInput>
  }

  /**
   * Expert createMany
   */
  export type ExpertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experts.
     */
    data: ExpertCreateManyInput | ExpertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expert createManyAndReturn
   */
  export type ExpertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * The data used to create many Experts.
     */
    data: ExpertCreateManyInput | ExpertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expert update
   */
  export type ExpertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * The data needed to update a Expert.
     */
    data: XOR<ExpertUpdateInput, ExpertUncheckedUpdateInput>
    /**
     * Choose, which Expert to update.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert updateMany
   */
  export type ExpertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experts.
     */
    data: XOR<ExpertUpdateManyMutationInput, ExpertUncheckedUpdateManyInput>
    /**
     * Filter which Experts to update
     */
    where?: ExpertWhereInput
    /**
     * Limit how many Experts to update.
     */
    limit?: number
  }

  /**
   * Expert updateManyAndReturn
   */
  export type ExpertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * The data used to update Experts.
     */
    data: XOR<ExpertUpdateManyMutationInput, ExpertUncheckedUpdateManyInput>
    /**
     * Filter which Experts to update
     */
    where?: ExpertWhereInput
    /**
     * Limit how many Experts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expert upsert
   */
  export type ExpertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * The filter to search for the Expert to update in case it exists.
     */
    where: ExpertWhereUniqueInput
    /**
     * In case the Expert found by the `where` argument doesn't exist, create a new Expert with this data.
     */
    create: XOR<ExpertCreateInput, ExpertUncheckedCreateInput>
    /**
     * In case the Expert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertUpdateInput, ExpertUncheckedUpdateInput>
  }

  /**
   * Expert delete
   */
  export type ExpertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    /**
     * Filter which Expert to delete.
     */
    where: ExpertWhereUniqueInput
  }

  /**
   * Expert deleteMany
   */
  export type ExpertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experts to delete
     */
    where?: ExpertWhereInput
    /**
     * Limit how many Experts to delete.
     */
    limit?: number
  }

  /**
   * Expert.expert_fields
   */
  export type Expert$expert_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldInclude<ExtArgs> | null
    where?: ExpertFieldWhereInput
    orderBy?: ExpertFieldOrderByWithRelationInput | ExpertFieldOrderByWithRelationInput[]
    cursor?: ExpertFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertFieldScalarFieldEnum | ExpertFieldScalarFieldEnum[]
  }

  /**
   * Expert.problems
   */
  export type Expert$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Expert.projectRelations
   */
  export type Expert$projectRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
    where?: ProjectRelationWhereInput
    orderBy?: ProjectRelationOrderByWithRelationInput | ProjectRelationOrderByWithRelationInput[]
    cursor?: ProjectRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectRelationScalarFieldEnum | ProjectRelationScalarFieldEnum[]
  }

  /**
   * Expert without action
   */
  export type ExpertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    organization_id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    organization_id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    organization_id: number | null
    name: string | null
    location: string | null
    field: string | null
    description: string | null
  }

  export type OrganizationMaxAggregateOutputType = {
    organization_id: number | null
    name: string | null
    location: string | null
    field: string | null
    description: string | null
  }

  export type OrganizationCountAggregateOutputType = {
    organization_id: number
    name: number
    location: number
    field: number
    description: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    organization_id?: true
  }

  export type OrganizationSumAggregateInputType = {
    organization_id?: true
  }

  export type OrganizationMinAggregateInputType = {
    organization_id?: true
    name?: true
    location?: true
    field?: true
    description?: true
  }

  export type OrganizationMaxAggregateInputType = {
    organization_id?: true
    name?: true
    location?: true
    field?: true
    description?: true
  }

  export type OrganizationCountAggregateInputType = {
    organization_id?: true
    name?: true
    location?: true
    field?: true
    description?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    organization_id: number
    name: string
    location: string | null
    field: string | null
    description: string | null
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organization_id?: boolean
    name?: boolean
    location?: boolean
    field?: boolean
    description?: boolean
    experts?: boolean | Organization$expertsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organization_id?: boolean
    name?: boolean
    location?: boolean
    field?: boolean
    description?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    organization_id?: boolean
    name?: boolean
    location?: boolean
    field?: boolean
    description?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    organization_id?: boolean
    name?: boolean
    location?: boolean
    field?: boolean
    description?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"organization_id" | "name" | "location" | "field" | "description", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experts?: boolean | Organization$expertsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      experts: Prisma.$ExpertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      organization_id: number
      name: string
      location: string | null
      field: string | null
      description: string | null
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `organization_id`
     * const organizationWithOrganization_idOnly = await prisma.organization.findMany({ select: { organization_id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `organization_id`
     * const organizationWithOrganization_idOnly = await prisma.organization.createManyAndReturn({
     *   select: { organization_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `organization_id`
     * const organizationWithOrganization_idOnly = await prisma.organization.updateManyAndReturn({
     *   select: { organization_id: true },
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
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experts<T extends Organization$expertsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$expertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly organization_id: FieldRef<"Organization", 'Int'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly location: FieldRef<"Organization", 'String'>
    readonly field: FieldRef<"Organization", 'String'>
    readonly description: FieldRef<"Organization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.experts
   */
  export type Organization$expertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expert
     */
    select?: ExpertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expert
     */
    omit?: ExpertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertInclude<ExtArgs> | null
    where?: ExpertWhereInput
    orderBy?: ExpertOrderByWithRelationInput | ExpertOrderByWithRelationInput[]
    cursor?: ExpertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpertScalarFieldEnum | ExpertScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model ExpertField
   */

  export type AggregateExpertField = {
    _count: ExpertFieldCountAggregateOutputType | null
    _avg: ExpertFieldAvgAggregateOutputType | null
    _sum: ExpertFieldSumAggregateOutputType | null
    _min: ExpertFieldMinAggregateOutputType | null
    _max: ExpertFieldMaxAggregateOutputType | null
  }

  export type ExpertFieldAvgAggregateOutputType = {
    id: number | null
    expert_id: number | null
  }

  export type ExpertFieldSumAggregateOutputType = {
    id: number | null
    expert_id: number | null
  }

  export type ExpertFieldMinAggregateOutputType = {
    id: number | null
    expert_id: number | null
    field: string | null
    description: string | null
    economic: boolean | null
    science: boolean | null
    social: boolean | null
  }

  export type ExpertFieldMaxAggregateOutputType = {
    id: number | null
    expert_id: number | null
    field: string | null
    description: string | null
    economic: boolean | null
    science: boolean | null
    social: boolean | null
  }

  export type ExpertFieldCountAggregateOutputType = {
    id: number
    expert_id: number
    field: number
    description: number
    economic: number
    science: number
    social: number
    _all: number
  }


  export type ExpertFieldAvgAggregateInputType = {
    id?: true
    expert_id?: true
  }

  export type ExpertFieldSumAggregateInputType = {
    id?: true
    expert_id?: true
  }

  export type ExpertFieldMinAggregateInputType = {
    id?: true
    expert_id?: true
    field?: true
    description?: true
    economic?: true
    science?: true
    social?: true
  }

  export type ExpertFieldMaxAggregateInputType = {
    id?: true
    expert_id?: true
    field?: true
    description?: true
    economic?: true
    science?: true
    social?: true
  }

  export type ExpertFieldCountAggregateInputType = {
    id?: true
    expert_id?: true
    field?: true
    description?: true
    economic?: true
    science?: true
    social?: true
    _all?: true
  }

  export type ExpertFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpertField to aggregate.
     */
    where?: ExpertFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertFields to fetch.
     */
    orderBy?: ExpertFieldOrderByWithRelationInput | ExpertFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpertFields
    **/
    _count?: true | ExpertFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpertFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpertFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertFieldMaxAggregateInputType
  }

  export type GetExpertFieldAggregateType<T extends ExpertFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateExpertField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpertField[P]>
      : GetScalarType<T[P], AggregateExpertField[P]>
  }




  export type ExpertFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertFieldWhereInput
    orderBy?: ExpertFieldOrderByWithAggregationInput | ExpertFieldOrderByWithAggregationInput[]
    by: ExpertFieldScalarFieldEnum[] | ExpertFieldScalarFieldEnum
    having?: ExpertFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertFieldCountAggregateInputType | true
    _avg?: ExpertFieldAvgAggregateInputType
    _sum?: ExpertFieldSumAggregateInputType
    _min?: ExpertFieldMinAggregateInputType
    _max?: ExpertFieldMaxAggregateInputType
  }

  export type ExpertFieldGroupByOutputType = {
    id: number
    expert_id: number
    field: string
    description: string | null
    economic: boolean
    science: boolean
    social: boolean
    _count: ExpertFieldCountAggregateOutputType | null
    _avg: ExpertFieldAvgAggregateOutputType | null
    _sum: ExpertFieldSumAggregateOutputType | null
    _min: ExpertFieldMinAggregateOutputType | null
    _max: ExpertFieldMaxAggregateOutputType | null
  }

  type GetExpertFieldGroupByPayload<T extends ExpertFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertFieldGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertFieldGroupByOutputType[P]>
        }
      >
    >


  export type ExpertFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expert_id?: boolean
    field?: boolean
    description?: boolean
    economic?: boolean
    science?: boolean
    social?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertField"]>

  export type ExpertFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expert_id?: boolean
    field?: boolean
    description?: boolean
    economic?: boolean
    science?: boolean
    social?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertField"]>

  export type ExpertFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expert_id?: boolean
    field?: boolean
    description?: boolean
    economic?: boolean
    science?: boolean
    social?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertField"]>

  export type ExpertFieldSelectScalar = {
    id?: boolean
    expert_id?: boolean
    field?: boolean
    description?: boolean
    economic?: boolean
    science?: boolean
    social?: boolean
  }

  export type ExpertFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expert_id" | "field" | "description" | "economic" | "science" | "social", ExtArgs["result"]["expertField"]>
  export type ExpertFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }
  export type ExpertFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }
  export type ExpertFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }

  export type $ExpertFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpertField"
    objects: {
      expert: Prisma.$ExpertPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      expert_id: number
      field: string
      description: string | null
      economic: boolean
      science: boolean
      social: boolean
    }, ExtArgs["result"]["expertField"]>
    composites: {}
  }

  type ExpertFieldGetPayload<S extends boolean | null | undefined | ExpertFieldDefaultArgs> = $Result.GetResult<Prisma.$ExpertFieldPayload, S>

  type ExpertFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpertFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpertFieldCountAggregateInputType | true
    }

  export interface ExpertFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpertField'], meta: { name: 'ExpertField' } }
    /**
     * Find zero or one ExpertField that matches the filter.
     * @param {ExpertFieldFindUniqueArgs} args - Arguments to find a ExpertField
     * @example
     * // Get one ExpertField
     * const expertField = await prisma.expertField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpertFieldFindUniqueArgs>(args: SelectSubset<T, ExpertFieldFindUniqueArgs<ExtArgs>>): Prisma__ExpertFieldClient<$Result.GetResult<Prisma.$ExpertFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpertField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpertFieldFindUniqueOrThrowArgs} args - Arguments to find a ExpertField
     * @example
     * // Get one ExpertField
     * const expertField = await prisma.expertField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpertFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpertFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpertFieldClient<$Result.GetResult<Prisma.$ExpertFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpertField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFieldFindFirstArgs} args - Arguments to find a ExpertField
     * @example
     * // Get one ExpertField
     * const expertField = await prisma.expertField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpertFieldFindFirstArgs>(args?: SelectSubset<T, ExpertFieldFindFirstArgs<ExtArgs>>): Prisma__ExpertFieldClient<$Result.GetResult<Prisma.$ExpertFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpertField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFieldFindFirstOrThrowArgs} args - Arguments to find a ExpertField
     * @example
     * // Get one ExpertField
     * const expertField = await prisma.expertField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpertFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpertFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpertFieldClient<$Result.GetResult<Prisma.$ExpertFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpertFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpertFields
     * const expertFields = await prisma.expertField.findMany()
     * 
     * // Get first 10 ExpertFields
     * const expertFields = await prisma.expertField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertFieldWithIdOnly = await prisma.expertField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpertFieldFindManyArgs>(args?: SelectSubset<T, ExpertFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpertField.
     * @param {ExpertFieldCreateArgs} args - Arguments to create a ExpertField.
     * @example
     * // Create one ExpertField
     * const ExpertField = await prisma.expertField.create({
     *   data: {
     *     // ... data to create a ExpertField
     *   }
     * })
     * 
     */
    create<T extends ExpertFieldCreateArgs>(args: SelectSubset<T, ExpertFieldCreateArgs<ExtArgs>>): Prisma__ExpertFieldClient<$Result.GetResult<Prisma.$ExpertFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpertFields.
     * @param {ExpertFieldCreateManyArgs} args - Arguments to create many ExpertFields.
     * @example
     * // Create many ExpertFields
     * const expertField = await prisma.expertField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpertFieldCreateManyArgs>(args?: SelectSubset<T, ExpertFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpertFields and returns the data saved in the database.
     * @param {ExpertFieldCreateManyAndReturnArgs} args - Arguments to create many ExpertFields.
     * @example
     * // Create many ExpertFields
     * const expertField = await prisma.expertField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpertFields and only return the `id`
     * const expertFieldWithIdOnly = await prisma.expertField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpertFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpertFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpertField.
     * @param {ExpertFieldDeleteArgs} args - Arguments to delete one ExpertField.
     * @example
     * // Delete one ExpertField
     * const ExpertField = await prisma.expertField.delete({
     *   where: {
     *     // ... filter to delete one ExpertField
     *   }
     * })
     * 
     */
    delete<T extends ExpertFieldDeleteArgs>(args: SelectSubset<T, ExpertFieldDeleteArgs<ExtArgs>>): Prisma__ExpertFieldClient<$Result.GetResult<Prisma.$ExpertFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpertField.
     * @param {ExpertFieldUpdateArgs} args - Arguments to update one ExpertField.
     * @example
     * // Update one ExpertField
     * const expertField = await prisma.expertField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpertFieldUpdateArgs>(args: SelectSubset<T, ExpertFieldUpdateArgs<ExtArgs>>): Prisma__ExpertFieldClient<$Result.GetResult<Prisma.$ExpertFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpertFields.
     * @param {ExpertFieldDeleteManyArgs} args - Arguments to filter ExpertFields to delete.
     * @example
     * // Delete a few ExpertFields
     * const { count } = await prisma.expertField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpertFieldDeleteManyArgs>(args?: SelectSubset<T, ExpertFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpertFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpertFields
     * const expertField = await prisma.expertField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpertFieldUpdateManyArgs>(args: SelectSubset<T, ExpertFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpertFields and returns the data updated in the database.
     * @param {ExpertFieldUpdateManyAndReturnArgs} args - Arguments to update many ExpertFields.
     * @example
     * // Update many ExpertFields
     * const expertField = await prisma.expertField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpertFields and only return the `id`
     * const expertFieldWithIdOnly = await prisma.expertField.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExpertFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpertFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpertField.
     * @param {ExpertFieldUpsertArgs} args - Arguments to update or create a ExpertField.
     * @example
     * // Update or create a ExpertField
     * const expertField = await prisma.expertField.upsert({
     *   create: {
     *     // ... data to create a ExpertField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpertField we want to update
     *   }
     * })
     */
    upsert<T extends ExpertFieldUpsertArgs>(args: SelectSubset<T, ExpertFieldUpsertArgs<ExtArgs>>): Prisma__ExpertFieldClient<$Result.GetResult<Prisma.$ExpertFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpertFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFieldCountArgs} args - Arguments to filter ExpertFields to count.
     * @example
     * // Count the number of ExpertFields
     * const count = await prisma.expertField.count({
     *   where: {
     *     // ... the filter for the ExpertFields we want to count
     *   }
     * })
    **/
    count<T extends ExpertFieldCountArgs>(
      args?: Subset<T, ExpertFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpertField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpertFieldAggregateArgs>(args: Subset<T, ExpertFieldAggregateArgs>): Prisma.PrismaPromise<GetExpertFieldAggregateType<T>>

    /**
     * Group by ExpertField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertFieldGroupByArgs} args - Group by arguments.
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
      T extends ExpertFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertFieldGroupByArgs['orderBy'] }
        : { orderBy?: ExpertFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpertFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpertField model
   */
  readonly fields: ExpertFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpertField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expert<T extends ExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertDefaultArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExpertField model
   */
  interface ExpertFieldFieldRefs {
    readonly id: FieldRef<"ExpertField", 'Int'>
    readonly expert_id: FieldRef<"ExpertField", 'Int'>
    readonly field: FieldRef<"ExpertField", 'String'>
    readonly description: FieldRef<"ExpertField", 'String'>
    readonly economic: FieldRef<"ExpertField", 'Boolean'>
    readonly science: FieldRef<"ExpertField", 'Boolean'>
    readonly social: FieldRef<"ExpertField", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ExpertField findUnique
   */
  export type ExpertFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldInclude<ExtArgs> | null
    /**
     * Filter, which ExpertField to fetch.
     */
    where: ExpertFieldWhereUniqueInput
  }

  /**
   * ExpertField findUniqueOrThrow
   */
  export type ExpertFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldInclude<ExtArgs> | null
    /**
     * Filter, which ExpertField to fetch.
     */
    where: ExpertFieldWhereUniqueInput
  }

  /**
   * ExpertField findFirst
   */
  export type ExpertFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldInclude<ExtArgs> | null
    /**
     * Filter, which ExpertField to fetch.
     */
    where?: ExpertFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertFields to fetch.
     */
    orderBy?: ExpertFieldOrderByWithRelationInput | ExpertFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertFields.
     */
    cursor?: ExpertFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertFields.
     */
    distinct?: ExpertFieldScalarFieldEnum | ExpertFieldScalarFieldEnum[]
  }

  /**
   * ExpertField findFirstOrThrow
   */
  export type ExpertFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldInclude<ExtArgs> | null
    /**
     * Filter, which ExpertField to fetch.
     */
    where?: ExpertFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertFields to fetch.
     */
    orderBy?: ExpertFieldOrderByWithRelationInput | ExpertFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertFields.
     */
    cursor?: ExpertFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertFields.
     */
    distinct?: ExpertFieldScalarFieldEnum | ExpertFieldScalarFieldEnum[]
  }

  /**
   * ExpertField findMany
   */
  export type ExpertFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldInclude<ExtArgs> | null
    /**
     * Filter, which ExpertFields to fetch.
     */
    where?: ExpertFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertFields to fetch.
     */
    orderBy?: ExpertFieldOrderByWithRelationInput | ExpertFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpertFields.
     */
    cursor?: ExpertFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertFields.
     */
    distinct?: ExpertFieldScalarFieldEnum | ExpertFieldScalarFieldEnum[]
  }

  /**
   * ExpertField create
   */
  export type ExpertFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpertField.
     */
    data: XOR<ExpertFieldCreateInput, ExpertFieldUncheckedCreateInput>
  }

  /**
   * ExpertField createMany
   */
  export type ExpertFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpertFields.
     */
    data: ExpertFieldCreateManyInput | ExpertFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpertField createManyAndReturn
   */
  export type ExpertFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * The data used to create many ExpertFields.
     */
    data: ExpertFieldCreateManyInput | ExpertFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpertField update
   */
  export type ExpertFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpertField.
     */
    data: XOR<ExpertFieldUpdateInput, ExpertFieldUncheckedUpdateInput>
    /**
     * Choose, which ExpertField to update.
     */
    where: ExpertFieldWhereUniqueInput
  }

  /**
   * ExpertField updateMany
   */
  export type ExpertFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpertFields.
     */
    data: XOR<ExpertFieldUpdateManyMutationInput, ExpertFieldUncheckedUpdateManyInput>
    /**
     * Filter which ExpertFields to update
     */
    where?: ExpertFieldWhereInput
    /**
     * Limit how many ExpertFields to update.
     */
    limit?: number
  }

  /**
   * ExpertField updateManyAndReturn
   */
  export type ExpertFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * The data used to update ExpertFields.
     */
    data: XOR<ExpertFieldUpdateManyMutationInput, ExpertFieldUncheckedUpdateManyInput>
    /**
     * Filter which ExpertFields to update
     */
    where?: ExpertFieldWhereInput
    /**
     * Limit how many ExpertFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpertField upsert
   */
  export type ExpertFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpertField to update in case it exists.
     */
    where: ExpertFieldWhereUniqueInput
    /**
     * In case the ExpertField found by the `where` argument doesn't exist, create a new ExpertField with this data.
     */
    create: XOR<ExpertFieldCreateInput, ExpertFieldUncheckedCreateInput>
    /**
     * In case the ExpertField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertFieldUpdateInput, ExpertFieldUncheckedUpdateInput>
  }

  /**
   * ExpertField delete
   */
  export type ExpertFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldInclude<ExtArgs> | null
    /**
     * Filter which ExpertField to delete.
     */
    where: ExpertFieldWhereUniqueInput
  }

  /**
   * ExpertField deleteMany
   */
  export type ExpertFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpertFields to delete
     */
    where?: ExpertFieldWhereInput
    /**
     * Limit how many ExpertFields to delete.
     */
    limit?: number
  }

  /**
   * ExpertField without action
   */
  export type ExpertFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertField
     */
    select?: ExpertFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertField
     */
    omit?: ExpertFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertFieldInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    state: string | null
    lastUpdate: Date | null
    location: string | null
    websiteUrl: string | null
    details: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    startDate: Date | null
    endDate: Date | null
    state: string | null
    lastUpdate: Date | null
    location: string | null
    websiteUrl: string | null
    details: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    description: number
    startDate: number
    endDate: number
    state: number
    lastUpdate: number
    location: number
    websiteUrl: number
    details: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    state?: true
    lastUpdate?: true
    location?: true
    websiteUrl?: true
    details?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    state?: true
    lastUpdate?: true
    location?: true
    websiteUrl?: true
    details?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    startDate?: true
    endDate?: true
    state?: true
    lastUpdate?: true
    location?: true
    websiteUrl?: true
    details?: true
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
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
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
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    title: string
    description: string | null
    startDate: Date | null
    endDate: Date | null
    state: string | null
    lastUpdate: Date
    location: string | null
    websiteUrl: string | null
    details: string | null
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
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
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    state?: boolean
    lastUpdate?: boolean
    location?: boolean
    websiteUrl?: boolean
    details?: boolean
    relations?: boolean | Project$relationsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    state?: boolean
    lastUpdate?: boolean
    location?: boolean
    websiteUrl?: boolean
    details?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    state?: boolean
    lastUpdate?: boolean
    location?: boolean
    websiteUrl?: boolean
    details?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    startDate?: boolean
    endDate?: boolean
    state?: boolean
    lastUpdate?: boolean
    location?: boolean
    websiteUrl?: boolean
    details?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "startDate" | "endDate" | "state" | "lastUpdate" | "location" | "websiteUrl" | "details", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relations?: boolean | Project$relationsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      relations: Prisma.$ProjectRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      startDate: Date | null
      endDate: Date | null
      state: string | null
      lastUpdate: Date
      location: string | null
      websiteUrl: string | null
      details: string | null
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
    relations<T extends Project$relationsArgs<ExtArgs> = {}>(args?: Subset<T, Project$relationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Project", 'Int'>
    readonly title: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly startDate: FieldRef<"Project", 'DateTime'>
    readonly endDate: FieldRef<"Project", 'DateTime'>
    readonly state: FieldRef<"Project", 'String'>
    readonly lastUpdate: FieldRef<"Project", 'DateTime'>
    readonly location: FieldRef<"Project", 'String'>
    readonly websiteUrl: FieldRef<"Project", 'String'>
    readonly details: FieldRef<"Project", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * Project.relations
   */
  export type Project$relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
    where?: ProjectRelationWhereInput
    orderBy?: ProjectRelationOrderByWithRelationInput | ProjectRelationOrderByWithRelationInput[]
    cursor?: ProjectRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectRelationScalarFieldEnum | ProjectRelationScalarFieldEnum[]
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
   * Model ProjectRelation
   */

  export type AggregateProjectRelation = {
    _count: ProjectRelationCountAggregateOutputType | null
    _avg: ProjectRelationAvgAggregateOutputType | null
    _sum: ProjectRelationSumAggregateOutputType | null
    _min: ProjectRelationMinAggregateOutputType | null
    _max: ProjectRelationMaxAggregateOutputType | null
  }

  export type ProjectRelationAvgAggregateOutputType = {
    projectId: number | null
    expertId: number | null
    problemId: number | null
  }

  export type ProjectRelationSumAggregateOutputType = {
    projectId: number | null
    expertId: number | null
    problemId: number | null
  }

  export type ProjectRelationMinAggregateOutputType = {
    projectId: number | null
    expertId: number | null
    problemId: number | null
  }

  export type ProjectRelationMaxAggregateOutputType = {
    projectId: number | null
    expertId: number | null
    problemId: number | null
  }

  export type ProjectRelationCountAggregateOutputType = {
    projectId: number
    expertId: number
    problemId: number
    _all: number
  }


  export type ProjectRelationAvgAggregateInputType = {
    projectId?: true
    expertId?: true
    problemId?: true
  }

  export type ProjectRelationSumAggregateInputType = {
    projectId?: true
    expertId?: true
    problemId?: true
  }

  export type ProjectRelationMinAggregateInputType = {
    projectId?: true
    expertId?: true
    problemId?: true
  }

  export type ProjectRelationMaxAggregateInputType = {
    projectId?: true
    expertId?: true
    problemId?: true
  }

  export type ProjectRelationCountAggregateInputType = {
    projectId?: true
    expertId?: true
    problemId?: true
    _all?: true
  }

  export type ProjectRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectRelation to aggregate.
     */
    where?: ProjectRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRelations to fetch.
     */
    orderBy?: ProjectRelationOrderByWithRelationInput | ProjectRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectRelations
    **/
    _count?: true | ProjectRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectRelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectRelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectRelationMaxAggregateInputType
  }

  export type GetProjectRelationAggregateType<T extends ProjectRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectRelation[P]>
      : GetScalarType<T[P], AggregateProjectRelation[P]>
  }




  export type ProjectRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectRelationWhereInput
    orderBy?: ProjectRelationOrderByWithAggregationInput | ProjectRelationOrderByWithAggregationInput[]
    by: ProjectRelationScalarFieldEnum[] | ProjectRelationScalarFieldEnum
    having?: ProjectRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectRelationCountAggregateInputType | true
    _avg?: ProjectRelationAvgAggregateInputType
    _sum?: ProjectRelationSumAggregateInputType
    _min?: ProjectRelationMinAggregateInputType
    _max?: ProjectRelationMaxAggregateInputType
  }

  export type ProjectRelationGroupByOutputType = {
    projectId: number
    expertId: number
    problemId: number | null
    _count: ProjectRelationCountAggregateOutputType | null
    _avg: ProjectRelationAvgAggregateOutputType | null
    _sum: ProjectRelationSumAggregateOutputType | null
    _min: ProjectRelationMinAggregateOutputType | null
    _max: ProjectRelationMaxAggregateOutputType | null
  }

  type GetProjectRelationGroupByPayload<T extends ProjectRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectRelationGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectRelationGroupByOutputType[P]>
        }
      >
    >


  export type ProjectRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    expertId?: boolean
    problemId?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    problem?: boolean | ProjectRelation$problemArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRelation"]>

  export type ProjectRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    expertId?: boolean
    problemId?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    problem?: boolean | ProjectRelation$problemArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRelation"]>

  export type ProjectRelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    projectId?: boolean
    expertId?: boolean
    problemId?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    problem?: boolean | ProjectRelation$problemArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectRelation"]>

  export type ProjectRelationSelectScalar = {
    projectId?: boolean
    expertId?: boolean
    problemId?: boolean
  }

  export type ProjectRelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"projectId" | "expertId" | "problemId", ExtArgs["result"]["projectRelation"]>
  export type ProjectRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    problem?: boolean | ProjectRelation$problemArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    problem?: boolean | ProjectRelation$problemArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectRelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    problem?: boolean | ProjectRelation$problemArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectRelation"
    objects: {
      expert: Prisma.$ExpertPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs> | null
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      projectId: number
      expertId: number
      problemId: number | null
    }, ExtArgs["result"]["projectRelation"]>
    composites: {}
  }

  type ProjectRelationGetPayload<S extends boolean | null | undefined | ProjectRelationDefaultArgs> = $Result.GetResult<Prisma.$ProjectRelationPayload, S>

  type ProjectRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectRelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectRelationCountAggregateInputType | true
    }

  export interface ProjectRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectRelation'], meta: { name: 'ProjectRelation' } }
    /**
     * Find zero or one ProjectRelation that matches the filter.
     * @param {ProjectRelationFindUniqueArgs} args - Arguments to find a ProjectRelation
     * @example
     * // Get one ProjectRelation
     * const projectRelation = await prisma.projectRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectRelationFindUniqueArgs>(args: SelectSubset<T, ProjectRelationFindUniqueArgs<ExtArgs>>): Prisma__ProjectRelationClient<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectRelation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectRelationFindUniqueOrThrowArgs} args - Arguments to find a ProjectRelation
     * @example
     * // Get one ProjectRelation
     * const projectRelation = await prisma.projectRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectRelationClient<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRelationFindFirstArgs} args - Arguments to find a ProjectRelation
     * @example
     * // Get one ProjectRelation
     * const projectRelation = await prisma.projectRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectRelationFindFirstArgs>(args?: SelectSubset<T, ProjectRelationFindFirstArgs<ExtArgs>>): Prisma__ProjectRelationClient<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRelationFindFirstOrThrowArgs} args - Arguments to find a ProjectRelation
     * @example
     * // Get one ProjectRelation
     * const projectRelation = await prisma.projectRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectRelationClient<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectRelations
     * const projectRelations = await prisma.projectRelation.findMany()
     * 
     * // Get first 10 ProjectRelations
     * const projectRelations = await prisma.projectRelation.findMany({ take: 10 })
     * 
     * // Only select the `projectId`
     * const projectRelationWithProjectIdOnly = await prisma.projectRelation.findMany({ select: { projectId: true } })
     * 
     */
    findMany<T extends ProjectRelationFindManyArgs>(args?: SelectSubset<T, ProjectRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectRelation.
     * @param {ProjectRelationCreateArgs} args - Arguments to create a ProjectRelation.
     * @example
     * // Create one ProjectRelation
     * const ProjectRelation = await prisma.projectRelation.create({
     *   data: {
     *     // ... data to create a ProjectRelation
     *   }
     * })
     * 
     */
    create<T extends ProjectRelationCreateArgs>(args: SelectSubset<T, ProjectRelationCreateArgs<ExtArgs>>): Prisma__ProjectRelationClient<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectRelations.
     * @param {ProjectRelationCreateManyArgs} args - Arguments to create many ProjectRelations.
     * @example
     * // Create many ProjectRelations
     * const projectRelation = await prisma.projectRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectRelationCreateManyArgs>(args?: SelectSubset<T, ProjectRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectRelations and returns the data saved in the database.
     * @param {ProjectRelationCreateManyAndReturnArgs} args - Arguments to create many ProjectRelations.
     * @example
     * // Create many ProjectRelations
     * const projectRelation = await prisma.projectRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectRelations and only return the `projectId`
     * const projectRelationWithProjectIdOnly = await prisma.projectRelation.createManyAndReturn({
     *   select: { projectId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectRelation.
     * @param {ProjectRelationDeleteArgs} args - Arguments to delete one ProjectRelation.
     * @example
     * // Delete one ProjectRelation
     * const ProjectRelation = await prisma.projectRelation.delete({
     *   where: {
     *     // ... filter to delete one ProjectRelation
     *   }
     * })
     * 
     */
    delete<T extends ProjectRelationDeleteArgs>(args: SelectSubset<T, ProjectRelationDeleteArgs<ExtArgs>>): Prisma__ProjectRelationClient<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectRelation.
     * @param {ProjectRelationUpdateArgs} args - Arguments to update one ProjectRelation.
     * @example
     * // Update one ProjectRelation
     * const projectRelation = await prisma.projectRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectRelationUpdateArgs>(args: SelectSubset<T, ProjectRelationUpdateArgs<ExtArgs>>): Prisma__ProjectRelationClient<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectRelations.
     * @param {ProjectRelationDeleteManyArgs} args - Arguments to filter ProjectRelations to delete.
     * @example
     * // Delete a few ProjectRelations
     * const { count } = await prisma.projectRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectRelationDeleteManyArgs>(args?: SelectSubset<T, ProjectRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectRelations
     * const projectRelation = await prisma.projectRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectRelationUpdateManyArgs>(args: SelectSubset<T, ProjectRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectRelations and returns the data updated in the database.
     * @param {ProjectRelationUpdateManyAndReturnArgs} args - Arguments to update many ProjectRelations.
     * @example
     * // Update many ProjectRelations
     * const projectRelation = await prisma.projectRelation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectRelations and only return the `projectId`
     * const projectRelationWithProjectIdOnly = await prisma.projectRelation.updateManyAndReturn({
     *   select: { projectId: true },
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
    updateManyAndReturn<T extends ProjectRelationUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectRelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectRelation.
     * @param {ProjectRelationUpsertArgs} args - Arguments to update or create a ProjectRelation.
     * @example
     * // Update or create a ProjectRelation
     * const projectRelation = await prisma.projectRelation.upsert({
     *   create: {
     *     // ... data to create a ProjectRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectRelation we want to update
     *   }
     * })
     */
    upsert<T extends ProjectRelationUpsertArgs>(args: SelectSubset<T, ProjectRelationUpsertArgs<ExtArgs>>): Prisma__ProjectRelationClient<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRelationCountArgs} args - Arguments to filter ProjectRelations to count.
     * @example
     * // Count the number of ProjectRelations
     * const count = await prisma.projectRelation.count({
     *   where: {
     *     // ... the filter for the ProjectRelations we want to count
     *   }
     * })
    **/
    count<T extends ProjectRelationCountArgs>(
      args?: Subset<T, ProjectRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectRelationAggregateArgs>(args: Subset<T, ProjectRelationAggregateArgs>): Prisma.PrismaPromise<GetProjectRelationAggregateType<T>>

    /**
     * Group by ProjectRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectRelationGroupByArgs} args - Group by arguments.
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
      T extends ProjectRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectRelationGroupByArgs['orderBy'] }
        : { orderBy?: ProjectRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectRelation model
   */
  readonly fields: ProjectRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expert<T extends ExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertDefaultArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProjectRelation$problemArgs<ExtArgs> = {}>(args?: Subset<T, ProjectRelation$problemArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectRelation model
   */
  interface ProjectRelationFieldRefs {
    readonly projectId: FieldRef<"ProjectRelation", 'Int'>
    readonly expertId: FieldRef<"ProjectRelation", 'Int'>
    readonly problemId: FieldRef<"ProjectRelation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProjectRelation findUnique
   */
  export type ProjectRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRelation to fetch.
     */
    where: ProjectRelationWhereUniqueInput
  }

  /**
   * ProjectRelation findUniqueOrThrow
   */
  export type ProjectRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRelation to fetch.
     */
    where: ProjectRelationWhereUniqueInput
  }

  /**
   * ProjectRelation findFirst
   */
  export type ProjectRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRelation to fetch.
     */
    where?: ProjectRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRelations to fetch.
     */
    orderBy?: ProjectRelationOrderByWithRelationInput | ProjectRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectRelations.
     */
    cursor?: ProjectRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectRelations.
     */
    distinct?: ProjectRelationScalarFieldEnum | ProjectRelationScalarFieldEnum[]
  }

  /**
   * ProjectRelation findFirstOrThrow
   */
  export type ProjectRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRelation to fetch.
     */
    where?: ProjectRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRelations to fetch.
     */
    orderBy?: ProjectRelationOrderByWithRelationInput | ProjectRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectRelations.
     */
    cursor?: ProjectRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectRelations.
     */
    distinct?: ProjectRelationScalarFieldEnum | ProjectRelationScalarFieldEnum[]
  }

  /**
   * ProjectRelation findMany
   */
  export type ProjectRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
    /**
     * Filter, which ProjectRelations to fetch.
     */
    where?: ProjectRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectRelations to fetch.
     */
    orderBy?: ProjectRelationOrderByWithRelationInput | ProjectRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectRelations.
     */
    cursor?: ProjectRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectRelations.
     */
    distinct?: ProjectRelationScalarFieldEnum | ProjectRelationScalarFieldEnum[]
  }

  /**
   * ProjectRelation create
   */
  export type ProjectRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectRelation.
     */
    data: XOR<ProjectRelationCreateInput, ProjectRelationUncheckedCreateInput>
  }

  /**
   * ProjectRelation createMany
   */
  export type ProjectRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectRelations.
     */
    data: ProjectRelationCreateManyInput | ProjectRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectRelation createManyAndReturn
   */
  export type ProjectRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectRelations.
     */
    data: ProjectRelationCreateManyInput | ProjectRelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectRelation update
   */
  export type ProjectRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectRelation.
     */
    data: XOR<ProjectRelationUpdateInput, ProjectRelationUncheckedUpdateInput>
    /**
     * Choose, which ProjectRelation to update.
     */
    where: ProjectRelationWhereUniqueInput
  }

  /**
   * ProjectRelation updateMany
   */
  export type ProjectRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectRelations.
     */
    data: XOR<ProjectRelationUpdateManyMutationInput, ProjectRelationUncheckedUpdateManyInput>
    /**
     * Filter which ProjectRelations to update
     */
    where?: ProjectRelationWhereInput
    /**
     * Limit how many ProjectRelations to update.
     */
    limit?: number
  }

  /**
   * ProjectRelation updateManyAndReturn
   */
  export type ProjectRelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * The data used to update ProjectRelations.
     */
    data: XOR<ProjectRelationUpdateManyMutationInput, ProjectRelationUncheckedUpdateManyInput>
    /**
     * Filter which ProjectRelations to update
     */
    where?: ProjectRelationWhereInput
    /**
     * Limit how many ProjectRelations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectRelation upsert
   */
  export type ProjectRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectRelation to update in case it exists.
     */
    where: ProjectRelationWhereUniqueInput
    /**
     * In case the ProjectRelation found by the `where` argument doesn't exist, create a new ProjectRelation with this data.
     */
    create: XOR<ProjectRelationCreateInput, ProjectRelationUncheckedCreateInput>
    /**
     * In case the ProjectRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectRelationUpdateInput, ProjectRelationUncheckedUpdateInput>
  }

  /**
   * ProjectRelation delete
   */
  export type ProjectRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
    /**
     * Filter which ProjectRelation to delete.
     */
    where: ProjectRelationWhereUniqueInput
  }

  /**
   * ProjectRelation deleteMany
   */
  export type ProjectRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectRelations to delete
     */
    where?: ProjectRelationWhereInput
    /**
     * Limit how many ProjectRelations to delete.
     */
    limit?: number
  }

  /**
   * ProjectRelation.problem
   */
  export type ProjectRelation$problemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
  }

  /**
   * ProjectRelation without action
   */
  export type ProjectRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
  }


  /**
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemAvgAggregateOutputType = {
    id: number | null
    expertId: number | null
  }

  export type ProblemSumAggregateOutputType = {
    id: number | null
    expertId: number | null
  }

  export type ProblemMinAggregateOutputType = {
    id: number | null
    expertId: number | null
    title: string | null
    description: string | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: number | null
    expertId: number | null
    title: string | null
    description: string | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    expertId: number
    title: number
    description: number
    _all: number
  }


  export type ProblemAvgAggregateInputType = {
    id?: true
    expertId?: true
  }

  export type ProblemSumAggregateInputType = {
    id?: true
    expertId?: true
  }

  export type ProblemMinAggregateInputType = {
    id?: true
    expertId?: true
    title?: true
    description?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    expertId?: true
    title?: true
    description?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    expertId?: true
    title?: true
    description?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProblemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProblemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _avg?: ProblemAvgAggregateInputType
    _sum?: ProblemSumAggregateInputType
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: number
    expertId: number
    title: string
    description: string | null
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expertId?: boolean
    title?: boolean
    description?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    projectRelations?: boolean | Problem$projectRelationsArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expertId?: boolean
    title?: boolean
    description?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expertId?: boolean
    title?: boolean
    description?: boolean
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    expertId?: boolean
    title?: boolean
    description?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expertId" | "title" | "description", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
    projectRelations?: boolean | Problem$projectRelationsArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expert?: boolean | ExpertDefaultArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      expert: Prisma.$ExpertPayload<ExtArgs>
      projectRelations: Prisma.$ProjectRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      expertId: number
      title: string
      description: string | null
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
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
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expert<T extends ExpertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertDefaultArgs<ExtArgs>>): Prisma__ExpertClient<$Result.GetResult<Prisma.$ExpertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projectRelations<T extends Problem$projectRelationsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$projectRelationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectRelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'Int'>
    readonly expertId: FieldRef<"Problem", 'Int'>
    readonly title: FieldRef<"Problem", 'String'>
    readonly description: FieldRef<"Problem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.projectRelations
   */
  export type Problem$projectRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectRelation
     */
    select?: ProjectRelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectRelation
     */
    omit?: ProjectRelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectRelationInclude<ExtArgs> | null
    where?: ProjectRelationWhereInput
    orderBy?: ProjectRelationOrderByWithRelationInput | ProjectRelationOrderByWithRelationInput[]
    cursor?: ProjectRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectRelationScalarFieldEnum | ProjectRelationScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestMinAggregateOutputType = {
    title: string | null
    content: string | null
  }

  export type TestMaxAggregateOutputType = {
    title: string | null
    content: string | null
  }

  export type TestCountAggregateOutputType = {
    title: number
    content: number
    _all: number
  }


  export type TestMinAggregateInputType = {
    title?: true
    content?: true
  }

  export type TestMaxAggregateInputType = {
    title?: true
    content?: true
  }

  export type TestCountAggregateInputType = {
    title?: true
    content?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    title: string
    content: string
    _count: TestCountAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    title?: boolean
    content?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    title?: boolean
    content?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    title?: boolean
    content?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    title?: boolean
    content?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"title" | "content", ExtArgs["result"]["test"]>

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      title: string
      content: string
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `title`
     * const testWithTitleOnly = await prisma.test.findMany({ select: { title: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `title`
     * const testWithTitleOnly = await prisma.test.createManyAndReturn({
     *   select: { title: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {TestUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `title`
     * const testWithTitleOnly = await prisma.test.updateManyAndReturn({
     *   select: { title: true },
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
    updateManyAndReturn<T extends TestUpdateManyAndReturnArgs>(args: SelectSubset<T, TestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
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
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly title: FieldRef<"Test", 'String'>
    readonly content: FieldRef<"Test", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test updateManyAndReturn
   */
  export type TestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
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


  export const ExpertScalarFieldEnum: {
    expert_id: 'expert_id',
    name: 'name',
    prename: 'prename',
    title: 'title',
    email: 'email',
    description: 'description',
    location: 'location',
    network: 'network',
    last_contact: 'last_contact',
    primary_organization_id: 'primary_organization_id'
  };

  export type ExpertScalarFieldEnum = (typeof ExpertScalarFieldEnum)[keyof typeof ExpertScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    organization_id: 'organization_id',
    name: 'name',
    location: 'location',
    field: 'field',
    description: 'description'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const ExpertFieldScalarFieldEnum: {
    id: 'id',
    expert_id: 'expert_id',
    field: 'field',
    description: 'description',
    economic: 'economic',
    science: 'science',
    social: 'social'
  };

  export type ExpertFieldScalarFieldEnum = (typeof ExpertFieldScalarFieldEnum)[keyof typeof ExpertFieldScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    startDate: 'startDate',
    endDate: 'endDate',
    state: 'state',
    lastUpdate: 'lastUpdate',
    location: 'location',
    websiteUrl: 'websiteUrl',
    details: 'details'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectRelationScalarFieldEnum: {
    projectId: 'projectId',
    expertId: 'expertId',
    problemId: 'problemId'
  };

  export type ProjectRelationScalarFieldEnum = (typeof ProjectRelationScalarFieldEnum)[keyof typeof ProjectRelationScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    expertId: 'expertId',
    title: 'title',
    description: 'description'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const TestScalarFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type ExpertWhereInput = {
    AND?: ExpertWhereInput | ExpertWhereInput[]
    OR?: ExpertWhereInput[]
    NOT?: ExpertWhereInput | ExpertWhereInput[]
    expert_id?: IntFilter<"Expert"> | number
    name?: StringFilter<"Expert"> | string
    prename?: StringFilter<"Expert"> | string
    title?: StringNullableFilter<"Expert"> | string | null
    email?: StringNullableFilter<"Expert"> | string | null
    description?: StringNullableFilter<"Expert"> | string | null
    location?: StringNullableFilter<"Expert"> | string | null
    network?: StringNullableFilter<"Expert"> | string | null
    last_contact?: DateTimeFilter<"Expert"> | Date | string
    primary_organization_id?: IntFilter<"Expert"> | number
    primary_organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    expert_fields?: ExpertFieldListRelationFilter
    problems?: ProblemListRelationFilter
    projectRelations?: ProjectRelationListRelationFilter
  }

  export type ExpertOrderByWithRelationInput = {
    expert_id?: SortOrder
    name?: SortOrder
    prename?: SortOrder
    title?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    network?: SortOrderInput | SortOrder
    last_contact?: SortOrder
    primary_organization_id?: SortOrder
    primary_organization?: OrganizationOrderByWithRelationInput
    expert_fields?: ExpertFieldOrderByRelationAggregateInput
    problems?: ProblemOrderByRelationAggregateInput
    projectRelations?: ProjectRelationOrderByRelationAggregateInput
  }

  export type ExpertWhereUniqueInput = Prisma.AtLeast<{
    expert_id?: number
    email?: string
    AND?: ExpertWhereInput | ExpertWhereInput[]
    OR?: ExpertWhereInput[]
    NOT?: ExpertWhereInput | ExpertWhereInput[]
    name?: StringFilter<"Expert"> | string
    prename?: StringFilter<"Expert"> | string
    title?: StringNullableFilter<"Expert"> | string | null
    description?: StringNullableFilter<"Expert"> | string | null
    location?: StringNullableFilter<"Expert"> | string | null
    network?: StringNullableFilter<"Expert"> | string | null
    last_contact?: DateTimeFilter<"Expert"> | Date | string
    primary_organization_id?: IntFilter<"Expert"> | number
    primary_organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    expert_fields?: ExpertFieldListRelationFilter
    problems?: ProblemListRelationFilter
    projectRelations?: ProjectRelationListRelationFilter
  }, "expert_id" | "email">

  export type ExpertOrderByWithAggregationInput = {
    expert_id?: SortOrder
    name?: SortOrder
    prename?: SortOrder
    title?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    network?: SortOrderInput | SortOrder
    last_contact?: SortOrder
    primary_organization_id?: SortOrder
    _count?: ExpertCountOrderByAggregateInput
    _avg?: ExpertAvgOrderByAggregateInput
    _max?: ExpertMaxOrderByAggregateInput
    _min?: ExpertMinOrderByAggregateInput
    _sum?: ExpertSumOrderByAggregateInput
  }

  export type ExpertScalarWhereWithAggregatesInput = {
    AND?: ExpertScalarWhereWithAggregatesInput | ExpertScalarWhereWithAggregatesInput[]
    OR?: ExpertScalarWhereWithAggregatesInput[]
    NOT?: ExpertScalarWhereWithAggregatesInput | ExpertScalarWhereWithAggregatesInput[]
    expert_id?: IntWithAggregatesFilter<"Expert"> | number
    name?: StringWithAggregatesFilter<"Expert"> | string
    prename?: StringWithAggregatesFilter<"Expert"> | string
    title?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    email?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    description?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    location?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    network?: StringNullableWithAggregatesFilter<"Expert"> | string | null
    last_contact?: DateTimeWithAggregatesFilter<"Expert"> | Date | string
    primary_organization_id?: IntWithAggregatesFilter<"Expert"> | number
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    organization_id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    location?: StringNullableFilter<"Organization"> | string | null
    field?: StringNullableFilter<"Organization"> | string | null
    description?: StringNullableFilter<"Organization"> | string | null
    experts?: ExpertListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    organization_id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    field?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    experts?: ExpertOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    organization_id?: number
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    location?: StringNullableFilter<"Organization"> | string | null
    field?: StringNullableFilter<"Organization"> | string | null
    description?: StringNullableFilter<"Organization"> | string | null
    experts?: ExpertListRelationFilter
  }, "organization_id">

  export type OrganizationOrderByWithAggregationInput = {
    organization_id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    field?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    organization_id?: IntWithAggregatesFilter<"Organization"> | number
    name?: StringWithAggregatesFilter<"Organization"> | string
    location?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    field?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    description?: StringNullableWithAggregatesFilter<"Organization"> | string | null
  }

  export type ExpertFieldWhereInput = {
    AND?: ExpertFieldWhereInput | ExpertFieldWhereInput[]
    OR?: ExpertFieldWhereInput[]
    NOT?: ExpertFieldWhereInput | ExpertFieldWhereInput[]
    id?: IntFilter<"ExpertField"> | number
    expert_id?: IntFilter<"ExpertField"> | number
    field?: StringFilter<"ExpertField"> | string
    description?: StringNullableFilter<"ExpertField"> | string | null
    economic?: BoolFilter<"ExpertField"> | boolean
    science?: BoolFilter<"ExpertField"> | boolean
    social?: BoolFilter<"ExpertField"> | boolean
    expert?: XOR<ExpertScalarRelationFilter, ExpertWhereInput>
  }

  export type ExpertFieldOrderByWithRelationInput = {
    id?: SortOrder
    expert_id?: SortOrder
    field?: SortOrder
    description?: SortOrderInput | SortOrder
    economic?: SortOrder
    science?: SortOrder
    social?: SortOrder
    expert?: ExpertOrderByWithRelationInput
  }

  export type ExpertFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExpertFieldWhereInput | ExpertFieldWhereInput[]
    OR?: ExpertFieldWhereInput[]
    NOT?: ExpertFieldWhereInput | ExpertFieldWhereInput[]
    expert_id?: IntFilter<"ExpertField"> | number
    field?: StringFilter<"ExpertField"> | string
    description?: StringNullableFilter<"ExpertField"> | string | null
    economic?: BoolFilter<"ExpertField"> | boolean
    science?: BoolFilter<"ExpertField"> | boolean
    social?: BoolFilter<"ExpertField"> | boolean
    expert?: XOR<ExpertScalarRelationFilter, ExpertWhereInput>
  }, "id">

  export type ExpertFieldOrderByWithAggregationInput = {
    id?: SortOrder
    expert_id?: SortOrder
    field?: SortOrder
    description?: SortOrderInput | SortOrder
    economic?: SortOrder
    science?: SortOrder
    social?: SortOrder
    _count?: ExpertFieldCountOrderByAggregateInput
    _avg?: ExpertFieldAvgOrderByAggregateInput
    _max?: ExpertFieldMaxOrderByAggregateInput
    _min?: ExpertFieldMinOrderByAggregateInput
    _sum?: ExpertFieldSumOrderByAggregateInput
  }

  export type ExpertFieldScalarWhereWithAggregatesInput = {
    AND?: ExpertFieldScalarWhereWithAggregatesInput | ExpertFieldScalarWhereWithAggregatesInput[]
    OR?: ExpertFieldScalarWhereWithAggregatesInput[]
    NOT?: ExpertFieldScalarWhereWithAggregatesInput | ExpertFieldScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExpertField"> | number
    expert_id?: IntWithAggregatesFilter<"ExpertField"> | number
    field?: StringWithAggregatesFilter<"ExpertField"> | string
    description?: StringNullableWithAggregatesFilter<"ExpertField"> | string | null
    economic?: BoolWithAggregatesFilter<"ExpertField"> | boolean
    science?: BoolWithAggregatesFilter<"ExpertField"> | boolean
    social?: BoolWithAggregatesFilter<"ExpertField"> | boolean
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    state?: StringNullableFilter<"Project"> | string | null
    lastUpdate?: DateTimeFilter<"Project"> | Date | string
    location?: StringNullableFilter<"Project"> | string | null
    websiteUrl?: StringNullableFilter<"Project"> | string | null
    details?: StringNullableFilter<"Project"> | string | null
    relations?: ProjectRelationListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    lastUpdate?: SortOrder
    location?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    relations?: ProjectRelationOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    startDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Project"> | Date | string | null
    state?: StringNullableFilter<"Project"> | string | null
    lastUpdate?: DateTimeFilter<"Project"> | Date | string
    location?: StringNullableFilter<"Project"> | string | null
    websiteUrl?: StringNullableFilter<"Project"> | string | null
    details?: StringNullableFilter<"Project"> | string | null
    relations?: ProjectRelationListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    lastUpdate?: SortOrder
    location?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    title?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    state?: StringNullableWithAggregatesFilter<"Project"> | string | null
    lastUpdate?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Project"> | string | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    details?: StringNullableWithAggregatesFilter<"Project"> | string | null
  }

  export type ProjectRelationWhereInput = {
    AND?: ProjectRelationWhereInput | ProjectRelationWhereInput[]
    OR?: ProjectRelationWhereInput[]
    NOT?: ProjectRelationWhereInput | ProjectRelationWhereInput[]
    projectId?: IntFilter<"ProjectRelation"> | number
    expertId?: IntFilter<"ProjectRelation"> | number
    problemId?: IntNullableFilter<"ProjectRelation"> | number | null
    expert?: XOR<ExpertScalarRelationFilter, ExpertWhereInput>
    problem?: XOR<ProblemNullableScalarRelationFilter, ProblemWhereInput> | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectRelationOrderByWithRelationInput = {
    projectId?: SortOrder
    expertId?: SortOrder
    problemId?: SortOrderInput | SortOrder
    expert?: ExpertOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectRelationWhereUniqueInput = Prisma.AtLeast<{
    projectId_expertId?: ProjectRelationProjectIdExpertIdCompoundUniqueInput
    AND?: ProjectRelationWhereInput | ProjectRelationWhereInput[]
    OR?: ProjectRelationWhereInput[]
    NOT?: ProjectRelationWhereInput | ProjectRelationWhereInput[]
    projectId?: IntFilter<"ProjectRelation"> | number
    expertId?: IntFilter<"ProjectRelation"> | number
    problemId?: IntNullableFilter<"ProjectRelation"> | number | null
    expert?: XOR<ExpertScalarRelationFilter, ExpertWhereInput>
    problem?: XOR<ProblemNullableScalarRelationFilter, ProblemWhereInput> | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "projectId_expertId">

  export type ProjectRelationOrderByWithAggregationInput = {
    projectId?: SortOrder
    expertId?: SortOrder
    problemId?: SortOrderInput | SortOrder
    _count?: ProjectRelationCountOrderByAggregateInput
    _avg?: ProjectRelationAvgOrderByAggregateInput
    _max?: ProjectRelationMaxOrderByAggregateInput
    _min?: ProjectRelationMinOrderByAggregateInput
    _sum?: ProjectRelationSumOrderByAggregateInput
  }

  export type ProjectRelationScalarWhereWithAggregatesInput = {
    AND?: ProjectRelationScalarWhereWithAggregatesInput | ProjectRelationScalarWhereWithAggregatesInput[]
    OR?: ProjectRelationScalarWhereWithAggregatesInput[]
    NOT?: ProjectRelationScalarWhereWithAggregatesInput | ProjectRelationScalarWhereWithAggregatesInput[]
    projectId?: IntWithAggregatesFilter<"ProjectRelation"> | number
    expertId?: IntWithAggregatesFilter<"ProjectRelation"> | number
    problemId?: IntNullableWithAggregatesFilter<"ProjectRelation"> | number | null
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: IntFilter<"Problem"> | number
    expertId?: IntFilter<"Problem"> | number
    title?: StringFilter<"Problem"> | string
    description?: StringNullableFilter<"Problem"> | string | null
    expert?: XOR<ExpertScalarRelationFilter, ExpertWhereInput>
    projectRelations?: ProjectRelationListRelationFilter
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    expertId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    expert?: ExpertOrderByWithRelationInput
    projectRelations?: ProjectRelationOrderByRelationAggregateInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    expertId?: IntFilter<"Problem"> | number
    title?: StringFilter<"Problem"> | string
    description?: StringNullableFilter<"Problem"> | string | null
    expert?: XOR<ExpertScalarRelationFilter, ExpertWhereInput>
    projectRelations?: ProjectRelationListRelationFilter
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    expertId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _avg?: ProblemAvgOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
    _sum?: ProblemSumOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Problem"> | number
    expertId?: IntWithAggregatesFilter<"Problem"> | number
    title?: StringWithAggregatesFilter<"Problem"> | string
    description?: StringNullableWithAggregatesFilter<"Problem"> | string | null
  }

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    title?: StringFilter<"Test"> | string
    content?: StringFilter<"Test"> | string
  }

  export type TestOrderByWithRelationInput = {
    title?: SortOrder
    content?: SortOrder
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    title?: string
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    content?: StringFilter<"Test"> | string
  }, "title">

  export type TestOrderByWithAggregationInput = {
    title?: SortOrder
    content?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    title?: StringWithAggregatesFilter<"Test"> | string
    content?: StringWithAggregatesFilter<"Test"> | string
  }

  export type ExpertCreateInput = {
    name: string
    prename: string
    title?: string | null
    email?: string | null
    description?: string | null
    location?: string | null
    network?: string | null
    last_contact?: Date | string
    primary_organization: OrganizationCreateNestedOneWithoutExpertsInput
    expert_fields?: ExpertFieldCreateNestedManyWithoutExpertInput
    problems?: ProblemCreateNestedManyWithoutExpertInput
    projectRelations?: ProjectRelationCreateNestedManyWithoutExpertInput
  }

  export type ExpertUncheckedCreateInput = {
    expert_id?: number
    name: string
    prename: string
    title?: string | null
    email?: string | null
    description?: string | null
    location?: string | null
    network?: string | null
    last_contact?: Date | string
    primary_organization_id: number
    expert_fields?: ExpertFieldUncheckedCreateNestedManyWithoutExpertInput
    problems?: ProblemUncheckedCreateNestedManyWithoutExpertInput
    projectRelations?: ProjectRelationUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
    primary_organization?: OrganizationUpdateOneRequiredWithoutExpertsNestedInput
    expert_fields?: ExpertFieldUpdateManyWithoutExpertNestedInput
    problems?: ProblemUpdateManyWithoutExpertNestedInput
    projectRelations?: ProjectRelationUpdateManyWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateInput = {
    expert_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
    primary_organization_id?: IntFieldUpdateOperationsInput | number
    expert_fields?: ExpertFieldUncheckedUpdateManyWithoutExpertNestedInput
    problems?: ProblemUncheckedUpdateManyWithoutExpertNestedInput
    projectRelations?: ProjectRelationUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type ExpertCreateManyInput = {
    expert_id?: number
    name: string
    prename: string
    title?: string | null
    email?: string | null
    description?: string | null
    location?: string | null
    network?: string | null
    last_contact?: Date | string
    primary_organization_id: number
  }

  export type ExpertUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertUncheckedUpdateManyInput = {
    expert_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
    primary_organization_id?: IntFieldUpdateOperationsInput | number
  }

  export type OrganizationCreateInput = {
    name: string
    location?: string | null
    field?: string | null
    description?: string | null
    experts?: ExpertCreateNestedManyWithoutPrimary_organizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    organization_id?: number
    name: string
    location?: string | null
    field?: string | null
    description?: string | null
    experts?: ExpertUncheckedCreateNestedManyWithoutPrimary_organizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    experts?: ExpertUpdateManyWithoutPrimary_organizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    organization_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    experts?: ExpertUncheckedUpdateManyWithoutPrimary_organizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    organization_id?: number
    name: string
    location?: string | null
    field?: string | null
    description?: string | null
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationUncheckedUpdateManyInput = {
    organization_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpertFieldCreateInput = {
    field: string
    description?: string | null
    economic?: boolean
    science?: boolean
    social?: boolean
    expert: ExpertCreateNestedOneWithoutExpert_fieldsInput
  }

  export type ExpertFieldUncheckedCreateInput = {
    id?: number
    expert_id: number
    field: string
    description?: string | null
    economic?: boolean
    science?: boolean
    social?: boolean
  }

  export type ExpertFieldUpdateInput = {
    field?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    economic?: BoolFieldUpdateOperationsInput | boolean
    science?: BoolFieldUpdateOperationsInput | boolean
    social?: BoolFieldUpdateOperationsInput | boolean
    expert?: ExpertUpdateOneRequiredWithoutExpert_fieldsNestedInput
  }

  export type ExpertFieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    expert_id?: IntFieldUpdateOperationsInput | number
    field?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    economic?: BoolFieldUpdateOperationsInput | boolean
    science?: BoolFieldUpdateOperationsInput | boolean
    social?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpertFieldCreateManyInput = {
    id?: number
    expert_id: number
    field: string
    description?: string | null
    economic?: boolean
    science?: boolean
    social?: boolean
  }

  export type ExpertFieldUpdateManyMutationInput = {
    field?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    economic?: BoolFieldUpdateOperationsInput | boolean
    science?: BoolFieldUpdateOperationsInput | boolean
    social?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpertFieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    expert_id?: IntFieldUpdateOperationsInput | number
    field?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    economic?: BoolFieldUpdateOperationsInput | boolean
    science?: BoolFieldUpdateOperationsInput | boolean
    social?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectCreateInput = {
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    state?: string | null
    lastUpdate?: Date | string
    location?: string | null
    websiteUrl?: string | null
    details?: string | null
    relations?: ProjectRelationCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    state?: string | null
    lastUpdate?: Date | string
    location?: string | null
    websiteUrl?: string | null
    details?: string | null
    relations?: ProjectRelationUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    relations?: ProjectRelationUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    relations?: ProjectRelationUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    state?: string | null
    lastUpdate?: Date | string
    location?: string | null
    websiteUrl?: string | null
    details?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectRelationCreateInput = {
    expert: ExpertCreateNestedOneWithoutProjectRelationsInput
    problem?: ProblemCreateNestedOneWithoutProjectRelationsInput
    project: ProjectCreateNestedOneWithoutRelationsInput
  }

  export type ProjectRelationUncheckedCreateInput = {
    projectId: number
    expertId: number
    problemId?: number | null
  }

  export type ProjectRelationUpdateInput = {
    expert?: ExpertUpdateOneRequiredWithoutProjectRelationsNestedInput
    problem?: ProblemUpdateOneWithoutProjectRelationsNestedInput
    project?: ProjectUpdateOneRequiredWithoutRelationsNestedInput
  }

  export type ProjectRelationUncheckedUpdateInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
    problemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectRelationCreateManyInput = {
    projectId: number
    expertId: number
    problemId?: number | null
  }

  export type ProjectRelationUpdateManyMutationInput = {

  }

  export type ProjectRelationUncheckedUpdateManyInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
    problemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProblemCreateInput = {
    title: string
    description?: string | null
    expert: ExpertCreateNestedOneWithoutProblemsInput
    projectRelations?: ProjectRelationCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: number
    expertId: number
    title: string
    description?: string | null
    projectRelations?: ProjectRelationUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expert?: ExpertUpdateOneRequiredWithoutProblemsNestedInput
    projectRelations?: ProjectRelationUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projectRelations?: ProjectRelationUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: number
    expertId: number
    title: string
    description?: string | null
  }

  export type ProblemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TestCreateInput = {
    title: string
    content: string
  }

  export type TestUncheckedCreateInput = {
    title: string
    content: string
  }

  export type TestUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TestUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TestCreateManyInput = {
    title: string
    content: string
  }

  export type TestUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type TestUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
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

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type ExpertFieldListRelationFilter = {
    every?: ExpertFieldWhereInput
    some?: ExpertFieldWhereInput
    none?: ExpertFieldWhereInput
  }

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type ProjectRelationListRelationFilter = {
    every?: ProjectRelationWhereInput
    some?: ProjectRelationWhereInput
    none?: ProjectRelationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExpertFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpertCountOrderByAggregateInput = {
    expert_id?: SortOrder
    name?: SortOrder
    prename?: SortOrder
    title?: SortOrder
    email?: SortOrder
    description?: SortOrder
    location?: SortOrder
    network?: SortOrder
    last_contact?: SortOrder
    primary_organization_id?: SortOrder
  }

  export type ExpertAvgOrderByAggregateInput = {
    expert_id?: SortOrder
    primary_organization_id?: SortOrder
  }

  export type ExpertMaxOrderByAggregateInput = {
    expert_id?: SortOrder
    name?: SortOrder
    prename?: SortOrder
    title?: SortOrder
    email?: SortOrder
    description?: SortOrder
    location?: SortOrder
    network?: SortOrder
    last_contact?: SortOrder
    primary_organization_id?: SortOrder
  }

  export type ExpertMinOrderByAggregateInput = {
    expert_id?: SortOrder
    name?: SortOrder
    prename?: SortOrder
    title?: SortOrder
    email?: SortOrder
    description?: SortOrder
    location?: SortOrder
    network?: SortOrder
    last_contact?: SortOrder
    primary_organization_id?: SortOrder
  }

  export type ExpertSumOrderByAggregateInput = {
    expert_id?: SortOrder
    primary_organization_id?: SortOrder
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

  export type ExpertListRelationFilter = {
    every?: ExpertWhereInput
    some?: ExpertWhereInput
    none?: ExpertWhereInput
  }

  export type ExpertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    organization_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    field?: SortOrder
    description?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    organization_id?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    organization_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    field?: SortOrder
    description?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    organization_id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    field?: SortOrder
    description?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    organization_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ExpertScalarRelationFilter = {
    is?: ExpertWhereInput
    isNot?: ExpertWhereInput
  }

  export type ExpertFieldCountOrderByAggregateInput = {
    id?: SortOrder
    expert_id?: SortOrder
    field?: SortOrder
    description?: SortOrder
    economic?: SortOrder
    science?: SortOrder
    social?: SortOrder
  }

  export type ExpertFieldAvgOrderByAggregateInput = {
    id?: SortOrder
    expert_id?: SortOrder
  }

  export type ExpertFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    expert_id?: SortOrder
    field?: SortOrder
    description?: SortOrder
    economic?: SortOrder
    science?: SortOrder
    social?: SortOrder
  }

  export type ExpertFieldMinOrderByAggregateInput = {
    id?: SortOrder
    expert_id?: SortOrder
    field?: SortOrder
    description?: SortOrder
    economic?: SortOrder
    science?: SortOrder
    social?: SortOrder
  }

  export type ExpertFieldSumOrderByAggregateInput = {
    id?: SortOrder
    expert_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    state?: SortOrder
    lastUpdate?: SortOrder
    location?: SortOrder
    websiteUrl?: SortOrder
    details?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    state?: SortOrder
    lastUpdate?: SortOrder
    location?: SortOrder
    websiteUrl?: SortOrder
    details?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    state?: SortOrder
    lastUpdate?: SortOrder
    location?: SortOrder
    websiteUrl?: SortOrder
    details?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProblemNullableScalarRelationFilter = {
    is?: ProblemWhereInput | null
    isNot?: ProblemWhereInput | null
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectRelationProjectIdExpertIdCompoundUniqueInput = {
    projectId: number
    expertId: number
  }

  export type ProjectRelationCountOrderByAggregateInput = {
    projectId?: SortOrder
    expertId?: SortOrder
    problemId?: SortOrder
  }

  export type ProjectRelationAvgOrderByAggregateInput = {
    projectId?: SortOrder
    expertId?: SortOrder
    problemId?: SortOrder
  }

  export type ProjectRelationMaxOrderByAggregateInput = {
    projectId?: SortOrder
    expertId?: SortOrder
    problemId?: SortOrder
  }

  export type ProjectRelationMinOrderByAggregateInput = {
    projectId?: SortOrder
    expertId?: SortOrder
    problemId?: SortOrder
  }

  export type ProjectRelationSumOrderByAggregateInput = {
    projectId?: SortOrder
    expertId?: SortOrder
    problemId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    expertId?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ProblemAvgOrderByAggregateInput = {
    id?: SortOrder
    expertId?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    expertId?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    expertId?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ProblemSumOrderByAggregateInput = {
    id?: SortOrder
    expertId?: SortOrder
  }

  export type TestCountOrderByAggregateInput = {
    title?: SortOrder
    content?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    title?: SortOrder
    content?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    title?: SortOrder
    content?: SortOrder
  }

  export type OrganizationCreateNestedOneWithoutExpertsInput = {
    create?: XOR<OrganizationCreateWithoutExpertsInput, OrganizationUncheckedCreateWithoutExpertsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutExpertsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ExpertFieldCreateNestedManyWithoutExpertInput = {
    create?: XOR<ExpertFieldCreateWithoutExpertInput, ExpertFieldUncheckedCreateWithoutExpertInput> | ExpertFieldCreateWithoutExpertInput[] | ExpertFieldUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ExpertFieldCreateOrConnectWithoutExpertInput | ExpertFieldCreateOrConnectWithoutExpertInput[]
    createMany?: ExpertFieldCreateManyExpertInputEnvelope
    connect?: ExpertFieldWhereUniqueInput | ExpertFieldWhereUniqueInput[]
  }

  export type ProblemCreateNestedManyWithoutExpertInput = {
    create?: XOR<ProblemCreateWithoutExpertInput, ProblemUncheckedCreateWithoutExpertInput> | ProblemCreateWithoutExpertInput[] | ProblemUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutExpertInput | ProblemCreateOrConnectWithoutExpertInput[]
    createMany?: ProblemCreateManyExpertInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type ProjectRelationCreateNestedManyWithoutExpertInput = {
    create?: XOR<ProjectRelationCreateWithoutExpertInput, ProjectRelationUncheckedCreateWithoutExpertInput> | ProjectRelationCreateWithoutExpertInput[] | ProjectRelationUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ProjectRelationCreateOrConnectWithoutExpertInput | ProjectRelationCreateOrConnectWithoutExpertInput[]
    createMany?: ProjectRelationCreateManyExpertInputEnvelope
    connect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
  }

  export type ExpertFieldUncheckedCreateNestedManyWithoutExpertInput = {
    create?: XOR<ExpertFieldCreateWithoutExpertInput, ExpertFieldUncheckedCreateWithoutExpertInput> | ExpertFieldCreateWithoutExpertInput[] | ExpertFieldUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ExpertFieldCreateOrConnectWithoutExpertInput | ExpertFieldCreateOrConnectWithoutExpertInput[]
    createMany?: ExpertFieldCreateManyExpertInputEnvelope
    connect?: ExpertFieldWhereUniqueInput | ExpertFieldWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutExpertInput = {
    create?: XOR<ProblemCreateWithoutExpertInput, ProblemUncheckedCreateWithoutExpertInput> | ProblemCreateWithoutExpertInput[] | ProblemUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutExpertInput | ProblemCreateOrConnectWithoutExpertInput[]
    createMany?: ProblemCreateManyExpertInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type ProjectRelationUncheckedCreateNestedManyWithoutExpertInput = {
    create?: XOR<ProjectRelationCreateWithoutExpertInput, ProjectRelationUncheckedCreateWithoutExpertInput> | ProjectRelationCreateWithoutExpertInput[] | ProjectRelationUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ProjectRelationCreateOrConnectWithoutExpertInput | ProjectRelationCreateOrConnectWithoutExpertInput[]
    createMany?: ProjectRelationCreateManyExpertInputEnvelope
    connect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganizationUpdateOneRequiredWithoutExpertsNestedInput = {
    create?: XOR<OrganizationCreateWithoutExpertsInput, OrganizationUncheckedCreateWithoutExpertsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutExpertsInput
    upsert?: OrganizationUpsertWithoutExpertsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutExpertsInput, OrganizationUpdateWithoutExpertsInput>, OrganizationUncheckedUpdateWithoutExpertsInput>
  }

  export type ExpertFieldUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ExpertFieldCreateWithoutExpertInput, ExpertFieldUncheckedCreateWithoutExpertInput> | ExpertFieldCreateWithoutExpertInput[] | ExpertFieldUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ExpertFieldCreateOrConnectWithoutExpertInput | ExpertFieldCreateOrConnectWithoutExpertInput[]
    upsert?: ExpertFieldUpsertWithWhereUniqueWithoutExpertInput | ExpertFieldUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ExpertFieldCreateManyExpertInputEnvelope
    set?: ExpertFieldWhereUniqueInput | ExpertFieldWhereUniqueInput[]
    disconnect?: ExpertFieldWhereUniqueInput | ExpertFieldWhereUniqueInput[]
    delete?: ExpertFieldWhereUniqueInput | ExpertFieldWhereUniqueInput[]
    connect?: ExpertFieldWhereUniqueInput | ExpertFieldWhereUniqueInput[]
    update?: ExpertFieldUpdateWithWhereUniqueWithoutExpertInput | ExpertFieldUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ExpertFieldUpdateManyWithWhereWithoutExpertInput | ExpertFieldUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ExpertFieldScalarWhereInput | ExpertFieldScalarWhereInput[]
  }

  export type ProblemUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ProblemCreateWithoutExpertInput, ProblemUncheckedCreateWithoutExpertInput> | ProblemCreateWithoutExpertInput[] | ProblemUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutExpertInput | ProblemCreateOrConnectWithoutExpertInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutExpertInput | ProblemUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ProblemCreateManyExpertInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutExpertInput | ProblemUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutExpertInput | ProblemUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type ProjectRelationUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ProjectRelationCreateWithoutExpertInput, ProjectRelationUncheckedCreateWithoutExpertInput> | ProjectRelationCreateWithoutExpertInput[] | ProjectRelationUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ProjectRelationCreateOrConnectWithoutExpertInput | ProjectRelationCreateOrConnectWithoutExpertInput[]
    upsert?: ProjectRelationUpsertWithWhereUniqueWithoutExpertInput | ProjectRelationUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ProjectRelationCreateManyExpertInputEnvelope
    set?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    disconnect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    delete?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    connect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    update?: ProjectRelationUpdateWithWhereUniqueWithoutExpertInput | ProjectRelationUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ProjectRelationUpdateManyWithWhereWithoutExpertInput | ProjectRelationUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ProjectRelationScalarWhereInput | ProjectRelationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExpertFieldUncheckedUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ExpertFieldCreateWithoutExpertInput, ExpertFieldUncheckedCreateWithoutExpertInput> | ExpertFieldCreateWithoutExpertInput[] | ExpertFieldUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ExpertFieldCreateOrConnectWithoutExpertInput | ExpertFieldCreateOrConnectWithoutExpertInput[]
    upsert?: ExpertFieldUpsertWithWhereUniqueWithoutExpertInput | ExpertFieldUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ExpertFieldCreateManyExpertInputEnvelope
    set?: ExpertFieldWhereUniqueInput | ExpertFieldWhereUniqueInput[]
    disconnect?: ExpertFieldWhereUniqueInput | ExpertFieldWhereUniqueInput[]
    delete?: ExpertFieldWhereUniqueInput | ExpertFieldWhereUniqueInput[]
    connect?: ExpertFieldWhereUniqueInput | ExpertFieldWhereUniqueInput[]
    update?: ExpertFieldUpdateWithWhereUniqueWithoutExpertInput | ExpertFieldUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ExpertFieldUpdateManyWithWhereWithoutExpertInput | ExpertFieldUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ExpertFieldScalarWhereInput | ExpertFieldScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ProblemCreateWithoutExpertInput, ProblemUncheckedCreateWithoutExpertInput> | ProblemCreateWithoutExpertInput[] | ProblemUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutExpertInput | ProblemCreateOrConnectWithoutExpertInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutExpertInput | ProblemUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ProblemCreateManyExpertInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutExpertInput | ProblemUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutExpertInput | ProblemUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type ProjectRelationUncheckedUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ProjectRelationCreateWithoutExpertInput, ProjectRelationUncheckedCreateWithoutExpertInput> | ProjectRelationCreateWithoutExpertInput[] | ProjectRelationUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ProjectRelationCreateOrConnectWithoutExpertInput | ProjectRelationCreateOrConnectWithoutExpertInput[]
    upsert?: ProjectRelationUpsertWithWhereUniqueWithoutExpertInput | ProjectRelationUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ProjectRelationCreateManyExpertInputEnvelope
    set?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    disconnect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    delete?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    connect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    update?: ProjectRelationUpdateWithWhereUniqueWithoutExpertInput | ProjectRelationUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ProjectRelationUpdateManyWithWhereWithoutExpertInput | ProjectRelationUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ProjectRelationScalarWhereInput | ProjectRelationScalarWhereInput[]
  }

  export type ExpertCreateNestedManyWithoutPrimary_organizationInput = {
    create?: XOR<ExpertCreateWithoutPrimary_organizationInput, ExpertUncheckedCreateWithoutPrimary_organizationInput> | ExpertCreateWithoutPrimary_organizationInput[] | ExpertUncheckedCreateWithoutPrimary_organizationInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutPrimary_organizationInput | ExpertCreateOrConnectWithoutPrimary_organizationInput[]
    createMany?: ExpertCreateManyPrimary_organizationInputEnvelope
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
  }

  export type ExpertUncheckedCreateNestedManyWithoutPrimary_organizationInput = {
    create?: XOR<ExpertCreateWithoutPrimary_organizationInput, ExpertUncheckedCreateWithoutPrimary_organizationInput> | ExpertCreateWithoutPrimary_organizationInput[] | ExpertUncheckedCreateWithoutPrimary_organizationInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutPrimary_organizationInput | ExpertCreateOrConnectWithoutPrimary_organizationInput[]
    createMany?: ExpertCreateManyPrimary_organizationInputEnvelope
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
  }

  export type ExpertUpdateManyWithoutPrimary_organizationNestedInput = {
    create?: XOR<ExpertCreateWithoutPrimary_organizationInput, ExpertUncheckedCreateWithoutPrimary_organizationInput> | ExpertCreateWithoutPrimary_organizationInput[] | ExpertUncheckedCreateWithoutPrimary_organizationInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutPrimary_organizationInput | ExpertCreateOrConnectWithoutPrimary_organizationInput[]
    upsert?: ExpertUpsertWithWhereUniqueWithoutPrimary_organizationInput | ExpertUpsertWithWhereUniqueWithoutPrimary_organizationInput[]
    createMany?: ExpertCreateManyPrimary_organizationInputEnvelope
    set?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    disconnect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    delete?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    update?: ExpertUpdateWithWhereUniqueWithoutPrimary_organizationInput | ExpertUpdateWithWhereUniqueWithoutPrimary_organizationInput[]
    updateMany?: ExpertUpdateManyWithWhereWithoutPrimary_organizationInput | ExpertUpdateManyWithWhereWithoutPrimary_organizationInput[]
    deleteMany?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
  }

  export type ExpertUncheckedUpdateManyWithoutPrimary_organizationNestedInput = {
    create?: XOR<ExpertCreateWithoutPrimary_organizationInput, ExpertUncheckedCreateWithoutPrimary_organizationInput> | ExpertCreateWithoutPrimary_organizationInput[] | ExpertUncheckedCreateWithoutPrimary_organizationInput[]
    connectOrCreate?: ExpertCreateOrConnectWithoutPrimary_organizationInput | ExpertCreateOrConnectWithoutPrimary_organizationInput[]
    upsert?: ExpertUpsertWithWhereUniqueWithoutPrimary_organizationInput | ExpertUpsertWithWhereUniqueWithoutPrimary_organizationInput[]
    createMany?: ExpertCreateManyPrimary_organizationInputEnvelope
    set?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    disconnect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    delete?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    connect?: ExpertWhereUniqueInput | ExpertWhereUniqueInput[]
    update?: ExpertUpdateWithWhereUniqueWithoutPrimary_organizationInput | ExpertUpdateWithWhereUniqueWithoutPrimary_organizationInput[]
    updateMany?: ExpertUpdateManyWithWhereWithoutPrimary_organizationInput | ExpertUpdateManyWithWhereWithoutPrimary_organizationInput[]
    deleteMany?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
  }

  export type ExpertCreateNestedOneWithoutExpert_fieldsInput = {
    create?: XOR<ExpertCreateWithoutExpert_fieldsInput, ExpertUncheckedCreateWithoutExpert_fieldsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutExpert_fieldsInput
    connect?: ExpertWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ExpertUpdateOneRequiredWithoutExpert_fieldsNestedInput = {
    create?: XOR<ExpertCreateWithoutExpert_fieldsInput, ExpertUncheckedCreateWithoutExpert_fieldsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutExpert_fieldsInput
    upsert?: ExpertUpsertWithoutExpert_fieldsInput
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutExpert_fieldsInput, ExpertUpdateWithoutExpert_fieldsInput>, ExpertUncheckedUpdateWithoutExpert_fieldsInput>
  }

  export type ProjectRelationCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectRelationCreateWithoutProjectInput, ProjectRelationUncheckedCreateWithoutProjectInput> | ProjectRelationCreateWithoutProjectInput[] | ProjectRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRelationCreateOrConnectWithoutProjectInput | ProjectRelationCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectRelationCreateManyProjectInputEnvelope
    connect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
  }

  export type ProjectRelationUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectRelationCreateWithoutProjectInput, ProjectRelationUncheckedCreateWithoutProjectInput> | ProjectRelationCreateWithoutProjectInput[] | ProjectRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRelationCreateOrConnectWithoutProjectInput | ProjectRelationCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectRelationCreateManyProjectInputEnvelope
    connect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectRelationUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectRelationCreateWithoutProjectInput, ProjectRelationUncheckedCreateWithoutProjectInput> | ProjectRelationCreateWithoutProjectInput[] | ProjectRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRelationCreateOrConnectWithoutProjectInput | ProjectRelationCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectRelationUpsertWithWhereUniqueWithoutProjectInput | ProjectRelationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectRelationCreateManyProjectInputEnvelope
    set?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    disconnect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    delete?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    connect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    update?: ProjectRelationUpdateWithWhereUniqueWithoutProjectInput | ProjectRelationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectRelationUpdateManyWithWhereWithoutProjectInput | ProjectRelationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectRelationScalarWhereInput | ProjectRelationScalarWhereInput[]
  }

  export type ProjectRelationUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectRelationCreateWithoutProjectInput, ProjectRelationUncheckedCreateWithoutProjectInput> | ProjectRelationCreateWithoutProjectInput[] | ProjectRelationUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectRelationCreateOrConnectWithoutProjectInput | ProjectRelationCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectRelationUpsertWithWhereUniqueWithoutProjectInput | ProjectRelationUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectRelationCreateManyProjectInputEnvelope
    set?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    disconnect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    delete?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    connect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    update?: ProjectRelationUpdateWithWhereUniqueWithoutProjectInput | ProjectRelationUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectRelationUpdateManyWithWhereWithoutProjectInput | ProjectRelationUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectRelationScalarWhereInput | ProjectRelationScalarWhereInput[]
  }

  export type ExpertCreateNestedOneWithoutProjectRelationsInput = {
    create?: XOR<ExpertCreateWithoutProjectRelationsInput, ExpertUncheckedCreateWithoutProjectRelationsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutProjectRelationsInput
    connect?: ExpertWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutProjectRelationsInput = {
    create?: XOR<ProblemCreateWithoutProjectRelationsInput, ProblemUncheckedCreateWithoutProjectRelationsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProjectRelationsInput
    connect?: ProblemWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutRelationsInput = {
    create?: XOR<ProjectCreateWithoutRelationsInput, ProjectUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutRelationsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ExpertUpdateOneRequiredWithoutProjectRelationsNestedInput = {
    create?: XOR<ExpertCreateWithoutProjectRelationsInput, ExpertUncheckedCreateWithoutProjectRelationsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutProjectRelationsInput
    upsert?: ExpertUpsertWithoutProjectRelationsInput
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutProjectRelationsInput, ExpertUpdateWithoutProjectRelationsInput>, ExpertUncheckedUpdateWithoutProjectRelationsInput>
  }

  export type ProblemUpdateOneWithoutProjectRelationsNestedInput = {
    create?: XOR<ProblemCreateWithoutProjectRelationsInput, ProblemUncheckedCreateWithoutProjectRelationsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProjectRelationsInput
    upsert?: ProblemUpsertWithoutProjectRelationsInput
    disconnect?: ProblemWhereInput | boolean
    delete?: ProblemWhereInput | boolean
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutProjectRelationsInput, ProblemUpdateWithoutProjectRelationsInput>, ProblemUncheckedUpdateWithoutProjectRelationsInput>
  }

  export type ProjectUpdateOneRequiredWithoutRelationsNestedInput = {
    create?: XOR<ProjectCreateWithoutRelationsInput, ProjectUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutRelationsInput
    upsert?: ProjectUpsertWithoutRelationsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutRelationsInput, ProjectUpdateWithoutRelationsInput>, ProjectUncheckedUpdateWithoutRelationsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExpertCreateNestedOneWithoutProblemsInput = {
    create?: XOR<ExpertCreateWithoutProblemsInput, ExpertUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutProblemsInput
    connect?: ExpertWhereUniqueInput
  }

  export type ProjectRelationCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProjectRelationCreateWithoutProblemInput, ProjectRelationUncheckedCreateWithoutProblemInput> | ProjectRelationCreateWithoutProblemInput[] | ProjectRelationUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProjectRelationCreateOrConnectWithoutProblemInput | ProjectRelationCreateOrConnectWithoutProblemInput[]
    createMany?: ProjectRelationCreateManyProblemInputEnvelope
    connect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
  }

  export type ProjectRelationUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<ProjectRelationCreateWithoutProblemInput, ProjectRelationUncheckedCreateWithoutProblemInput> | ProjectRelationCreateWithoutProblemInput[] | ProjectRelationUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProjectRelationCreateOrConnectWithoutProblemInput | ProjectRelationCreateOrConnectWithoutProblemInput[]
    createMany?: ProjectRelationCreateManyProblemInputEnvelope
    connect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
  }

  export type ExpertUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<ExpertCreateWithoutProblemsInput, ExpertUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: ExpertCreateOrConnectWithoutProblemsInput
    upsert?: ExpertUpsertWithoutProblemsInput
    connect?: ExpertWhereUniqueInput
    update?: XOR<XOR<ExpertUpdateToOneWithWhereWithoutProblemsInput, ExpertUpdateWithoutProblemsInput>, ExpertUncheckedUpdateWithoutProblemsInput>
  }

  export type ProjectRelationUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProjectRelationCreateWithoutProblemInput, ProjectRelationUncheckedCreateWithoutProblemInput> | ProjectRelationCreateWithoutProblemInput[] | ProjectRelationUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProjectRelationCreateOrConnectWithoutProblemInput | ProjectRelationCreateOrConnectWithoutProblemInput[]
    upsert?: ProjectRelationUpsertWithWhereUniqueWithoutProblemInput | ProjectRelationUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProjectRelationCreateManyProblemInputEnvelope
    set?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    disconnect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    delete?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    connect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    update?: ProjectRelationUpdateWithWhereUniqueWithoutProblemInput | ProjectRelationUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProjectRelationUpdateManyWithWhereWithoutProblemInput | ProjectRelationUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProjectRelationScalarWhereInput | ProjectRelationScalarWhereInput[]
  }

  export type ProjectRelationUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<ProjectRelationCreateWithoutProblemInput, ProjectRelationUncheckedCreateWithoutProblemInput> | ProjectRelationCreateWithoutProblemInput[] | ProjectRelationUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: ProjectRelationCreateOrConnectWithoutProblemInput | ProjectRelationCreateOrConnectWithoutProblemInput[]
    upsert?: ProjectRelationUpsertWithWhereUniqueWithoutProblemInput | ProjectRelationUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: ProjectRelationCreateManyProblemInputEnvelope
    set?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    disconnect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    delete?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    connect?: ProjectRelationWhereUniqueInput | ProjectRelationWhereUniqueInput[]
    update?: ProjectRelationUpdateWithWhereUniqueWithoutProblemInput | ProjectRelationUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: ProjectRelationUpdateManyWithWhereWithoutProblemInput | ProjectRelationUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: ProjectRelationScalarWhereInput | ProjectRelationScalarWhereInput[]
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type OrganizationCreateWithoutExpertsInput = {
    name: string
    location?: string | null
    field?: string | null
    description?: string | null
  }

  export type OrganizationUncheckedCreateWithoutExpertsInput = {
    organization_id?: number
    name: string
    location?: string | null
    field?: string | null
    description?: string | null
  }

  export type OrganizationCreateOrConnectWithoutExpertsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutExpertsInput, OrganizationUncheckedCreateWithoutExpertsInput>
  }

  export type ExpertFieldCreateWithoutExpertInput = {
    field: string
    description?: string | null
    economic?: boolean
    science?: boolean
    social?: boolean
  }

  export type ExpertFieldUncheckedCreateWithoutExpertInput = {
    id?: number
    field: string
    description?: string | null
    economic?: boolean
    science?: boolean
    social?: boolean
  }

  export type ExpertFieldCreateOrConnectWithoutExpertInput = {
    where: ExpertFieldWhereUniqueInput
    create: XOR<ExpertFieldCreateWithoutExpertInput, ExpertFieldUncheckedCreateWithoutExpertInput>
  }

  export type ExpertFieldCreateManyExpertInputEnvelope = {
    data: ExpertFieldCreateManyExpertInput | ExpertFieldCreateManyExpertInput[]
    skipDuplicates?: boolean
  }

  export type ProblemCreateWithoutExpertInput = {
    title: string
    description?: string | null
    projectRelations?: ProjectRelationCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutExpertInput = {
    id?: number
    title: string
    description?: string | null
    projectRelations?: ProjectRelationUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutExpertInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutExpertInput, ProblemUncheckedCreateWithoutExpertInput>
  }

  export type ProblemCreateManyExpertInputEnvelope = {
    data: ProblemCreateManyExpertInput | ProblemCreateManyExpertInput[]
    skipDuplicates?: boolean
  }

  export type ProjectRelationCreateWithoutExpertInput = {
    problem?: ProblemCreateNestedOneWithoutProjectRelationsInput
    project: ProjectCreateNestedOneWithoutRelationsInput
  }

  export type ProjectRelationUncheckedCreateWithoutExpertInput = {
    projectId: number
    problemId?: number | null
  }

  export type ProjectRelationCreateOrConnectWithoutExpertInput = {
    where: ProjectRelationWhereUniqueInput
    create: XOR<ProjectRelationCreateWithoutExpertInput, ProjectRelationUncheckedCreateWithoutExpertInput>
  }

  export type ProjectRelationCreateManyExpertInputEnvelope = {
    data: ProjectRelationCreateManyExpertInput | ProjectRelationCreateManyExpertInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutExpertsInput = {
    update: XOR<OrganizationUpdateWithoutExpertsInput, OrganizationUncheckedUpdateWithoutExpertsInput>
    create: XOR<OrganizationCreateWithoutExpertsInput, OrganizationUncheckedCreateWithoutExpertsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutExpertsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutExpertsInput, OrganizationUncheckedUpdateWithoutExpertsInput>
  }

  export type OrganizationUpdateWithoutExpertsInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationUncheckedUpdateWithoutExpertsInput = {
    organization_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpertFieldUpsertWithWhereUniqueWithoutExpertInput = {
    where: ExpertFieldWhereUniqueInput
    update: XOR<ExpertFieldUpdateWithoutExpertInput, ExpertFieldUncheckedUpdateWithoutExpertInput>
    create: XOR<ExpertFieldCreateWithoutExpertInput, ExpertFieldUncheckedCreateWithoutExpertInput>
  }

  export type ExpertFieldUpdateWithWhereUniqueWithoutExpertInput = {
    where: ExpertFieldWhereUniqueInput
    data: XOR<ExpertFieldUpdateWithoutExpertInput, ExpertFieldUncheckedUpdateWithoutExpertInput>
  }

  export type ExpertFieldUpdateManyWithWhereWithoutExpertInput = {
    where: ExpertFieldScalarWhereInput
    data: XOR<ExpertFieldUpdateManyMutationInput, ExpertFieldUncheckedUpdateManyWithoutExpertInput>
  }

  export type ExpertFieldScalarWhereInput = {
    AND?: ExpertFieldScalarWhereInput | ExpertFieldScalarWhereInput[]
    OR?: ExpertFieldScalarWhereInput[]
    NOT?: ExpertFieldScalarWhereInput | ExpertFieldScalarWhereInput[]
    id?: IntFilter<"ExpertField"> | number
    expert_id?: IntFilter<"ExpertField"> | number
    field?: StringFilter<"ExpertField"> | string
    description?: StringNullableFilter<"ExpertField"> | string | null
    economic?: BoolFilter<"ExpertField"> | boolean
    science?: BoolFilter<"ExpertField"> | boolean
    social?: BoolFilter<"ExpertField"> | boolean
  }

  export type ProblemUpsertWithWhereUniqueWithoutExpertInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutExpertInput, ProblemUncheckedUpdateWithoutExpertInput>
    create: XOR<ProblemCreateWithoutExpertInput, ProblemUncheckedCreateWithoutExpertInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutExpertInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutExpertInput, ProblemUncheckedUpdateWithoutExpertInput>
  }

  export type ProblemUpdateManyWithWhereWithoutExpertInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutExpertInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    OR?: ProblemScalarWhereInput[]
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    id?: IntFilter<"Problem"> | number
    expertId?: IntFilter<"Problem"> | number
    title?: StringFilter<"Problem"> | string
    description?: StringNullableFilter<"Problem"> | string | null
  }

  export type ProjectRelationUpsertWithWhereUniqueWithoutExpertInput = {
    where: ProjectRelationWhereUniqueInput
    update: XOR<ProjectRelationUpdateWithoutExpertInput, ProjectRelationUncheckedUpdateWithoutExpertInput>
    create: XOR<ProjectRelationCreateWithoutExpertInput, ProjectRelationUncheckedCreateWithoutExpertInput>
  }

  export type ProjectRelationUpdateWithWhereUniqueWithoutExpertInput = {
    where: ProjectRelationWhereUniqueInput
    data: XOR<ProjectRelationUpdateWithoutExpertInput, ProjectRelationUncheckedUpdateWithoutExpertInput>
  }

  export type ProjectRelationUpdateManyWithWhereWithoutExpertInput = {
    where: ProjectRelationScalarWhereInput
    data: XOR<ProjectRelationUpdateManyMutationInput, ProjectRelationUncheckedUpdateManyWithoutExpertInput>
  }

  export type ProjectRelationScalarWhereInput = {
    AND?: ProjectRelationScalarWhereInput | ProjectRelationScalarWhereInput[]
    OR?: ProjectRelationScalarWhereInput[]
    NOT?: ProjectRelationScalarWhereInput | ProjectRelationScalarWhereInput[]
    projectId?: IntFilter<"ProjectRelation"> | number
    expertId?: IntFilter<"ProjectRelation"> | number
    problemId?: IntNullableFilter<"ProjectRelation"> | number | null
  }

  export type ExpertCreateWithoutPrimary_organizationInput = {
    name: string
    prename: string
    title?: string | null
    email?: string | null
    description?: string | null
    location?: string | null
    network?: string | null
    last_contact?: Date | string
    expert_fields?: ExpertFieldCreateNestedManyWithoutExpertInput
    problems?: ProblemCreateNestedManyWithoutExpertInput
    projectRelations?: ProjectRelationCreateNestedManyWithoutExpertInput
  }

  export type ExpertUncheckedCreateWithoutPrimary_organizationInput = {
    expert_id?: number
    name: string
    prename: string
    title?: string | null
    email?: string | null
    description?: string | null
    location?: string | null
    network?: string | null
    last_contact?: Date | string
    expert_fields?: ExpertFieldUncheckedCreateNestedManyWithoutExpertInput
    problems?: ProblemUncheckedCreateNestedManyWithoutExpertInput
    projectRelations?: ProjectRelationUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertCreateOrConnectWithoutPrimary_organizationInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutPrimary_organizationInput, ExpertUncheckedCreateWithoutPrimary_organizationInput>
  }

  export type ExpertCreateManyPrimary_organizationInputEnvelope = {
    data: ExpertCreateManyPrimary_organizationInput | ExpertCreateManyPrimary_organizationInput[]
    skipDuplicates?: boolean
  }

  export type ExpertUpsertWithWhereUniqueWithoutPrimary_organizationInput = {
    where: ExpertWhereUniqueInput
    update: XOR<ExpertUpdateWithoutPrimary_organizationInput, ExpertUncheckedUpdateWithoutPrimary_organizationInput>
    create: XOR<ExpertCreateWithoutPrimary_organizationInput, ExpertUncheckedCreateWithoutPrimary_organizationInput>
  }

  export type ExpertUpdateWithWhereUniqueWithoutPrimary_organizationInput = {
    where: ExpertWhereUniqueInput
    data: XOR<ExpertUpdateWithoutPrimary_organizationInput, ExpertUncheckedUpdateWithoutPrimary_organizationInput>
  }

  export type ExpertUpdateManyWithWhereWithoutPrimary_organizationInput = {
    where: ExpertScalarWhereInput
    data: XOR<ExpertUpdateManyMutationInput, ExpertUncheckedUpdateManyWithoutPrimary_organizationInput>
  }

  export type ExpertScalarWhereInput = {
    AND?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
    OR?: ExpertScalarWhereInput[]
    NOT?: ExpertScalarWhereInput | ExpertScalarWhereInput[]
    expert_id?: IntFilter<"Expert"> | number
    name?: StringFilter<"Expert"> | string
    prename?: StringFilter<"Expert"> | string
    title?: StringNullableFilter<"Expert"> | string | null
    email?: StringNullableFilter<"Expert"> | string | null
    description?: StringNullableFilter<"Expert"> | string | null
    location?: StringNullableFilter<"Expert"> | string | null
    network?: StringNullableFilter<"Expert"> | string | null
    last_contact?: DateTimeFilter<"Expert"> | Date | string
    primary_organization_id?: IntFilter<"Expert"> | number
  }

  export type ExpertCreateWithoutExpert_fieldsInput = {
    name: string
    prename: string
    title?: string | null
    email?: string | null
    description?: string | null
    location?: string | null
    network?: string | null
    last_contact?: Date | string
    primary_organization: OrganizationCreateNestedOneWithoutExpertsInput
    problems?: ProblemCreateNestedManyWithoutExpertInput
    projectRelations?: ProjectRelationCreateNestedManyWithoutExpertInput
  }

  export type ExpertUncheckedCreateWithoutExpert_fieldsInput = {
    expert_id?: number
    name: string
    prename: string
    title?: string | null
    email?: string | null
    description?: string | null
    location?: string | null
    network?: string | null
    last_contact?: Date | string
    primary_organization_id: number
    problems?: ProblemUncheckedCreateNestedManyWithoutExpertInput
    projectRelations?: ProjectRelationUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertCreateOrConnectWithoutExpert_fieldsInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutExpert_fieldsInput, ExpertUncheckedCreateWithoutExpert_fieldsInput>
  }

  export type ExpertUpsertWithoutExpert_fieldsInput = {
    update: XOR<ExpertUpdateWithoutExpert_fieldsInput, ExpertUncheckedUpdateWithoutExpert_fieldsInput>
    create: XOR<ExpertCreateWithoutExpert_fieldsInput, ExpertUncheckedCreateWithoutExpert_fieldsInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutExpert_fieldsInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutExpert_fieldsInput, ExpertUncheckedUpdateWithoutExpert_fieldsInput>
  }

  export type ExpertUpdateWithoutExpert_fieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
    primary_organization?: OrganizationUpdateOneRequiredWithoutExpertsNestedInput
    problems?: ProblemUpdateManyWithoutExpertNestedInput
    projectRelations?: ProjectRelationUpdateManyWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutExpert_fieldsInput = {
    expert_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
    primary_organization_id?: IntFieldUpdateOperationsInput | number
    problems?: ProblemUncheckedUpdateManyWithoutExpertNestedInput
    projectRelations?: ProjectRelationUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type ProjectRelationCreateWithoutProjectInput = {
    expert: ExpertCreateNestedOneWithoutProjectRelationsInput
    problem?: ProblemCreateNestedOneWithoutProjectRelationsInput
  }

  export type ProjectRelationUncheckedCreateWithoutProjectInput = {
    expertId: number
    problemId?: number | null
  }

  export type ProjectRelationCreateOrConnectWithoutProjectInput = {
    where: ProjectRelationWhereUniqueInput
    create: XOR<ProjectRelationCreateWithoutProjectInput, ProjectRelationUncheckedCreateWithoutProjectInput>
  }

  export type ProjectRelationCreateManyProjectInputEnvelope = {
    data: ProjectRelationCreateManyProjectInput | ProjectRelationCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectRelationUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectRelationWhereUniqueInput
    update: XOR<ProjectRelationUpdateWithoutProjectInput, ProjectRelationUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectRelationCreateWithoutProjectInput, ProjectRelationUncheckedCreateWithoutProjectInput>
  }

  export type ProjectRelationUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectRelationWhereUniqueInput
    data: XOR<ProjectRelationUpdateWithoutProjectInput, ProjectRelationUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectRelationUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectRelationScalarWhereInput
    data: XOR<ProjectRelationUpdateManyMutationInput, ProjectRelationUncheckedUpdateManyWithoutProjectInput>
  }

  export type ExpertCreateWithoutProjectRelationsInput = {
    name: string
    prename: string
    title?: string | null
    email?: string | null
    description?: string | null
    location?: string | null
    network?: string | null
    last_contact?: Date | string
    primary_organization: OrganizationCreateNestedOneWithoutExpertsInput
    expert_fields?: ExpertFieldCreateNestedManyWithoutExpertInput
    problems?: ProblemCreateNestedManyWithoutExpertInput
  }

  export type ExpertUncheckedCreateWithoutProjectRelationsInput = {
    expert_id?: number
    name: string
    prename: string
    title?: string | null
    email?: string | null
    description?: string | null
    location?: string | null
    network?: string | null
    last_contact?: Date | string
    primary_organization_id: number
    expert_fields?: ExpertFieldUncheckedCreateNestedManyWithoutExpertInput
    problems?: ProblemUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertCreateOrConnectWithoutProjectRelationsInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutProjectRelationsInput, ExpertUncheckedCreateWithoutProjectRelationsInput>
  }

  export type ProblemCreateWithoutProjectRelationsInput = {
    title: string
    description?: string | null
    expert: ExpertCreateNestedOneWithoutProblemsInput
  }

  export type ProblemUncheckedCreateWithoutProjectRelationsInput = {
    id?: number
    expertId: number
    title: string
    description?: string | null
  }

  export type ProblemCreateOrConnectWithoutProjectRelationsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutProjectRelationsInput, ProblemUncheckedCreateWithoutProjectRelationsInput>
  }

  export type ProjectCreateWithoutRelationsInput = {
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    state?: string | null
    lastUpdate?: Date | string
    location?: string | null
    websiteUrl?: string | null
    details?: string | null
  }

  export type ProjectUncheckedCreateWithoutRelationsInput = {
    id?: number
    title: string
    description?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    state?: string | null
    lastUpdate?: Date | string
    location?: string | null
    websiteUrl?: string | null
    details?: string | null
  }

  export type ProjectCreateOrConnectWithoutRelationsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutRelationsInput, ProjectUncheckedCreateWithoutRelationsInput>
  }

  export type ExpertUpsertWithoutProjectRelationsInput = {
    update: XOR<ExpertUpdateWithoutProjectRelationsInput, ExpertUncheckedUpdateWithoutProjectRelationsInput>
    create: XOR<ExpertCreateWithoutProjectRelationsInput, ExpertUncheckedCreateWithoutProjectRelationsInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutProjectRelationsInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutProjectRelationsInput, ExpertUncheckedUpdateWithoutProjectRelationsInput>
  }

  export type ExpertUpdateWithoutProjectRelationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
    primary_organization?: OrganizationUpdateOneRequiredWithoutExpertsNestedInput
    expert_fields?: ExpertFieldUpdateManyWithoutExpertNestedInput
    problems?: ProblemUpdateManyWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutProjectRelationsInput = {
    expert_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
    primary_organization_id?: IntFieldUpdateOperationsInput | number
    expert_fields?: ExpertFieldUncheckedUpdateManyWithoutExpertNestedInput
    problems?: ProblemUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type ProblemUpsertWithoutProjectRelationsInput = {
    update: XOR<ProblemUpdateWithoutProjectRelationsInput, ProblemUncheckedUpdateWithoutProjectRelationsInput>
    create: XOR<ProblemCreateWithoutProjectRelationsInput, ProblemUncheckedCreateWithoutProjectRelationsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutProjectRelationsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutProjectRelationsInput, ProblemUncheckedUpdateWithoutProjectRelationsInput>
  }

  export type ProblemUpdateWithoutProjectRelationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expert?: ExpertUpdateOneRequiredWithoutProblemsNestedInput
  }

  export type ProblemUncheckedUpdateWithoutProjectRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUpsertWithoutRelationsInput = {
    update: XOR<ProjectUpdateWithoutRelationsInput, ProjectUncheckedUpdateWithoutRelationsInput>
    create: XOR<ProjectCreateWithoutRelationsInput, ProjectUncheckedCreateWithoutRelationsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutRelationsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutRelationsInput, ProjectUncheckedUpdateWithoutRelationsInput>
  }

  export type ProjectUpdateWithoutRelationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateWithoutRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpertCreateWithoutProblemsInput = {
    name: string
    prename: string
    title?: string | null
    email?: string | null
    description?: string | null
    location?: string | null
    network?: string | null
    last_contact?: Date | string
    primary_organization: OrganizationCreateNestedOneWithoutExpertsInput
    expert_fields?: ExpertFieldCreateNestedManyWithoutExpertInput
    projectRelations?: ProjectRelationCreateNestedManyWithoutExpertInput
  }

  export type ExpertUncheckedCreateWithoutProblemsInput = {
    expert_id?: number
    name: string
    prename: string
    title?: string | null
    email?: string | null
    description?: string | null
    location?: string | null
    network?: string | null
    last_contact?: Date | string
    primary_organization_id: number
    expert_fields?: ExpertFieldUncheckedCreateNestedManyWithoutExpertInput
    projectRelations?: ProjectRelationUncheckedCreateNestedManyWithoutExpertInput
  }

  export type ExpertCreateOrConnectWithoutProblemsInput = {
    where: ExpertWhereUniqueInput
    create: XOR<ExpertCreateWithoutProblemsInput, ExpertUncheckedCreateWithoutProblemsInput>
  }

  export type ProjectRelationCreateWithoutProblemInput = {
    expert: ExpertCreateNestedOneWithoutProjectRelationsInput
    project: ProjectCreateNestedOneWithoutRelationsInput
  }

  export type ProjectRelationUncheckedCreateWithoutProblemInput = {
    projectId: number
    expertId: number
  }

  export type ProjectRelationCreateOrConnectWithoutProblemInput = {
    where: ProjectRelationWhereUniqueInput
    create: XOR<ProjectRelationCreateWithoutProblemInput, ProjectRelationUncheckedCreateWithoutProblemInput>
  }

  export type ProjectRelationCreateManyProblemInputEnvelope = {
    data: ProjectRelationCreateManyProblemInput | ProjectRelationCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type ExpertUpsertWithoutProblemsInput = {
    update: XOR<ExpertUpdateWithoutProblemsInput, ExpertUncheckedUpdateWithoutProblemsInput>
    create: XOR<ExpertCreateWithoutProblemsInput, ExpertUncheckedCreateWithoutProblemsInput>
    where?: ExpertWhereInput
  }

  export type ExpertUpdateToOneWithWhereWithoutProblemsInput = {
    where?: ExpertWhereInput
    data: XOR<ExpertUpdateWithoutProblemsInput, ExpertUncheckedUpdateWithoutProblemsInput>
  }

  export type ExpertUpdateWithoutProblemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
    primary_organization?: OrganizationUpdateOneRequiredWithoutExpertsNestedInput
    expert_fields?: ExpertFieldUpdateManyWithoutExpertNestedInput
    projectRelations?: ProjectRelationUpdateManyWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutProblemsInput = {
    expert_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
    primary_organization_id?: IntFieldUpdateOperationsInput | number
    expert_fields?: ExpertFieldUncheckedUpdateManyWithoutExpertNestedInput
    projectRelations?: ProjectRelationUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type ProjectRelationUpsertWithWhereUniqueWithoutProblemInput = {
    where: ProjectRelationWhereUniqueInput
    update: XOR<ProjectRelationUpdateWithoutProblemInput, ProjectRelationUncheckedUpdateWithoutProblemInput>
    create: XOR<ProjectRelationCreateWithoutProblemInput, ProjectRelationUncheckedCreateWithoutProblemInput>
  }

  export type ProjectRelationUpdateWithWhereUniqueWithoutProblemInput = {
    where: ProjectRelationWhereUniqueInput
    data: XOR<ProjectRelationUpdateWithoutProblemInput, ProjectRelationUncheckedUpdateWithoutProblemInput>
  }

  export type ProjectRelationUpdateManyWithWhereWithoutProblemInput = {
    where: ProjectRelationScalarWhereInput
    data: XOR<ProjectRelationUpdateManyMutationInput, ProjectRelationUncheckedUpdateManyWithoutProblemInput>
  }

  export type ExpertFieldCreateManyExpertInput = {
    id?: number
    field: string
    description?: string | null
    economic?: boolean
    science?: boolean
    social?: boolean
  }

  export type ProblemCreateManyExpertInput = {
    id?: number
    title: string
    description?: string | null
  }

  export type ProjectRelationCreateManyExpertInput = {
    projectId: number
    problemId?: number | null
  }

  export type ExpertFieldUpdateWithoutExpertInput = {
    field?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    economic?: BoolFieldUpdateOperationsInput | boolean
    science?: BoolFieldUpdateOperationsInput | boolean
    social?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpertFieldUncheckedUpdateWithoutExpertInput = {
    id?: IntFieldUpdateOperationsInput | number
    field?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    economic?: BoolFieldUpdateOperationsInput | boolean
    science?: BoolFieldUpdateOperationsInput | boolean
    social?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExpertFieldUncheckedUpdateManyWithoutExpertInput = {
    id?: IntFieldUpdateOperationsInput | number
    field?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    economic?: BoolFieldUpdateOperationsInput | boolean
    science?: BoolFieldUpdateOperationsInput | boolean
    social?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProblemUpdateWithoutExpertInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projectRelations?: ProjectRelationUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutExpertInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    projectRelations?: ProjectRelationUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutExpertInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectRelationUpdateWithoutExpertInput = {
    problem?: ProblemUpdateOneWithoutProjectRelationsNestedInput
    project?: ProjectUpdateOneRequiredWithoutRelationsNestedInput
  }

  export type ProjectRelationUncheckedUpdateWithoutExpertInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    problemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectRelationUncheckedUpdateManyWithoutExpertInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    problemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpertCreateManyPrimary_organizationInput = {
    expert_id?: number
    name: string
    prename: string
    title?: string | null
    email?: string | null
    description?: string | null
    location?: string | null
    network?: string | null
    last_contact?: Date | string
  }

  export type ExpertUpdateWithoutPrimary_organizationInput = {
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
    expert_fields?: ExpertFieldUpdateManyWithoutExpertNestedInput
    problems?: ProblemUpdateManyWithoutExpertNestedInput
    projectRelations?: ProjectRelationUpdateManyWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateWithoutPrimary_organizationInput = {
    expert_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
    expert_fields?: ExpertFieldUncheckedUpdateManyWithoutExpertNestedInput
    problems?: ProblemUncheckedUpdateManyWithoutExpertNestedInput
    projectRelations?: ProjectRelationUncheckedUpdateManyWithoutExpertNestedInput
  }

  export type ExpertUncheckedUpdateManyWithoutPrimary_organizationInput = {
    expert_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    prename?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    network?: NullableStringFieldUpdateOperationsInput | string | null
    last_contact?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectRelationCreateManyProjectInput = {
    expertId: number
    problemId?: number | null
  }

  export type ProjectRelationUpdateWithoutProjectInput = {
    expert?: ExpertUpdateOneRequiredWithoutProjectRelationsNestedInput
    problem?: ProblemUpdateOneWithoutProjectRelationsNestedInput
  }

  export type ProjectRelationUncheckedUpdateWithoutProjectInput = {
    expertId?: IntFieldUpdateOperationsInput | number
    problemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectRelationUncheckedUpdateManyWithoutProjectInput = {
    expertId?: IntFieldUpdateOperationsInput | number
    problemId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectRelationCreateManyProblemInput = {
    projectId: number
    expertId: number
  }

  export type ProjectRelationUpdateWithoutProblemInput = {
    expert?: ExpertUpdateOneRequiredWithoutProjectRelationsNestedInput
    project?: ProjectUpdateOneRequiredWithoutRelationsNestedInput
  }

  export type ProjectRelationUncheckedUpdateWithoutProblemInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectRelationUncheckedUpdateManyWithoutProblemInput = {
    projectId?: IntFieldUpdateOperationsInput | number
    expertId?: IntFieldUpdateOperationsInput | number
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