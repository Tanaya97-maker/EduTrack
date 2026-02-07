
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
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Faculty
 * 
 */
export type Faculty = $Result.DefaultSelection<Prisma.$FacultyPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model FacultySubject
 * 
 */
export type FacultySubject = $Result.DefaultSelection<Prisma.$FacultySubjectPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Timetable
 * 
 */
export type Timetable = $Result.DefaultSelection<Prisma.$TimetablePayload>
/**
 * Model Holiday
 * 
 */
export type Holiday = $Result.DefaultSelection<Prisma.$HolidayPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model FacultyAttendance
 * 
 */
export type FacultyAttendance = $Result.DefaultSelection<Prisma.$FacultyAttendancePayload>
/**
 * Model FacultyLeave
 * 
 */
export type FacultyLeave = $Result.DefaultSelection<Prisma.$FacultyLeavePayload>
/**
 * Model FacultyNote
 * 
 */
export type FacultyNote = $Result.DefaultSelection<Prisma.$FacultyNotePayload>
/**
 * Model FacultyAnnouncement
 * 
 */
export type FacultyAnnouncement = $Result.DefaultSelection<Prisma.$FacultyAnnouncementPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs>;

  /**
   * `prisma.faculty`: Exposes CRUD operations for the **Faculty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faculties
    * const faculties = await prisma.faculty.findMany()
    * ```
    */
  get faculty(): Prisma.FacultyDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs>;

  /**
   * `prisma.facultySubject`: Exposes CRUD operations for the **FacultySubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultySubjects
    * const facultySubjects = await prisma.facultySubject.findMany()
    * ```
    */
  get facultySubject(): Prisma.FacultySubjectDelegate<ExtArgs>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs>;

  /**
   * `prisma.timetable`: Exposes CRUD operations for the **Timetable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Timetables
    * const timetables = await prisma.timetable.findMany()
    * ```
    */
  get timetable(): Prisma.TimetableDelegate<ExtArgs>;

  /**
   * `prisma.holiday`: Exposes CRUD operations for the **Holiday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holidays
    * const holidays = await prisma.holiday.findMany()
    * ```
    */
  get holiday(): Prisma.HolidayDelegate<ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs>;

  /**
   * `prisma.facultyAttendance`: Exposes CRUD operations for the **FacultyAttendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultyAttendances
    * const facultyAttendances = await prisma.facultyAttendance.findMany()
    * ```
    */
  get facultyAttendance(): Prisma.FacultyAttendanceDelegate<ExtArgs>;

  /**
   * `prisma.facultyLeave`: Exposes CRUD operations for the **FacultyLeave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultyLeaves
    * const facultyLeaves = await prisma.facultyLeave.findMany()
    * ```
    */
  get facultyLeave(): Prisma.FacultyLeaveDelegate<ExtArgs>;

  /**
   * `prisma.facultyNote`: Exposes CRUD operations for the **FacultyNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultyNotes
    * const facultyNotes = await prisma.facultyNote.findMany()
    * ```
    */
  get facultyNote(): Prisma.FacultyNoteDelegate<ExtArgs>;

  /**
   * `prisma.facultyAnnouncement`: Exposes CRUD operations for the **FacultyAnnouncement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FacultyAnnouncements
    * const facultyAnnouncements = await prisma.facultyAnnouncement.findMany()
    * ```
    */
  get facultyAnnouncement(): Prisma.FacultyAnnouncementDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Department: 'Department',
    Faculty: 'Faculty',
    Student: 'Student',
    Subject: 'Subject',
    FacultySubject: 'FacultySubject',
    Enrollment: 'Enrollment',
    Timetable: 'Timetable',
    Holiday: 'Holiday',
    Attendance: 'Attendance',
    FacultyAttendance: 'FacultyAttendance',
    FacultyLeave: 'FacultyLeave',
    FacultyNote: 'FacultyNote',
    FacultyAnnouncement: 'FacultyAnnouncement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "department" | "faculty" | "student" | "subject" | "facultySubject" | "enrollment" | "timetable" | "holiday" | "attendance" | "facultyAttendance" | "facultyLeave" | "facultyNote" | "facultyAnnouncement"
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
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Faculty: {
        payload: Prisma.$FacultyPayload<ExtArgs>
        fields: Prisma.FacultyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          findFirst: {
            args: Prisma.FacultyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          findMany: {
            args: Prisma.FacultyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>[]
          }
          create: {
            args: Prisma.FacultyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          createMany: {
            args: Prisma.FacultyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>[]
          }
          delete: {
            args: Prisma.FacultyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          update: {
            args: Prisma.FacultyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          deleteMany: {
            args: Prisma.FacultyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacultyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyPayload>
          }
          aggregate: {
            args: Prisma.FacultyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaculty>
          }
          groupBy: {
            args: Prisma.FacultyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      FacultySubject: {
        payload: Prisma.$FacultySubjectPayload<ExtArgs>
        fields: Prisma.FacultySubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultySubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultySubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>
          }
          findFirst: {
            args: Prisma.FacultySubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultySubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>
          }
          findMany: {
            args: Prisma.FacultySubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>[]
          }
          create: {
            args: Prisma.FacultySubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>
          }
          createMany: {
            args: Prisma.FacultySubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultySubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>[]
          }
          delete: {
            args: Prisma.FacultySubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>
          }
          update: {
            args: Prisma.FacultySubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>
          }
          deleteMany: {
            args: Prisma.FacultySubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultySubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacultySubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultySubjectPayload>
          }
          aggregate: {
            args: Prisma.FacultySubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultySubject>
          }
          groupBy: {
            args: Prisma.FacultySubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultySubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultySubjectCountArgs<ExtArgs>
            result: $Utils.Optional<FacultySubjectCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Timetable: {
        payload: Prisma.$TimetablePayload<ExtArgs>
        fields: Prisma.TimetableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimetableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimetableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          findFirst: {
            args: Prisma.TimetableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimetableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          findMany: {
            args: Prisma.TimetableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>[]
          }
          create: {
            args: Prisma.TimetableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          createMany: {
            args: Prisma.TimetableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimetableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>[]
          }
          delete: {
            args: Prisma.TimetableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          update: {
            args: Prisma.TimetableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          deleteMany: {
            args: Prisma.TimetableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimetableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TimetableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimetablePayload>
          }
          aggregate: {
            args: Prisma.TimetableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTimetable>
          }
          groupBy: {
            args: Prisma.TimetableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimetableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimetableCountArgs<ExtArgs>
            result: $Utils.Optional<TimetableCountAggregateOutputType> | number
          }
        }
      }
      Holiday: {
        payload: Prisma.$HolidayPayload<ExtArgs>
        fields: Prisma.HolidayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HolidayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HolidayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findFirst: {
            args: Prisma.HolidayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HolidayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          findMany: {
            args: Prisma.HolidayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          create: {
            args: Prisma.HolidayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          createMany: {
            args: Prisma.HolidayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HolidayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>[]
          }
          delete: {
            args: Prisma.HolidayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          update: {
            args: Prisma.HolidayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          deleteMany: {
            args: Prisma.HolidayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HolidayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HolidayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HolidayPayload>
          }
          aggregate: {
            args: Prisma.HolidayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoliday>
          }
          groupBy: {
            args: Prisma.HolidayGroupByArgs<ExtArgs>
            result: $Utils.Optional<HolidayGroupByOutputType>[]
          }
          count: {
            args: Prisma.HolidayCountArgs<ExtArgs>
            result: $Utils.Optional<HolidayCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      FacultyAttendance: {
        payload: Prisma.$FacultyAttendancePayload<ExtArgs>
        fields: Prisma.FacultyAttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyAttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyAttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAttendancePayload>
          }
          findFirst: {
            args: Prisma.FacultyAttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyAttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAttendancePayload>
          }
          findMany: {
            args: Prisma.FacultyAttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAttendancePayload>[]
          }
          create: {
            args: Prisma.FacultyAttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAttendancePayload>
          }
          createMany: {
            args: Prisma.FacultyAttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultyAttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAttendancePayload>[]
          }
          delete: {
            args: Prisma.FacultyAttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAttendancePayload>
          }
          update: {
            args: Prisma.FacultyAttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAttendancePayload>
          }
          deleteMany: {
            args: Prisma.FacultyAttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyAttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacultyAttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAttendancePayload>
          }
          aggregate: {
            args: Prisma.FacultyAttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultyAttendance>
          }
          groupBy: {
            args: Prisma.FacultyAttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyAttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyAttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyAttendanceCountAggregateOutputType> | number
          }
        }
      }
      FacultyLeave: {
        payload: Prisma.$FacultyLeavePayload<ExtArgs>
        fields: Prisma.FacultyLeaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyLeaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyLeavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyLeaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyLeavePayload>
          }
          findFirst: {
            args: Prisma.FacultyLeaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyLeavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyLeaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyLeavePayload>
          }
          findMany: {
            args: Prisma.FacultyLeaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyLeavePayload>[]
          }
          create: {
            args: Prisma.FacultyLeaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyLeavePayload>
          }
          createMany: {
            args: Prisma.FacultyLeaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultyLeaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyLeavePayload>[]
          }
          delete: {
            args: Prisma.FacultyLeaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyLeavePayload>
          }
          update: {
            args: Prisma.FacultyLeaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyLeavePayload>
          }
          deleteMany: {
            args: Prisma.FacultyLeaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyLeaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacultyLeaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyLeavePayload>
          }
          aggregate: {
            args: Prisma.FacultyLeaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultyLeave>
          }
          groupBy: {
            args: Prisma.FacultyLeaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyLeaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyLeaveCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyLeaveCountAggregateOutputType> | number
          }
        }
      }
      FacultyNote: {
        payload: Prisma.$FacultyNotePayload<ExtArgs>
        fields: Prisma.FacultyNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyNotePayload>
          }
          findFirst: {
            args: Prisma.FacultyNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyNotePayload>
          }
          findMany: {
            args: Prisma.FacultyNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyNotePayload>[]
          }
          create: {
            args: Prisma.FacultyNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyNotePayload>
          }
          createMany: {
            args: Prisma.FacultyNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultyNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyNotePayload>[]
          }
          delete: {
            args: Prisma.FacultyNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyNotePayload>
          }
          update: {
            args: Prisma.FacultyNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyNotePayload>
          }
          deleteMany: {
            args: Prisma.FacultyNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacultyNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyNotePayload>
          }
          aggregate: {
            args: Prisma.FacultyNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultyNote>
          }
          groupBy: {
            args: Prisma.FacultyNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyNoteCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyNoteCountAggregateOutputType> | number
          }
        }
      }
      FacultyAnnouncement: {
        payload: Prisma.$FacultyAnnouncementPayload<ExtArgs>
        fields: Prisma.FacultyAnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FacultyAnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FacultyAnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAnnouncementPayload>
          }
          findFirst: {
            args: Prisma.FacultyAnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FacultyAnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAnnouncementPayload>
          }
          findMany: {
            args: Prisma.FacultyAnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAnnouncementPayload>[]
          }
          create: {
            args: Prisma.FacultyAnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAnnouncementPayload>
          }
          createMany: {
            args: Prisma.FacultyAnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FacultyAnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAnnouncementPayload>[]
          }
          delete: {
            args: Prisma.FacultyAnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAnnouncementPayload>
          }
          update: {
            args: Prisma.FacultyAnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.FacultyAnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FacultyAnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FacultyAnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FacultyAnnouncementPayload>
          }
          aggregate: {
            args: Prisma.FacultyAnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFacultyAnnouncement>
          }
          groupBy: {
            args: Prisma.FacultyAnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyAnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.FacultyAnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyAnnouncementCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    faculty: number
    students: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | UserCountOutputTypeCountFacultyArgs
    students?: boolean | UserCountOutputTypeCountStudentsArgs
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
  export type UserCountOutputTypeCountFacultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    faculty: number
    students: number
    subjects: number
    announcements: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | DepartmentCountOutputTypeCountFacultyArgs
    students?: boolean | DepartmentCountOutputTypeCountStudentsArgs
    subjects?: boolean | DepartmentCountOutputTypeCountSubjectsArgs
    announcements?: boolean | DepartmentCountOutputTypeCountAnnouncementsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountFacultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyAnnouncementWhereInput
  }


  /**
   * Count Type FacultyCountOutputType
   */

  export type FacultyCountOutputType = {
    attendance: number
    announcements: number
    facultyAttendance: number
    leaves: number
    notes: number
    faculty_subjects: number
  }

  export type FacultyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | FacultyCountOutputTypeCountAttendanceArgs
    announcements?: boolean | FacultyCountOutputTypeCountAnnouncementsArgs
    facultyAttendance?: boolean | FacultyCountOutputTypeCountFacultyAttendanceArgs
    leaves?: boolean | FacultyCountOutputTypeCountLeavesArgs
    notes?: boolean | FacultyCountOutputTypeCountNotesArgs
    faculty_subjects?: boolean | FacultyCountOutputTypeCountFaculty_subjectsArgs
  }

  // Custom InputTypes
  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCountOutputType
     */
    select?: FacultyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyAnnouncementWhereInput
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountFacultyAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyAttendanceWhereInput
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyLeaveWhereInput
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyNoteWhereInput
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountFaculty_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultySubjectWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    attendance: number
    enrollments: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | StudentCountOutputTypeCountAttendanceArgs
    enrollments?: boolean | StudentCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    attendance: number
    enrollments: number
    announcements: number
    timetable: number
    faculty_subjects: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | SubjectCountOutputTypeCountAttendanceArgs
    enrollments?: boolean | SubjectCountOutputTypeCountEnrollmentsArgs
    announcements?: boolean | SubjectCountOutputTypeCountAnnouncementsArgs
    timetable?: boolean | SubjectCountOutputTypeCountTimetableArgs
    faculty_subjects?: boolean | SubjectCountOutputTypeCountFaculty_subjectsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyAnnouncementWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTimetableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimetableWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountFaculty_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultySubjectWhereInput
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
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    password_hash: string | null
    user_type: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    password_hash: string | null
    user_type: string | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    email: number
    password_hash: number
    user_type: number
    is_active: number
    created_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    email?: true
    password_hash?: true
    user_type?: true
    is_active?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    email?: true
    password_hash?: true
    user_type?: true
    is_active?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    email?: true
    password_hash?: true
    user_type?: true
    is_active?: true
    created_at?: true
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
    user_id: number
    email: string
    password_hash: string
    user_type: string
    is_active: boolean | null
    created_at: Date | null
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
    user_id?: boolean
    email?: boolean
    password_hash?: boolean
    user_type?: boolean
    is_active?: boolean
    created_at?: boolean
    faculty?: boolean | User$facultyArgs<ExtArgs>
    students?: boolean | User$studentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    password_hash?: boolean
    user_type?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    email?: boolean
    password_hash?: boolean
    user_type?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | User$facultyArgs<ExtArgs>
    students?: boolean | User$studentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      faculty: Prisma.$FacultyPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      password_hash: string
      user_type: string
      is_active: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({ 
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculty<T extends User$facultyArgs<ExtArgs> = {}>(args?: Subset<T, User$facultyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findMany"> | Null>
    students<T extends User$studentsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly user_id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly user_type: FieldRef<"User", 'String'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
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
  }

  /**
   * User.faculty
   */
  export type User$facultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    where?: FacultyWhereInput
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    cursor?: FacultyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * User.students
   */
  export type User$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    dept_id: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    dept_id: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    dept_id: number | null
    dept_name: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    dept_id: number | null
    dept_name: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    dept_id: number
    dept_name: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    dept_id?: true
  }

  export type DepartmentSumAggregateInputType = {
    dept_id?: true
  }

  export type DepartmentMinAggregateInputType = {
    dept_id?: true
    dept_name?: true
  }

  export type DepartmentMaxAggregateInputType = {
    dept_id?: true
    dept_name?: true
  }

  export type DepartmentCountAggregateInputType = {
    dept_id?: true
    dept_name?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    dept_id: number
    dept_name: string
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dept_id?: boolean
    dept_name?: boolean
    faculty?: boolean | Department$facultyArgs<ExtArgs>
    students?: boolean | Department$studentsArgs<ExtArgs>
    subjects?: boolean | Department$subjectsArgs<ExtArgs>
    announcements?: boolean | Department$announcementsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dept_id?: boolean
    dept_name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    dept_id?: boolean
    dept_name?: boolean
  }

  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | Department$facultyArgs<ExtArgs>
    students?: boolean | Department$studentsArgs<ExtArgs>
    subjects?: boolean | Department$subjectsArgs<ExtArgs>
    announcements?: boolean | Department$announcementsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      faculty: Prisma.$FacultyPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      subjects: Prisma.$SubjectPayload<ExtArgs>[]
      announcements: Prisma.$FacultyAnnouncementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      dept_id: number
      dept_name: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `dept_id`
     * const departmentWithDept_idOnly = await prisma.department.findMany({ select: { dept_id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `dept_id`
     * const departmentWithDept_idOnly = await prisma.department.createManyAndReturn({ 
     *   select: { dept_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculty<T extends Department$facultyArgs<ExtArgs> = {}>(args?: Subset<T, Department$facultyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findMany"> | Null>
    students<T extends Department$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Department$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany"> | Null>
    subjects<T extends Department$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Department$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany"> | Null>
    announcements<T extends Department$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, Department$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Department model
   */ 
  interface DepartmentFieldRefs {
    readonly dept_id: FieldRef<"Department", 'Int'>
    readonly dept_name: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
  }

  /**
   * Department.faculty
   */
  export type Department$facultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    where?: FacultyWhereInput
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    cursor?: FacultyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * Department.students
   */
  export type Department$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Department.subjects
   */
  export type Department$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    cursor?: SubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Department.announcements
   */
  export type Department$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
    where?: FacultyAnnouncementWhereInput
    orderBy?: FacultyAnnouncementOrderByWithRelationInput | FacultyAnnouncementOrderByWithRelationInput[]
    cursor?: FacultyAnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyAnnouncementScalarFieldEnum | FacultyAnnouncementScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Faculty
   */

  export type AggregateFaculty = {
    _count: FacultyCountAggregateOutputType | null
    _avg: FacultyAvgAggregateOutputType | null
    _sum: FacultySumAggregateOutputType | null
    _min: FacultyMinAggregateOutputType | null
    _max: FacultyMaxAggregateOutputType | null
  }

  export type FacultyAvgAggregateOutputType = {
    faculty_id: number | null
    user_id: number | null
    dept_id: number | null
  }

  export type FacultySumAggregateOutputType = {
    faculty_id: number | null
    user_id: number | null
    dept_id: number | null
  }

  export type FacultyMinAggregateOutputType = {
    faculty_id: number | null
    user_id: number | null
    faculty_name: string | null
    email: string | null
    dept_id: number | null
  }

  export type FacultyMaxAggregateOutputType = {
    faculty_id: number | null
    user_id: number | null
    faculty_name: string | null
    email: string | null
    dept_id: number | null
  }

  export type FacultyCountAggregateOutputType = {
    faculty_id: number
    user_id: number
    faculty_name: number
    email: number
    dept_id: number
    _all: number
  }


  export type FacultyAvgAggregateInputType = {
    faculty_id?: true
    user_id?: true
    dept_id?: true
  }

  export type FacultySumAggregateInputType = {
    faculty_id?: true
    user_id?: true
    dept_id?: true
  }

  export type FacultyMinAggregateInputType = {
    faculty_id?: true
    user_id?: true
    faculty_name?: true
    email?: true
    dept_id?: true
  }

  export type FacultyMaxAggregateInputType = {
    faculty_id?: true
    user_id?: true
    faculty_name?: true
    email?: true
    dept_id?: true
  }

  export type FacultyCountAggregateInputType = {
    faculty_id?: true
    user_id?: true
    faculty_name?: true
    email?: true
    dept_id?: true
    _all?: true
  }

  export type FacultyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faculty to aggregate.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faculties
    **/
    _count?: true | FacultyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacultyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacultySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyMaxAggregateInputType
  }

  export type GetFacultyAggregateType<T extends FacultyAggregateArgs> = {
        [P in keyof T & keyof AggregateFaculty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaculty[P]>
      : GetScalarType<T[P], AggregateFaculty[P]>
  }




  export type FacultyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyWhereInput
    orderBy?: FacultyOrderByWithAggregationInput | FacultyOrderByWithAggregationInput[]
    by: FacultyScalarFieldEnum[] | FacultyScalarFieldEnum
    having?: FacultyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyCountAggregateInputType | true
    _avg?: FacultyAvgAggregateInputType
    _sum?: FacultySumAggregateInputType
    _min?: FacultyMinAggregateInputType
    _max?: FacultyMaxAggregateInputType
  }

  export type FacultyGroupByOutputType = {
    faculty_id: number
    user_id: number | null
    faculty_name: string
    email: string | null
    dept_id: number | null
    _count: FacultyCountAggregateOutputType | null
    _avg: FacultyAvgAggregateOutputType | null
    _sum: FacultySumAggregateOutputType | null
    _min: FacultyMinAggregateOutputType | null
    _max: FacultyMaxAggregateOutputType | null
  }

  type GetFacultyGroupByPayload<T extends FacultyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyGroupByOutputType[P]>
        }
      >
    >


  export type FacultySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    faculty_id?: boolean
    user_id?: boolean
    faculty_name?: boolean
    email?: boolean
    dept_id?: boolean
    Department?: boolean | Faculty$DepartmentArgs<ExtArgs>
    attendance?: boolean | Faculty$attendanceArgs<ExtArgs>
    User?: boolean | Faculty$UserArgs<ExtArgs>
    announcements?: boolean | Faculty$announcementsArgs<ExtArgs>
    facultyAttendance?: boolean | Faculty$facultyAttendanceArgs<ExtArgs>
    leaves?: boolean | Faculty$leavesArgs<ExtArgs>
    notes?: boolean | Faculty$notesArgs<ExtArgs>
    faculty_subjects?: boolean | Faculty$faculty_subjectsArgs<ExtArgs>
    _count?: boolean | FacultyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faculty"]>

  export type FacultySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    faculty_id?: boolean
    user_id?: boolean
    faculty_name?: boolean
    email?: boolean
    dept_id?: boolean
    Department?: boolean | Faculty$DepartmentArgs<ExtArgs>
    User?: boolean | Faculty$UserArgs<ExtArgs>
  }, ExtArgs["result"]["faculty"]>

  export type FacultySelectScalar = {
    faculty_id?: boolean
    user_id?: boolean
    faculty_name?: boolean
    email?: boolean
    dept_id?: boolean
  }

  export type FacultyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | Faculty$DepartmentArgs<ExtArgs>
    attendance?: boolean | Faculty$attendanceArgs<ExtArgs>
    User?: boolean | Faculty$UserArgs<ExtArgs>
    announcements?: boolean | Faculty$announcementsArgs<ExtArgs>
    facultyAttendance?: boolean | Faculty$facultyAttendanceArgs<ExtArgs>
    leaves?: boolean | Faculty$leavesArgs<ExtArgs>
    notes?: boolean | Faculty$notesArgs<ExtArgs>
    faculty_subjects?: boolean | Faculty$faculty_subjectsArgs<ExtArgs>
    _count?: boolean | FacultyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FacultyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | Faculty$DepartmentArgs<ExtArgs>
    User?: boolean | Faculty$UserArgs<ExtArgs>
  }

  export type $FacultyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faculty"
    objects: {
      Department: Prisma.$DepartmentPayload<ExtArgs> | null
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
      announcements: Prisma.$FacultyAnnouncementPayload<ExtArgs>[]
      facultyAttendance: Prisma.$FacultyAttendancePayload<ExtArgs>[]
      leaves: Prisma.$FacultyLeavePayload<ExtArgs>[]
      notes: Prisma.$FacultyNotePayload<ExtArgs>[]
      faculty_subjects: Prisma.$FacultySubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      faculty_id: number
      user_id: number | null
      faculty_name: string
      email: string | null
      dept_id: number | null
    }, ExtArgs["result"]["faculty"]>
    composites: {}
  }

  type FacultyGetPayload<S extends boolean | null | undefined | FacultyDefaultArgs> = $Result.GetResult<Prisma.$FacultyPayload, S>

  type FacultyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FacultyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FacultyCountAggregateInputType | true
    }

  export interface FacultyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faculty'], meta: { name: 'Faculty' } }
    /**
     * Find zero or one Faculty that matches the filter.
     * @param {FacultyFindUniqueArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyFindUniqueArgs>(args: SelectSubset<T, FacultyFindUniqueArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Faculty that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FacultyFindUniqueOrThrowArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Faculty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindFirstArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyFindFirstArgs>(args?: SelectSubset<T, FacultyFindFirstArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Faculty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindFirstOrThrowArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Faculties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faculties
     * const faculties = await prisma.faculty.findMany()
     * 
     * // Get first 10 Faculties
     * const faculties = await prisma.faculty.findMany({ take: 10 })
     * 
     * // Only select the `faculty_id`
     * const facultyWithFaculty_idOnly = await prisma.faculty.findMany({ select: { faculty_id: true } })
     * 
     */
    findMany<T extends FacultyFindManyArgs>(args?: SelectSubset<T, FacultyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Faculty.
     * @param {FacultyCreateArgs} args - Arguments to create a Faculty.
     * @example
     * // Create one Faculty
     * const Faculty = await prisma.faculty.create({
     *   data: {
     *     // ... data to create a Faculty
     *   }
     * })
     * 
     */
    create<T extends FacultyCreateArgs>(args: SelectSubset<T, FacultyCreateArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Faculties.
     * @param {FacultyCreateManyArgs} args - Arguments to create many Faculties.
     * @example
     * // Create many Faculties
     * const faculty = await prisma.faculty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyCreateManyArgs>(args?: SelectSubset<T, FacultyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faculties and returns the data saved in the database.
     * @param {FacultyCreateManyAndReturnArgs} args - Arguments to create many Faculties.
     * @example
     * // Create many Faculties
     * const faculty = await prisma.faculty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faculties and only return the `faculty_id`
     * const facultyWithFaculty_idOnly = await prisma.faculty.createManyAndReturn({ 
     *   select: { faculty_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultyCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Faculty.
     * @param {FacultyDeleteArgs} args - Arguments to delete one Faculty.
     * @example
     * // Delete one Faculty
     * const Faculty = await prisma.faculty.delete({
     *   where: {
     *     // ... filter to delete one Faculty
     *   }
     * })
     * 
     */
    delete<T extends FacultyDeleteArgs>(args: SelectSubset<T, FacultyDeleteArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Faculty.
     * @param {FacultyUpdateArgs} args - Arguments to update one Faculty.
     * @example
     * // Update one Faculty
     * const faculty = await prisma.faculty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyUpdateArgs>(args: SelectSubset<T, FacultyUpdateArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Faculties.
     * @param {FacultyDeleteManyArgs} args - Arguments to filter Faculties to delete.
     * @example
     * // Delete a few Faculties
     * const { count } = await prisma.faculty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyDeleteManyArgs>(args?: SelectSubset<T, FacultyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faculties
     * const faculty = await prisma.faculty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyUpdateManyArgs>(args: SelectSubset<T, FacultyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Faculty.
     * @param {FacultyUpsertArgs} args - Arguments to update or create a Faculty.
     * @example
     * // Update or create a Faculty
     * const faculty = await prisma.faculty.upsert({
     *   create: {
     *     // ... data to create a Faculty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faculty we want to update
     *   }
     * })
     */
    upsert<T extends FacultyUpsertArgs>(args: SelectSubset<T, FacultyUpsertArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Faculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyCountArgs} args - Arguments to filter Faculties to count.
     * @example
     * // Count the number of Faculties
     * const count = await prisma.faculty.count({
     *   where: {
     *     // ... the filter for the Faculties we want to count
     *   }
     * })
    **/
    count<T extends FacultyCountArgs>(
      args?: Subset<T, FacultyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultyAggregateArgs>(args: Subset<T, FacultyAggregateArgs>): Prisma.PrismaPromise<GetFacultyAggregateType<T>>

    /**
     * Group by Faculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyGroupByArgs} args - Group by arguments.
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
      T extends FacultyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyGroupByArgs['orderBy'] }
        : { orderBy?: FacultyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faculty model
   */
  readonly fields: FacultyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faculty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Department<T extends Faculty$DepartmentArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$DepartmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    attendance<T extends Faculty$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany"> | Null>
    User<T extends Faculty$UserArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    announcements<T extends Faculty$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "findMany"> | Null>
    facultyAttendance<T extends Faculty$facultyAttendanceArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$facultyAttendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyAttendancePayload<ExtArgs>, T, "findMany"> | Null>
    leaves<T extends Faculty$leavesArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyLeavePayload<ExtArgs>, T, "findMany"> | Null>
    notes<T extends Faculty$notesArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyNotePayload<ExtArgs>, T, "findMany"> | Null>
    faculty_subjects<T extends Faculty$faculty_subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Faculty$faculty_subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Faculty model
   */ 
  interface FacultyFieldRefs {
    readonly faculty_id: FieldRef<"Faculty", 'Int'>
    readonly user_id: FieldRef<"Faculty", 'Int'>
    readonly faculty_name: FieldRef<"Faculty", 'String'>
    readonly email: FieldRef<"Faculty", 'String'>
    readonly dept_id: FieldRef<"Faculty", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Faculty findUnique
   */
  export type FacultyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty findUniqueOrThrow
   */
  export type FacultyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty findFirst
   */
  export type FacultyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculties.
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculties.
     */
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * Faculty findFirstOrThrow
   */
  export type FacultyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculty to fetch.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faculties.
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faculties.
     */
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * Faculty findMany
   */
  export type FacultyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter, which Faculties to fetch.
     */
    where?: FacultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faculties to fetch.
     */
    orderBy?: FacultyOrderByWithRelationInput | FacultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faculties.
     */
    cursor?: FacultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faculties.
     */
    skip?: number
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * Faculty create
   */
  export type FacultyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * The data needed to create a Faculty.
     */
    data: XOR<FacultyCreateInput, FacultyUncheckedCreateInput>
  }

  /**
   * Faculty createMany
   */
  export type FacultyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faculties.
     */
    data: FacultyCreateManyInput | FacultyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faculty createManyAndReturn
   */
  export type FacultyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Faculties.
     */
    data: FacultyCreateManyInput | FacultyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Faculty update
   */
  export type FacultyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * The data needed to update a Faculty.
     */
    data: XOR<FacultyUpdateInput, FacultyUncheckedUpdateInput>
    /**
     * Choose, which Faculty to update.
     */
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty updateMany
   */
  export type FacultyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faculties.
     */
    data: XOR<FacultyUpdateManyMutationInput, FacultyUncheckedUpdateManyInput>
    /**
     * Filter which Faculties to update
     */
    where?: FacultyWhereInput
  }

  /**
   * Faculty upsert
   */
  export type FacultyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * The filter to search for the Faculty to update in case it exists.
     */
    where: FacultyWhereUniqueInput
    /**
     * In case the Faculty found by the `where` argument doesn't exist, create a new Faculty with this data.
     */
    create: XOR<FacultyCreateInput, FacultyUncheckedCreateInput>
    /**
     * In case the Faculty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyUpdateInput, FacultyUncheckedUpdateInput>
  }

  /**
   * Faculty delete
   */
  export type FacultyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    /**
     * Filter which Faculty to delete.
     */
    where: FacultyWhereUniqueInput
  }

  /**
   * Faculty deleteMany
   */
  export type FacultyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faculties to delete
     */
    where?: FacultyWhereInput
  }

  /**
   * Faculty.Department
   */
  export type Faculty$DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Faculty.attendance
   */
  export type Faculty$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Faculty.User
   */
  export type Faculty$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Faculty.announcements
   */
  export type Faculty$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
    where?: FacultyAnnouncementWhereInput
    orderBy?: FacultyAnnouncementOrderByWithRelationInput | FacultyAnnouncementOrderByWithRelationInput[]
    cursor?: FacultyAnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyAnnouncementScalarFieldEnum | FacultyAnnouncementScalarFieldEnum[]
  }

  /**
   * Faculty.facultyAttendance
   */
  export type Faculty$facultyAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAttendance
     */
    select?: FacultyAttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAttendanceInclude<ExtArgs> | null
    where?: FacultyAttendanceWhereInput
    orderBy?: FacultyAttendanceOrderByWithRelationInput | FacultyAttendanceOrderByWithRelationInput[]
    cursor?: FacultyAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyAttendanceScalarFieldEnum | FacultyAttendanceScalarFieldEnum[]
  }

  /**
   * Faculty.leaves
   */
  export type Faculty$leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyLeave
     */
    select?: FacultyLeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyLeaveInclude<ExtArgs> | null
    where?: FacultyLeaveWhereInput
    orderBy?: FacultyLeaveOrderByWithRelationInput | FacultyLeaveOrderByWithRelationInput[]
    cursor?: FacultyLeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyLeaveScalarFieldEnum | FacultyLeaveScalarFieldEnum[]
  }

  /**
   * Faculty.notes
   */
  export type Faculty$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyNote
     */
    select?: FacultyNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyNoteInclude<ExtArgs> | null
    where?: FacultyNoteWhereInput
    orderBy?: FacultyNoteOrderByWithRelationInput | FacultyNoteOrderByWithRelationInput[]
    cursor?: FacultyNoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyNoteScalarFieldEnum | FacultyNoteScalarFieldEnum[]
  }

  /**
   * Faculty.faculty_subjects
   */
  export type Faculty$faculty_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    where?: FacultySubjectWhereInput
    orderBy?: FacultySubjectOrderByWithRelationInput | FacultySubjectOrderByWithRelationInput[]
    cursor?: FacultySubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultySubjectScalarFieldEnum | FacultySubjectScalarFieldEnum[]
  }

  /**
   * Faculty without action
   */
  export type FacultyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    stud_id: number | null
    user_id: number | null
    dept_id: number | null
  }

  export type StudentSumAggregateOutputType = {
    stud_id: number | null
    user_id: number | null
    dept_id: number | null
  }

  export type StudentMinAggregateOutputType = {
    stud_id: number | null
    user_id: number | null
    roll_no: string | null
    stud_name: string | null
    email: string | null
    semester: string | null
    dept_id: number | null
  }

  export type StudentMaxAggregateOutputType = {
    stud_id: number | null
    user_id: number | null
    roll_no: string | null
    stud_name: string | null
    email: string | null
    semester: string | null
    dept_id: number | null
  }

  export type StudentCountAggregateOutputType = {
    stud_id: number
    user_id: number
    roll_no: number
    stud_name: number
    email: number
    semester: number
    dept_id: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    stud_id?: true
    user_id?: true
    dept_id?: true
  }

  export type StudentSumAggregateInputType = {
    stud_id?: true
    user_id?: true
    dept_id?: true
  }

  export type StudentMinAggregateInputType = {
    stud_id?: true
    user_id?: true
    roll_no?: true
    stud_name?: true
    email?: true
    semester?: true
    dept_id?: true
  }

  export type StudentMaxAggregateInputType = {
    stud_id?: true
    user_id?: true
    roll_no?: true
    stud_name?: true
    email?: true
    semester?: true
    dept_id?: true
  }

  export type StudentCountAggregateInputType = {
    stud_id?: true
    user_id?: true
    roll_no?: true
    stud_name?: true
    email?: true
    semester?: true
    dept_id?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    stud_id: number
    user_id: number | null
    roll_no: string
    stud_name: string
    email: string | null
    semester: string | null
    dept_id: number | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stud_id?: boolean
    user_id?: boolean
    roll_no?: boolean
    stud_name?: boolean
    email?: boolean
    semester?: boolean
    dept_id?: boolean
    Department?: boolean | Student$DepartmentArgs<ExtArgs>
    attendance?: boolean | Student$attendanceArgs<ExtArgs>
    enrollments?: boolean | Student$enrollmentsArgs<ExtArgs>
    User?: boolean | Student$UserArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stud_id?: boolean
    user_id?: boolean
    roll_no?: boolean
    stud_name?: boolean
    email?: boolean
    semester?: boolean
    dept_id?: boolean
    Department?: boolean | Student$DepartmentArgs<ExtArgs>
    User?: boolean | Student$UserArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    stud_id?: boolean
    user_id?: boolean
    roll_no?: boolean
    stud_name?: boolean
    email?: boolean
    semester?: boolean
    dept_id?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | Student$DepartmentArgs<ExtArgs>
    attendance?: boolean | Student$attendanceArgs<ExtArgs>
    enrollments?: boolean | Student$enrollmentsArgs<ExtArgs>
    User?: boolean | Student$UserArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | Student$DepartmentArgs<ExtArgs>
    User?: boolean | Student$UserArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      Department: Prisma.$DepartmentPayload<ExtArgs> | null
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      stud_id: number
      user_id: number | null
      roll_no: string
      stud_name: string
      email: string | null
      semester: string | null
      dept_id: number | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `stud_id`
     * const studentWithStud_idOnly = await prisma.student.findMany({ select: { stud_id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `stud_id`
     * const studentWithStud_idOnly = await prisma.student.createManyAndReturn({ 
     *   select: { stud_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Department<T extends Student$DepartmentArgs<ExtArgs> = {}>(args?: Subset<T, Student$DepartmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    attendance<T extends Student$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, Student$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany"> | Null>
    enrollments<T extends Student$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany"> | Null>
    User<T extends Student$UserArgs<ExtArgs> = {}>(args?: Subset<T, Student$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly stud_id: FieldRef<"Student", 'Int'>
    readonly user_id: FieldRef<"Student", 'Int'>
    readonly roll_no: FieldRef<"Student", 'String'>
    readonly stud_name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly semester: FieldRef<"Student", 'String'>
    readonly dept_id: FieldRef<"Student", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }

  /**
   * Student.Department
   */
  export type Student$DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Student.attendance
   */
  export type Student$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Student.enrollments
   */
  export type Student$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Student.User
   */
  export type Student$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    subject_id: number | null
    dept_id: number | null
    credits: number | null
  }

  export type SubjectSumAggregateOutputType = {
    subject_id: number | null
    dept_id: number | null
    credits: number | null
  }

  export type SubjectMinAggregateOutputType = {
    subject_id: number | null
    subject_code: string | null
    subject_name: string | null
    semester: string | null
    dept_id: number | null
    credits: number | null
  }

  export type SubjectMaxAggregateOutputType = {
    subject_id: number | null
    subject_code: string | null
    subject_name: string | null
    semester: string | null
    dept_id: number | null
    credits: number | null
  }

  export type SubjectCountAggregateOutputType = {
    subject_id: number
    subject_code: number
    subject_name: number
    semester: number
    dept_id: number
    credits: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    subject_id?: true
    dept_id?: true
    credits?: true
  }

  export type SubjectSumAggregateInputType = {
    subject_id?: true
    dept_id?: true
    credits?: true
  }

  export type SubjectMinAggregateInputType = {
    subject_id?: true
    subject_code?: true
    subject_name?: true
    semester?: true
    dept_id?: true
    credits?: true
  }

  export type SubjectMaxAggregateInputType = {
    subject_id?: true
    subject_code?: true
    subject_name?: true
    semester?: true
    dept_id?: true
    credits?: true
  }

  export type SubjectCountAggregateInputType = {
    subject_id?: true
    subject_code?: true
    subject_name?: true
    semester?: true
    dept_id?: true
    credits?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    subject_id: number
    subject_code: string
    subject_name: string
    semester: string | null
    dept_id: number | null
    credits: number | null
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subject_id?: boolean
    subject_code?: boolean
    subject_name?: boolean
    semester?: boolean
    dept_id?: boolean
    credits?: boolean
    Department?: boolean | Subject$DepartmentArgs<ExtArgs>
    attendance?: boolean | Subject$attendanceArgs<ExtArgs>
    enrollments?: boolean | Subject$enrollmentsArgs<ExtArgs>
    announcements?: boolean | Subject$announcementsArgs<ExtArgs>
    timetable?: boolean | Subject$timetableArgs<ExtArgs>
    faculty_subjects?: boolean | Subject$faculty_subjectsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    subject_id?: boolean
    subject_code?: boolean
    subject_name?: boolean
    semester?: boolean
    dept_id?: boolean
    credits?: boolean
    Department?: boolean | Subject$DepartmentArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    subject_id?: boolean
    subject_code?: boolean
    subject_name?: boolean
    semester?: boolean
    dept_id?: boolean
    credits?: boolean
  }

  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | Subject$DepartmentArgs<ExtArgs>
    attendance?: boolean | Subject$attendanceArgs<ExtArgs>
    enrollments?: boolean | Subject$enrollmentsArgs<ExtArgs>
    announcements?: boolean | Subject$announcementsArgs<ExtArgs>
    timetable?: boolean | Subject$timetableArgs<ExtArgs>
    faculty_subjects?: boolean | Subject$faculty_subjectsArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | Subject$DepartmentArgs<ExtArgs>
  }

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      Department: Prisma.$DepartmentPayload<ExtArgs> | null
      attendance: Prisma.$AttendancePayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      announcements: Prisma.$FacultyAnnouncementPayload<ExtArgs>[]
      timetable: Prisma.$TimetablePayload<ExtArgs>[]
      faculty_subjects: Prisma.$FacultySubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      subject_id: number
      subject_code: string
      subject_name: string
      semester: string | null
      dept_id: number | null
      credits: number | null
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `subject_id`
     * const subjectWithSubject_idOnly = await prisma.subject.findMany({ select: { subject_id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `subject_id`
     * const subjectWithSubject_idOnly = await prisma.subject.createManyAndReturn({ 
     *   select: { subject_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Department<T extends Subject$DepartmentArgs<ExtArgs> = {}>(args?: Subset<T, Subject$DepartmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    attendance<T extends Subject$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, Subject$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany"> | Null>
    enrollments<T extends Subject$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany"> | Null>
    announcements<T extends Subject$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "findMany"> | Null>
    timetable<T extends Subject$timetableArgs<ExtArgs> = {}>(args?: Subset<T, Subject$timetableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findMany"> | Null>
    faculty_subjects<T extends Subject$faculty_subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$faculty_subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Subject model
   */ 
  interface SubjectFieldRefs {
    readonly subject_id: FieldRef<"Subject", 'Int'>
    readonly subject_code: FieldRef<"Subject", 'String'>
    readonly subject_name: FieldRef<"Subject", 'String'>
    readonly semester: FieldRef<"Subject", 'String'>
    readonly dept_id: FieldRef<"Subject", 'Int'>
    readonly credits: FieldRef<"Subject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
  }

  /**
   * Subject.Department
   */
  export type Subject$DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Subject.attendance
   */
  export type Subject$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Subject.enrollments
   */
  export type Subject$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Subject.announcements
   */
  export type Subject$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
    where?: FacultyAnnouncementWhereInput
    orderBy?: FacultyAnnouncementOrderByWithRelationInput | FacultyAnnouncementOrderByWithRelationInput[]
    cursor?: FacultyAnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultyAnnouncementScalarFieldEnum | FacultyAnnouncementScalarFieldEnum[]
  }

  /**
   * Subject.timetable
   */
  export type Subject$timetableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    where?: TimetableWhereInput
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    cursor?: TimetableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Subject.faculty_subjects
   */
  export type Subject$faculty_subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    where?: FacultySubjectWhereInput
    orderBy?: FacultySubjectOrderByWithRelationInput | FacultySubjectOrderByWithRelationInput[]
    cursor?: FacultySubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FacultySubjectScalarFieldEnum | FacultySubjectScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model FacultySubject
   */

  export type AggregateFacultySubject = {
    _count: FacultySubjectCountAggregateOutputType | null
    _avg: FacultySubjectAvgAggregateOutputType | null
    _sum: FacultySubjectSumAggregateOutputType | null
    _min: FacultySubjectMinAggregateOutputType | null
    _max: FacultySubjectMaxAggregateOutputType | null
  }

  export type FacultySubjectAvgAggregateOutputType = {
    faculty_id: number | null
    subject_id: number | null
  }

  export type FacultySubjectSumAggregateOutputType = {
    faculty_id: number | null
    subject_id: number | null
  }

  export type FacultySubjectMinAggregateOutputType = {
    faculty_id: number | null
    subject_id: number | null
  }

  export type FacultySubjectMaxAggregateOutputType = {
    faculty_id: number | null
    subject_id: number | null
  }

  export type FacultySubjectCountAggregateOutputType = {
    faculty_id: number
    subject_id: number
    _all: number
  }


  export type FacultySubjectAvgAggregateInputType = {
    faculty_id?: true
    subject_id?: true
  }

  export type FacultySubjectSumAggregateInputType = {
    faculty_id?: true
    subject_id?: true
  }

  export type FacultySubjectMinAggregateInputType = {
    faculty_id?: true
    subject_id?: true
  }

  export type FacultySubjectMaxAggregateInputType = {
    faculty_id?: true
    subject_id?: true
  }

  export type FacultySubjectCountAggregateInputType = {
    faculty_id?: true
    subject_id?: true
    _all?: true
  }

  export type FacultySubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultySubject to aggregate.
     */
    where?: FacultySubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultySubjects to fetch.
     */
    orderBy?: FacultySubjectOrderByWithRelationInput | FacultySubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultySubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultySubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultySubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultySubjects
    **/
    _count?: true | FacultySubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacultySubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacultySubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultySubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultySubjectMaxAggregateInputType
  }

  export type GetFacultySubjectAggregateType<T extends FacultySubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultySubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultySubject[P]>
      : GetScalarType<T[P], AggregateFacultySubject[P]>
  }




  export type FacultySubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultySubjectWhereInput
    orderBy?: FacultySubjectOrderByWithAggregationInput | FacultySubjectOrderByWithAggregationInput[]
    by: FacultySubjectScalarFieldEnum[] | FacultySubjectScalarFieldEnum
    having?: FacultySubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultySubjectCountAggregateInputType | true
    _avg?: FacultySubjectAvgAggregateInputType
    _sum?: FacultySubjectSumAggregateInputType
    _min?: FacultySubjectMinAggregateInputType
    _max?: FacultySubjectMaxAggregateInputType
  }

  export type FacultySubjectGroupByOutputType = {
    faculty_id: number
    subject_id: number
    _count: FacultySubjectCountAggregateOutputType | null
    _avg: FacultySubjectAvgAggregateOutputType | null
    _sum: FacultySubjectSumAggregateOutputType | null
    _min: FacultySubjectMinAggregateOutputType | null
    _max: FacultySubjectMaxAggregateOutputType | null
  }

  type GetFacultySubjectGroupByPayload<T extends FacultySubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultySubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultySubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultySubjectGroupByOutputType[P]>
            : GetScalarType<T[P], FacultySubjectGroupByOutputType[P]>
        }
      >
    >


  export type FacultySubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    faculty_id?: boolean
    subject_id?: boolean
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultySubject"]>

  export type FacultySubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    faculty_id?: boolean
    subject_id?: boolean
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultySubject"]>

  export type FacultySubjectSelectScalar = {
    faculty_id?: boolean
    subject_id?: boolean
  }

  export type FacultySubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type FacultySubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $FacultySubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultySubject"
    objects: {
      Faculty: Prisma.$FacultyPayload<ExtArgs>
      Subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      faculty_id: number
      subject_id: number
    }, ExtArgs["result"]["facultySubject"]>
    composites: {}
  }

  type FacultySubjectGetPayload<S extends boolean | null | undefined | FacultySubjectDefaultArgs> = $Result.GetResult<Prisma.$FacultySubjectPayload, S>

  type FacultySubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FacultySubjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FacultySubjectCountAggregateInputType | true
    }

  export interface FacultySubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultySubject'], meta: { name: 'FacultySubject' } }
    /**
     * Find zero or one FacultySubject that matches the filter.
     * @param {FacultySubjectFindUniqueArgs} args - Arguments to find a FacultySubject
     * @example
     * // Get one FacultySubject
     * const facultySubject = await prisma.facultySubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultySubjectFindUniqueArgs>(args: SelectSubset<T, FacultySubjectFindUniqueArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FacultySubject that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FacultySubjectFindUniqueOrThrowArgs} args - Arguments to find a FacultySubject
     * @example
     * // Get one FacultySubject
     * const facultySubject = await prisma.facultySubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultySubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultySubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FacultySubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectFindFirstArgs} args - Arguments to find a FacultySubject
     * @example
     * // Get one FacultySubject
     * const facultySubject = await prisma.facultySubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultySubjectFindFirstArgs>(args?: SelectSubset<T, FacultySubjectFindFirstArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FacultySubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectFindFirstOrThrowArgs} args - Arguments to find a FacultySubject
     * @example
     * // Get one FacultySubject
     * const facultySubject = await prisma.facultySubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultySubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultySubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FacultySubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultySubjects
     * const facultySubjects = await prisma.facultySubject.findMany()
     * 
     * // Get first 10 FacultySubjects
     * const facultySubjects = await prisma.facultySubject.findMany({ take: 10 })
     * 
     * // Only select the `faculty_id`
     * const facultySubjectWithFaculty_idOnly = await prisma.facultySubject.findMany({ select: { faculty_id: true } })
     * 
     */
    findMany<T extends FacultySubjectFindManyArgs>(args?: SelectSubset<T, FacultySubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FacultySubject.
     * @param {FacultySubjectCreateArgs} args - Arguments to create a FacultySubject.
     * @example
     * // Create one FacultySubject
     * const FacultySubject = await prisma.facultySubject.create({
     *   data: {
     *     // ... data to create a FacultySubject
     *   }
     * })
     * 
     */
    create<T extends FacultySubjectCreateArgs>(args: SelectSubset<T, FacultySubjectCreateArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FacultySubjects.
     * @param {FacultySubjectCreateManyArgs} args - Arguments to create many FacultySubjects.
     * @example
     * // Create many FacultySubjects
     * const facultySubject = await prisma.facultySubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultySubjectCreateManyArgs>(args?: SelectSubset<T, FacultySubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacultySubjects and returns the data saved in the database.
     * @param {FacultySubjectCreateManyAndReturnArgs} args - Arguments to create many FacultySubjects.
     * @example
     * // Create many FacultySubjects
     * const facultySubject = await prisma.facultySubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacultySubjects and only return the `faculty_id`
     * const facultySubjectWithFaculty_idOnly = await prisma.facultySubject.createManyAndReturn({ 
     *   select: { faculty_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultySubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultySubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FacultySubject.
     * @param {FacultySubjectDeleteArgs} args - Arguments to delete one FacultySubject.
     * @example
     * // Delete one FacultySubject
     * const FacultySubject = await prisma.facultySubject.delete({
     *   where: {
     *     // ... filter to delete one FacultySubject
     *   }
     * })
     * 
     */
    delete<T extends FacultySubjectDeleteArgs>(args: SelectSubset<T, FacultySubjectDeleteArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FacultySubject.
     * @param {FacultySubjectUpdateArgs} args - Arguments to update one FacultySubject.
     * @example
     * // Update one FacultySubject
     * const facultySubject = await prisma.facultySubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultySubjectUpdateArgs>(args: SelectSubset<T, FacultySubjectUpdateArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FacultySubjects.
     * @param {FacultySubjectDeleteManyArgs} args - Arguments to filter FacultySubjects to delete.
     * @example
     * // Delete a few FacultySubjects
     * const { count } = await prisma.facultySubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultySubjectDeleteManyArgs>(args?: SelectSubset<T, FacultySubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultySubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultySubjects
     * const facultySubject = await prisma.facultySubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultySubjectUpdateManyArgs>(args: SelectSubset<T, FacultySubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacultySubject.
     * @param {FacultySubjectUpsertArgs} args - Arguments to update or create a FacultySubject.
     * @example
     * // Update or create a FacultySubject
     * const facultySubject = await prisma.facultySubject.upsert({
     *   create: {
     *     // ... data to create a FacultySubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultySubject we want to update
     *   }
     * })
     */
    upsert<T extends FacultySubjectUpsertArgs>(args: SelectSubset<T, FacultySubjectUpsertArgs<ExtArgs>>): Prisma__FacultySubjectClient<$Result.GetResult<Prisma.$FacultySubjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FacultySubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectCountArgs} args - Arguments to filter FacultySubjects to count.
     * @example
     * // Count the number of FacultySubjects
     * const count = await prisma.facultySubject.count({
     *   where: {
     *     // ... the filter for the FacultySubjects we want to count
     *   }
     * })
    **/
    count<T extends FacultySubjectCountArgs>(
      args?: Subset<T, FacultySubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultySubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultySubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultySubjectAggregateArgs>(args: Subset<T, FacultySubjectAggregateArgs>): Prisma.PrismaPromise<GetFacultySubjectAggregateType<T>>

    /**
     * Group by FacultySubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultySubjectGroupByArgs} args - Group by arguments.
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
      T extends FacultySubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultySubjectGroupByArgs['orderBy'] }
        : { orderBy?: FacultySubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultySubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultySubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultySubject model
   */
  readonly fields: FacultySubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultySubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultySubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Faculty<T extends FacultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultyDefaultArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FacultySubject model
   */ 
  interface FacultySubjectFieldRefs {
    readonly faculty_id: FieldRef<"FacultySubject", 'Int'>
    readonly subject_id: FieldRef<"FacultySubject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FacultySubject findUnique
   */
  export type FacultySubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * Filter, which FacultySubject to fetch.
     */
    where: FacultySubjectWhereUniqueInput
  }

  /**
   * FacultySubject findUniqueOrThrow
   */
  export type FacultySubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * Filter, which FacultySubject to fetch.
     */
    where: FacultySubjectWhereUniqueInput
  }

  /**
   * FacultySubject findFirst
   */
  export type FacultySubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * Filter, which FacultySubject to fetch.
     */
    where?: FacultySubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultySubjects to fetch.
     */
    orderBy?: FacultySubjectOrderByWithRelationInput | FacultySubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultySubjects.
     */
    cursor?: FacultySubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultySubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultySubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultySubjects.
     */
    distinct?: FacultySubjectScalarFieldEnum | FacultySubjectScalarFieldEnum[]
  }

  /**
   * FacultySubject findFirstOrThrow
   */
  export type FacultySubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * Filter, which FacultySubject to fetch.
     */
    where?: FacultySubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultySubjects to fetch.
     */
    orderBy?: FacultySubjectOrderByWithRelationInput | FacultySubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultySubjects.
     */
    cursor?: FacultySubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultySubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultySubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultySubjects.
     */
    distinct?: FacultySubjectScalarFieldEnum | FacultySubjectScalarFieldEnum[]
  }

  /**
   * FacultySubject findMany
   */
  export type FacultySubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * Filter, which FacultySubjects to fetch.
     */
    where?: FacultySubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultySubjects to fetch.
     */
    orderBy?: FacultySubjectOrderByWithRelationInput | FacultySubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultySubjects.
     */
    cursor?: FacultySubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultySubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultySubjects.
     */
    skip?: number
    distinct?: FacultySubjectScalarFieldEnum | FacultySubjectScalarFieldEnum[]
  }

  /**
   * FacultySubject create
   */
  export type FacultySubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a FacultySubject.
     */
    data: XOR<FacultySubjectCreateInput, FacultySubjectUncheckedCreateInput>
  }

  /**
   * FacultySubject createMany
   */
  export type FacultySubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultySubjects.
     */
    data: FacultySubjectCreateManyInput | FacultySubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultySubject createManyAndReturn
   */
  export type FacultySubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FacultySubjects.
     */
    data: FacultySubjectCreateManyInput | FacultySubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacultySubject update
   */
  export type FacultySubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a FacultySubject.
     */
    data: XOR<FacultySubjectUpdateInput, FacultySubjectUncheckedUpdateInput>
    /**
     * Choose, which FacultySubject to update.
     */
    where: FacultySubjectWhereUniqueInput
  }

  /**
   * FacultySubject updateMany
   */
  export type FacultySubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultySubjects.
     */
    data: XOR<FacultySubjectUpdateManyMutationInput, FacultySubjectUncheckedUpdateManyInput>
    /**
     * Filter which FacultySubjects to update
     */
    where?: FacultySubjectWhereInput
  }

  /**
   * FacultySubject upsert
   */
  export type FacultySubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the FacultySubject to update in case it exists.
     */
    where: FacultySubjectWhereUniqueInput
    /**
     * In case the FacultySubject found by the `where` argument doesn't exist, create a new FacultySubject with this data.
     */
    create: XOR<FacultySubjectCreateInput, FacultySubjectUncheckedCreateInput>
    /**
     * In case the FacultySubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultySubjectUpdateInput, FacultySubjectUncheckedUpdateInput>
  }

  /**
   * FacultySubject delete
   */
  export type FacultySubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
    /**
     * Filter which FacultySubject to delete.
     */
    where: FacultySubjectWhereUniqueInput
  }

  /**
   * FacultySubject deleteMany
   */
  export type FacultySubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultySubjects to delete
     */
    where?: FacultySubjectWhereInput
  }

  /**
   * FacultySubject without action
   */
  export type FacultySubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultySubject
     */
    select?: FacultySubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultySubjectInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    stud_id: number | null
    subject_id: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    stud_id: number | null
    subject_id: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    stud_id: number | null
    subject_id: number | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    stud_id: number | null
    subject_id: number | null
  }

  export type EnrollmentCountAggregateOutputType = {
    stud_id: number
    subject_id: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    stud_id?: true
    subject_id?: true
  }

  export type EnrollmentSumAggregateInputType = {
    stud_id?: true
    subject_id?: true
  }

  export type EnrollmentMinAggregateInputType = {
    stud_id?: true
    subject_id?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    stud_id?: true
    subject_id?: true
  }

  export type EnrollmentCountAggregateInputType = {
    stud_id?: true
    subject_id?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    stud_id: number
    subject_id: number
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stud_id?: boolean
    subject_id?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stud_id?: boolean
    subject_id?: boolean
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    stud_id?: boolean
    subject_id?: boolean
  }

  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Student?: boolean | StudentDefaultArgs<ExtArgs>
    Subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      Student: Prisma.$StudentPayload<ExtArgs>
      Subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      stud_id: number
      subject_id: number
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `stud_id`
     * const enrollmentWithStud_idOnly = await prisma.enrollment.findMany({ select: { stud_id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `stud_id`
     * const enrollmentWithStud_idOnly = await prisma.enrollment.createManyAndReturn({ 
     *   select: { stud_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Enrollment model
   */ 
  interface EnrollmentFieldRefs {
    readonly stud_id: FieldRef<"Enrollment", 'Int'>
    readonly subject_id: FieldRef<"Enrollment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Timetable
   */

  export type AggregateTimetable = {
    _count: TimetableCountAggregateOutputType | null
    _avg: TimetableAvgAggregateOutputType | null
    _sum: TimetableSumAggregateOutputType | null
    _min: TimetableMinAggregateOutputType | null
    _max: TimetableMaxAggregateOutputType | null
  }

  export type TimetableAvgAggregateOutputType = {
    timetable_id: number | null
    subject_id: number | null
    day_of_week: number | null
  }

  export type TimetableSumAggregateOutputType = {
    timetable_id: number | null
    subject_id: number | null
    day_of_week: number | null
  }

  export type TimetableMinAggregateOutputType = {
    timetable_id: number | null
    subject_id: number | null
    day_of_week: number | null
    start_time: Date | null
    end_time: Date | null
    room_no: string | null
  }

  export type TimetableMaxAggregateOutputType = {
    timetable_id: number | null
    subject_id: number | null
    day_of_week: number | null
    start_time: Date | null
    end_time: Date | null
    room_no: string | null
  }

  export type TimetableCountAggregateOutputType = {
    timetable_id: number
    subject_id: number
    day_of_week: number
    start_time: number
    end_time: number
    room_no: number
    _all: number
  }


  export type TimetableAvgAggregateInputType = {
    timetable_id?: true
    subject_id?: true
    day_of_week?: true
  }

  export type TimetableSumAggregateInputType = {
    timetable_id?: true
    subject_id?: true
    day_of_week?: true
  }

  export type TimetableMinAggregateInputType = {
    timetable_id?: true
    subject_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
    room_no?: true
  }

  export type TimetableMaxAggregateInputType = {
    timetable_id?: true
    subject_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
    room_no?: true
  }

  export type TimetableCountAggregateInputType = {
    timetable_id?: true
    subject_id?: true
    day_of_week?: true
    start_time?: true
    end_time?: true
    room_no?: true
    _all?: true
  }

  export type TimetableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timetable to aggregate.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Timetables
    **/
    _count?: true | TimetableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimetableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimetableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimetableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimetableMaxAggregateInputType
  }

  export type GetTimetableAggregateType<T extends TimetableAggregateArgs> = {
        [P in keyof T & keyof AggregateTimetable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTimetable[P]>
      : GetScalarType<T[P], AggregateTimetable[P]>
  }




  export type TimetableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimetableWhereInput
    orderBy?: TimetableOrderByWithAggregationInput | TimetableOrderByWithAggregationInput[]
    by: TimetableScalarFieldEnum[] | TimetableScalarFieldEnum
    having?: TimetableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimetableCountAggregateInputType | true
    _avg?: TimetableAvgAggregateInputType
    _sum?: TimetableSumAggregateInputType
    _min?: TimetableMinAggregateInputType
    _max?: TimetableMaxAggregateInputType
  }

  export type TimetableGroupByOutputType = {
    timetable_id: number
    subject_id: number | null
    day_of_week: number | null
    start_time: Date | null
    end_time: Date | null
    room_no: string | null
    _count: TimetableCountAggregateOutputType | null
    _avg: TimetableAvgAggregateOutputType | null
    _sum: TimetableSumAggregateOutputType | null
    _min: TimetableMinAggregateOutputType | null
    _max: TimetableMaxAggregateOutputType | null
  }

  type GetTimetableGroupByPayload<T extends TimetableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimetableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimetableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimetableGroupByOutputType[P]>
            : GetScalarType<T[P], TimetableGroupByOutputType[P]>
        }
      >
    >


  export type TimetableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timetable_id?: boolean
    subject_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    room_no?: boolean
    Subject?: boolean | Timetable$SubjectArgs<ExtArgs>
  }, ExtArgs["result"]["timetable"]>

  export type TimetableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timetable_id?: boolean
    subject_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    room_no?: boolean
    Subject?: boolean | Timetable$SubjectArgs<ExtArgs>
  }, ExtArgs["result"]["timetable"]>

  export type TimetableSelectScalar = {
    timetable_id?: boolean
    subject_id?: boolean
    day_of_week?: boolean
    start_time?: boolean
    end_time?: boolean
    room_no?: boolean
  }

  export type TimetableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subject?: boolean | Timetable$SubjectArgs<ExtArgs>
  }
  export type TimetableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Subject?: boolean | Timetable$SubjectArgs<ExtArgs>
  }

  export type $TimetablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Timetable"
    objects: {
      Subject: Prisma.$SubjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      timetable_id: number
      subject_id: number | null
      day_of_week: number | null
      start_time: Date | null
      end_time: Date | null
      room_no: string | null
    }, ExtArgs["result"]["timetable"]>
    composites: {}
  }

  type TimetableGetPayload<S extends boolean | null | undefined | TimetableDefaultArgs> = $Result.GetResult<Prisma.$TimetablePayload, S>

  type TimetableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TimetableFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TimetableCountAggregateInputType | true
    }

  export interface TimetableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Timetable'], meta: { name: 'Timetable' } }
    /**
     * Find zero or one Timetable that matches the filter.
     * @param {TimetableFindUniqueArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimetableFindUniqueArgs>(args: SelectSubset<T, TimetableFindUniqueArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Timetable that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TimetableFindUniqueOrThrowArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimetableFindUniqueOrThrowArgs>(args: SelectSubset<T, TimetableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Timetable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableFindFirstArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimetableFindFirstArgs>(args?: SelectSubset<T, TimetableFindFirstArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Timetable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableFindFirstOrThrowArgs} args - Arguments to find a Timetable
     * @example
     * // Get one Timetable
     * const timetable = await prisma.timetable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimetableFindFirstOrThrowArgs>(args?: SelectSubset<T, TimetableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Timetables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Timetables
     * const timetables = await prisma.timetable.findMany()
     * 
     * // Get first 10 Timetables
     * const timetables = await prisma.timetable.findMany({ take: 10 })
     * 
     * // Only select the `timetable_id`
     * const timetableWithTimetable_idOnly = await prisma.timetable.findMany({ select: { timetable_id: true } })
     * 
     */
    findMany<T extends TimetableFindManyArgs>(args?: SelectSubset<T, TimetableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Timetable.
     * @param {TimetableCreateArgs} args - Arguments to create a Timetable.
     * @example
     * // Create one Timetable
     * const Timetable = await prisma.timetable.create({
     *   data: {
     *     // ... data to create a Timetable
     *   }
     * })
     * 
     */
    create<T extends TimetableCreateArgs>(args: SelectSubset<T, TimetableCreateArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Timetables.
     * @param {TimetableCreateManyArgs} args - Arguments to create many Timetables.
     * @example
     * // Create many Timetables
     * const timetable = await prisma.timetable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimetableCreateManyArgs>(args?: SelectSubset<T, TimetableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Timetables and returns the data saved in the database.
     * @param {TimetableCreateManyAndReturnArgs} args - Arguments to create many Timetables.
     * @example
     * // Create many Timetables
     * const timetable = await prisma.timetable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Timetables and only return the `timetable_id`
     * const timetableWithTimetable_idOnly = await prisma.timetable.createManyAndReturn({ 
     *   select: { timetable_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimetableCreateManyAndReturnArgs>(args?: SelectSubset<T, TimetableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Timetable.
     * @param {TimetableDeleteArgs} args - Arguments to delete one Timetable.
     * @example
     * // Delete one Timetable
     * const Timetable = await prisma.timetable.delete({
     *   where: {
     *     // ... filter to delete one Timetable
     *   }
     * })
     * 
     */
    delete<T extends TimetableDeleteArgs>(args: SelectSubset<T, TimetableDeleteArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Timetable.
     * @param {TimetableUpdateArgs} args - Arguments to update one Timetable.
     * @example
     * // Update one Timetable
     * const timetable = await prisma.timetable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimetableUpdateArgs>(args: SelectSubset<T, TimetableUpdateArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Timetables.
     * @param {TimetableDeleteManyArgs} args - Arguments to filter Timetables to delete.
     * @example
     * // Delete a few Timetables
     * const { count } = await prisma.timetable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimetableDeleteManyArgs>(args?: SelectSubset<T, TimetableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Timetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Timetables
     * const timetable = await prisma.timetable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimetableUpdateManyArgs>(args: SelectSubset<T, TimetableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Timetable.
     * @param {TimetableUpsertArgs} args - Arguments to update or create a Timetable.
     * @example
     * // Update or create a Timetable
     * const timetable = await prisma.timetable.upsert({
     *   create: {
     *     // ... data to create a Timetable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Timetable we want to update
     *   }
     * })
     */
    upsert<T extends TimetableUpsertArgs>(args: SelectSubset<T, TimetableUpsertArgs<ExtArgs>>): Prisma__TimetableClient<$Result.GetResult<Prisma.$TimetablePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Timetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableCountArgs} args - Arguments to filter Timetables to count.
     * @example
     * // Count the number of Timetables
     * const count = await prisma.timetable.count({
     *   where: {
     *     // ... the filter for the Timetables we want to count
     *   }
     * })
    **/
    count<T extends TimetableCountArgs>(
      args?: Subset<T, TimetableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimetableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Timetable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TimetableAggregateArgs>(args: Subset<T, TimetableAggregateArgs>): Prisma.PrismaPromise<GetTimetableAggregateType<T>>

    /**
     * Group by Timetable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimetableGroupByArgs} args - Group by arguments.
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
      T extends TimetableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimetableGroupByArgs['orderBy'] }
        : { orderBy?: TimetableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TimetableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimetableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Timetable model
   */
  readonly fields: TimetableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Timetable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimetableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Subject<T extends Timetable$SubjectArgs<ExtArgs> = {}>(args?: Subset<T, Timetable$SubjectArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Timetable model
   */ 
  interface TimetableFieldRefs {
    readonly timetable_id: FieldRef<"Timetable", 'Int'>
    readonly subject_id: FieldRef<"Timetable", 'Int'>
    readonly day_of_week: FieldRef<"Timetable", 'Int'>
    readonly start_time: FieldRef<"Timetable", 'DateTime'>
    readonly end_time: FieldRef<"Timetable", 'DateTime'>
    readonly room_no: FieldRef<"Timetable", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Timetable findUnique
   */
  export type TimetableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable findUniqueOrThrow
   */
  export type TimetableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable findFirst
   */
  export type TimetableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timetables.
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timetables.
     */
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Timetable findFirstOrThrow
   */
  export type TimetableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetable to fetch.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Timetables.
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Timetables.
     */
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Timetable findMany
   */
  export type TimetableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter, which Timetables to fetch.
     */
    where?: TimetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Timetables to fetch.
     */
    orderBy?: TimetableOrderByWithRelationInput | TimetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Timetables.
     */
    cursor?: TimetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Timetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Timetables.
     */
    skip?: number
    distinct?: TimetableScalarFieldEnum | TimetableScalarFieldEnum[]
  }

  /**
   * Timetable create
   */
  export type TimetableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * The data needed to create a Timetable.
     */
    data?: XOR<TimetableCreateInput, TimetableUncheckedCreateInput>
  }

  /**
   * Timetable createMany
   */
  export type TimetableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Timetables.
     */
    data: TimetableCreateManyInput | TimetableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Timetable createManyAndReturn
   */
  export type TimetableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Timetables.
     */
    data: TimetableCreateManyInput | TimetableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Timetable update
   */
  export type TimetableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * The data needed to update a Timetable.
     */
    data: XOR<TimetableUpdateInput, TimetableUncheckedUpdateInput>
    /**
     * Choose, which Timetable to update.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable updateMany
   */
  export type TimetableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Timetables.
     */
    data: XOR<TimetableUpdateManyMutationInput, TimetableUncheckedUpdateManyInput>
    /**
     * Filter which Timetables to update
     */
    where?: TimetableWhereInput
  }

  /**
   * Timetable upsert
   */
  export type TimetableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * The filter to search for the Timetable to update in case it exists.
     */
    where: TimetableWhereUniqueInput
    /**
     * In case the Timetable found by the `where` argument doesn't exist, create a new Timetable with this data.
     */
    create: XOR<TimetableCreateInput, TimetableUncheckedCreateInput>
    /**
     * In case the Timetable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimetableUpdateInput, TimetableUncheckedUpdateInput>
  }

  /**
   * Timetable delete
   */
  export type TimetableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
    /**
     * Filter which Timetable to delete.
     */
    where: TimetableWhereUniqueInput
  }

  /**
   * Timetable deleteMany
   */
  export type TimetableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Timetables to delete
     */
    where?: TimetableWhereInput
  }

  /**
   * Timetable.Subject
   */
  export type Timetable$SubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
  }

  /**
   * Timetable without action
   */
  export type TimetableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Timetable
     */
    select?: TimetableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimetableInclude<ExtArgs> | null
  }


  /**
   * Model Holiday
   */

  export type AggregateHoliday = {
    _count: HolidayCountAggregateOutputType | null
    _avg: HolidayAvgAggregateOutputType | null
    _sum: HolidaySumAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  export type HolidayAvgAggregateOutputType = {
    holiday_id: number | null
    year: number | null
  }

  export type HolidaySumAggregateOutputType = {
    holiday_id: number | null
    year: number | null
  }

  export type HolidayMinAggregateOutputType = {
    holiday_id: number | null
    holiday_name: string | null
    holiday_date: Date | null
    year: number | null
  }

  export type HolidayMaxAggregateOutputType = {
    holiday_id: number | null
    holiday_name: string | null
    holiday_date: Date | null
    year: number | null
  }

  export type HolidayCountAggregateOutputType = {
    holiday_id: number
    holiday_name: number
    holiday_date: number
    year: number
    _all: number
  }


  export type HolidayAvgAggregateInputType = {
    holiday_id?: true
    year?: true
  }

  export type HolidaySumAggregateInputType = {
    holiday_id?: true
    year?: true
  }

  export type HolidayMinAggregateInputType = {
    holiday_id?: true
    holiday_name?: true
    holiday_date?: true
    year?: true
  }

  export type HolidayMaxAggregateInputType = {
    holiday_id?: true
    holiday_name?: true
    holiday_date?: true
    year?: true
  }

  export type HolidayCountAggregateInputType = {
    holiday_id?: true
    holiday_name?: true
    holiday_date?: true
    year?: true
    _all?: true
  }

  export type HolidayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holiday to aggregate.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holidays
    **/
    _count?: true | HolidayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HolidayAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HolidaySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HolidayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HolidayMaxAggregateInputType
  }

  export type GetHolidayAggregateType<T extends HolidayAggregateArgs> = {
        [P in keyof T & keyof AggregateHoliday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoliday[P]>
      : GetScalarType<T[P], AggregateHoliday[P]>
  }




  export type HolidayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HolidayWhereInput
    orderBy?: HolidayOrderByWithAggregationInput | HolidayOrderByWithAggregationInput[]
    by: HolidayScalarFieldEnum[] | HolidayScalarFieldEnum
    having?: HolidayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HolidayCountAggregateInputType | true
    _avg?: HolidayAvgAggregateInputType
    _sum?: HolidaySumAggregateInputType
    _min?: HolidayMinAggregateInputType
    _max?: HolidayMaxAggregateInputType
  }

  export type HolidayGroupByOutputType = {
    holiday_id: number
    holiday_name: string | null
    holiday_date: Date
    year: number
    _count: HolidayCountAggregateOutputType | null
    _avg: HolidayAvgAggregateOutputType | null
    _sum: HolidaySumAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  type GetHolidayGroupByPayload<T extends HolidayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HolidayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HolidayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HolidayGroupByOutputType[P]>
            : GetScalarType<T[P], HolidayGroupByOutputType[P]>
        }
      >
    >


  export type HolidaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    holiday_id?: boolean
    holiday_name?: boolean
    holiday_date?: boolean
    year?: boolean
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    holiday_id?: boolean
    holiday_name?: boolean
    holiday_date?: boolean
    year?: boolean
  }, ExtArgs["result"]["holiday"]>

  export type HolidaySelectScalar = {
    holiday_id?: boolean
    holiday_name?: boolean
    holiday_date?: boolean
    year?: boolean
  }


  export type $HolidayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Holiday"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      holiday_id: number
      holiday_name: string | null
      holiday_date: Date
      year: number
    }, ExtArgs["result"]["holiday"]>
    composites: {}
  }

  type HolidayGetPayload<S extends boolean | null | undefined | HolidayDefaultArgs> = $Result.GetResult<Prisma.$HolidayPayload, S>

  type HolidayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HolidayFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HolidayCountAggregateInputType | true
    }

  export interface HolidayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Holiday'], meta: { name: 'Holiday' } }
    /**
     * Find zero or one Holiday that matches the filter.
     * @param {HolidayFindUniqueArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HolidayFindUniqueArgs>(args: SelectSubset<T, HolidayFindUniqueArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Holiday that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HolidayFindUniqueOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HolidayFindUniqueOrThrowArgs>(args: SelectSubset<T, HolidayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Holiday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HolidayFindFirstArgs>(args?: SelectSubset<T, HolidayFindFirstArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Holiday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindFirstOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HolidayFindFirstOrThrowArgs>(args?: SelectSubset<T, HolidayFindFirstOrThrowArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holidays
     * const holidays = await prisma.holiday.findMany()
     * 
     * // Get first 10 Holidays
     * const holidays = await prisma.holiday.findMany({ take: 10 })
     * 
     * // Only select the `holiday_id`
     * const holidayWithHoliday_idOnly = await prisma.holiday.findMany({ select: { holiday_id: true } })
     * 
     */
    findMany<T extends HolidayFindManyArgs>(args?: SelectSubset<T, HolidayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Holiday.
     * @param {HolidayCreateArgs} args - Arguments to create a Holiday.
     * @example
     * // Create one Holiday
     * const Holiday = await prisma.holiday.create({
     *   data: {
     *     // ... data to create a Holiday
     *   }
     * })
     * 
     */
    create<T extends HolidayCreateArgs>(args: SelectSubset<T, HolidayCreateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Holidays.
     * @param {HolidayCreateManyArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HolidayCreateManyArgs>(args?: SelectSubset<T, HolidayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holidays and returns the data saved in the database.
     * @param {HolidayCreateManyAndReturnArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holidays and only return the `holiday_id`
     * const holidayWithHoliday_idOnly = await prisma.holiday.createManyAndReturn({ 
     *   select: { holiday_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HolidayCreateManyAndReturnArgs>(args?: SelectSubset<T, HolidayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Holiday.
     * @param {HolidayDeleteArgs} args - Arguments to delete one Holiday.
     * @example
     * // Delete one Holiday
     * const Holiday = await prisma.holiday.delete({
     *   where: {
     *     // ... filter to delete one Holiday
     *   }
     * })
     * 
     */
    delete<T extends HolidayDeleteArgs>(args: SelectSubset<T, HolidayDeleteArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Holiday.
     * @param {HolidayUpdateArgs} args - Arguments to update one Holiday.
     * @example
     * // Update one Holiday
     * const holiday = await prisma.holiday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HolidayUpdateArgs>(args: SelectSubset<T, HolidayUpdateArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Holidays.
     * @param {HolidayDeleteManyArgs} args - Arguments to filter Holidays to delete.
     * @example
     * // Delete a few Holidays
     * const { count } = await prisma.holiday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HolidayDeleteManyArgs>(args?: SelectSubset<T, HolidayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holidays
     * const holiday = await prisma.holiday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HolidayUpdateManyArgs>(args: SelectSubset<T, HolidayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Holiday.
     * @param {HolidayUpsertArgs} args - Arguments to update or create a Holiday.
     * @example
     * // Update or create a Holiday
     * const holiday = await prisma.holiday.upsert({
     *   create: {
     *     // ... data to create a Holiday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holiday we want to update
     *   }
     * })
     */
    upsert<T extends HolidayUpsertArgs>(args: SelectSubset<T, HolidayUpsertArgs<ExtArgs>>): Prisma__HolidayClient<$Result.GetResult<Prisma.$HolidayPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayCountArgs} args - Arguments to filter Holidays to count.
     * @example
     * // Count the number of Holidays
     * const count = await prisma.holiday.count({
     *   where: {
     *     // ... the filter for the Holidays we want to count
     *   }
     * })
    **/
    count<T extends HolidayCountArgs>(
      args?: Subset<T, HolidayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HolidayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HolidayAggregateArgs>(args: Subset<T, HolidayAggregateArgs>): Prisma.PrismaPromise<GetHolidayAggregateType<T>>

    /**
     * Group by Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayGroupByArgs} args - Group by arguments.
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
      T extends HolidayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HolidayGroupByArgs['orderBy'] }
        : { orderBy?: HolidayGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HolidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHolidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Holiday model
   */
  readonly fields: HolidayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Holiday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HolidayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Holiday model
   */ 
  interface HolidayFieldRefs {
    readonly holiday_id: FieldRef<"Holiday", 'Int'>
    readonly holiday_name: FieldRef<"Holiday", 'String'>
    readonly holiday_date: FieldRef<"Holiday", 'DateTime'>
    readonly year: FieldRef<"Holiday", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Holiday findUnique
   */
  export type HolidayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findUniqueOrThrow
   */
  export type HolidayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday findFirst
   */
  export type HolidayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findFirstOrThrow
   */
  export type HolidayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Filter, which Holiday to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday findMany
   */
  export type HolidayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Filter, which Holidays to fetch.
     */
    where?: HolidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holidays to fetch.
     */
    orderBy?: HolidayOrderByWithRelationInput | HolidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holidays.
     */
    cursor?: HolidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holidays.
     */
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * Holiday create
   */
  export type HolidayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * The data needed to create a Holiday.
     */
    data: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
  }

  /**
   * Holiday createMany
   */
  export type HolidayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holiday createManyAndReturn
   */
  export type HolidayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Holidays.
     */
    data: HolidayCreateManyInput | HolidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holiday update
   */
  export type HolidayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * The data needed to update a Holiday.
     */
    data: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
    /**
     * Choose, which Holiday to update.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday updateMany
   */
  export type HolidayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holidays.
     */
    data: XOR<HolidayUpdateManyMutationInput, HolidayUncheckedUpdateManyInput>
    /**
     * Filter which Holidays to update
     */
    where?: HolidayWhereInput
  }

  /**
   * Holiday upsert
   */
  export type HolidayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * The filter to search for the Holiday to update in case it exists.
     */
    where: HolidayWhereUniqueInput
    /**
     * In case the Holiday found by the `where` argument doesn't exist, create a new Holiday with this data.
     */
    create: XOR<HolidayCreateInput, HolidayUncheckedCreateInput>
    /**
     * In case the Holiday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HolidayUpdateInput, HolidayUncheckedUpdateInput>
  }

  /**
   * Holiday delete
   */
  export type HolidayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
    /**
     * Filter which Holiday to delete.
     */
    where: HolidayWhereUniqueInput
  }

  /**
   * Holiday deleteMany
   */
  export type HolidayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holidays to delete
     */
    where?: HolidayWhereInput
  }

  /**
   * Holiday without action
   */
  export type HolidayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holiday
     */
    select?: HolidaySelect<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    attendance_id: number | null
    stud_id: number | null
    subject_id: number | null
    faculty_id: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    attendance_id: number | null
    stud_id: number | null
    subject_id: number | null
    faculty_id: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    attendance_id: number | null
    stud_id: number | null
    subject_id: number | null
    faculty_id: number | null
    attendance_date: Date | null
    status: string | null
  }

  export type AttendanceMaxAggregateOutputType = {
    attendance_id: number | null
    stud_id: number | null
    subject_id: number | null
    faculty_id: number | null
    attendance_date: Date | null
    status: string | null
  }

  export type AttendanceCountAggregateOutputType = {
    attendance_id: number
    stud_id: number
    subject_id: number
    faculty_id: number
    attendance_date: number
    status: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    attendance_id?: true
    stud_id?: true
    subject_id?: true
    faculty_id?: true
  }

  export type AttendanceSumAggregateInputType = {
    attendance_id?: true
    stud_id?: true
    subject_id?: true
    faculty_id?: true
  }

  export type AttendanceMinAggregateInputType = {
    attendance_id?: true
    stud_id?: true
    subject_id?: true
    faculty_id?: true
    attendance_date?: true
    status?: true
  }

  export type AttendanceMaxAggregateInputType = {
    attendance_id?: true
    stud_id?: true
    subject_id?: true
    faculty_id?: true
    attendance_date?: true
    status?: true
  }

  export type AttendanceCountAggregateInputType = {
    attendance_id?: true
    stud_id?: true
    subject_id?: true
    faculty_id?: true
    attendance_date?: true
    status?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    attendance_id: number
    stud_id: number | null
    subject_id: number | null
    faculty_id: number | null
    attendance_date: Date | null
    status: string
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attendance_id?: boolean
    stud_id?: boolean
    subject_id?: boolean
    faculty_id?: boolean
    attendance_date?: boolean
    status?: boolean
    Faculty?: boolean | Attendance$FacultyArgs<ExtArgs>
    Student?: boolean | Attendance$StudentArgs<ExtArgs>
    Subject?: boolean | Attendance$SubjectArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attendance_id?: boolean
    stud_id?: boolean
    subject_id?: boolean
    faculty_id?: boolean
    attendance_date?: boolean
    status?: boolean
    Faculty?: boolean | Attendance$FacultyArgs<ExtArgs>
    Student?: boolean | Attendance$StudentArgs<ExtArgs>
    Subject?: boolean | Attendance$SubjectArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    attendance_id?: boolean
    stud_id?: boolean
    subject_id?: boolean
    faculty_id?: boolean
    attendance_date?: boolean
    status?: boolean
  }

  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Faculty?: boolean | Attendance$FacultyArgs<ExtArgs>
    Student?: boolean | Attendance$StudentArgs<ExtArgs>
    Subject?: boolean | Attendance$SubjectArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Faculty?: boolean | Attendance$FacultyArgs<ExtArgs>
    Student?: boolean | Attendance$StudentArgs<ExtArgs>
    Subject?: boolean | Attendance$SubjectArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      Faculty: Prisma.$FacultyPayload<ExtArgs> | null
      Student: Prisma.$StudentPayload<ExtArgs> | null
      Subject: Prisma.$SubjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      attendance_id: number
      stud_id: number | null
      subject_id: number | null
      faculty_id: number | null
      attendance_date: Date | null
      status: string
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `attendance_id`
     * const attendanceWithAttendance_idOnly = await prisma.attendance.findMany({ select: { attendance_id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `attendance_id`
     * const attendanceWithAttendance_idOnly = await prisma.attendance.createManyAndReturn({ 
     *   select: { attendance_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Faculty<T extends Attendance$FacultyArgs<ExtArgs> = {}>(args?: Subset<T, Attendance$FacultyArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Student<T extends Attendance$StudentArgs<ExtArgs> = {}>(args?: Subset<T, Attendance$StudentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Subject<T extends Attendance$SubjectArgs<ExtArgs> = {}>(args?: Subset<T, Attendance$SubjectArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Attendance model
   */ 
  interface AttendanceFieldRefs {
    readonly attendance_id: FieldRef<"Attendance", 'Int'>
    readonly stud_id: FieldRef<"Attendance", 'Int'>
    readonly subject_id: FieldRef<"Attendance", 'Int'>
    readonly faculty_id: FieldRef<"Attendance", 'Int'>
    readonly attendance_date: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
  }

  /**
   * Attendance.Faculty
   */
  export type Attendance$FacultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faculty
     */
    select?: FacultySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyInclude<ExtArgs> | null
    where?: FacultyWhereInput
  }

  /**
   * Attendance.Student
   */
  export type Attendance$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * Attendance.Subject
   */
  export type Attendance$SubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model FacultyAttendance
   */

  export type AggregateFacultyAttendance = {
    _count: FacultyAttendanceCountAggregateOutputType | null
    _avg: FacultyAttendanceAvgAggregateOutputType | null
    _sum: FacultyAttendanceSumAggregateOutputType | null
    _min: FacultyAttendanceMinAggregateOutputType | null
    _max: FacultyAttendanceMaxAggregateOutputType | null
  }

  export type FacultyAttendanceAvgAggregateOutputType = {
    faculty_attendance_id: number | null
    faculty_id: number | null
  }

  export type FacultyAttendanceSumAggregateOutputType = {
    faculty_attendance_id: number | null
    faculty_id: number | null
  }

  export type FacultyAttendanceMinAggregateOutputType = {
    faculty_attendance_id: number | null
    faculty_id: number | null
    attendance_date: Date | null
    check_in_time: Date | null
    check_out_time: Date | null
    leave_date: Date | null
    status: string | null
    created_at: Date | null
  }

  export type FacultyAttendanceMaxAggregateOutputType = {
    faculty_attendance_id: number | null
    faculty_id: number | null
    attendance_date: Date | null
    check_in_time: Date | null
    check_out_time: Date | null
    leave_date: Date | null
    status: string | null
    created_at: Date | null
  }

  export type FacultyAttendanceCountAggregateOutputType = {
    faculty_attendance_id: number
    faculty_id: number
    attendance_date: number
    check_in_time: number
    check_out_time: number
    leave_date: number
    status: number
    created_at: number
    _all: number
  }


  export type FacultyAttendanceAvgAggregateInputType = {
    faculty_attendance_id?: true
    faculty_id?: true
  }

  export type FacultyAttendanceSumAggregateInputType = {
    faculty_attendance_id?: true
    faculty_id?: true
  }

  export type FacultyAttendanceMinAggregateInputType = {
    faculty_attendance_id?: true
    faculty_id?: true
    attendance_date?: true
    check_in_time?: true
    check_out_time?: true
    leave_date?: true
    status?: true
    created_at?: true
  }

  export type FacultyAttendanceMaxAggregateInputType = {
    faculty_attendance_id?: true
    faculty_id?: true
    attendance_date?: true
    check_in_time?: true
    check_out_time?: true
    leave_date?: true
    status?: true
    created_at?: true
  }

  export type FacultyAttendanceCountAggregateInputType = {
    faculty_attendance_id?: true
    faculty_id?: true
    attendance_date?: true
    check_in_time?: true
    check_out_time?: true
    leave_date?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type FacultyAttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyAttendance to aggregate.
     */
    where?: FacultyAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyAttendances to fetch.
     */
    orderBy?: FacultyAttendanceOrderByWithRelationInput | FacultyAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultyAttendances
    **/
    _count?: true | FacultyAttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacultyAttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacultyAttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyAttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyAttendanceMaxAggregateInputType
  }

  export type GetFacultyAttendanceAggregateType<T extends FacultyAttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultyAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultyAttendance[P]>
      : GetScalarType<T[P], AggregateFacultyAttendance[P]>
  }




  export type FacultyAttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyAttendanceWhereInput
    orderBy?: FacultyAttendanceOrderByWithAggregationInput | FacultyAttendanceOrderByWithAggregationInput[]
    by: FacultyAttendanceScalarFieldEnum[] | FacultyAttendanceScalarFieldEnum
    having?: FacultyAttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyAttendanceCountAggregateInputType | true
    _avg?: FacultyAttendanceAvgAggregateInputType
    _sum?: FacultyAttendanceSumAggregateInputType
    _min?: FacultyAttendanceMinAggregateInputType
    _max?: FacultyAttendanceMaxAggregateInputType
  }

  export type FacultyAttendanceGroupByOutputType = {
    faculty_attendance_id: number
    faculty_id: number
    attendance_date: Date
    check_in_time: Date | null
    check_out_time: Date | null
    leave_date: Date | null
    status: string
    created_at: Date | null
    _count: FacultyAttendanceCountAggregateOutputType | null
    _avg: FacultyAttendanceAvgAggregateOutputType | null
    _sum: FacultyAttendanceSumAggregateOutputType | null
    _min: FacultyAttendanceMinAggregateOutputType | null
    _max: FacultyAttendanceMaxAggregateOutputType | null
  }

  type GetFacultyAttendanceGroupByPayload<T extends FacultyAttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyAttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyAttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyAttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyAttendanceGroupByOutputType[P]>
        }
      >
    >


  export type FacultyAttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    faculty_attendance_id?: boolean
    faculty_id?: boolean
    attendance_date?: boolean
    check_in_time?: boolean
    check_out_time?: boolean
    leave_date?: boolean
    status?: boolean
    created_at?: boolean
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultyAttendance"]>

  export type FacultyAttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    faculty_attendance_id?: boolean
    faculty_id?: boolean
    attendance_date?: boolean
    check_in_time?: boolean
    check_out_time?: boolean
    leave_date?: boolean
    status?: boolean
    created_at?: boolean
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultyAttendance"]>

  export type FacultyAttendanceSelectScalar = {
    faculty_attendance_id?: boolean
    faculty_id?: boolean
    attendance_date?: boolean
    check_in_time?: boolean
    check_out_time?: boolean
    leave_date?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type FacultyAttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
  }
  export type FacultyAttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
  }

  export type $FacultyAttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultyAttendance"
    objects: {
      Faculty: Prisma.$FacultyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      faculty_attendance_id: number
      faculty_id: number
      attendance_date: Date
      check_in_time: Date | null
      check_out_time: Date | null
      leave_date: Date | null
      status: string
      created_at: Date | null
    }, ExtArgs["result"]["facultyAttendance"]>
    composites: {}
  }

  type FacultyAttendanceGetPayload<S extends boolean | null | undefined | FacultyAttendanceDefaultArgs> = $Result.GetResult<Prisma.$FacultyAttendancePayload, S>

  type FacultyAttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FacultyAttendanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FacultyAttendanceCountAggregateInputType | true
    }

  export interface FacultyAttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultyAttendance'], meta: { name: 'FacultyAttendance' } }
    /**
     * Find zero or one FacultyAttendance that matches the filter.
     * @param {FacultyAttendanceFindUniqueArgs} args - Arguments to find a FacultyAttendance
     * @example
     * // Get one FacultyAttendance
     * const facultyAttendance = await prisma.facultyAttendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyAttendanceFindUniqueArgs>(args: SelectSubset<T, FacultyAttendanceFindUniqueArgs<ExtArgs>>): Prisma__FacultyAttendanceClient<$Result.GetResult<Prisma.$FacultyAttendancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FacultyAttendance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FacultyAttendanceFindUniqueOrThrowArgs} args - Arguments to find a FacultyAttendance
     * @example
     * // Get one FacultyAttendance
     * const facultyAttendance = await prisma.facultyAttendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyAttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyAttendanceClient<$Result.GetResult<Prisma.$FacultyAttendancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FacultyAttendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAttendanceFindFirstArgs} args - Arguments to find a FacultyAttendance
     * @example
     * // Get one FacultyAttendance
     * const facultyAttendance = await prisma.facultyAttendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyAttendanceFindFirstArgs>(args?: SelectSubset<T, FacultyAttendanceFindFirstArgs<ExtArgs>>): Prisma__FacultyAttendanceClient<$Result.GetResult<Prisma.$FacultyAttendancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FacultyAttendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAttendanceFindFirstOrThrowArgs} args - Arguments to find a FacultyAttendance
     * @example
     * // Get one FacultyAttendance
     * const facultyAttendance = await prisma.facultyAttendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyAttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyAttendanceClient<$Result.GetResult<Prisma.$FacultyAttendancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FacultyAttendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultyAttendances
     * const facultyAttendances = await prisma.facultyAttendance.findMany()
     * 
     * // Get first 10 FacultyAttendances
     * const facultyAttendances = await prisma.facultyAttendance.findMany({ take: 10 })
     * 
     * // Only select the `faculty_attendance_id`
     * const facultyAttendanceWithFaculty_attendance_idOnly = await prisma.facultyAttendance.findMany({ select: { faculty_attendance_id: true } })
     * 
     */
    findMany<T extends FacultyAttendanceFindManyArgs>(args?: SelectSubset<T, FacultyAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyAttendancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FacultyAttendance.
     * @param {FacultyAttendanceCreateArgs} args - Arguments to create a FacultyAttendance.
     * @example
     * // Create one FacultyAttendance
     * const FacultyAttendance = await prisma.facultyAttendance.create({
     *   data: {
     *     // ... data to create a FacultyAttendance
     *   }
     * })
     * 
     */
    create<T extends FacultyAttendanceCreateArgs>(args: SelectSubset<T, FacultyAttendanceCreateArgs<ExtArgs>>): Prisma__FacultyAttendanceClient<$Result.GetResult<Prisma.$FacultyAttendancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FacultyAttendances.
     * @param {FacultyAttendanceCreateManyArgs} args - Arguments to create many FacultyAttendances.
     * @example
     * // Create many FacultyAttendances
     * const facultyAttendance = await prisma.facultyAttendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyAttendanceCreateManyArgs>(args?: SelectSubset<T, FacultyAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacultyAttendances and returns the data saved in the database.
     * @param {FacultyAttendanceCreateManyAndReturnArgs} args - Arguments to create many FacultyAttendances.
     * @example
     * // Create many FacultyAttendances
     * const facultyAttendance = await prisma.facultyAttendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacultyAttendances and only return the `faculty_attendance_id`
     * const facultyAttendanceWithFaculty_attendance_idOnly = await prisma.facultyAttendance.createManyAndReturn({ 
     *   select: { faculty_attendance_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultyAttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultyAttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyAttendancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FacultyAttendance.
     * @param {FacultyAttendanceDeleteArgs} args - Arguments to delete one FacultyAttendance.
     * @example
     * // Delete one FacultyAttendance
     * const FacultyAttendance = await prisma.facultyAttendance.delete({
     *   where: {
     *     // ... filter to delete one FacultyAttendance
     *   }
     * })
     * 
     */
    delete<T extends FacultyAttendanceDeleteArgs>(args: SelectSubset<T, FacultyAttendanceDeleteArgs<ExtArgs>>): Prisma__FacultyAttendanceClient<$Result.GetResult<Prisma.$FacultyAttendancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FacultyAttendance.
     * @param {FacultyAttendanceUpdateArgs} args - Arguments to update one FacultyAttendance.
     * @example
     * // Update one FacultyAttendance
     * const facultyAttendance = await prisma.facultyAttendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyAttendanceUpdateArgs>(args: SelectSubset<T, FacultyAttendanceUpdateArgs<ExtArgs>>): Prisma__FacultyAttendanceClient<$Result.GetResult<Prisma.$FacultyAttendancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FacultyAttendances.
     * @param {FacultyAttendanceDeleteManyArgs} args - Arguments to filter FacultyAttendances to delete.
     * @example
     * // Delete a few FacultyAttendances
     * const { count } = await prisma.facultyAttendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyAttendanceDeleteManyArgs>(args?: SelectSubset<T, FacultyAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultyAttendances
     * const facultyAttendance = await prisma.facultyAttendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyAttendanceUpdateManyArgs>(args: SelectSubset<T, FacultyAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacultyAttendance.
     * @param {FacultyAttendanceUpsertArgs} args - Arguments to update or create a FacultyAttendance.
     * @example
     * // Update or create a FacultyAttendance
     * const facultyAttendance = await prisma.facultyAttendance.upsert({
     *   create: {
     *     // ... data to create a FacultyAttendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultyAttendance we want to update
     *   }
     * })
     */
    upsert<T extends FacultyAttendanceUpsertArgs>(args: SelectSubset<T, FacultyAttendanceUpsertArgs<ExtArgs>>): Prisma__FacultyAttendanceClient<$Result.GetResult<Prisma.$FacultyAttendancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FacultyAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAttendanceCountArgs} args - Arguments to filter FacultyAttendances to count.
     * @example
     * // Count the number of FacultyAttendances
     * const count = await prisma.facultyAttendance.count({
     *   where: {
     *     // ... the filter for the FacultyAttendances we want to count
     *   }
     * })
    **/
    count<T extends FacultyAttendanceCountArgs>(
      args?: Subset<T, FacultyAttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyAttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultyAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultyAttendanceAggregateArgs>(args: Subset<T, FacultyAttendanceAggregateArgs>): Prisma.PrismaPromise<GetFacultyAttendanceAggregateType<T>>

    /**
     * Group by FacultyAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAttendanceGroupByArgs} args - Group by arguments.
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
      T extends FacultyAttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyAttendanceGroupByArgs['orderBy'] }
        : { orderBy?: FacultyAttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultyAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultyAttendance model
   */
  readonly fields: FacultyAttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultyAttendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyAttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Faculty<T extends FacultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultyDefaultArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FacultyAttendance model
   */ 
  interface FacultyAttendanceFieldRefs {
    readonly faculty_attendance_id: FieldRef<"FacultyAttendance", 'Int'>
    readonly faculty_id: FieldRef<"FacultyAttendance", 'Int'>
    readonly attendance_date: FieldRef<"FacultyAttendance", 'DateTime'>
    readonly check_in_time: FieldRef<"FacultyAttendance", 'DateTime'>
    readonly check_out_time: FieldRef<"FacultyAttendance", 'DateTime'>
    readonly leave_date: FieldRef<"FacultyAttendance", 'DateTime'>
    readonly status: FieldRef<"FacultyAttendance", 'String'>
    readonly created_at: FieldRef<"FacultyAttendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacultyAttendance findUnique
   */
  export type FacultyAttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAttendance
     */
    select?: FacultyAttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which FacultyAttendance to fetch.
     */
    where: FacultyAttendanceWhereUniqueInput
  }

  /**
   * FacultyAttendance findUniqueOrThrow
   */
  export type FacultyAttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAttendance
     */
    select?: FacultyAttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which FacultyAttendance to fetch.
     */
    where: FacultyAttendanceWhereUniqueInput
  }

  /**
   * FacultyAttendance findFirst
   */
  export type FacultyAttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAttendance
     */
    select?: FacultyAttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which FacultyAttendance to fetch.
     */
    where?: FacultyAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyAttendances to fetch.
     */
    orderBy?: FacultyAttendanceOrderByWithRelationInput | FacultyAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyAttendances.
     */
    cursor?: FacultyAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyAttendances.
     */
    distinct?: FacultyAttendanceScalarFieldEnum | FacultyAttendanceScalarFieldEnum[]
  }

  /**
   * FacultyAttendance findFirstOrThrow
   */
  export type FacultyAttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAttendance
     */
    select?: FacultyAttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which FacultyAttendance to fetch.
     */
    where?: FacultyAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyAttendances to fetch.
     */
    orderBy?: FacultyAttendanceOrderByWithRelationInput | FacultyAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyAttendances.
     */
    cursor?: FacultyAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyAttendances.
     */
    distinct?: FacultyAttendanceScalarFieldEnum | FacultyAttendanceScalarFieldEnum[]
  }

  /**
   * FacultyAttendance findMany
   */
  export type FacultyAttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAttendance
     */
    select?: FacultyAttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which FacultyAttendances to fetch.
     */
    where?: FacultyAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyAttendances to fetch.
     */
    orderBy?: FacultyAttendanceOrderByWithRelationInput | FacultyAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultyAttendances.
     */
    cursor?: FacultyAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyAttendances.
     */
    skip?: number
    distinct?: FacultyAttendanceScalarFieldEnum | FacultyAttendanceScalarFieldEnum[]
  }

  /**
   * FacultyAttendance create
   */
  export type FacultyAttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAttendance
     */
    select?: FacultyAttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a FacultyAttendance.
     */
    data: XOR<FacultyAttendanceCreateInput, FacultyAttendanceUncheckedCreateInput>
  }

  /**
   * FacultyAttendance createMany
   */
  export type FacultyAttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultyAttendances.
     */
    data: FacultyAttendanceCreateManyInput | FacultyAttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultyAttendance createManyAndReturn
   */
  export type FacultyAttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAttendance
     */
    select?: FacultyAttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FacultyAttendances.
     */
    data: FacultyAttendanceCreateManyInput | FacultyAttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacultyAttendance update
   */
  export type FacultyAttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAttendance
     */
    select?: FacultyAttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a FacultyAttendance.
     */
    data: XOR<FacultyAttendanceUpdateInput, FacultyAttendanceUncheckedUpdateInput>
    /**
     * Choose, which FacultyAttendance to update.
     */
    where: FacultyAttendanceWhereUniqueInput
  }

  /**
   * FacultyAttendance updateMany
   */
  export type FacultyAttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultyAttendances.
     */
    data: XOR<FacultyAttendanceUpdateManyMutationInput, FacultyAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which FacultyAttendances to update
     */
    where?: FacultyAttendanceWhereInput
  }

  /**
   * FacultyAttendance upsert
   */
  export type FacultyAttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAttendance
     */
    select?: FacultyAttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the FacultyAttendance to update in case it exists.
     */
    where: FacultyAttendanceWhereUniqueInput
    /**
     * In case the FacultyAttendance found by the `where` argument doesn't exist, create a new FacultyAttendance with this data.
     */
    create: XOR<FacultyAttendanceCreateInput, FacultyAttendanceUncheckedCreateInput>
    /**
     * In case the FacultyAttendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyAttendanceUpdateInput, FacultyAttendanceUncheckedUpdateInput>
  }

  /**
   * FacultyAttendance delete
   */
  export type FacultyAttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAttendance
     */
    select?: FacultyAttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAttendanceInclude<ExtArgs> | null
    /**
     * Filter which FacultyAttendance to delete.
     */
    where: FacultyAttendanceWhereUniqueInput
  }

  /**
   * FacultyAttendance deleteMany
   */
  export type FacultyAttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyAttendances to delete
     */
    where?: FacultyAttendanceWhereInput
  }

  /**
   * FacultyAttendance without action
   */
  export type FacultyAttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAttendance
     */
    select?: FacultyAttendanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAttendanceInclude<ExtArgs> | null
  }


  /**
   * Model FacultyLeave
   */

  export type AggregateFacultyLeave = {
    _count: FacultyLeaveCountAggregateOutputType | null
    _avg: FacultyLeaveAvgAggregateOutputType | null
    _sum: FacultyLeaveSumAggregateOutputType | null
    _min: FacultyLeaveMinAggregateOutputType | null
    _max: FacultyLeaveMaxAggregateOutputType | null
  }

  export type FacultyLeaveAvgAggregateOutputType = {
    leave_id: number | null
    faculty_id: number | null
  }

  export type FacultyLeaveSumAggregateOutputType = {
    leave_id: number | null
    faculty_id: number | null
  }

  export type FacultyLeaveMinAggregateOutputType = {
    leave_id: number | null
    faculty_id: number | null
    leave_date: Date | null
    reason: string | null
    status: string | null
    created_at: Date | null
  }

  export type FacultyLeaveMaxAggregateOutputType = {
    leave_id: number | null
    faculty_id: number | null
    leave_date: Date | null
    reason: string | null
    status: string | null
    created_at: Date | null
  }

  export type FacultyLeaveCountAggregateOutputType = {
    leave_id: number
    faculty_id: number
    leave_date: number
    reason: number
    status: number
    created_at: number
    _all: number
  }


  export type FacultyLeaveAvgAggregateInputType = {
    leave_id?: true
    faculty_id?: true
  }

  export type FacultyLeaveSumAggregateInputType = {
    leave_id?: true
    faculty_id?: true
  }

  export type FacultyLeaveMinAggregateInputType = {
    leave_id?: true
    faculty_id?: true
    leave_date?: true
    reason?: true
    status?: true
    created_at?: true
  }

  export type FacultyLeaveMaxAggregateInputType = {
    leave_id?: true
    faculty_id?: true
    leave_date?: true
    reason?: true
    status?: true
    created_at?: true
  }

  export type FacultyLeaveCountAggregateInputType = {
    leave_id?: true
    faculty_id?: true
    leave_date?: true
    reason?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type FacultyLeaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyLeave to aggregate.
     */
    where?: FacultyLeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyLeaves to fetch.
     */
    orderBy?: FacultyLeaveOrderByWithRelationInput | FacultyLeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyLeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultyLeaves
    **/
    _count?: true | FacultyLeaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacultyLeaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacultyLeaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyLeaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyLeaveMaxAggregateInputType
  }

  export type GetFacultyLeaveAggregateType<T extends FacultyLeaveAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultyLeave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultyLeave[P]>
      : GetScalarType<T[P], AggregateFacultyLeave[P]>
  }




  export type FacultyLeaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyLeaveWhereInput
    orderBy?: FacultyLeaveOrderByWithAggregationInput | FacultyLeaveOrderByWithAggregationInput[]
    by: FacultyLeaveScalarFieldEnum[] | FacultyLeaveScalarFieldEnum
    having?: FacultyLeaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyLeaveCountAggregateInputType | true
    _avg?: FacultyLeaveAvgAggregateInputType
    _sum?: FacultyLeaveSumAggregateInputType
    _min?: FacultyLeaveMinAggregateInputType
    _max?: FacultyLeaveMaxAggregateInputType
  }

  export type FacultyLeaveGroupByOutputType = {
    leave_id: number
    faculty_id: number
    leave_date: Date
    reason: string | null
    status: string | null
    created_at: Date | null
    _count: FacultyLeaveCountAggregateOutputType | null
    _avg: FacultyLeaveAvgAggregateOutputType | null
    _sum: FacultyLeaveSumAggregateOutputType | null
    _min: FacultyLeaveMinAggregateOutputType | null
    _max: FacultyLeaveMaxAggregateOutputType | null
  }

  type GetFacultyLeaveGroupByPayload<T extends FacultyLeaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyLeaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyLeaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyLeaveGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyLeaveGroupByOutputType[P]>
        }
      >
    >


  export type FacultyLeaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leave_id?: boolean
    faculty_id?: boolean
    leave_date?: boolean
    reason?: boolean
    status?: boolean
    created_at?: boolean
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultyLeave"]>

  export type FacultyLeaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leave_id?: boolean
    faculty_id?: boolean
    leave_date?: boolean
    reason?: boolean
    status?: boolean
    created_at?: boolean
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultyLeave"]>

  export type FacultyLeaveSelectScalar = {
    leave_id?: boolean
    faculty_id?: boolean
    leave_date?: boolean
    reason?: boolean
    status?: boolean
    created_at?: boolean
  }

  export type FacultyLeaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
  }
  export type FacultyLeaveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
  }

  export type $FacultyLeavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultyLeave"
    objects: {
      Faculty: Prisma.$FacultyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      leave_id: number
      faculty_id: number
      leave_date: Date
      reason: string | null
      status: string | null
      created_at: Date | null
    }, ExtArgs["result"]["facultyLeave"]>
    composites: {}
  }

  type FacultyLeaveGetPayload<S extends boolean | null | undefined | FacultyLeaveDefaultArgs> = $Result.GetResult<Prisma.$FacultyLeavePayload, S>

  type FacultyLeaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FacultyLeaveFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FacultyLeaveCountAggregateInputType | true
    }

  export interface FacultyLeaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultyLeave'], meta: { name: 'FacultyLeave' } }
    /**
     * Find zero or one FacultyLeave that matches the filter.
     * @param {FacultyLeaveFindUniqueArgs} args - Arguments to find a FacultyLeave
     * @example
     * // Get one FacultyLeave
     * const facultyLeave = await prisma.facultyLeave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyLeaveFindUniqueArgs>(args: SelectSubset<T, FacultyLeaveFindUniqueArgs<ExtArgs>>): Prisma__FacultyLeaveClient<$Result.GetResult<Prisma.$FacultyLeavePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FacultyLeave that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FacultyLeaveFindUniqueOrThrowArgs} args - Arguments to find a FacultyLeave
     * @example
     * // Get one FacultyLeave
     * const facultyLeave = await prisma.facultyLeave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyLeaveFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyLeaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyLeaveClient<$Result.GetResult<Prisma.$FacultyLeavePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FacultyLeave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyLeaveFindFirstArgs} args - Arguments to find a FacultyLeave
     * @example
     * // Get one FacultyLeave
     * const facultyLeave = await prisma.facultyLeave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyLeaveFindFirstArgs>(args?: SelectSubset<T, FacultyLeaveFindFirstArgs<ExtArgs>>): Prisma__FacultyLeaveClient<$Result.GetResult<Prisma.$FacultyLeavePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FacultyLeave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyLeaveFindFirstOrThrowArgs} args - Arguments to find a FacultyLeave
     * @example
     * // Get one FacultyLeave
     * const facultyLeave = await prisma.facultyLeave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyLeaveFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyLeaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyLeaveClient<$Result.GetResult<Prisma.$FacultyLeavePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FacultyLeaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyLeaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultyLeaves
     * const facultyLeaves = await prisma.facultyLeave.findMany()
     * 
     * // Get first 10 FacultyLeaves
     * const facultyLeaves = await prisma.facultyLeave.findMany({ take: 10 })
     * 
     * // Only select the `leave_id`
     * const facultyLeaveWithLeave_idOnly = await prisma.facultyLeave.findMany({ select: { leave_id: true } })
     * 
     */
    findMany<T extends FacultyLeaveFindManyArgs>(args?: SelectSubset<T, FacultyLeaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyLeavePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FacultyLeave.
     * @param {FacultyLeaveCreateArgs} args - Arguments to create a FacultyLeave.
     * @example
     * // Create one FacultyLeave
     * const FacultyLeave = await prisma.facultyLeave.create({
     *   data: {
     *     // ... data to create a FacultyLeave
     *   }
     * })
     * 
     */
    create<T extends FacultyLeaveCreateArgs>(args: SelectSubset<T, FacultyLeaveCreateArgs<ExtArgs>>): Prisma__FacultyLeaveClient<$Result.GetResult<Prisma.$FacultyLeavePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FacultyLeaves.
     * @param {FacultyLeaveCreateManyArgs} args - Arguments to create many FacultyLeaves.
     * @example
     * // Create many FacultyLeaves
     * const facultyLeave = await prisma.facultyLeave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyLeaveCreateManyArgs>(args?: SelectSubset<T, FacultyLeaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacultyLeaves and returns the data saved in the database.
     * @param {FacultyLeaveCreateManyAndReturnArgs} args - Arguments to create many FacultyLeaves.
     * @example
     * // Create many FacultyLeaves
     * const facultyLeave = await prisma.facultyLeave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacultyLeaves and only return the `leave_id`
     * const facultyLeaveWithLeave_idOnly = await prisma.facultyLeave.createManyAndReturn({ 
     *   select: { leave_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultyLeaveCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultyLeaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyLeavePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FacultyLeave.
     * @param {FacultyLeaveDeleteArgs} args - Arguments to delete one FacultyLeave.
     * @example
     * // Delete one FacultyLeave
     * const FacultyLeave = await prisma.facultyLeave.delete({
     *   where: {
     *     // ... filter to delete one FacultyLeave
     *   }
     * })
     * 
     */
    delete<T extends FacultyLeaveDeleteArgs>(args: SelectSubset<T, FacultyLeaveDeleteArgs<ExtArgs>>): Prisma__FacultyLeaveClient<$Result.GetResult<Prisma.$FacultyLeavePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FacultyLeave.
     * @param {FacultyLeaveUpdateArgs} args - Arguments to update one FacultyLeave.
     * @example
     * // Update one FacultyLeave
     * const facultyLeave = await prisma.facultyLeave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyLeaveUpdateArgs>(args: SelectSubset<T, FacultyLeaveUpdateArgs<ExtArgs>>): Prisma__FacultyLeaveClient<$Result.GetResult<Prisma.$FacultyLeavePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FacultyLeaves.
     * @param {FacultyLeaveDeleteManyArgs} args - Arguments to filter FacultyLeaves to delete.
     * @example
     * // Delete a few FacultyLeaves
     * const { count } = await prisma.facultyLeave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyLeaveDeleteManyArgs>(args?: SelectSubset<T, FacultyLeaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyLeaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultyLeaves
     * const facultyLeave = await prisma.facultyLeave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyLeaveUpdateManyArgs>(args: SelectSubset<T, FacultyLeaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacultyLeave.
     * @param {FacultyLeaveUpsertArgs} args - Arguments to update or create a FacultyLeave.
     * @example
     * // Update or create a FacultyLeave
     * const facultyLeave = await prisma.facultyLeave.upsert({
     *   create: {
     *     // ... data to create a FacultyLeave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultyLeave we want to update
     *   }
     * })
     */
    upsert<T extends FacultyLeaveUpsertArgs>(args: SelectSubset<T, FacultyLeaveUpsertArgs<ExtArgs>>): Prisma__FacultyLeaveClient<$Result.GetResult<Prisma.$FacultyLeavePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FacultyLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyLeaveCountArgs} args - Arguments to filter FacultyLeaves to count.
     * @example
     * // Count the number of FacultyLeaves
     * const count = await prisma.facultyLeave.count({
     *   where: {
     *     // ... the filter for the FacultyLeaves we want to count
     *   }
     * })
    **/
    count<T extends FacultyLeaveCountArgs>(
      args?: Subset<T, FacultyLeaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyLeaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultyLeave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyLeaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultyLeaveAggregateArgs>(args: Subset<T, FacultyLeaveAggregateArgs>): Prisma.PrismaPromise<GetFacultyLeaveAggregateType<T>>

    /**
     * Group by FacultyLeave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyLeaveGroupByArgs} args - Group by arguments.
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
      T extends FacultyLeaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyLeaveGroupByArgs['orderBy'] }
        : { orderBy?: FacultyLeaveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultyLeaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyLeaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultyLeave model
   */
  readonly fields: FacultyLeaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultyLeave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyLeaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Faculty<T extends FacultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultyDefaultArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FacultyLeave model
   */ 
  interface FacultyLeaveFieldRefs {
    readonly leave_id: FieldRef<"FacultyLeave", 'Int'>
    readonly faculty_id: FieldRef<"FacultyLeave", 'Int'>
    readonly leave_date: FieldRef<"FacultyLeave", 'DateTime'>
    readonly reason: FieldRef<"FacultyLeave", 'String'>
    readonly status: FieldRef<"FacultyLeave", 'String'>
    readonly created_at: FieldRef<"FacultyLeave", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacultyLeave findUnique
   */
  export type FacultyLeaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyLeave
     */
    select?: FacultyLeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyLeaveInclude<ExtArgs> | null
    /**
     * Filter, which FacultyLeave to fetch.
     */
    where: FacultyLeaveWhereUniqueInput
  }

  /**
   * FacultyLeave findUniqueOrThrow
   */
  export type FacultyLeaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyLeave
     */
    select?: FacultyLeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyLeaveInclude<ExtArgs> | null
    /**
     * Filter, which FacultyLeave to fetch.
     */
    where: FacultyLeaveWhereUniqueInput
  }

  /**
   * FacultyLeave findFirst
   */
  export type FacultyLeaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyLeave
     */
    select?: FacultyLeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyLeaveInclude<ExtArgs> | null
    /**
     * Filter, which FacultyLeave to fetch.
     */
    where?: FacultyLeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyLeaves to fetch.
     */
    orderBy?: FacultyLeaveOrderByWithRelationInput | FacultyLeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyLeaves.
     */
    cursor?: FacultyLeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyLeaves.
     */
    distinct?: FacultyLeaveScalarFieldEnum | FacultyLeaveScalarFieldEnum[]
  }

  /**
   * FacultyLeave findFirstOrThrow
   */
  export type FacultyLeaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyLeave
     */
    select?: FacultyLeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyLeaveInclude<ExtArgs> | null
    /**
     * Filter, which FacultyLeave to fetch.
     */
    where?: FacultyLeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyLeaves to fetch.
     */
    orderBy?: FacultyLeaveOrderByWithRelationInput | FacultyLeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyLeaves.
     */
    cursor?: FacultyLeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyLeaves.
     */
    distinct?: FacultyLeaveScalarFieldEnum | FacultyLeaveScalarFieldEnum[]
  }

  /**
   * FacultyLeave findMany
   */
  export type FacultyLeaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyLeave
     */
    select?: FacultyLeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyLeaveInclude<ExtArgs> | null
    /**
     * Filter, which FacultyLeaves to fetch.
     */
    where?: FacultyLeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyLeaves to fetch.
     */
    orderBy?: FacultyLeaveOrderByWithRelationInput | FacultyLeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultyLeaves.
     */
    cursor?: FacultyLeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyLeaves.
     */
    skip?: number
    distinct?: FacultyLeaveScalarFieldEnum | FacultyLeaveScalarFieldEnum[]
  }

  /**
   * FacultyLeave create
   */
  export type FacultyLeaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyLeave
     */
    select?: FacultyLeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyLeaveInclude<ExtArgs> | null
    /**
     * The data needed to create a FacultyLeave.
     */
    data: XOR<FacultyLeaveCreateInput, FacultyLeaveUncheckedCreateInput>
  }

  /**
   * FacultyLeave createMany
   */
  export type FacultyLeaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultyLeaves.
     */
    data: FacultyLeaveCreateManyInput | FacultyLeaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultyLeave createManyAndReturn
   */
  export type FacultyLeaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyLeave
     */
    select?: FacultyLeaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FacultyLeaves.
     */
    data: FacultyLeaveCreateManyInput | FacultyLeaveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyLeaveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacultyLeave update
   */
  export type FacultyLeaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyLeave
     */
    select?: FacultyLeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyLeaveInclude<ExtArgs> | null
    /**
     * The data needed to update a FacultyLeave.
     */
    data: XOR<FacultyLeaveUpdateInput, FacultyLeaveUncheckedUpdateInput>
    /**
     * Choose, which FacultyLeave to update.
     */
    where: FacultyLeaveWhereUniqueInput
  }

  /**
   * FacultyLeave updateMany
   */
  export type FacultyLeaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultyLeaves.
     */
    data: XOR<FacultyLeaveUpdateManyMutationInput, FacultyLeaveUncheckedUpdateManyInput>
    /**
     * Filter which FacultyLeaves to update
     */
    where?: FacultyLeaveWhereInput
  }

  /**
   * FacultyLeave upsert
   */
  export type FacultyLeaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyLeave
     */
    select?: FacultyLeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyLeaveInclude<ExtArgs> | null
    /**
     * The filter to search for the FacultyLeave to update in case it exists.
     */
    where: FacultyLeaveWhereUniqueInput
    /**
     * In case the FacultyLeave found by the `where` argument doesn't exist, create a new FacultyLeave with this data.
     */
    create: XOR<FacultyLeaveCreateInput, FacultyLeaveUncheckedCreateInput>
    /**
     * In case the FacultyLeave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyLeaveUpdateInput, FacultyLeaveUncheckedUpdateInput>
  }

  /**
   * FacultyLeave delete
   */
  export type FacultyLeaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyLeave
     */
    select?: FacultyLeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyLeaveInclude<ExtArgs> | null
    /**
     * Filter which FacultyLeave to delete.
     */
    where: FacultyLeaveWhereUniqueInput
  }

  /**
   * FacultyLeave deleteMany
   */
  export type FacultyLeaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyLeaves to delete
     */
    where?: FacultyLeaveWhereInput
  }

  /**
   * FacultyLeave without action
   */
  export type FacultyLeaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyLeave
     */
    select?: FacultyLeaveSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyLeaveInclude<ExtArgs> | null
  }


  /**
   * Model FacultyNote
   */

  export type AggregateFacultyNote = {
    _count: FacultyNoteCountAggregateOutputType | null
    _avg: FacultyNoteAvgAggregateOutputType | null
    _sum: FacultyNoteSumAggregateOutputType | null
    _min: FacultyNoteMinAggregateOutputType | null
    _max: FacultyNoteMaxAggregateOutputType | null
  }

  export type FacultyNoteAvgAggregateOutputType = {
    note_id: number | null
    faculty_id: number | null
  }

  export type FacultyNoteSumAggregateOutputType = {
    note_id: number | null
    faculty_id: number | null
  }

  export type FacultyNoteMinAggregateOutputType = {
    note_id: number | null
    faculty_id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FacultyNoteMaxAggregateOutputType = {
    note_id: number | null
    faculty_id: number | null
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FacultyNoteCountAggregateOutputType = {
    note_id: number
    faculty_id: number
    title: number
    content: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FacultyNoteAvgAggregateInputType = {
    note_id?: true
    faculty_id?: true
  }

  export type FacultyNoteSumAggregateInputType = {
    note_id?: true
    faculty_id?: true
  }

  export type FacultyNoteMinAggregateInputType = {
    note_id?: true
    faculty_id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type FacultyNoteMaxAggregateInputType = {
    note_id?: true
    faculty_id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
  }

  export type FacultyNoteCountAggregateInputType = {
    note_id?: true
    faculty_id?: true
    title?: true
    content?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FacultyNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyNote to aggregate.
     */
    where?: FacultyNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyNotes to fetch.
     */
    orderBy?: FacultyNoteOrderByWithRelationInput | FacultyNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultyNotes
    **/
    _count?: true | FacultyNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacultyNoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacultyNoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyNoteMaxAggregateInputType
  }

  export type GetFacultyNoteAggregateType<T extends FacultyNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultyNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultyNote[P]>
      : GetScalarType<T[P], AggregateFacultyNote[P]>
  }




  export type FacultyNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyNoteWhereInput
    orderBy?: FacultyNoteOrderByWithAggregationInput | FacultyNoteOrderByWithAggregationInput[]
    by: FacultyNoteScalarFieldEnum[] | FacultyNoteScalarFieldEnum
    having?: FacultyNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyNoteCountAggregateInputType | true
    _avg?: FacultyNoteAvgAggregateInputType
    _sum?: FacultyNoteSumAggregateInputType
    _min?: FacultyNoteMinAggregateInputType
    _max?: FacultyNoteMaxAggregateInputType
  }

  export type FacultyNoteGroupByOutputType = {
    note_id: number
    faculty_id: number
    title: string | null
    content: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: FacultyNoteCountAggregateOutputType | null
    _avg: FacultyNoteAvgAggregateOutputType | null
    _sum: FacultyNoteSumAggregateOutputType | null
    _min: FacultyNoteMinAggregateOutputType | null
    _max: FacultyNoteMaxAggregateOutputType | null
  }

  type GetFacultyNoteGroupByPayload<T extends FacultyNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyNoteGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyNoteGroupByOutputType[P]>
        }
      >
    >


  export type FacultyNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    faculty_id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultyNote"]>

  export type FacultyNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    note_id?: boolean
    faculty_id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facultyNote"]>

  export type FacultyNoteSelectScalar = {
    note_id?: boolean
    faculty_id?: boolean
    title?: boolean
    content?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FacultyNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
  }
  export type FacultyNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
  }

  export type $FacultyNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultyNote"
    objects: {
      Faculty: Prisma.$FacultyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      note_id: number
      faculty_id: number
      title: string | null
      content: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["facultyNote"]>
    composites: {}
  }

  type FacultyNoteGetPayload<S extends boolean | null | undefined | FacultyNoteDefaultArgs> = $Result.GetResult<Prisma.$FacultyNotePayload, S>

  type FacultyNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FacultyNoteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FacultyNoteCountAggregateInputType | true
    }

  export interface FacultyNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultyNote'], meta: { name: 'FacultyNote' } }
    /**
     * Find zero or one FacultyNote that matches the filter.
     * @param {FacultyNoteFindUniqueArgs} args - Arguments to find a FacultyNote
     * @example
     * // Get one FacultyNote
     * const facultyNote = await prisma.facultyNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyNoteFindUniqueArgs>(args: SelectSubset<T, FacultyNoteFindUniqueArgs<ExtArgs>>): Prisma__FacultyNoteClient<$Result.GetResult<Prisma.$FacultyNotePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FacultyNote that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FacultyNoteFindUniqueOrThrowArgs} args - Arguments to find a FacultyNote
     * @example
     * // Get one FacultyNote
     * const facultyNote = await prisma.facultyNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyNoteClient<$Result.GetResult<Prisma.$FacultyNotePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FacultyNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyNoteFindFirstArgs} args - Arguments to find a FacultyNote
     * @example
     * // Get one FacultyNote
     * const facultyNote = await prisma.facultyNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyNoteFindFirstArgs>(args?: SelectSubset<T, FacultyNoteFindFirstArgs<ExtArgs>>): Prisma__FacultyNoteClient<$Result.GetResult<Prisma.$FacultyNotePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FacultyNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyNoteFindFirstOrThrowArgs} args - Arguments to find a FacultyNote
     * @example
     * // Get one FacultyNote
     * const facultyNote = await prisma.facultyNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyNoteClient<$Result.GetResult<Prisma.$FacultyNotePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FacultyNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultyNotes
     * const facultyNotes = await prisma.facultyNote.findMany()
     * 
     * // Get first 10 FacultyNotes
     * const facultyNotes = await prisma.facultyNote.findMany({ take: 10 })
     * 
     * // Only select the `note_id`
     * const facultyNoteWithNote_idOnly = await prisma.facultyNote.findMany({ select: { note_id: true } })
     * 
     */
    findMany<T extends FacultyNoteFindManyArgs>(args?: SelectSubset<T, FacultyNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyNotePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FacultyNote.
     * @param {FacultyNoteCreateArgs} args - Arguments to create a FacultyNote.
     * @example
     * // Create one FacultyNote
     * const FacultyNote = await prisma.facultyNote.create({
     *   data: {
     *     // ... data to create a FacultyNote
     *   }
     * })
     * 
     */
    create<T extends FacultyNoteCreateArgs>(args: SelectSubset<T, FacultyNoteCreateArgs<ExtArgs>>): Prisma__FacultyNoteClient<$Result.GetResult<Prisma.$FacultyNotePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FacultyNotes.
     * @param {FacultyNoteCreateManyArgs} args - Arguments to create many FacultyNotes.
     * @example
     * // Create many FacultyNotes
     * const facultyNote = await prisma.facultyNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyNoteCreateManyArgs>(args?: SelectSubset<T, FacultyNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacultyNotes and returns the data saved in the database.
     * @param {FacultyNoteCreateManyAndReturnArgs} args - Arguments to create many FacultyNotes.
     * @example
     * // Create many FacultyNotes
     * const facultyNote = await prisma.facultyNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacultyNotes and only return the `note_id`
     * const facultyNoteWithNote_idOnly = await prisma.facultyNote.createManyAndReturn({ 
     *   select: { note_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultyNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultyNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyNotePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FacultyNote.
     * @param {FacultyNoteDeleteArgs} args - Arguments to delete one FacultyNote.
     * @example
     * // Delete one FacultyNote
     * const FacultyNote = await prisma.facultyNote.delete({
     *   where: {
     *     // ... filter to delete one FacultyNote
     *   }
     * })
     * 
     */
    delete<T extends FacultyNoteDeleteArgs>(args: SelectSubset<T, FacultyNoteDeleteArgs<ExtArgs>>): Prisma__FacultyNoteClient<$Result.GetResult<Prisma.$FacultyNotePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FacultyNote.
     * @param {FacultyNoteUpdateArgs} args - Arguments to update one FacultyNote.
     * @example
     * // Update one FacultyNote
     * const facultyNote = await prisma.facultyNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyNoteUpdateArgs>(args: SelectSubset<T, FacultyNoteUpdateArgs<ExtArgs>>): Prisma__FacultyNoteClient<$Result.GetResult<Prisma.$FacultyNotePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FacultyNotes.
     * @param {FacultyNoteDeleteManyArgs} args - Arguments to filter FacultyNotes to delete.
     * @example
     * // Delete a few FacultyNotes
     * const { count } = await prisma.facultyNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyNoteDeleteManyArgs>(args?: SelectSubset<T, FacultyNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultyNotes
     * const facultyNote = await prisma.facultyNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyNoteUpdateManyArgs>(args: SelectSubset<T, FacultyNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacultyNote.
     * @param {FacultyNoteUpsertArgs} args - Arguments to update or create a FacultyNote.
     * @example
     * // Update or create a FacultyNote
     * const facultyNote = await prisma.facultyNote.upsert({
     *   create: {
     *     // ... data to create a FacultyNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultyNote we want to update
     *   }
     * })
     */
    upsert<T extends FacultyNoteUpsertArgs>(args: SelectSubset<T, FacultyNoteUpsertArgs<ExtArgs>>): Prisma__FacultyNoteClient<$Result.GetResult<Prisma.$FacultyNotePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FacultyNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyNoteCountArgs} args - Arguments to filter FacultyNotes to count.
     * @example
     * // Count the number of FacultyNotes
     * const count = await prisma.facultyNote.count({
     *   where: {
     *     // ... the filter for the FacultyNotes we want to count
     *   }
     * })
    **/
    count<T extends FacultyNoteCountArgs>(
      args?: Subset<T, FacultyNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultyNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultyNoteAggregateArgs>(args: Subset<T, FacultyNoteAggregateArgs>): Prisma.PrismaPromise<GetFacultyNoteAggregateType<T>>

    /**
     * Group by FacultyNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyNoteGroupByArgs} args - Group by arguments.
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
      T extends FacultyNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyNoteGroupByArgs['orderBy'] }
        : { orderBy?: FacultyNoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultyNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultyNote model
   */
  readonly fields: FacultyNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultyNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Faculty<T extends FacultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultyDefaultArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FacultyNote model
   */ 
  interface FacultyNoteFieldRefs {
    readonly note_id: FieldRef<"FacultyNote", 'Int'>
    readonly faculty_id: FieldRef<"FacultyNote", 'Int'>
    readonly title: FieldRef<"FacultyNote", 'String'>
    readonly content: FieldRef<"FacultyNote", 'String'>
    readonly created_at: FieldRef<"FacultyNote", 'DateTime'>
    readonly updated_at: FieldRef<"FacultyNote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacultyNote findUnique
   */
  export type FacultyNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyNote
     */
    select?: FacultyNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyNoteInclude<ExtArgs> | null
    /**
     * Filter, which FacultyNote to fetch.
     */
    where: FacultyNoteWhereUniqueInput
  }

  /**
   * FacultyNote findUniqueOrThrow
   */
  export type FacultyNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyNote
     */
    select?: FacultyNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyNoteInclude<ExtArgs> | null
    /**
     * Filter, which FacultyNote to fetch.
     */
    where: FacultyNoteWhereUniqueInput
  }

  /**
   * FacultyNote findFirst
   */
  export type FacultyNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyNote
     */
    select?: FacultyNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyNoteInclude<ExtArgs> | null
    /**
     * Filter, which FacultyNote to fetch.
     */
    where?: FacultyNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyNotes to fetch.
     */
    orderBy?: FacultyNoteOrderByWithRelationInput | FacultyNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyNotes.
     */
    cursor?: FacultyNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyNotes.
     */
    distinct?: FacultyNoteScalarFieldEnum | FacultyNoteScalarFieldEnum[]
  }

  /**
   * FacultyNote findFirstOrThrow
   */
  export type FacultyNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyNote
     */
    select?: FacultyNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyNoteInclude<ExtArgs> | null
    /**
     * Filter, which FacultyNote to fetch.
     */
    where?: FacultyNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyNotes to fetch.
     */
    orderBy?: FacultyNoteOrderByWithRelationInput | FacultyNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyNotes.
     */
    cursor?: FacultyNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyNotes.
     */
    distinct?: FacultyNoteScalarFieldEnum | FacultyNoteScalarFieldEnum[]
  }

  /**
   * FacultyNote findMany
   */
  export type FacultyNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyNote
     */
    select?: FacultyNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyNoteInclude<ExtArgs> | null
    /**
     * Filter, which FacultyNotes to fetch.
     */
    where?: FacultyNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyNotes to fetch.
     */
    orderBy?: FacultyNoteOrderByWithRelationInput | FacultyNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultyNotes.
     */
    cursor?: FacultyNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyNotes.
     */
    skip?: number
    distinct?: FacultyNoteScalarFieldEnum | FacultyNoteScalarFieldEnum[]
  }

  /**
   * FacultyNote create
   */
  export type FacultyNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyNote
     */
    select?: FacultyNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a FacultyNote.
     */
    data: XOR<FacultyNoteCreateInput, FacultyNoteUncheckedCreateInput>
  }

  /**
   * FacultyNote createMany
   */
  export type FacultyNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultyNotes.
     */
    data: FacultyNoteCreateManyInput | FacultyNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultyNote createManyAndReturn
   */
  export type FacultyNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyNote
     */
    select?: FacultyNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FacultyNotes.
     */
    data: FacultyNoteCreateManyInput | FacultyNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacultyNote update
   */
  export type FacultyNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyNote
     */
    select?: FacultyNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a FacultyNote.
     */
    data: XOR<FacultyNoteUpdateInput, FacultyNoteUncheckedUpdateInput>
    /**
     * Choose, which FacultyNote to update.
     */
    where: FacultyNoteWhereUniqueInput
  }

  /**
   * FacultyNote updateMany
   */
  export type FacultyNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultyNotes.
     */
    data: XOR<FacultyNoteUpdateManyMutationInput, FacultyNoteUncheckedUpdateManyInput>
    /**
     * Filter which FacultyNotes to update
     */
    where?: FacultyNoteWhereInput
  }

  /**
   * FacultyNote upsert
   */
  export type FacultyNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyNote
     */
    select?: FacultyNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the FacultyNote to update in case it exists.
     */
    where: FacultyNoteWhereUniqueInput
    /**
     * In case the FacultyNote found by the `where` argument doesn't exist, create a new FacultyNote with this data.
     */
    create: XOR<FacultyNoteCreateInput, FacultyNoteUncheckedCreateInput>
    /**
     * In case the FacultyNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyNoteUpdateInput, FacultyNoteUncheckedUpdateInput>
  }

  /**
   * FacultyNote delete
   */
  export type FacultyNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyNote
     */
    select?: FacultyNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyNoteInclude<ExtArgs> | null
    /**
     * Filter which FacultyNote to delete.
     */
    where: FacultyNoteWhereUniqueInput
  }

  /**
   * FacultyNote deleteMany
   */
  export type FacultyNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyNotes to delete
     */
    where?: FacultyNoteWhereInput
  }

  /**
   * FacultyNote without action
   */
  export type FacultyNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyNote
     */
    select?: FacultyNoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyNoteInclude<ExtArgs> | null
  }


  /**
   * Model FacultyAnnouncement
   */

  export type AggregateFacultyAnnouncement = {
    _count: FacultyAnnouncementCountAggregateOutputType | null
    _avg: FacultyAnnouncementAvgAggregateOutputType | null
    _sum: FacultyAnnouncementSumAggregateOutputType | null
    _min: FacultyAnnouncementMinAggregateOutputType | null
    _max: FacultyAnnouncementMaxAggregateOutputType | null
  }

  export type FacultyAnnouncementAvgAggregateOutputType = {
    announcement_id: number | null
    faculty_id: number | null
    subject_id: number | null
    dept_id: number | null
  }

  export type FacultyAnnouncementSumAggregateOutputType = {
    announcement_id: number | null
    faculty_id: number | null
    subject_id: number | null
    dept_id: number | null
  }

  export type FacultyAnnouncementMinAggregateOutputType = {
    announcement_id: number | null
    faculty_id: number | null
    target_type: string | null
    semester: string | null
    subject_id: number | null
    dept_id: number | null
    title: string | null
    message: string | null
    created_at: Date | null
  }

  export type FacultyAnnouncementMaxAggregateOutputType = {
    announcement_id: number | null
    faculty_id: number | null
    target_type: string | null
    semester: string | null
    subject_id: number | null
    dept_id: number | null
    title: string | null
    message: string | null
    created_at: Date | null
  }

  export type FacultyAnnouncementCountAggregateOutputType = {
    announcement_id: number
    faculty_id: number
    target_type: number
    semester: number
    subject_id: number
    dept_id: number
    title: number
    message: number
    created_at: number
    _all: number
  }


  export type FacultyAnnouncementAvgAggregateInputType = {
    announcement_id?: true
    faculty_id?: true
    subject_id?: true
    dept_id?: true
  }

  export type FacultyAnnouncementSumAggregateInputType = {
    announcement_id?: true
    faculty_id?: true
    subject_id?: true
    dept_id?: true
  }

  export type FacultyAnnouncementMinAggregateInputType = {
    announcement_id?: true
    faculty_id?: true
    target_type?: true
    semester?: true
    subject_id?: true
    dept_id?: true
    title?: true
    message?: true
    created_at?: true
  }

  export type FacultyAnnouncementMaxAggregateInputType = {
    announcement_id?: true
    faculty_id?: true
    target_type?: true
    semester?: true
    subject_id?: true
    dept_id?: true
    title?: true
    message?: true
    created_at?: true
  }

  export type FacultyAnnouncementCountAggregateInputType = {
    announcement_id?: true
    faculty_id?: true
    target_type?: true
    semester?: true
    subject_id?: true
    dept_id?: true
    title?: true
    message?: true
    created_at?: true
    _all?: true
  }

  export type FacultyAnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyAnnouncement to aggregate.
     */
    where?: FacultyAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyAnnouncements to fetch.
     */
    orderBy?: FacultyAnnouncementOrderByWithRelationInput | FacultyAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FacultyAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FacultyAnnouncements
    **/
    _count?: true | FacultyAnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FacultyAnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FacultyAnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyAnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyAnnouncementMaxAggregateInputType
  }

  export type GetFacultyAnnouncementAggregateType<T extends FacultyAnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateFacultyAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacultyAnnouncement[P]>
      : GetScalarType<T[P], AggregateFacultyAnnouncement[P]>
  }




  export type FacultyAnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FacultyAnnouncementWhereInput
    orderBy?: FacultyAnnouncementOrderByWithAggregationInput | FacultyAnnouncementOrderByWithAggregationInput[]
    by: FacultyAnnouncementScalarFieldEnum[] | FacultyAnnouncementScalarFieldEnum
    having?: FacultyAnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyAnnouncementCountAggregateInputType | true
    _avg?: FacultyAnnouncementAvgAggregateInputType
    _sum?: FacultyAnnouncementSumAggregateInputType
    _min?: FacultyAnnouncementMinAggregateInputType
    _max?: FacultyAnnouncementMaxAggregateInputType
  }

  export type FacultyAnnouncementGroupByOutputType = {
    announcement_id: number
    faculty_id: number
    target_type: string
    semester: string | null
    subject_id: number | null
    dept_id: number | null
    title: string | null
    message: string | null
    created_at: Date | null
    _count: FacultyAnnouncementCountAggregateOutputType | null
    _avg: FacultyAnnouncementAvgAggregateOutputType | null
    _sum: FacultyAnnouncementSumAggregateOutputType | null
    _min: FacultyAnnouncementMinAggregateOutputType | null
    _max: FacultyAnnouncementMaxAggregateOutputType | null
  }

  type GetFacultyAnnouncementGroupByPayload<T extends FacultyAnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyAnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyAnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyAnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyAnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type FacultyAnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    announcement_id?: boolean
    faculty_id?: boolean
    target_type?: boolean
    semester?: boolean
    subject_id?: boolean
    dept_id?: boolean
    title?: boolean
    message?: boolean
    created_at?: boolean
    Department?: boolean | FacultyAnnouncement$DepartmentArgs<ExtArgs>
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    Subject?: boolean | FacultyAnnouncement$SubjectArgs<ExtArgs>
  }, ExtArgs["result"]["facultyAnnouncement"]>

  export type FacultyAnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    announcement_id?: boolean
    faculty_id?: boolean
    target_type?: boolean
    semester?: boolean
    subject_id?: boolean
    dept_id?: boolean
    title?: boolean
    message?: boolean
    created_at?: boolean
    Department?: boolean | FacultyAnnouncement$DepartmentArgs<ExtArgs>
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    Subject?: boolean | FacultyAnnouncement$SubjectArgs<ExtArgs>
  }, ExtArgs["result"]["facultyAnnouncement"]>

  export type FacultyAnnouncementSelectScalar = {
    announcement_id?: boolean
    faculty_id?: boolean
    target_type?: boolean
    semester?: boolean
    subject_id?: boolean
    dept_id?: boolean
    title?: boolean
    message?: boolean
    created_at?: boolean
  }

  export type FacultyAnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | FacultyAnnouncement$DepartmentArgs<ExtArgs>
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    Subject?: boolean | FacultyAnnouncement$SubjectArgs<ExtArgs>
  }
  export type FacultyAnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Department?: boolean | FacultyAnnouncement$DepartmentArgs<ExtArgs>
    Faculty?: boolean | FacultyDefaultArgs<ExtArgs>
    Subject?: boolean | FacultyAnnouncement$SubjectArgs<ExtArgs>
  }

  export type $FacultyAnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FacultyAnnouncement"
    objects: {
      Department: Prisma.$DepartmentPayload<ExtArgs> | null
      Faculty: Prisma.$FacultyPayload<ExtArgs>
      Subject: Prisma.$SubjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      announcement_id: number
      faculty_id: number
      target_type: string
      semester: string | null
      subject_id: number | null
      dept_id: number | null
      title: string | null
      message: string | null
      created_at: Date | null
    }, ExtArgs["result"]["facultyAnnouncement"]>
    composites: {}
  }

  type FacultyAnnouncementGetPayload<S extends boolean | null | undefined | FacultyAnnouncementDefaultArgs> = $Result.GetResult<Prisma.$FacultyAnnouncementPayload, S>

  type FacultyAnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FacultyAnnouncementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FacultyAnnouncementCountAggregateInputType | true
    }

  export interface FacultyAnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FacultyAnnouncement'], meta: { name: 'FacultyAnnouncement' } }
    /**
     * Find zero or one FacultyAnnouncement that matches the filter.
     * @param {FacultyAnnouncementFindUniqueArgs} args - Arguments to find a FacultyAnnouncement
     * @example
     * // Get one FacultyAnnouncement
     * const facultyAnnouncement = await prisma.facultyAnnouncement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FacultyAnnouncementFindUniqueArgs>(args: SelectSubset<T, FacultyAnnouncementFindUniqueArgs<ExtArgs>>): Prisma__FacultyAnnouncementClient<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FacultyAnnouncement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FacultyAnnouncementFindUniqueOrThrowArgs} args - Arguments to find a FacultyAnnouncement
     * @example
     * // Get one FacultyAnnouncement
     * const facultyAnnouncement = await prisma.facultyAnnouncement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FacultyAnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, FacultyAnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FacultyAnnouncementClient<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FacultyAnnouncement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAnnouncementFindFirstArgs} args - Arguments to find a FacultyAnnouncement
     * @example
     * // Get one FacultyAnnouncement
     * const facultyAnnouncement = await prisma.facultyAnnouncement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FacultyAnnouncementFindFirstArgs>(args?: SelectSubset<T, FacultyAnnouncementFindFirstArgs<ExtArgs>>): Prisma__FacultyAnnouncementClient<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FacultyAnnouncement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAnnouncementFindFirstOrThrowArgs} args - Arguments to find a FacultyAnnouncement
     * @example
     * // Get one FacultyAnnouncement
     * const facultyAnnouncement = await prisma.facultyAnnouncement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FacultyAnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, FacultyAnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__FacultyAnnouncementClient<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FacultyAnnouncements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FacultyAnnouncements
     * const facultyAnnouncements = await prisma.facultyAnnouncement.findMany()
     * 
     * // Get first 10 FacultyAnnouncements
     * const facultyAnnouncements = await prisma.facultyAnnouncement.findMany({ take: 10 })
     * 
     * // Only select the `announcement_id`
     * const facultyAnnouncementWithAnnouncement_idOnly = await prisma.facultyAnnouncement.findMany({ select: { announcement_id: true } })
     * 
     */
    findMany<T extends FacultyAnnouncementFindManyArgs>(args?: SelectSubset<T, FacultyAnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FacultyAnnouncement.
     * @param {FacultyAnnouncementCreateArgs} args - Arguments to create a FacultyAnnouncement.
     * @example
     * // Create one FacultyAnnouncement
     * const FacultyAnnouncement = await prisma.facultyAnnouncement.create({
     *   data: {
     *     // ... data to create a FacultyAnnouncement
     *   }
     * })
     * 
     */
    create<T extends FacultyAnnouncementCreateArgs>(args: SelectSubset<T, FacultyAnnouncementCreateArgs<ExtArgs>>): Prisma__FacultyAnnouncementClient<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FacultyAnnouncements.
     * @param {FacultyAnnouncementCreateManyArgs} args - Arguments to create many FacultyAnnouncements.
     * @example
     * // Create many FacultyAnnouncements
     * const facultyAnnouncement = await prisma.facultyAnnouncement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FacultyAnnouncementCreateManyArgs>(args?: SelectSubset<T, FacultyAnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FacultyAnnouncements and returns the data saved in the database.
     * @param {FacultyAnnouncementCreateManyAndReturnArgs} args - Arguments to create many FacultyAnnouncements.
     * @example
     * // Create many FacultyAnnouncements
     * const facultyAnnouncement = await prisma.facultyAnnouncement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FacultyAnnouncements and only return the `announcement_id`
     * const facultyAnnouncementWithAnnouncement_idOnly = await prisma.facultyAnnouncement.createManyAndReturn({ 
     *   select: { announcement_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FacultyAnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, FacultyAnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FacultyAnnouncement.
     * @param {FacultyAnnouncementDeleteArgs} args - Arguments to delete one FacultyAnnouncement.
     * @example
     * // Delete one FacultyAnnouncement
     * const FacultyAnnouncement = await prisma.facultyAnnouncement.delete({
     *   where: {
     *     // ... filter to delete one FacultyAnnouncement
     *   }
     * })
     * 
     */
    delete<T extends FacultyAnnouncementDeleteArgs>(args: SelectSubset<T, FacultyAnnouncementDeleteArgs<ExtArgs>>): Prisma__FacultyAnnouncementClient<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FacultyAnnouncement.
     * @param {FacultyAnnouncementUpdateArgs} args - Arguments to update one FacultyAnnouncement.
     * @example
     * // Update one FacultyAnnouncement
     * const facultyAnnouncement = await prisma.facultyAnnouncement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FacultyAnnouncementUpdateArgs>(args: SelectSubset<T, FacultyAnnouncementUpdateArgs<ExtArgs>>): Prisma__FacultyAnnouncementClient<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FacultyAnnouncements.
     * @param {FacultyAnnouncementDeleteManyArgs} args - Arguments to filter FacultyAnnouncements to delete.
     * @example
     * // Delete a few FacultyAnnouncements
     * const { count } = await prisma.facultyAnnouncement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FacultyAnnouncementDeleteManyArgs>(args?: SelectSubset<T, FacultyAnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FacultyAnnouncements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FacultyAnnouncements
     * const facultyAnnouncement = await prisma.facultyAnnouncement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FacultyAnnouncementUpdateManyArgs>(args: SelectSubset<T, FacultyAnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FacultyAnnouncement.
     * @param {FacultyAnnouncementUpsertArgs} args - Arguments to update or create a FacultyAnnouncement.
     * @example
     * // Update or create a FacultyAnnouncement
     * const facultyAnnouncement = await prisma.facultyAnnouncement.upsert({
     *   create: {
     *     // ... data to create a FacultyAnnouncement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FacultyAnnouncement we want to update
     *   }
     * })
     */
    upsert<T extends FacultyAnnouncementUpsertArgs>(args: SelectSubset<T, FacultyAnnouncementUpsertArgs<ExtArgs>>): Prisma__FacultyAnnouncementClient<$Result.GetResult<Prisma.$FacultyAnnouncementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FacultyAnnouncements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAnnouncementCountArgs} args - Arguments to filter FacultyAnnouncements to count.
     * @example
     * // Count the number of FacultyAnnouncements
     * const count = await prisma.facultyAnnouncement.count({
     *   where: {
     *     // ... the filter for the FacultyAnnouncements we want to count
     *   }
     * })
    **/
    count<T extends FacultyAnnouncementCountArgs>(
      args?: Subset<T, FacultyAnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyAnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FacultyAnnouncement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacultyAnnouncementAggregateArgs>(args: Subset<T, FacultyAnnouncementAggregateArgs>): Prisma.PrismaPromise<GetFacultyAnnouncementAggregateType<T>>

    /**
     * Group by FacultyAnnouncement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAnnouncementGroupByArgs} args - Group by arguments.
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
      T extends FacultyAnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FacultyAnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: FacultyAnnouncementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FacultyAnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FacultyAnnouncement model
   */
  readonly fields: FacultyAnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FacultyAnnouncement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FacultyAnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Department<T extends FacultyAnnouncement$DepartmentArgs<ExtArgs> = {}>(args?: Subset<T, FacultyAnnouncement$DepartmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Faculty<T extends FacultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FacultyDefaultArgs<ExtArgs>>): Prisma__FacultyClient<$Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Subject<T extends FacultyAnnouncement$SubjectArgs<ExtArgs> = {}>(args?: Subset<T, FacultyAnnouncement$SubjectArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the FacultyAnnouncement model
   */ 
  interface FacultyAnnouncementFieldRefs {
    readonly announcement_id: FieldRef<"FacultyAnnouncement", 'Int'>
    readonly faculty_id: FieldRef<"FacultyAnnouncement", 'Int'>
    readonly target_type: FieldRef<"FacultyAnnouncement", 'String'>
    readonly semester: FieldRef<"FacultyAnnouncement", 'String'>
    readonly subject_id: FieldRef<"FacultyAnnouncement", 'Int'>
    readonly dept_id: FieldRef<"FacultyAnnouncement", 'Int'>
    readonly title: FieldRef<"FacultyAnnouncement", 'String'>
    readonly message: FieldRef<"FacultyAnnouncement", 'String'>
    readonly created_at: FieldRef<"FacultyAnnouncement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FacultyAnnouncement findUnique
   */
  export type FacultyAnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which FacultyAnnouncement to fetch.
     */
    where: FacultyAnnouncementWhereUniqueInput
  }

  /**
   * FacultyAnnouncement findUniqueOrThrow
   */
  export type FacultyAnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which FacultyAnnouncement to fetch.
     */
    where: FacultyAnnouncementWhereUniqueInput
  }

  /**
   * FacultyAnnouncement findFirst
   */
  export type FacultyAnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which FacultyAnnouncement to fetch.
     */
    where?: FacultyAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyAnnouncements to fetch.
     */
    orderBy?: FacultyAnnouncementOrderByWithRelationInput | FacultyAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyAnnouncements.
     */
    cursor?: FacultyAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyAnnouncements.
     */
    distinct?: FacultyAnnouncementScalarFieldEnum | FacultyAnnouncementScalarFieldEnum[]
  }

  /**
   * FacultyAnnouncement findFirstOrThrow
   */
  export type FacultyAnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which FacultyAnnouncement to fetch.
     */
    where?: FacultyAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyAnnouncements to fetch.
     */
    orderBy?: FacultyAnnouncementOrderByWithRelationInput | FacultyAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FacultyAnnouncements.
     */
    cursor?: FacultyAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyAnnouncements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FacultyAnnouncements.
     */
    distinct?: FacultyAnnouncementScalarFieldEnum | FacultyAnnouncementScalarFieldEnum[]
  }

  /**
   * FacultyAnnouncement findMany
   */
  export type FacultyAnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which FacultyAnnouncements to fetch.
     */
    where?: FacultyAnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FacultyAnnouncements to fetch.
     */
    orderBy?: FacultyAnnouncementOrderByWithRelationInput | FacultyAnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FacultyAnnouncements.
     */
    cursor?: FacultyAnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FacultyAnnouncements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FacultyAnnouncements.
     */
    skip?: number
    distinct?: FacultyAnnouncementScalarFieldEnum | FacultyAnnouncementScalarFieldEnum[]
  }

  /**
   * FacultyAnnouncement create
   */
  export type FacultyAnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a FacultyAnnouncement.
     */
    data: XOR<FacultyAnnouncementCreateInput, FacultyAnnouncementUncheckedCreateInput>
  }

  /**
   * FacultyAnnouncement createMany
   */
  export type FacultyAnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FacultyAnnouncements.
     */
    data: FacultyAnnouncementCreateManyInput | FacultyAnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FacultyAnnouncement createManyAndReturn
   */
  export type FacultyAnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FacultyAnnouncements.
     */
    data: FacultyAnnouncementCreateManyInput | FacultyAnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FacultyAnnouncement update
   */
  export type FacultyAnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a FacultyAnnouncement.
     */
    data: XOR<FacultyAnnouncementUpdateInput, FacultyAnnouncementUncheckedUpdateInput>
    /**
     * Choose, which FacultyAnnouncement to update.
     */
    where: FacultyAnnouncementWhereUniqueInput
  }

  /**
   * FacultyAnnouncement updateMany
   */
  export type FacultyAnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FacultyAnnouncements.
     */
    data: XOR<FacultyAnnouncementUpdateManyMutationInput, FacultyAnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which FacultyAnnouncements to update
     */
    where?: FacultyAnnouncementWhereInput
  }

  /**
   * FacultyAnnouncement upsert
   */
  export type FacultyAnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the FacultyAnnouncement to update in case it exists.
     */
    where: FacultyAnnouncementWhereUniqueInput
    /**
     * In case the FacultyAnnouncement found by the `where` argument doesn't exist, create a new FacultyAnnouncement with this data.
     */
    create: XOR<FacultyAnnouncementCreateInput, FacultyAnnouncementUncheckedCreateInput>
    /**
     * In case the FacultyAnnouncement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FacultyAnnouncementUpdateInput, FacultyAnnouncementUncheckedUpdateInput>
  }

  /**
   * FacultyAnnouncement delete
   */
  export type FacultyAnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
    /**
     * Filter which FacultyAnnouncement to delete.
     */
    where: FacultyAnnouncementWhereUniqueInput
  }

  /**
   * FacultyAnnouncement deleteMany
   */
  export type FacultyAnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FacultyAnnouncements to delete
     */
    where?: FacultyAnnouncementWhereInput
  }

  /**
   * FacultyAnnouncement.Department
   */
  export type FacultyAnnouncement$DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * FacultyAnnouncement.Subject
   */
  export type FacultyAnnouncement$SubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    where?: SubjectWhereInput
  }

  /**
   * FacultyAnnouncement without action
   */
  export type FacultyAnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyAnnouncement
     */
    select?: FacultyAnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FacultyAnnouncementInclude<ExtArgs> | null
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
    user_id: 'user_id',
    email: 'email',
    password_hash: 'password_hash',
    user_type: 'user_type',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    dept_id: 'dept_id',
    dept_name: 'dept_name'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const FacultyScalarFieldEnum: {
    faculty_id: 'faculty_id',
    user_id: 'user_id',
    faculty_name: 'faculty_name',
    email: 'email',
    dept_id: 'dept_id'
  };

  export type FacultyScalarFieldEnum = (typeof FacultyScalarFieldEnum)[keyof typeof FacultyScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    stud_id: 'stud_id',
    user_id: 'user_id',
    roll_no: 'roll_no',
    stud_name: 'stud_name',
    email: 'email',
    semester: 'semester',
    dept_id: 'dept_id'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    subject_id: 'subject_id',
    subject_code: 'subject_code',
    subject_name: 'subject_name',
    semester: 'semester',
    dept_id: 'dept_id',
    credits: 'credits'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const FacultySubjectScalarFieldEnum: {
    faculty_id: 'faculty_id',
    subject_id: 'subject_id'
  };

  export type FacultySubjectScalarFieldEnum = (typeof FacultySubjectScalarFieldEnum)[keyof typeof FacultySubjectScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    stud_id: 'stud_id',
    subject_id: 'subject_id'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const TimetableScalarFieldEnum: {
    timetable_id: 'timetable_id',
    subject_id: 'subject_id',
    day_of_week: 'day_of_week',
    start_time: 'start_time',
    end_time: 'end_time',
    room_no: 'room_no'
  };

  export type TimetableScalarFieldEnum = (typeof TimetableScalarFieldEnum)[keyof typeof TimetableScalarFieldEnum]


  export const HolidayScalarFieldEnum: {
    holiday_id: 'holiday_id',
    holiday_name: 'holiday_name',
    holiday_date: 'holiday_date',
    year: 'year'
  };

  export type HolidayScalarFieldEnum = (typeof HolidayScalarFieldEnum)[keyof typeof HolidayScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    attendance_id: 'attendance_id',
    stud_id: 'stud_id',
    subject_id: 'subject_id',
    faculty_id: 'faculty_id',
    attendance_date: 'attendance_date',
    status: 'status'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const FacultyAttendanceScalarFieldEnum: {
    faculty_attendance_id: 'faculty_attendance_id',
    faculty_id: 'faculty_id',
    attendance_date: 'attendance_date',
    check_in_time: 'check_in_time',
    check_out_time: 'check_out_time',
    leave_date: 'leave_date',
    status: 'status',
    created_at: 'created_at'
  };

  export type FacultyAttendanceScalarFieldEnum = (typeof FacultyAttendanceScalarFieldEnum)[keyof typeof FacultyAttendanceScalarFieldEnum]


  export const FacultyLeaveScalarFieldEnum: {
    leave_id: 'leave_id',
    faculty_id: 'faculty_id',
    leave_date: 'leave_date',
    reason: 'reason',
    status: 'status',
    created_at: 'created_at'
  };

  export type FacultyLeaveScalarFieldEnum = (typeof FacultyLeaveScalarFieldEnum)[keyof typeof FacultyLeaveScalarFieldEnum]


  export const FacultyNoteScalarFieldEnum: {
    note_id: 'note_id',
    faculty_id: 'faculty_id',
    title: 'title',
    content: 'content',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FacultyNoteScalarFieldEnum = (typeof FacultyNoteScalarFieldEnum)[keyof typeof FacultyNoteScalarFieldEnum]


  export const FacultyAnnouncementScalarFieldEnum: {
    announcement_id: 'announcement_id',
    faculty_id: 'faculty_id',
    target_type: 'target_type',
    semester: 'semester',
    subject_id: 'subject_id',
    dept_id: 'dept_id',
    title: 'title',
    message: 'message',
    created_at: 'created_at'
  };

  export type FacultyAnnouncementScalarFieldEnum = (typeof FacultyAnnouncementScalarFieldEnum)[keyof typeof FacultyAnnouncementScalarFieldEnum]


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
    user_id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    user_type?: StringFilter<"User"> | string
    is_active?: BoolNullableFilter<"User"> | boolean | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    faculty?: FacultyListRelationFilter
    students?: StudentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    user_type?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    faculty?: FacultyOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password_hash?: StringFilter<"User"> | string
    user_type?: StringFilter<"User"> | string
    is_active?: BoolNullableFilter<"User"> | boolean | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    faculty?: FacultyListRelationFilter
    students?: StudentListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    user_type?: SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
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
    user_id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    user_type?: StringWithAggregatesFilter<"User"> | string
    is_active?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    dept_id?: IntFilter<"Department"> | number
    dept_name?: StringFilter<"Department"> | string
    faculty?: FacultyListRelationFilter
    students?: StudentListRelationFilter
    subjects?: SubjectListRelationFilter
    announcements?: FacultyAnnouncementListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
    faculty?: FacultyOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    subjects?: SubjectOrderByRelationAggregateInput
    announcements?: FacultyAnnouncementOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    dept_id?: number
    dept_name?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    faculty?: FacultyListRelationFilter
    students?: StudentListRelationFilter
    subjects?: SubjectListRelationFilter
    announcements?: FacultyAnnouncementListRelationFilter
  }, "dept_id" | "dept_name">

  export type DepartmentOrderByWithAggregationInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    dept_id?: IntWithAggregatesFilter<"Department"> | number
    dept_name?: StringWithAggregatesFilter<"Department"> | string
  }

  export type FacultyWhereInput = {
    AND?: FacultyWhereInput | FacultyWhereInput[]
    OR?: FacultyWhereInput[]
    NOT?: FacultyWhereInput | FacultyWhereInput[]
    faculty_id?: IntFilter<"Faculty"> | number
    user_id?: IntNullableFilter<"Faculty"> | number | null
    faculty_name?: StringFilter<"Faculty"> | string
    email?: StringNullableFilter<"Faculty"> | string | null
    dept_id?: IntNullableFilter<"Faculty"> | number | null
    Department?: XOR<DepartmentNullableRelationFilter, DepartmentWhereInput> | null
    attendance?: AttendanceListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    announcements?: FacultyAnnouncementListRelationFilter
    facultyAttendance?: FacultyAttendanceListRelationFilter
    leaves?: FacultyLeaveListRelationFilter
    notes?: FacultyNoteListRelationFilter
    faculty_subjects?: FacultySubjectListRelationFilter
  }

  export type FacultyOrderByWithRelationInput = {
    faculty_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    faculty_name?: SortOrder
    email?: SortOrderInput | SortOrder
    dept_id?: SortOrderInput | SortOrder
    Department?: DepartmentOrderByWithRelationInput
    attendance?: AttendanceOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    announcements?: FacultyAnnouncementOrderByRelationAggregateInput
    facultyAttendance?: FacultyAttendanceOrderByRelationAggregateInput
    leaves?: FacultyLeaveOrderByRelationAggregateInput
    notes?: FacultyNoteOrderByRelationAggregateInput
    faculty_subjects?: FacultySubjectOrderByRelationAggregateInput
  }

  export type FacultyWhereUniqueInput = Prisma.AtLeast<{
    faculty_id?: number
    AND?: FacultyWhereInput | FacultyWhereInput[]
    OR?: FacultyWhereInput[]
    NOT?: FacultyWhereInput | FacultyWhereInput[]
    user_id?: IntNullableFilter<"Faculty"> | number | null
    faculty_name?: StringFilter<"Faculty"> | string
    email?: StringNullableFilter<"Faculty"> | string | null
    dept_id?: IntNullableFilter<"Faculty"> | number | null
    Department?: XOR<DepartmentNullableRelationFilter, DepartmentWhereInput> | null
    attendance?: AttendanceListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    announcements?: FacultyAnnouncementListRelationFilter
    facultyAttendance?: FacultyAttendanceListRelationFilter
    leaves?: FacultyLeaveListRelationFilter
    notes?: FacultyNoteListRelationFilter
    faculty_subjects?: FacultySubjectListRelationFilter
  }, "faculty_id">

  export type FacultyOrderByWithAggregationInput = {
    faculty_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    faculty_name?: SortOrder
    email?: SortOrderInput | SortOrder
    dept_id?: SortOrderInput | SortOrder
    _count?: FacultyCountOrderByAggregateInput
    _avg?: FacultyAvgOrderByAggregateInput
    _max?: FacultyMaxOrderByAggregateInput
    _min?: FacultyMinOrderByAggregateInput
    _sum?: FacultySumOrderByAggregateInput
  }

  export type FacultyScalarWhereWithAggregatesInput = {
    AND?: FacultyScalarWhereWithAggregatesInput | FacultyScalarWhereWithAggregatesInput[]
    OR?: FacultyScalarWhereWithAggregatesInput[]
    NOT?: FacultyScalarWhereWithAggregatesInput | FacultyScalarWhereWithAggregatesInput[]
    faculty_id?: IntWithAggregatesFilter<"Faculty"> | number
    user_id?: IntNullableWithAggregatesFilter<"Faculty"> | number | null
    faculty_name?: StringWithAggregatesFilter<"Faculty"> | string
    email?: StringNullableWithAggregatesFilter<"Faculty"> | string | null
    dept_id?: IntNullableWithAggregatesFilter<"Faculty"> | number | null
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    stud_id?: IntFilter<"Student"> | number
    user_id?: IntNullableFilter<"Student"> | number | null
    roll_no?: StringFilter<"Student"> | string
    stud_name?: StringFilter<"Student"> | string
    email?: StringNullableFilter<"Student"> | string | null
    semester?: StringNullableFilter<"Student"> | string | null
    dept_id?: IntNullableFilter<"Student"> | number | null
    Department?: XOR<DepartmentNullableRelationFilter, DepartmentWhereInput> | null
    attendance?: AttendanceListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type StudentOrderByWithRelationInput = {
    stud_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    roll_no?: SortOrder
    stud_name?: SortOrder
    email?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    dept_id?: SortOrderInput | SortOrder
    Department?: DepartmentOrderByWithRelationInput
    attendance?: AttendanceOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    stud_id?: number
    roll_no?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    user_id?: IntNullableFilter<"Student"> | number | null
    stud_name?: StringFilter<"Student"> | string
    email?: StringNullableFilter<"Student"> | string | null
    semester?: StringNullableFilter<"Student"> | string | null
    dept_id?: IntNullableFilter<"Student"> | number | null
    Department?: XOR<DepartmentNullableRelationFilter, DepartmentWhereInput> | null
    attendance?: AttendanceListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "stud_id" | "roll_no">

  export type StudentOrderByWithAggregationInput = {
    stud_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    roll_no?: SortOrder
    stud_name?: SortOrder
    email?: SortOrderInput | SortOrder
    semester?: SortOrderInput | SortOrder
    dept_id?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    stud_id?: IntWithAggregatesFilter<"Student"> | number
    user_id?: IntNullableWithAggregatesFilter<"Student"> | number | null
    roll_no?: StringWithAggregatesFilter<"Student"> | string
    stud_name?: StringWithAggregatesFilter<"Student"> | string
    email?: StringNullableWithAggregatesFilter<"Student"> | string | null
    semester?: StringNullableWithAggregatesFilter<"Student"> | string | null
    dept_id?: IntNullableWithAggregatesFilter<"Student"> | number | null
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    subject_id?: IntFilter<"Subject"> | number
    subject_code?: StringFilter<"Subject"> | string
    subject_name?: StringFilter<"Subject"> | string
    semester?: StringNullableFilter<"Subject"> | string | null
    dept_id?: IntNullableFilter<"Subject"> | number | null
    credits?: IntNullableFilter<"Subject"> | number | null
    Department?: XOR<DepartmentNullableRelationFilter, DepartmentWhereInput> | null
    attendance?: AttendanceListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    announcements?: FacultyAnnouncementListRelationFilter
    timetable?: TimetableListRelationFilter
    faculty_subjects?: FacultySubjectListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    subject_id?: SortOrder
    subject_code?: SortOrder
    subject_name?: SortOrder
    semester?: SortOrderInput | SortOrder
    dept_id?: SortOrderInput | SortOrder
    credits?: SortOrderInput | SortOrder
    Department?: DepartmentOrderByWithRelationInput
    attendance?: AttendanceOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    announcements?: FacultyAnnouncementOrderByRelationAggregateInput
    timetable?: TimetableOrderByRelationAggregateInput
    faculty_subjects?: FacultySubjectOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    subject_id?: number
    subject_code?: string
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    subject_name?: StringFilter<"Subject"> | string
    semester?: StringNullableFilter<"Subject"> | string | null
    dept_id?: IntNullableFilter<"Subject"> | number | null
    credits?: IntNullableFilter<"Subject"> | number | null
    Department?: XOR<DepartmentNullableRelationFilter, DepartmentWhereInput> | null
    attendance?: AttendanceListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    announcements?: FacultyAnnouncementListRelationFilter
    timetable?: TimetableListRelationFilter
    faculty_subjects?: FacultySubjectListRelationFilter
  }, "subject_id" | "subject_code">

  export type SubjectOrderByWithAggregationInput = {
    subject_id?: SortOrder
    subject_code?: SortOrder
    subject_name?: SortOrder
    semester?: SortOrderInput | SortOrder
    dept_id?: SortOrderInput | SortOrder
    credits?: SortOrderInput | SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    subject_id?: IntWithAggregatesFilter<"Subject"> | number
    subject_code?: StringWithAggregatesFilter<"Subject"> | string
    subject_name?: StringWithAggregatesFilter<"Subject"> | string
    semester?: StringNullableWithAggregatesFilter<"Subject"> | string | null
    dept_id?: IntNullableWithAggregatesFilter<"Subject"> | number | null
    credits?: IntNullableWithAggregatesFilter<"Subject"> | number | null
  }

  export type FacultySubjectWhereInput = {
    AND?: FacultySubjectWhereInput | FacultySubjectWhereInput[]
    OR?: FacultySubjectWhereInput[]
    NOT?: FacultySubjectWhereInput | FacultySubjectWhereInput[]
    faculty_id?: IntFilter<"FacultySubject"> | number
    subject_id?: IntFilter<"FacultySubject"> | number
    Faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
    Subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
  }

  export type FacultySubjectOrderByWithRelationInput = {
    faculty_id?: SortOrder
    subject_id?: SortOrder
    Faculty?: FacultyOrderByWithRelationInput
    Subject?: SubjectOrderByWithRelationInput
  }

  export type FacultySubjectWhereUniqueInput = Prisma.AtLeast<{
    faculty_id_subject_id?: FacultySubjectFaculty_idSubject_idCompoundUniqueInput
    AND?: FacultySubjectWhereInput | FacultySubjectWhereInput[]
    OR?: FacultySubjectWhereInput[]
    NOT?: FacultySubjectWhereInput | FacultySubjectWhereInput[]
    faculty_id?: IntFilter<"FacultySubject"> | number
    subject_id?: IntFilter<"FacultySubject"> | number
    Faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
    Subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
  }, "faculty_id_subject_id">

  export type FacultySubjectOrderByWithAggregationInput = {
    faculty_id?: SortOrder
    subject_id?: SortOrder
    _count?: FacultySubjectCountOrderByAggregateInput
    _avg?: FacultySubjectAvgOrderByAggregateInput
    _max?: FacultySubjectMaxOrderByAggregateInput
    _min?: FacultySubjectMinOrderByAggregateInput
    _sum?: FacultySubjectSumOrderByAggregateInput
  }

  export type FacultySubjectScalarWhereWithAggregatesInput = {
    AND?: FacultySubjectScalarWhereWithAggregatesInput | FacultySubjectScalarWhereWithAggregatesInput[]
    OR?: FacultySubjectScalarWhereWithAggregatesInput[]
    NOT?: FacultySubjectScalarWhereWithAggregatesInput | FacultySubjectScalarWhereWithAggregatesInput[]
    faculty_id?: IntWithAggregatesFilter<"FacultySubject"> | number
    subject_id?: IntWithAggregatesFilter<"FacultySubject"> | number
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    stud_id?: IntFilter<"Enrollment"> | number
    subject_id?: IntFilter<"Enrollment"> | number
    Student?: XOR<StudentRelationFilter, StudentWhereInput>
    Subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    stud_id?: SortOrder
    subject_id?: SortOrder
    Student?: StudentOrderByWithRelationInput
    Subject?: SubjectOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    stud_id_subject_id?: EnrollmentStud_idSubject_idCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    stud_id?: IntFilter<"Enrollment"> | number
    subject_id?: IntFilter<"Enrollment"> | number
    Student?: XOR<StudentRelationFilter, StudentWhereInput>
    Subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
  }, "stud_id_subject_id">

  export type EnrollmentOrderByWithAggregationInput = {
    stud_id?: SortOrder
    subject_id?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    stud_id?: IntWithAggregatesFilter<"Enrollment"> | number
    subject_id?: IntWithAggregatesFilter<"Enrollment"> | number
  }

  export type TimetableWhereInput = {
    AND?: TimetableWhereInput | TimetableWhereInput[]
    OR?: TimetableWhereInput[]
    NOT?: TimetableWhereInput | TimetableWhereInput[]
    timetable_id?: IntFilter<"Timetable"> | number
    subject_id?: IntNullableFilter<"Timetable"> | number | null
    day_of_week?: IntNullableFilter<"Timetable"> | number | null
    start_time?: DateTimeNullableFilter<"Timetable"> | Date | string | null
    end_time?: DateTimeNullableFilter<"Timetable"> | Date | string | null
    room_no?: StringNullableFilter<"Timetable"> | string | null
    Subject?: XOR<SubjectNullableRelationFilter, SubjectWhereInput> | null
  }

  export type TimetableOrderByWithRelationInput = {
    timetable_id?: SortOrder
    subject_id?: SortOrderInput | SortOrder
    day_of_week?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    room_no?: SortOrderInput | SortOrder
    Subject?: SubjectOrderByWithRelationInput
  }

  export type TimetableWhereUniqueInput = Prisma.AtLeast<{
    timetable_id?: number
    AND?: TimetableWhereInput | TimetableWhereInput[]
    OR?: TimetableWhereInput[]
    NOT?: TimetableWhereInput | TimetableWhereInput[]
    subject_id?: IntNullableFilter<"Timetable"> | number | null
    day_of_week?: IntNullableFilter<"Timetable"> | number | null
    start_time?: DateTimeNullableFilter<"Timetable"> | Date | string | null
    end_time?: DateTimeNullableFilter<"Timetable"> | Date | string | null
    room_no?: StringNullableFilter<"Timetable"> | string | null
    Subject?: XOR<SubjectNullableRelationFilter, SubjectWhereInput> | null
  }, "timetable_id">

  export type TimetableOrderByWithAggregationInput = {
    timetable_id?: SortOrder
    subject_id?: SortOrderInput | SortOrder
    day_of_week?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    room_no?: SortOrderInput | SortOrder
    _count?: TimetableCountOrderByAggregateInput
    _avg?: TimetableAvgOrderByAggregateInput
    _max?: TimetableMaxOrderByAggregateInput
    _min?: TimetableMinOrderByAggregateInput
    _sum?: TimetableSumOrderByAggregateInput
  }

  export type TimetableScalarWhereWithAggregatesInput = {
    AND?: TimetableScalarWhereWithAggregatesInput | TimetableScalarWhereWithAggregatesInput[]
    OR?: TimetableScalarWhereWithAggregatesInput[]
    NOT?: TimetableScalarWhereWithAggregatesInput | TimetableScalarWhereWithAggregatesInput[]
    timetable_id?: IntWithAggregatesFilter<"Timetable"> | number
    subject_id?: IntNullableWithAggregatesFilter<"Timetable"> | number | null
    day_of_week?: IntNullableWithAggregatesFilter<"Timetable"> | number | null
    start_time?: DateTimeNullableWithAggregatesFilter<"Timetable"> | Date | string | null
    end_time?: DateTimeNullableWithAggregatesFilter<"Timetable"> | Date | string | null
    room_no?: StringNullableWithAggregatesFilter<"Timetable"> | string | null
  }

  export type HolidayWhereInput = {
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    holiday_id?: IntFilter<"Holiday"> | number
    holiday_name?: StringNullableFilter<"Holiday"> | string | null
    holiday_date?: DateTimeFilter<"Holiday"> | Date | string
    year?: IntFilter<"Holiday"> | number
  }

  export type HolidayOrderByWithRelationInput = {
    holiday_id?: SortOrder
    holiday_name?: SortOrderInput | SortOrder
    holiday_date?: SortOrder
    year?: SortOrder
  }

  export type HolidayWhereUniqueInput = Prisma.AtLeast<{
    holiday_id?: number
    holiday_date?: Date | string
    AND?: HolidayWhereInput | HolidayWhereInput[]
    OR?: HolidayWhereInput[]
    NOT?: HolidayWhereInput | HolidayWhereInput[]
    holiday_name?: StringNullableFilter<"Holiday"> | string | null
    year?: IntFilter<"Holiday"> | number
  }, "holiday_id" | "holiday_date">

  export type HolidayOrderByWithAggregationInput = {
    holiday_id?: SortOrder
    holiday_name?: SortOrderInput | SortOrder
    holiday_date?: SortOrder
    year?: SortOrder
    _count?: HolidayCountOrderByAggregateInput
    _avg?: HolidayAvgOrderByAggregateInput
    _max?: HolidayMaxOrderByAggregateInput
    _min?: HolidayMinOrderByAggregateInput
    _sum?: HolidaySumOrderByAggregateInput
  }

  export type HolidayScalarWhereWithAggregatesInput = {
    AND?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    OR?: HolidayScalarWhereWithAggregatesInput[]
    NOT?: HolidayScalarWhereWithAggregatesInput | HolidayScalarWhereWithAggregatesInput[]
    holiday_id?: IntWithAggregatesFilter<"Holiday"> | number
    holiday_name?: StringNullableWithAggregatesFilter<"Holiday"> | string | null
    holiday_date?: DateTimeWithAggregatesFilter<"Holiday"> | Date | string
    year?: IntWithAggregatesFilter<"Holiday"> | number
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    attendance_id?: IntFilter<"Attendance"> | number
    stud_id?: IntNullableFilter<"Attendance"> | number | null
    subject_id?: IntNullableFilter<"Attendance"> | number | null
    faculty_id?: IntNullableFilter<"Attendance"> | number | null
    attendance_date?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: StringFilter<"Attendance"> | string
    Faculty?: XOR<FacultyNullableRelationFilter, FacultyWhereInput> | null
    Student?: XOR<StudentNullableRelationFilter, StudentWhereInput> | null
    Subject?: XOR<SubjectNullableRelationFilter, SubjectWhereInput> | null
  }

  export type AttendanceOrderByWithRelationInput = {
    attendance_id?: SortOrder
    stud_id?: SortOrderInput | SortOrder
    subject_id?: SortOrderInput | SortOrder
    faculty_id?: SortOrderInput | SortOrder
    attendance_date?: SortOrderInput | SortOrder
    status?: SortOrder
    Faculty?: FacultyOrderByWithRelationInput
    Student?: StudentOrderByWithRelationInput
    Subject?: SubjectOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    attendance_id?: number
    stud_id_subject_id_attendance_date?: AttendanceStud_idSubject_idAttendance_dateCompoundUniqueInput
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    stud_id?: IntNullableFilter<"Attendance"> | number | null
    subject_id?: IntNullableFilter<"Attendance"> | number | null
    faculty_id?: IntNullableFilter<"Attendance"> | number | null
    attendance_date?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: StringFilter<"Attendance"> | string
    Faculty?: XOR<FacultyNullableRelationFilter, FacultyWhereInput> | null
    Student?: XOR<StudentNullableRelationFilter, StudentWhereInput> | null
    Subject?: XOR<SubjectNullableRelationFilter, SubjectWhereInput> | null
  }, "attendance_id" | "stud_id_subject_id_attendance_date">

  export type AttendanceOrderByWithAggregationInput = {
    attendance_id?: SortOrder
    stud_id?: SortOrderInput | SortOrder
    subject_id?: SortOrderInput | SortOrder
    faculty_id?: SortOrderInput | SortOrder
    attendance_date?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    attendance_id?: IntWithAggregatesFilter<"Attendance"> | number
    stud_id?: IntNullableWithAggregatesFilter<"Attendance"> | number | null
    subject_id?: IntNullableWithAggregatesFilter<"Attendance"> | number | null
    faculty_id?: IntNullableWithAggregatesFilter<"Attendance"> | number | null
    attendance_date?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    status?: StringWithAggregatesFilter<"Attendance"> | string
  }

  export type FacultyAttendanceWhereInput = {
    AND?: FacultyAttendanceWhereInput | FacultyAttendanceWhereInput[]
    OR?: FacultyAttendanceWhereInput[]
    NOT?: FacultyAttendanceWhereInput | FacultyAttendanceWhereInput[]
    faculty_attendance_id?: IntFilter<"FacultyAttendance"> | number
    faculty_id?: IntFilter<"FacultyAttendance"> | number
    attendance_date?: DateTimeFilter<"FacultyAttendance"> | Date | string
    check_in_time?: DateTimeNullableFilter<"FacultyAttendance"> | Date | string | null
    check_out_time?: DateTimeNullableFilter<"FacultyAttendance"> | Date | string | null
    leave_date?: DateTimeNullableFilter<"FacultyAttendance"> | Date | string | null
    status?: StringFilter<"FacultyAttendance"> | string
    created_at?: DateTimeNullableFilter<"FacultyAttendance"> | Date | string | null
    Faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
  }

  export type FacultyAttendanceOrderByWithRelationInput = {
    faculty_attendance_id?: SortOrder
    faculty_id?: SortOrder
    attendance_date?: SortOrder
    check_in_time?: SortOrderInput | SortOrder
    check_out_time?: SortOrderInput | SortOrder
    leave_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    Faculty?: FacultyOrderByWithRelationInput
  }

  export type FacultyAttendanceWhereUniqueInput = Prisma.AtLeast<{
    faculty_attendance_id?: number
    faculty_id_attendance_date?: FacultyAttendanceFaculty_idAttendance_dateCompoundUniqueInput
    AND?: FacultyAttendanceWhereInput | FacultyAttendanceWhereInput[]
    OR?: FacultyAttendanceWhereInput[]
    NOT?: FacultyAttendanceWhereInput | FacultyAttendanceWhereInput[]
    faculty_id?: IntFilter<"FacultyAttendance"> | number
    attendance_date?: DateTimeFilter<"FacultyAttendance"> | Date | string
    check_in_time?: DateTimeNullableFilter<"FacultyAttendance"> | Date | string | null
    check_out_time?: DateTimeNullableFilter<"FacultyAttendance"> | Date | string | null
    leave_date?: DateTimeNullableFilter<"FacultyAttendance"> | Date | string | null
    status?: StringFilter<"FacultyAttendance"> | string
    created_at?: DateTimeNullableFilter<"FacultyAttendance"> | Date | string | null
    Faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
  }, "faculty_attendance_id" | "faculty_id_attendance_date">

  export type FacultyAttendanceOrderByWithAggregationInput = {
    faculty_attendance_id?: SortOrder
    faculty_id?: SortOrder
    attendance_date?: SortOrder
    check_in_time?: SortOrderInput | SortOrder
    check_out_time?: SortOrderInput | SortOrder
    leave_date?: SortOrderInput | SortOrder
    status?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: FacultyAttendanceCountOrderByAggregateInput
    _avg?: FacultyAttendanceAvgOrderByAggregateInput
    _max?: FacultyAttendanceMaxOrderByAggregateInput
    _min?: FacultyAttendanceMinOrderByAggregateInput
    _sum?: FacultyAttendanceSumOrderByAggregateInput
  }

  export type FacultyAttendanceScalarWhereWithAggregatesInput = {
    AND?: FacultyAttendanceScalarWhereWithAggregatesInput | FacultyAttendanceScalarWhereWithAggregatesInput[]
    OR?: FacultyAttendanceScalarWhereWithAggregatesInput[]
    NOT?: FacultyAttendanceScalarWhereWithAggregatesInput | FacultyAttendanceScalarWhereWithAggregatesInput[]
    faculty_attendance_id?: IntWithAggregatesFilter<"FacultyAttendance"> | number
    faculty_id?: IntWithAggregatesFilter<"FacultyAttendance"> | number
    attendance_date?: DateTimeWithAggregatesFilter<"FacultyAttendance"> | Date | string
    check_in_time?: DateTimeNullableWithAggregatesFilter<"FacultyAttendance"> | Date | string | null
    check_out_time?: DateTimeNullableWithAggregatesFilter<"FacultyAttendance"> | Date | string | null
    leave_date?: DateTimeNullableWithAggregatesFilter<"FacultyAttendance"> | Date | string | null
    status?: StringWithAggregatesFilter<"FacultyAttendance"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"FacultyAttendance"> | Date | string | null
  }

  export type FacultyLeaveWhereInput = {
    AND?: FacultyLeaveWhereInput | FacultyLeaveWhereInput[]
    OR?: FacultyLeaveWhereInput[]
    NOT?: FacultyLeaveWhereInput | FacultyLeaveWhereInput[]
    leave_id?: IntFilter<"FacultyLeave"> | number
    faculty_id?: IntFilter<"FacultyLeave"> | number
    leave_date?: DateTimeFilter<"FacultyLeave"> | Date | string
    reason?: StringNullableFilter<"FacultyLeave"> | string | null
    status?: StringNullableFilter<"FacultyLeave"> | string | null
    created_at?: DateTimeNullableFilter<"FacultyLeave"> | Date | string | null
    Faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
  }

  export type FacultyLeaveOrderByWithRelationInput = {
    leave_id?: SortOrder
    faculty_id?: SortOrder
    leave_date?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    Faculty?: FacultyOrderByWithRelationInput
  }

  export type FacultyLeaveWhereUniqueInput = Prisma.AtLeast<{
    leave_id?: number
    AND?: FacultyLeaveWhereInput | FacultyLeaveWhereInput[]
    OR?: FacultyLeaveWhereInput[]
    NOT?: FacultyLeaveWhereInput | FacultyLeaveWhereInput[]
    faculty_id?: IntFilter<"FacultyLeave"> | number
    leave_date?: DateTimeFilter<"FacultyLeave"> | Date | string
    reason?: StringNullableFilter<"FacultyLeave"> | string | null
    status?: StringNullableFilter<"FacultyLeave"> | string | null
    created_at?: DateTimeNullableFilter<"FacultyLeave"> | Date | string | null
    Faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
  }, "leave_id">

  export type FacultyLeaveOrderByWithAggregationInput = {
    leave_id?: SortOrder
    faculty_id?: SortOrder
    leave_date?: SortOrder
    reason?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: FacultyLeaveCountOrderByAggregateInput
    _avg?: FacultyLeaveAvgOrderByAggregateInput
    _max?: FacultyLeaveMaxOrderByAggregateInput
    _min?: FacultyLeaveMinOrderByAggregateInput
    _sum?: FacultyLeaveSumOrderByAggregateInput
  }

  export type FacultyLeaveScalarWhereWithAggregatesInput = {
    AND?: FacultyLeaveScalarWhereWithAggregatesInput | FacultyLeaveScalarWhereWithAggregatesInput[]
    OR?: FacultyLeaveScalarWhereWithAggregatesInput[]
    NOT?: FacultyLeaveScalarWhereWithAggregatesInput | FacultyLeaveScalarWhereWithAggregatesInput[]
    leave_id?: IntWithAggregatesFilter<"FacultyLeave"> | number
    faculty_id?: IntWithAggregatesFilter<"FacultyLeave"> | number
    leave_date?: DateTimeWithAggregatesFilter<"FacultyLeave"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"FacultyLeave"> | string | null
    status?: StringNullableWithAggregatesFilter<"FacultyLeave"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"FacultyLeave"> | Date | string | null
  }

  export type FacultyNoteWhereInput = {
    AND?: FacultyNoteWhereInput | FacultyNoteWhereInput[]
    OR?: FacultyNoteWhereInput[]
    NOT?: FacultyNoteWhereInput | FacultyNoteWhereInput[]
    note_id?: IntFilter<"FacultyNote"> | number
    faculty_id?: IntFilter<"FacultyNote"> | number
    title?: StringNullableFilter<"FacultyNote"> | string | null
    content?: StringNullableFilter<"FacultyNote"> | string | null
    created_at?: DateTimeNullableFilter<"FacultyNote"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"FacultyNote"> | Date | string | null
    Faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
  }

  export type FacultyNoteOrderByWithRelationInput = {
    note_id?: SortOrder
    faculty_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Faculty?: FacultyOrderByWithRelationInput
  }

  export type FacultyNoteWhereUniqueInput = Prisma.AtLeast<{
    note_id?: number
    AND?: FacultyNoteWhereInput | FacultyNoteWhereInput[]
    OR?: FacultyNoteWhereInput[]
    NOT?: FacultyNoteWhereInput | FacultyNoteWhereInput[]
    faculty_id?: IntFilter<"FacultyNote"> | number
    title?: StringNullableFilter<"FacultyNote"> | string | null
    content?: StringNullableFilter<"FacultyNote"> | string | null
    created_at?: DateTimeNullableFilter<"FacultyNote"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"FacultyNote"> | Date | string | null
    Faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
  }, "note_id">

  export type FacultyNoteOrderByWithAggregationInput = {
    note_id?: SortOrder
    faculty_id?: SortOrder
    title?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: FacultyNoteCountOrderByAggregateInput
    _avg?: FacultyNoteAvgOrderByAggregateInput
    _max?: FacultyNoteMaxOrderByAggregateInput
    _min?: FacultyNoteMinOrderByAggregateInput
    _sum?: FacultyNoteSumOrderByAggregateInput
  }

  export type FacultyNoteScalarWhereWithAggregatesInput = {
    AND?: FacultyNoteScalarWhereWithAggregatesInput | FacultyNoteScalarWhereWithAggregatesInput[]
    OR?: FacultyNoteScalarWhereWithAggregatesInput[]
    NOT?: FacultyNoteScalarWhereWithAggregatesInput | FacultyNoteScalarWhereWithAggregatesInput[]
    note_id?: IntWithAggregatesFilter<"FacultyNote"> | number
    faculty_id?: IntWithAggregatesFilter<"FacultyNote"> | number
    title?: StringNullableWithAggregatesFilter<"FacultyNote"> | string | null
    content?: StringNullableWithAggregatesFilter<"FacultyNote"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"FacultyNote"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"FacultyNote"> | Date | string | null
  }

  export type FacultyAnnouncementWhereInput = {
    AND?: FacultyAnnouncementWhereInput | FacultyAnnouncementWhereInput[]
    OR?: FacultyAnnouncementWhereInput[]
    NOT?: FacultyAnnouncementWhereInput | FacultyAnnouncementWhereInput[]
    announcement_id?: IntFilter<"FacultyAnnouncement"> | number
    faculty_id?: IntFilter<"FacultyAnnouncement"> | number
    target_type?: StringFilter<"FacultyAnnouncement"> | string
    semester?: StringNullableFilter<"FacultyAnnouncement"> | string | null
    subject_id?: IntNullableFilter<"FacultyAnnouncement"> | number | null
    dept_id?: IntNullableFilter<"FacultyAnnouncement"> | number | null
    title?: StringNullableFilter<"FacultyAnnouncement"> | string | null
    message?: StringNullableFilter<"FacultyAnnouncement"> | string | null
    created_at?: DateTimeNullableFilter<"FacultyAnnouncement"> | Date | string | null
    Department?: XOR<DepartmentNullableRelationFilter, DepartmentWhereInput> | null
    Faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
    Subject?: XOR<SubjectNullableRelationFilter, SubjectWhereInput> | null
  }

  export type FacultyAnnouncementOrderByWithRelationInput = {
    announcement_id?: SortOrder
    faculty_id?: SortOrder
    target_type?: SortOrder
    semester?: SortOrderInput | SortOrder
    subject_id?: SortOrderInput | SortOrder
    dept_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    Department?: DepartmentOrderByWithRelationInput
    Faculty?: FacultyOrderByWithRelationInput
    Subject?: SubjectOrderByWithRelationInput
  }

  export type FacultyAnnouncementWhereUniqueInput = Prisma.AtLeast<{
    announcement_id?: number
    AND?: FacultyAnnouncementWhereInput | FacultyAnnouncementWhereInput[]
    OR?: FacultyAnnouncementWhereInput[]
    NOT?: FacultyAnnouncementWhereInput | FacultyAnnouncementWhereInput[]
    faculty_id?: IntFilter<"FacultyAnnouncement"> | number
    target_type?: StringFilter<"FacultyAnnouncement"> | string
    semester?: StringNullableFilter<"FacultyAnnouncement"> | string | null
    subject_id?: IntNullableFilter<"FacultyAnnouncement"> | number | null
    dept_id?: IntNullableFilter<"FacultyAnnouncement"> | number | null
    title?: StringNullableFilter<"FacultyAnnouncement"> | string | null
    message?: StringNullableFilter<"FacultyAnnouncement"> | string | null
    created_at?: DateTimeNullableFilter<"FacultyAnnouncement"> | Date | string | null
    Department?: XOR<DepartmentNullableRelationFilter, DepartmentWhereInput> | null
    Faculty?: XOR<FacultyRelationFilter, FacultyWhereInput>
    Subject?: XOR<SubjectNullableRelationFilter, SubjectWhereInput> | null
  }, "announcement_id">

  export type FacultyAnnouncementOrderByWithAggregationInput = {
    announcement_id?: SortOrder
    faculty_id?: SortOrder
    target_type?: SortOrder
    semester?: SortOrderInput | SortOrder
    subject_id?: SortOrderInput | SortOrder
    dept_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: FacultyAnnouncementCountOrderByAggregateInput
    _avg?: FacultyAnnouncementAvgOrderByAggregateInput
    _max?: FacultyAnnouncementMaxOrderByAggregateInput
    _min?: FacultyAnnouncementMinOrderByAggregateInput
    _sum?: FacultyAnnouncementSumOrderByAggregateInput
  }

  export type FacultyAnnouncementScalarWhereWithAggregatesInput = {
    AND?: FacultyAnnouncementScalarWhereWithAggregatesInput | FacultyAnnouncementScalarWhereWithAggregatesInput[]
    OR?: FacultyAnnouncementScalarWhereWithAggregatesInput[]
    NOT?: FacultyAnnouncementScalarWhereWithAggregatesInput | FacultyAnnouncementScalarWhereWithAggregatesInput[]
    announcement_id?: IntWithAggregatesFilter<"FacultyAnnouncement"> | number
    faculty_id?: IntWithAggregatesFilter<"FacultyAnnouncement"> | number
    target_type?: StringWithAggregatesFilter<"FacultyAnnouncement"> | string
    semester?: StringNullableWithAggregatesFilter<"FacultyAnnouncement"> | string | null
    subject_id?: IntNullableWithAggregatesFilter<"FacultyAnnouncement"> | number | null
    dept_id?: IntNullableWithAggregatesFilter<"FacultyAnnouncement"> | number | null
    title?: StringNullableWithAggregatesFilter<"FacultyAnnouncement"> | string | null
    message?: StringNullableWithAggregatesFilter<"FacultyAnnouncement"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"FacultyAnnouncement"> | Date | string | null
  }

  export type UserCreateInput = {
    email: string
    password_hash: string
    user_type: string
    is_active?: boolean | null
    created_at?: Date | string | null
    faculty?: FacultyCreateNestedManyWithoutUserInput
    students?: StudentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    email: string
    password_hash: string
    user_type: string
    is_active?: boolean | null
    created_at?: Date | string | null
    faculty?: FacultyUncheckedCreateNestedManyWithoutUserInput
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    faculty?: FacultyUpdateManyWithoutUserNestedInput
    students?: StudentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    faculty?: FacultyUncheckedUpdateManyWithoutUserNestedInput
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    email: string
    password_hash: string
    user_type: string
    is_active?: boolean | null
    created_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepartmentCreateInput = {
    dept_name: string
    faculty?: FacultyCreateNestedManyWithoutDepartmentInput
    students?: StudentCreateNestedManyWithoutDepartmentInput
    subjects?: SubjectCreateNestedManyWithoutDepartmentInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    dept_id?: number
    dept_name: string
    faculty?: FacultyUncheckedCreateNestedManyWithoutDepartmentInput
    students?: StudentUncheckedCreateNestedManyWithoutDepartmentInput
    subjects?: SubjectUncheckedCreateNestedManyWithoutDepartmentInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
    faculty?: FacultyUpdateManyWithoutDepartmentNestedInput
    students?: StudentUpdateManyWithoutDepartmentNestedInput
    subjects?: SubjectUpdateManyWithoutDepartmentNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
    faculty?: FacultyUncheckedUpdateManyWithoutDepartmentNestedInput
    students?: StudentUncheckedUpdateManyWithoutDepartmentNestedInput
    subjects?: SubjectUncheckedUpdateManyWithoutDepartmentNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    dept_id?: number
    dept_name: string
  }

  export type DepartmentUpdateManyMutationInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyCreateInput = {
    faculty_name: string
    email?: string | null
    Department?: DepartmentCreateNestedOneWithoutFacultyInput
    attendance?: AttendanceCreateNestedManyWithoutFacultyInput
    User?: UserCreateNestedOneWithoutFacultyInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUncheckedCreateInput = {
    faculty_id?: number
    user_id?: number | null
    faculty_name: string
    email?: string | null
    dept_id?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutFacultyInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceUncheckedCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveUncheckedCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteUncheckedCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUpdateInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneWithoutFacultyNestedInput
    attendance?: AttendanceUpdateManyWithoutFacultyNestedInput
    User?: UserUpdateOneWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUncheckedUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUncheckedUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyCreateManyInput = {
    faculty_id?: number
    user_id?: number | null
    faculty_name: string
    email?: string | null
    dept_id?: number | null
  }

  export type FacultyUpdateManyMutationInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacultyUncheckedUpdateManyInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentCreateInput = {
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
    Department?: DepartmentCreateNestedOneWithoutStudentsInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    User?: UserCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateInput = {
    stud_id?: number
    user_id?: number | null
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
    dept_id?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneWithoutStudentsNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    User?: UserUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    stud_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    stud_id?: number
    user_id?: number | null
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
    dept_id?: number | null
  }

  export type StudentUpdateManyMutationInput = {
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    stud_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubjectCreateInput = {
    subject_code: string
    subject_name: string
    semester?: string | null
    credits?: number | null
    Department?: DepartmentCreateNestedOneWithoutSubjectsInput
    attendance?: AttendanceCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentCreateNestedManyWithoutSubjectInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutSubjectInput
    timetable?: TimetableCreateNestedManyWithoutSubjectInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    subject_id?: number
    subject_code: string
    subject_name: string
    semester?: string | null
    dept_id?: number | null
    credits?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSubjectInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutSubjectInput
    timetable?: TimetableUncheckedCreateNestedManyWithoutSubjectInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: DepartmentUpdateOneWithoutSubjectsNestedInput
    attendance?: AttendanceUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUpdateManyWithoutSubjectNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutSubjectNestedInput
    timetable?: TimetableUpdateManyWithoutSubjectNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutSubjectNestedInput
    timetable?: TimetableUncheckedUpdateManyWithoutSubjectNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    subject_id?: number
    subject_code: string
    subject_name: string
    semester?: string | null
    dept_id?: number | null
    credits?: number | null
  }

  export type SubjectUpdateManyMutationInput = {
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubjectUncheckedUpdateManyInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FacultySubjectCreateInput = {
    Faculty: FacultyCreateNestedOneWithoutFaculty_subjectsInput
    Subject: SubjectCreateNestedOneWithoutFaculty_subjectsInput
  }

  export type FacultySubjectUncheckedCreateInput = {
    faculty_id: number
    subject_id: number
  }

  export type FacultySubjectUpdateInput = {
    Faculty?: FacultyUpdateOneRequiredWithoutFaculty_subjectsNestedInput
    Subject?: SubjectUpdateOneRequiredWithoutFaculty_subjectsNestedInput
  }

  export type FacultySubjectUncheckedUpdateInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type FacultySubjectCreateManyInput = {
    faculty_id: number
    subject_id: number
  }

  export type FacultySubjectUpdateManyMutationInput = {

  }

  export type FacultySubjectUncheckedUpdateManyInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentCreateInput = {
    Student: StudentCreateNestedOneWithoutEnrollmentsInput
    Subject: SubjectCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    stud_id: number
    subject_id: number
  }

  export type EnrollmentUpdateInput = {
    Student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
    Subject?: SubjectUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    stud_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentCreateManyInput = {
    stud_id: number
    subject_id: number
  }

  export type EnrollmentUpdateManyMutationInput = {

  }

  export type EnrollmentUncheckedUpdateManyInput = {
    stud_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type TimetableCreateInput = {
    day_of_week?: number | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    room_no?: string | null
    Subject?: SubjectCreateNestedOneWithoutTimetableInput
  }

  export type TimetableUncheckedCreateInput = {
    timetable_id?: number
    subject_id?: number | null
    day_of_week?: number | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    room_no?: string | null
  }

  export type TimetableUpdateInput = {
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
    Subject?: SubjectUpdateOneWithoutTimetableNestedInput
  }

  export type TimetableUncheckedUpdateInput = {
    timetable_id?: IntFieldUpdateOperationsInput | number
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimetableCreateManyInput = {
    timetable_id?: number
    subject_id?: number | null
    day_of_week?: number | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    room_no?: string | null
  }

  export type TimetableUpdateManyMutationInput = {
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimetableUncheckedUpdateManyInput = {
    timetable_id?: IntFieldUpdateOperationsInput | number
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HolidayCreateInput = {
    holiday_name?: string | null
    holiday_date: Date | string
    year?: number
  }

  export type HolidayUncheckedCreateInput = {
    holiday_id?: number
    holiday_name?: string | null
    holiday_date: Date | string
    year?: number
  }

  export type HolidayUpdateInput = {
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
    holiday_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type HolidayUncheckedUpdateInput = {
    holiday_id?: IntFieldUpdateOperationsInput | number
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
    holiday_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type HolidayCreateManyInput = {
    holiday_id?: number
    holiday_name?: string | null
    holiday_date: Date | string
    year?: number
  }

  export type HolidayUpdateManyMutationInput = {
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
    holiday_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type HolidayUncheckedUpdateManyInput = {
    holiday_id?: IntFieldUpdateOperationsInput | number
    holiday_name?: NullableStringFieldUpdateOperationsInput | string | null
    holiday_date?: DateTimeFieldUpdateOperationsInput | Date | string
    year?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceCreateInput = {
    attendance_date?: Date | string | null
    status: string
    Faculty?: FacultyCreateNestedOneWithoutAttendanceInput
    Student?: StudentCreateNestedOneWithoutAttendanceInput
    Subject?: SubjectCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateInput = {
    attendance_id?: number
    stud_id?: number | null
    subject_id?: number | null
    faculty_id?: number | null
    attendance_date?: Date | string | null
    status: string
  }

  export type AttendanceUpdateInput = {
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    Faculty?: FacultyUpdateOneWithoutAttendanceNestedInput
    Student?: StudentUpdateOneWithoutAttendanceNestedInput
    Subject?: SubjectUpdateOneWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    attendance_id?: IntFieldUpdateOperationsInput | number
    stud_id?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateManyInput = {
    attendance_id?: number
    stud_id?: number | null
    subject_id?: number | null
    faculty_id?: number | null
    attendance_date?: Date | string | null
    status: string
  }

  export type AttendanceUpdateManyMutationInput = {
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    attendance_id?: IntFieldUpdateOperationsInput | number
    stud_id?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyAttendanceCreateInput = {
    attendance_date: Date | string
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    leave_date?: Date | string | null
    status: string
    created_at?: Date | string | null
    Faculty: FacultyCreateNestedOneWithoutFacultyAttendanceInput
  }

  export type FacultyAttendanceUncheckedCreateInput = {
    faculty_attendance_id?: number
    faculty_id: number
    attendance_date: Date | string
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    leave_date?: Date | string | null
    status: string
    created_at?: Date | string | null
  }

  export type FacultyAttendanceUpdateInput = {
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leave_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Faculty?: FacultyUpdateOneRequiredWithoutFacultyAttendanceNestedInput
  }

  export type FacultyAttendanceUncheckedUpdateInput = {
    faculty_attendance_id?: IntFieldUpdateOperationsInput | number
    faculty_id?: IntFieldUpdateOperationsInput | number
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leave_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyAttendanceCreateManyInput = {
    faculty_attendance_id?: number
    faculty_id: number
    attendance_date: Date | string
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    leave_date?: Date | string | null
    status: string
    created_at?: Date | string | null
  }

  export type FacultyAttendanceUpdateManyMutationInput = {
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leave_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyAttendanceUncheckedUpdateManyInput = {
    faculty_attendance_id?: IntFieldUpdateOperationsInput | number
    faculty_id?: IntFieldUpdateOperationsInput | number
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leave_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyLeaveCreateInput = {
    leave_date: Date | string
    reason?: string | null
    status?: string | null
    created_at?: Date | string | null
    Faculty: FacultyCreateNestedOneWithoutLeavesInput
  }

  export type FacultyLeaveUncheckedCreateInput = {
    leave_id?: number
    faculty_id: number
    leave_date: Date | string
    reason?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type FacultyLeaveUpdateInput = {
    leave_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Faculty?: FacultyUpdateOneRequiredWithoutLeavesNestedInput
  }

  export type FacultyLeaveUncheckedUpdateInput = {
    leave_id?: IntFieldUpdateOperationsInput | number
    faculty_id?: IntFieldUpdateOperationsInput | number
    leave_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyLeaveCreateManyInput = {
    leave_id?: number
    faculty_id: number
    leave_date: Date | string
    reason?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type FacultyLeaveUpdateManyMutationInput = {
    leave_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyLeaveUncheckedUpdateManyInput = {
    leave_id?: IntFieldUpdateOperationsInput | number
    faculty_id?: IntFieldUpdateOperationsInput | number
    leave_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyNoteCreateInput = {
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Faculty: FacultyCreateNestedOneWithoutNotesInput
  }

  export type FacultyNoteUncheckedCreateInput = {
    note_id?: number
    faculty_id: number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type FacultyNoteUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Faculty?: FacultyUpdateOneRequiredWithoutNotesNestedInput
  }

  export type FacultyNoteUncheckedUpdateInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    faculty_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyNoteCreateManyInput = {
    note_id?: number
    faculty_id: number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type FacultyNoteUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyNoteUncheckedUpdateManyInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    faculty_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyAnnouncementCreateInput = {
    target_type: string
    semester?: string | null
    title?: string | null
    message?: string | null
    created_at?: Date | string | null
    Department?: DepartmentCreateNestedOneWithoutAnnouncementsInput
    Faculty: FacultyCreateNestedOneWithoutAnnouncementsInput
    Subject?: SubjectCreateNestedOneWithoutAnnouncementsInput
  }

  export type FacultyAnnouncementUncheckedCreateInput = {
    announcement_id?: number
    faculty_id: number
    target_type: string
    semester?: string | null
    subject_id?: number | null
    dept_id?: number | null
    title?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type FacultyAnnouncementUpdateInput = {
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Department?: DepartmentUpdateOneWithoutAnnouncementsNestedInput
    Faculty?: FacultyUpdateOneRequiredWithoutAnnouncementsNestedInput
    Subject?: SubjectUpdateOneWithoutAnnouncementsNestedInput
  }

  export type FacultyAnnouncementUncheckedUpdateInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    faculty_id?: IntFieldUpdateOperationsInput | number
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyAnnouncementCreateManyInput = {
    announcement_id?: number
    faculty_id: number
    target_type: string
    semester?: string | null
    subject_id?: number | null
    dept_id?: number | null
    title?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type FacultyAnnouncementUpdateManyMutationInput = {
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyAnnouncementUncheckedUpdateManyInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    faculty_id?: IntFieldUpdateOperationsInput | number
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type FacultyListRelationFilter = {
    every?: FacultyWhereInput
    some?: FacultyWhereInput
    none?: FacultyWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FacultyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    user_type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    user_type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    user_type?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type SubjectListRelationFilter = {
    every?: SubjectWhereInput
    some?: SubjectWhereInput
    none?: SubjectWhereInput
  }

  export type FacultyAnnouncementListRelationFilter = {
    every?: FacultyAnnouncementWhereInput
    some?: FacultyAnnouncementWhereInput
    none?: FacultyAnnouncementWhereInput
  }

  export type SubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultyAnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    dept_id?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    dept_id?: SortOrder
    dept_name?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    dept_id?: SortOrder
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

  export type DepartmentNullableRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FacultyAttendanceListRelationFilter = {
    every?: FacultyAttendanceWhereInput
    some?: FacultyAttendanceWhereInput
    none?: FacultyAttendanceWhereInput
  }

  export type FacultyLeaveListRelationFilter = {
    every?: FacultyLeaveWhereInput
    some?: FacultyLeaveWhereInput
    none?: FacultyLeaveWhereInput
  }

  export type FacultyNoteListRelationFilter = {
    every?: FacultyNoteWhereInput
    some?: FacultyNoteWhereInput
    none?: FacultyNoteWhereInput
  }

  export type FacultySubjectListRelationFilter = {
    every?: FacultySubjectWhereInput
    some?: FacultySubjectWhereInput
    none?: FacultySubjectWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultyAttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultyLeaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultyNoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultySubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FacultyCountOrderByAggregateInput = {
    faculty_id?: SortOrder
    user_id?: SortOrder
    faculty_name?: SortOrder
    email?: SortOrder
    dept_id?: SortOrder
  }

  export type FacultyAvgOrderByAggregateInput = {
    faculty_id?: SortOrder
    user_id?: SortOrder
    dept_id?: SortOrder
  }

  export type FacultyMaxOrderByAggregateInput = {
    faculty_id?: SortOrder
    user_id?: SortOrder
    faculty_name?: SortOrder
    email?: SortOrder
    dept_id?: SortOrder
  }

  export type FacultyMinOrderByAggregateInput = {
    faculty_id?: SortOrder
    user_id?: SortOrder
    faculty_name?: SortOrder
    email?: SortOrder
    dept_id?: SortOrder
  }

  export type FacultySumOrderByAggregateInput = {
    faculty_id?: SortOrder
    user_id?: SortOrder
    dept_id?: SortOrder
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

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    stud_id?: SortOrder
    user_id?: SortOrder
    roll_no?: SortOrder
    stud_name?: SortOrder
    email?: SortOrder
    semester?: SortOrder
    dept_id?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    stud_id?: SortOrder
    user_id?: SortOrder
    dept_id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    stud_id?: SortOrder
    user_id?: SortOrder
    roll_no?: SortOrder
    stud_name?: SortOrder
    email?: SortOrder
    semester?: SortOrder
    dept_id?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    stud_id?: SortOrder
    user_id?: SortOrder
    roll_no?: SortOrder
    stud_name?: SortOrder
    email?: SortOrder
    semester?: SortOrder
    dept_id?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    stud_id?: SortOrder
    user_id?: SortOrder
    dept_id?: SortOrder
  }

  export type TimetableListRelationFilter = {
    every?: TimetableWhereInput
    some?: TimetableWhereInput
    none?: TimetableWhereInput
  }

  export type TimetableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    subject_id?: SortOrder
    subject_code?: SortOrder
    subject_name?: SortOrder
    semester?: SortOrder
    dept_id?: SortOrder
    credits?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    subject_id?: SortOrder
    dept_id?: SortOrder
    credits?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    subject_id?: SortOrder
    subject_code?: SortOrder
    subject_name?: SortOrder
    semester?: SortOrder
    dept_id?: SortOrder
    credits?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    subject_id?: SortOrder
    subject_code?: SortOrder
    subject_name?: SortOrder
    semester?: SortOrder
    dept_id?: SortOrder
    credits?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    subject_id?: SortOrder
    dept_id?: SortOrder
    credits?: SortOrder
  }

  export type FacultyRelationFilter = {
    is?: FacultyWhereInput
    isNot?: FacultyWhereInput
  }

  export type SubjectRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type FacultySubjectFaculty_idSubject_idCompoundUniqueInput = {
    faculty_id: number
    subject_id: number
  }

  export type FacultySubjectCountOrderByAggregateInput = {
    faculty_id?: SortOrder
    subject_id?: SortOrder
  }

  export type FacultySubjectAvgOrderByAggregateInput = {
    faculty_id?: SortOrder
    subject_id?: SortOrder
  }

  export type FacultySubjectMaxOrderByAggregateInput = {
    faculty_id?: SortOrder
    subject_id?: SortOrder
  }

  export type FacultySubjectMinOrderByAggregateInput = {
    faculty_id?: SortOrder
    subject_id?: SortOrder
  }

  export type FacultySubjectSumOrderByAggregateInput = {
    faculty_id?: SortOrder
    subject_id?: SortOrder
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type EnrollmentStud_idSubject_idCompoundUniqueInput = {
    stud_id: number
    subject_id: number
  }

  export type EnrollmentCountOrderByAggregateInput = {
    stud_id?: SortOrder
    subject_id?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    stud_id?: SortOrder
    subject_id?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    stud_id?: SortOrder
    subject_id?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    stud_id?: SortOrder
    subject_id?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    stud_id?: SortOrder
    subject_id?: SortOrder
  }

  export type SubjectNullableRelationFilter = {
    is?: SubjectWhereInput | null
    isNot?: SubjectWhereInput | null
  }

  export type TimetableCountOrderByAggregateInput = {
    timetable_id?: SortOrder
    subject_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    room_no?: SortOrder
  }

  export type TimetableAvgOrderByAggregateInput = {
    timetable_id?: SortOrder
    subject_id?: SortOrder
    day_of_week?: SortOrder
  }

  export type TimetableMaxOrderByAggregateInput = {
    timetable_id?: SortOrder
    subject_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    room_no?: SortOrder
  }

  export type TimetableMinOrderByAggregateInput = {
    timetable_id?: SortOrder
    subject_id?: SortOrder
    day_of_week?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    room_no?: SortOrder
  }

  export type TimetableSumOrderByAggregateInput = {
    timetable_id?: SortOrder
    subject_id?: SortOrder
    day_of_week?: SortOrder
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

  export type HolidayCountOrderByAggregateInput = {
    holiday_id?: SortOrder
    holiday_name?: SortOrder
    holiday_date?: SortOrder
    year?: SortOrder
  }

  export type HolidayAvgOrderByAggregateInput = {
    holiday_id?: SortOrder
    year?: SortOrder
  }

  export type HolidayMaxOrderByAggregateInput = {
    holiday_id?: SortOrder
    holiday_name?: SortOrder
    holiday_date?: SortOrder
    year?: SortOrder
  }

  export type HolidayMinOrderByAggregateInput = {
    holiday_id?: SortOrder
    holiday_name?: SortOrder
    holiday_date?: SortOrder
    year?: SortOrder
  }

  export type HolidaySumOrderByAggregateInput = {
    holiday_id?: SortOrder
    year?: SortOrder
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

  export type FacultyNullableRelationFilter = {
    is?: FacultyWhereInput | null
    isNot?: FacultyWhereInput | null
  }

  export type StudentNullableRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type AttendanceStud_idSubject_idAttendance_dateCompoundUniqueInput = {
    stud_id: number
    subject_id: number
    attendance_date: Date | string
  }

  export type AttendanceCountOrderByAggregateInput = {
    attendance_id?: SortOrder
    stud_id?: SortOrder
    subject_id?: SortOrder
    faculty_id?: SortOrder
    attendance_date?: SortOrder
    status?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    attendance_id?: SortOrder
    stud_id?: SortOrder
    subject_id?: SortOrder
    faculty_id?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    attendance_id?: SortOrder
    stud_id?: SortOrder
    subject_id?: SortOrder
    faculty_id?: SortOrder
    attendance_date?: SortOrder
    status?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    attendance_id?: SortOrder
    stud_id?: SortOrder
    subject_id?: SortOrder
    faculty_id?: SortOrder
    attendance_date?: SortOrder
    status?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    attendance_id?: SortOrder
    stud_id?: SortOrder
    subject_id?: SortOrder
    faculty_id?: SortOrder
  }

  export type FacultyAttendanceFaculty_idAttendance_dateCompoundUniqueInput = {
    faculty_id: number
    attendance_date: Date | string
  }

  export type FacultyAttendanceCountOrderByAggregateInput = {
    faculty_attendance_id?: SortOrder
    faculty_id?: SortOrder
    attendance_date?: SortOrder
    check_in_time?: SortOrder
    check_out_time?: SortOrder
    leave_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type FacultyAttendanceAvgOrderByAggregateInput = {
    faculty_attendance_id?: SortOrder
    faculty_id?: SortOrder
  }

  export type FacultyAttendanceMaxOrderByAggregateInput = {
    faculty_attendance_id?: SortOrder
    faculty_id?: SortOrder
    attendance_date?: SortOrder
    check_in_time?: SortOrder
    check_out_time?: SortOrder
    leave_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type FacultyAttendanceMinOrderByAggregateInput = {
    faculty_attendance_id?: SortOrder
    faculty_id?: SortOrder
    attendance_date?: SortOrder
    check_in_time?: SortOrder
    check_out_time?: SortOrder
    leave_date?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type FacultyAttendanceSumOrderByAggregateInput = {
    faculty_attendance_id?: SortOrder
    faculty_id?: SortOrder
  }

  export type FacultyLeaveCountOrderByAggregateInput = {
    leave_id?: SortOrder
    faculty_id?: SortOrder
    leave_date?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type FacultyLeaveAvgOrderByAggregateInput = {
    leave_id?: SortOrder
    faculty_id?: SortOrder
  }

  export type FacultyLeaveMaxOrderByAggregateInput = {
    leave_id?: SortOrder
    faculty_id?: SortOrder
    leave_date?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type FacultyLeaveMinOrderByAggregateInput = {
    leave_id?: SortOrder
    faculty_id?: SortOrder
    leave_date?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type FacultyLeaveSumOrderByAggregateInput = {
    leave_id?: SortOrder
    faculty_id?: SortOrder
  }

  export type FacultyNoteCountOrderByAggregateInput = {
    note_id?: SortOrder
    faculty_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FacultyNoteAvgOrderByAggregateInput = {
    note_id?: SortOrder
    faculty_id?: SortOrder
  }

  export type FacultyNoteMaxOrderByAggregateInput = {
    note_id?: SortOrder
    faculty_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FacultyNoteMinOrderByAggregateInput = {
    note_id?: SortOrder
    faculty_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FacultyNoteSumOrderByAggregateInput = {
    note_id?: SortOrder
    faculty_id?: SortOrder
  }

  export type FacultyAnnouncementCountOrderByAggregateInput = {
    announcement_id?: SortOrder
    faculty_id?: SortOrder
    target_type?: SortOrder
    semester?: SortOrder
    subject_id?: SortOrder
    dept_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type FacultyAnnouncementAvgOrderByAggregateInput = {
    announcement_id?: SortOrder
    faculty_id?: SortOrder
    subject_id?: SortOrder
    dept_id?: SortOrder
  }

  export type FacultyAnnouncementMaxOrderByAggregateInput = {
    announcement_id?: SortOrder
    faculty_id?: SortOrder
    target_type?: SortOrder
    semester?: SortOrder
    subject_id?: SortOrder
    dept_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type FacultyAnnouncementMinOrderByAggregateInput = {
    announcement_id?: SortOrder
    faculty_id?: SortOrder
    target_type?: SortOrder
    semester?: SortOrder
    subject_id?: SortOrder
    dept_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    created_at?: SortOrder
  }

  export type FacultyAnnouncementSumOrderByAggregateInput = {
    announcement_id?: SortOrder
    faculty_id?: SortOrder
    subject_id?: SortOrder
    dept_id?: SortOrder
  }

  export type FacultyCreateNestedManyWithoutUserInput = {
    create?: XOR<FacultyCreateWithoutUserInput, FacultyUncheckedCreateWithoutUserInput> | FacultyCreateWithoutUserInput[] | FacultyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutUserInput | FacultyCreateOrConnectWithoutUserInput[]
    createMany?: FacultyCreateManyUserInputEnvelope
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type FacultyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FacultyCreateWithoutUserInput, FacultyUncheckedCreateWithoutUserInput> | FacultyCreateWithoutUserInput[] | FacultyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutUserInput | FacultyCreateOrConnectWithoutUserInput[]
    createMany?: FacultyCreateManyUserInputEnvelope
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type FacultyUpdateManyWithoutUserNestedInput = {
    create?: XOR<FacultyCreateWithoutUserInput, FacultyUncheckedCreateWithoutUserInput> | FacultyCreateWithoutUserInput[] | FacultyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutUserInput | FacultyCreateOrConnectWithoutUserInput[]
    upsert?: FacultyUpsertWithWhereUniqueWithoutUserInput | FacultyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FacultyCreateManyUserInputEnvelope
    set?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    disconnect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    delete?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    update?: FacultyUpdateWithWhereUniqueWithoutUserInput | FacultyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FacultyUpdateManyWithWhereWithoutUserInput | FacultyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FacultyScalarWhereInput | FacultyScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutUserInput | StudentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutUserInput | StudentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutUserInput | StudentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FacultyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FacultyCreateWithoutUserInput, FacultyUncheckedCreateWithoutUserInput> | FacultyCreateWithoutUserInput[] | FacultyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutUserInput | FacultyCreateOrConnectWithoutUserInput[]
    upsert?: FacultyUpsertWithWhereUniqueWithoutUserInput | FacultyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FacultyCreateManyUserInputEnvelope
    set?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    disconnect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    delete?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    update?: FacultyUpdateWithWhereUniqueWithoutUserInput | FacultyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FacultyUpdateManyWithWhereWithoutUserInput | FacultyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FacultyScalarWhereInput | FacultyScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput> | StudentCreateWithoutUserInput[] | StudentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput | StudentCreateOrConnectWithoutUserInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutUserInput | StudentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StudentCreateManyUserInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutUserInput | StudentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutUserInput | StudentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type FacultyCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<FacultyCreateWithoutDepartmentInput, FacultyUncheckedCreateWithoutDepartmentInput> | FacultyCreateWithoutDepartmentInput[] | FacultyUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutDepartmentInput | FacultyCreateOrConnectWithoutDepartmentInput[]
    createMany?: FacultyCreateManyDepartmentInputEnvelope
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput> | StudentCreateWithoutDepartmentInput[] | StudentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutDepartmentInput | StudentCreateOrConnectWithoutDepartmentInput[]
    createMany?: StudentCreateManyDepartmentInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type SubjectCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<SubjectCreateWithoutDepartmentInput, SubjectUncheckedCreateWithoutDepartmentInput> | SubjectCreateWithoutDepartmentInput[] | SubjectUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutDepartmentInput | SubjectCreateOrConnectWithoutDepartmentInput[]
    createMany?: SubjectCreateManyDepartmentInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type FacultyAnnouncementCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<FacultyAnnouncementCreateWithoutDepartmentInput, FacultyAnnouncementUncheckedCreateWithoutDepartmentInput> | FacultyAnnouncementCreateWithoutDepartmentInput[] | FacultyAnnouncementUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyAnnouncementCreateOrConnectWithoutDepartmentInput | FacultyAnnouncementCreateOrConnectWithoutDepartmentInput[]
    createMany?: FacultyAnnouncementCreateManyDepartmentInputEnvelope
    connect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
  }

  export type FacultyUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<FacultyCreateWithoutDepartmentInput, FacultyUncheckedCreateWithoutDepartmentInput> | FacultyCreateWithoutDepartmentInput[] | FacultyUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutDepartmentInput | FacultyCreateOrConnectWithoutDepartmentInput[]
    createMany?: FacultyCreateManyDepartmentInputEnvelope
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput> | StudentCreateWithoutDepartmentInput[] | StudentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutDepartmentInput | StudentCreateOrConnectWithoutDepartmentInput[]
    createMany?: StudentCreateManyDepartmentInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type SubjectUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<SubjectCreateWithoutDepartmentInput, SubjectUncheckedCreateWithoutDepartmentInput> | SubjectCreateWithoutDepartmentInput[] | SubjectUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutDepartmentInput | SubjectCreateOrConnectWithoutDepartmentInput[]
    createMany?: SubjectCreateManyDepartmentInputEnvelope
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
  }

  export type FacultyAnnouncementUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<FacultyAnnouncementCreateWithoutDepartmentInput, FacultyAnnouncementUncheckedCreateWithoutDepartmentInput> | FacultyAnnouncementCreateWithoutDepartmentInput[] | FacultyAnnouncementUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyAnnouncementCreateOrConnectWithoutDepartmentInput | FacultyAnnouncementCreateOrConnectWithoutDepartmentInput[]
    createMany?: FacultyAnnouncementCreateManyDepartmentInputEnvelope
    connect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
  }

  export type FacultyUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<FacultyCreateWithoutDepartmentInput, FacultyUncheckedCreateWithoutDepartmentInput> | FacultyCreateWithoutDepartmentInput[] | FacultyUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutDepartmentInput | FacultyCreateOrConnectWithoutDepartmentInput[]
    upsert?: FacultyUpsertWithWhereUniqueWithoutDepartmentInput | FacultyUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: FacultyCreateManyDepartmentInputEnvelope
    set?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    disconnect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    delete?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    update?: FacultyUpdateWithWhereUniqueWithoutDepartmentInput | FacultyUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: FacultyUpdateManyWithWhereWithoutDepartmentInput | FacultyUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: FacultyScalarWhereInput | FacultyScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput> | StudentCreateWithoutDepartmentInput[] | StudentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutDepartmentInput | StudentCreateOrConnectWithoutDepartmentInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutDepartmentInput | StudentUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: StudentCreateManyDepartmentInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutDepartmentInput | StudentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutDepartmentInput | StudentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type SubjectUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<SubjectCreateWithoutDepartmentInput, SubjectUncheckedCreateWithoutDepartmentInput> | SubjectCreateWithoutDepartmentInput[] | SubjectUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutDepartmentInput | SubjectCreateOrConnectWithoutDepartmentInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutDepartmentInput | SubjectUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: SubjectCreateManyDepartmentInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutDepartmentInput | SubjectUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutDepartmentInput | SubjectUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type FacultyAnnouncementUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<FacultyAnnouncementCreateWithoutDepartmentInput, FacultyAnnouncementUncheckedCreateWithoutDepartmentInput> | FacultyAnnouncementCreateWithoutDepartmentInput[] | FacultyAnnouncementUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyAnnouncementCreateOrConnectWithoutDepartmentInput | FacultyAnnouncementCreateOrConnectWithoutDepartmentInput[]
    upsert?: FacultyAnnouncementUpsertWithWhereUniqueWithoutDepartmentInput | FacultyAnnouncementUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: FacultyAnnouncementCreateManyDepartmentInputEnvelope
    set?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    disconnect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    delete?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    connect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    update?: FacultyAnnouncementUpdateWithWhereUniqueWithoutDepartmentInput | FacultyAnnouncementUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: FacultyAnnouncementUpdateManyWithWhereWithoutDepartmentInput | FacultyAnnouncementUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: FacultyAnnouncementScalarWhereInput | FacultyAnnouncementScalarWhereInput[]
  }

  export type FacultyUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<FacultyCreateWithoutDepartmentInput, FacultyUncheckedCreateWithoutDepartmentInput> | FacultyCreateWithoutDepartmentInput[] | FacultyUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyCreateOrConnectWithoutDepartmentInput | FacultyCreateOrConnectWithoutDepartmentInput[]
    upsert?: FacultyUpsertWithWhereUniqueWithoutDepartmentInput | FacultyUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: FacultyCreateManyDepartmentInputEnvelope
    set?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    disconnect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    delete?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    connect?: FacultyWhereUniqueInput | FacultyWhereUniqueInput[]
    update?: FacultyUpdateWithWhereUniqueWithoutDepartmentInput | FacultyUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: FacultyUpdateManyWithWhereWithoutDepartmentInput | FacultyUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: FacultyScalarWhereInput | FacultyScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput> | StudentCreateWithoutDepartmentInput[] | StudentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutDepartmentInput | StudentCreateOrConnectWithoutDepartmentInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutDepartmentInput | StudentUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: StudentCreateManyDepartmentInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutDepartmentInput | StudentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutDepartmentInput | StudentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type SubjectUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<SubjectCreateWithoutDepartmentInput, SubjectUncheckedCreateWithoutDepartmentInput> | SubjectCreateWithoutDepartmentInput[] | SubjectUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: SubjectCreateOrConnectWithoutDepartmentInput | SubjectCreateOrConnectWithoutDepartmentInput[]
    upsert?: SubjectUpsertWithWhereUniqueWithoutDepartmentInput | SubjectUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: SubjectCreateManyDepartmentInputEnvelope
    set?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    disconnect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    delete?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    connect?: SubjectWhereUniqueInput | SubjectWhereUniqueInput[]
    update?: SubjectUpdateWithWhereUniqueWithoutDepartmentInput | SubjectUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: SubjectUpdateManyWithWhereWithoutDepartmentInput | SubjectUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
  }

  export type FacultyAnnouncementUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<FacultyAnnouncementCreateWithoutDepartmentInput, FacultyAnnouncementUncheckedCreateWithoutDepartmentInput> | FacultyAnnouncementCreateWithoutDepartmentInput[] | FacultyAnnouncementUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: FacultyAnnouncementCreateOrConnectWithoutDepartmentInput | FacultyAnnouncementCreateOrConnectWithoutDepartmentInput[]
    upsert?: FacultyAnnouncementUpsertWithWhereUniqueWithoutDepartmentInput | FacultyAnnouncementUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: FacultyAnnouncementCreateManyDepartmentInputEnvelope
    set?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    disconnect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    delete?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    connect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    update?: FacultyAnnouncementUpdateWithWhereUniqueWithoutDepartmentInput | FacultyAnnouncementUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: FacultyAnnouncementUpdateManyWithWhereWithoutDepartmentInput | FacultyAnnouncementUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: FacultyAnnouncementScalarWhereInput | FacultyAnnouncementScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutFacultyInput = {
    create?: XOR<DepartmentCreateWithoutFacultyInput, DepartmentUncheckedCreateWithoutFacultyInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutFacultyInput
    connect?: DepartmentWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutFacultyInput = {
    create?: XOR<AttendanceCreateWithoutFacultyInput, AttendanceUncheckedCreateWithoutFacultyInput> | AttendanceCreateWithoutFacultyInput[] | AttendanceUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutFacultyInput | AttendanceCreateOrConnectWithoutFacultyInput[]
    createMany?: AttendanceCreateManyFacultyInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutFacultyInput = {
    create?: XOR<UserCreateWithoutFacultyInput, UserUncheckedCreateWithoutFacultyInput>
    connectOrCreate?: UserCreateOrConnectWithoutFacultyInput
    connect?: UserWhereUniqueInput
  }

  export type FacultyAnnouncementCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultyAnnouncementCreateWithoutFacultyInput, FacultyAnnouncementUncheckedCreateWithoutFacultyInput> | FacultyAnnouncementCreateWithoutFacultyInput[] | FacultyAnnouncementUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyAnnouncementCreateOrConnectWithoutFacultyInput | FacultyAnnouncementCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultyAnnouncementCreateManyFacultyInputEnvelope
    connect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
  }

  export type FacultyAttendanceCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultyAttendanceCreateWithoutFacultyInput, FacultyAttendanceUncheckedCreateWithoutFacultyInput> | FacultyAttendanceCreateWithoutFacultyInput[] | FacultyAttendanceUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyAttendanceCreateOrConnectWithoutFacultyInput | FacultyAttendanceCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultyAttendanceCreateManyFacultyInputEnvelope
    connect?: FacultyAttendanceWhereUniqueInput | FacultyAttendanceWhereUniqueInput[]
  }

  export type FacultyLeaveCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultyLeaveCreateWithoutFacultyInput, FacultyLeaveUncheckedCreateWithoutFacultyInput> | FacultyLeaveCreateWithoutFacultyInput[] | FacultyLeaveUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyLeaveCreateOrConnectWithoutFacultyInput | FacultyLeaveCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultyLeaveCreateManyFacultyInputEnvelope
    connect?: FacultyLeaveWhereUniqueInput | FacultyLeaveWhereUniqueInput[]
  }

  export type FacultyNoteCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultyNoteCreateWithoutFacultyInput, FacultyNoteUncheckedCreateWithoutFacultyInput> | FacultyNoteCreateWithoutFacultyInput[] | FacultyNoteUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyNoteCreateOrConnectWithoutFacultyInput | FacultyNoteCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultyNoteCreateManyFacultyInputEnvelope
    connect?: FacultyNoteWhereUniqueInput | FacultyNoteWhereUniqueInput[]
  }

  export type FacultySubjectCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultySubjectCreateWithoutFacultyInput, FacultySubjectUncheckedCreateWithoutFacultyInput> | FacultySubjectCreateWithoutFacultyInput[] | FacultySubjectUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutFacultyInput | FacultySubjectCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultySubjectCreateManyFacultyInputEnvelope
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<AttendanceCreateWithoutFacultyInput, AttendanceUncheckedCreateWithoutFacultyInput> | AttendanceCreateWithoutFacultyInput[] | AttendanceUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutFacultyInput | AttendanceCreateOrConnectWithoutFacultyInput[]
    createMany?: AttendanceCreateManyFacultyInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type FacultyAnnouncementUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultyAnnouncementCreateWithoutFacultyInput, FacultyAnnouncementUncheckedCreateWithoutFacultyInput> | FacultyAnnouncementCreateWithoutFacultyInput[] | FacultyAnnouncementUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyAnnouncementCreateOrConnectWithoutFacultyInput | FacultyAnnouncementCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultyAnnouncementCreateManyFacultyInputEnvelope
    connect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
  }

  export type FacultyAttendanceUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultyAttendanceCreateWithoutFacultyInput, FacultyAttendanceUncheckedCreateWithoutFacultyInput> | FacultyAttendanceCreateWithoutFacultyInput[] | FacultyAttendanceUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyAttendanceCreateOrConnectWithoutFacultyInput | FacultyAttendanceCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultyAttendanceCreateManyFacultyInputEnvelope
    connect?: FacultyAttendanceWhereUniqueInput | FacultyAttendanceWhereUniqueInput[]
  }

  export type FacultyLeaveUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultyLeaveCreateWithoutFacultyInput, FacultyLeaveUncheckedCreateWithoutFacultyInput> | FacultyLeaveCreateWithoutFacultyInput[] | FacultyLeaveUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyLeaveCreateOrConnectWithoutFacultyInput | FacultyLeaveCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultyLeaveCreateManyFacultyInputEnvelope
    connect?: FacultyLeaveWhereUniqueInput | FacultyLeaveWhereUniqueInput[]
  }

  export type FacultyNoteUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultyNoteCreateWithoutFacultyInput, FacultyNoteUncheckedCreateWithoutFacultyInput> | FacultyNoteCreateWithoutFacultyInput[] | FacultyNoteUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyNoteCreateOrConnectWithoutFacultyInput | FacultyNoteCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultyNoteCreateManyFacultyInputEnvelope
    connect?: FacultyNoteWhereUniqueInput | FacultyNoteWhereUniqueInput[]
  }

  export type FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<FacultySubjectCreateWithoutFacultyInput, FacultySubjectUncheckedCreateWithoutFacultyInput> | FacultySubjectCreateWithoutFacultyInput[] | FacultySubjectUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutFacultyInput | FacultySubjectCreateOrConnectWithoutFacultyInput[]
    createMany?: FacultySubjectCreateManyFacultyInputEnvelope
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DepartmentUpdateOneWithoutFacultyNestedInput = {
    create?: XOR<DepartmentCreateWithoutFacultyInput, DepartmentUncheckedCreateWithoutFacultyInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutFacultyInput
    upsert?: DepartmentUpsertWithoutFacultyInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutFacultyInput, DepartmentUpdateWithoutFacultyInput>, DepartmentUncheckedUpdateWithoutFacultyInput>
  }

  export type AttendanceUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<AttendanceCreateWithoutFacultyInput, AttendanceUncheckedCreateWithoutFacultyInput> | AttendanceCreateWithoutFacultyInput[] | AttendanceUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutFacultyInput | AttendanceCreateOrConnectWithoutFacultyInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutFacultyInput | AttendanceUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: AttendanceCreateManyFacultyInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutFacultyInput | AttendanceUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutFacultyInput | AttendanceUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type UserUpdateOneWithoutFacultyNestedInput = {
    create?: XOR<UserCreateWithoutFacultyInput, UserUncheckedCreateWithoutFacultyInput>
    connectOrCreate?: UserCreateOrConnectWithoutFacultyInput
    upsert?: UserUpsertWithoutFacultyInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFacultyInput, UserUpdateWithoutFacultyInput>, UserUncheckedUpdateWithoutFacultyInput>
  }

  export type FacultyAnnouncementUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultyAnnouncementCreateWithoutFacultyInput, FacultyAnnouncementUncheckedCreateWithoutFacultyInput> | FacultyAnnouncementCreateWithoutFacultyInput[] | FacultyAnnouncementUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyAnnouncementCreateOrConnectWithoutFacultyInput | FacultyAnnouncementCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultyAnnouncementUpsertWithWhereUniqueWithoutFacultyInput | FacultyAnnouncementUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultyAnnouncementCreateManyFacultyInputEnvelope
    set?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    disconnect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    delete?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    connect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    update?: FacultyAnnouncementUpdateWithWhereUniqueWithoutFacultyInput | FacultyAnnouncementUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultyAnnouncementUpdateManyWithWhereWithoutFacultyInput | FacultyAnnouncementUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultyAnnouncementScalarWhereInput | FacultyAnnouncementScalarWhereInput[]
  }

  export type FacultyAttendanceUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultyAttendanceCreateWithoutFacultyInput, FacultyAttendanceUncheckedCreateWithoutFacultyInput> | FacultyAttendanceCreateWithoutFacultyInput[] | FacultyAttendanceUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyAttendanceCreateOrConnectWithoutFacultyInput | FacultyAttendanceCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultyAttendanceUpsertWithWhereUniqueWithoutFacultyInput | FacultyAttendanceUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultyAttendanceCreateManyFacultyInputEnvelope
    set?: FacultyAttendanceWhereUniqueInput | FacultyAttendanceWhereUniqueInput[]
    disconnect?: FacultyAttendanceWhereUniqueInput | FacultyAttendanceWhereUniqueInput[]
    delete?: FacultyAttendanceWhereUniqueInput | FacultyAttendanceWhereUniqueInput[]
    connect?: FacultyAttendanceWhereUniqueInput | FacultyAttendanceWhereUniqueInput[]
    update?: FacultyAttendanceUpdateWithWhereUniqueWithoutFacultyInput | FacultyAttendanceUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultyAttendanceUpdateManyWithWhereWithoutFacultyInput | FacultyAttendanceUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultyAttendanceScalarWhereInput | FacultyAttendanceScalarWhereInput[]
  }

  export type FacultyLeaveUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultyLeaveCreateWithoutFacultyInput, FacultyLeaveUncheckedCreateWithoutFacultyInput> | FacultyLeaveCreateWithoutFacultyInput[] | FacultyLeaveUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyLeaveCreateOrConnectWithoutFacultyInput | FacultyLeaveCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultyLeaveUpsertWithWhereUniqueWithoutFacultyInput | FacultyLeaveUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultyLeaveCreateManyFacultyInputEnvelope
    set?: FacultyLeaveWhereUniqueInput | FacultyLeaveWhereUniqueInput[]
    disconnect?: FacultyLeaveWhereUniqueInput | FacultyLeaveWhereUniqueInput[]
    delete?: FacultyLeaveWhereUniqueInput | FacultyLeaveWhereUniqueInput[]
    connect?: FacultyLeaveWhereUniqueInput | FacultyLeaveWhereUniqueInput[]
    update?: FacultyLeaveUpdateWithWhereUniqueWithoutFacultyInput | FacultyLeaveUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultyLeaveUpdateManyWithWhereWithoutFacultyInput | FacultyLeaveUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultyLeaveScalarWhereInput | FacultyLeaveScalarWhereInput[]
  }

  export type FacultyNoteUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultyNoteCreateWithoutFacultyInput, FacultyNoteUncheckedCreateWithoutFacultyInput> | FacultyNoteCreateWithoutFacultyInput[] | FacultyNoteUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyNoteCreateOrConnectWithoutFacultyInput | FacultyNoteCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultyNoteUpsertWithWhereUniqueWithoutFacultyInput | FacultyNoteUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultyNoteCreateManyFacultyInputEnvelope
    set?: FacultyNoteWhereUniqueInput | FacultyNoteWhereUniqueInput[]
    disconnect?: FacultyNoteWhereUniqueInput | FacultyNoteWhereUniqueInput[]
    delete?: FacultyNoteWhereUniqueInput | FacultyNoteWhereUniqueInput[]
    connect?: FacultyNoteWhereUniqueInput | FacultyNoteWhereUniqueInput[]
    update?: FacultyNoteUpdateWithWhereUniqueWithoutFacultyInput | FacultyNoteUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultyNoteUpdateManyWithWhereWithoutFacultyInput | FacultyNoteUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultyNoteScalarWhereInput | FacultyNoteScalarWhereInput[]
  }

  export type FacultySubjectUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultySubjectCreateWithoutFacultyInput, FacultySubjectUncheckedCreateWithoutFacultyInput> | FacultySubjectCreateWithoutFacultyInput[] | FacultySubjectUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutFacultyInput | FacultySubjectCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultySubjectUpsertWithWhereUniqueWithoutFacultyInput | FacultySubjectUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultySubjectCreateManyFacultyInputEnvelope
    set?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    disconnect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    delete?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    update?: FacultySubjectUpdateWithWhereUniqueWithoutFacultyInput | FacultySubjectUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultySubjectUpdateManyWithWhereWithoutFacultyInput | FacultySubjectUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultySubjectScalarWhereInput | FacultySubjectScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AttendanceUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<AttendanceCreateWithoutFacultyInput, AttendanceUncheckedCreateWithoutFacultyInput> | AttendanceCreateWithoutFacultyInput[] | AttendanceUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutFacultyInput | AttendanceCreateOrConnectWithoutFacultyInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutFacultyInput | AttendanceUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: AttendanceCreateManyFacultyInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutFacultyInput | AttendanceUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutFacultyInput | AttendanceUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type FacultyAnnouncementUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultyAnnouncementCreateWithoutFacultyInput, FacultyAnnouncementUncheckedCreateWithoutFacultyInput> | FacultyAnnouncementCreateWithoutFacultyInput[] | FacultyAnnouncementUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyAnnouncementCreateOrConnectWithoutFacultyInput | FacultyAnnouncementCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultyAnnouncementUpsertWithWhereUniqueWithoutFacultyInput | FacultyAnnouncementUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultyAnnouncementCreateManyFacultyInputEnvelope
    set?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    disconnect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    delete?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    connect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    update?: FacultyAnnouncementUpdateWithWhereUniqueWithoutFacultyInput | FacultyAnnouncementUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultyAnnouncementUpdateManyWithWhereWithoutFacultyInput | FacultyAnnouncementUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultyAnnouncementScalarWhereInput | FacultyAnnouncementScalarWhereInput[]
  }

  export type FacultyAttendanceUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultyAttendanceCreateWithoutFacultyInput, FacultyAttendanceUncheckedCreateWithoutFacultyInput> | FacultyAttendanceCreateWithoutFacultyInput[] | FacultyAttendanceUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyAttendanceCreateOrConnectWithoutFacultyInput | FacultyAttendanceCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultyAttendanceUpsertWithWhereUniqueWithoutFacultyInput | FacultyAttendanceUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultyAttendanceCreateManyFacultyInputEnvelope
    set?: FacultyAttendanceWhereUniqueInput | FacultyAttendanceWhereUniqueInput[]
    disconnect?: FacultyAttendanceWhereUniqueInput | FacultyAttendanceWhereUniqueInput[]
    delete?: FacultyAttendanceWhereUniqueInput | FacultyAttendanceWhereUniqueInput[]
    connect?: FacultyAttendanceWhereUniqueInput | FacultyAttendanceWhereUniqueInput[]
    update?: FacultyAttendanceUpdateWithWhereUniqueWithoutFacultyInput | FacultyAttendanceUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultyAttendanceUpdateManyWithWhereWithoutFacultyInput | FacultyAttendanceUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultyAttendanceScalarWhereInput | FacultyAttendanceScalarWhereInput[]
  }

  export type FacultyLeaveUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultyLeaveCreateWithoutFacultyInput, FacultyLeaveUncheckedCreateWithoutFacultyInput> | FacultyLeaveCreateWithoutFacultyInput[] | FacultyLeaveUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyLeaveCreateOrConnectWithoutFacultyInput | FacultyLeaveCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultyLeaveUpsertWithWhereUniqueWithoutFacultyInput | FacultyLeaveUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultyLeaveCreateManyFacultyInputEnvelope
    set?: FacultyLeaveWhereUniqueInput | FacultyLeaveWhereUniqueInput[]
    disconnect?: FacultyLeaveWhereUniqueInput | FacultyLeaveWhereUniqueInput[]
    delete?: FacultyLeaveWhereUniqueInput | FacultyLeaveWhereUniqueInput[]
    connect?: FacultyLeaveWhereUniqueInput | FacultyLeaveWhereUniqueInput[]
    update?: FacultyLeaveUpdateWithWhereUniqueWithoutFacultyInput | FacultyLeaveUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultyLeaveUpdateManyWithWhereWithoutFacultyInput | FacultyLeaveUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultyLeaveScalarWhereInput | FacultyLeaveScalarWhereInput[]
  }

  export type FacultyNoteUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultyNoteCreateWithoutFacultyInput, FacultyNoteUncheckedCreateWithoutFacultyInput> | FacultyNoteCreateWithoutFacultyInput[] | FacultyNoteUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultyNoteCreateOrConnectWithoutFacultyInput | FacultyNoteCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultyNoteUpsertWithWhereUniqueWithoutFacultyInput | FacultyNoteUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultyNoteCreateManyFacultyInputEnvelope
    set?: FacultyNoteWhereUniqueInput | FacultyNoteWhereUniqueInput[]
    disconnect?: FacultyNoteWhereUniqueInput | FacultyNoteWhereUniqueInput[]
    delete?: FacultyNoteWhereUniqueInput | FacultyNoteWhereUniqueInput[]
    connect?: FacultyNoteWhereUniqueInput | FacultyNoteWhereUniqueInput[]
    update?: FacultyNoteUpdateWithWhereUniqueWithoutFacultyInput | FacultyNoteUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultyNoteUpdateManyWithWhereWithoutFacultyInput | FacultyNoteUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultyNoteScalarWhereInput | FacultyNoteScalarWhereInput[]
  }

  export type FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<FacultySubjectCreateWithoutFacultyInput, FacultySubjectUncheckedCreateWithoutFacultyInput> | FacultySubjectCreateWithoutFacultyInput[] | FacultySubjectUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutFacultyInput | FacultySubjectCreateOrConnectWithoutFacultyInput[]
    upsert?: FacultySubjectUpsertWithWhereUniqueWithoutFacultyInput | FacultySubjectUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: FacultySubjectCreateManyFacultyInputEnvelope
    set?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    disconnect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    delete?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    update?: FacultySubjectUpdateWithWhereUniqueWithoutFacultyInput | FacultySubjectUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: FacultySubjectUpdateManyWithWhereWithoutFacultyInput | FacultySubjectUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: FacultySubjectScalarWhereInput | FacultySubjectScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutStudentsInput = {
    create?: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutStudentsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutStudentsInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    connect?: UserWhereUniqueInput
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type DepartmentUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutStudentsInput
    upsert?: DepartmentUpsertWithoutStudentsInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutStudentsInput, DepartmentUpdateWithoutStudentsInput>, DepartmentUncheckedUpdateWithoutStudentsInput>
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type UserUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentsInput
    upsert?: UserUpsertWithoutStudentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentsInput, UserUpdateWithoutStudentsInput>, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<DepartmentCreateWithoutSubjectsInput, DepartmentUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutSubjectsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutSubjectInput = {
    create?: XOR<AttendanceCreateWithoutSubjectInput, AttendanceUncheckedCreateWithoutSubjectInput> | AttendanceCreateWithoutSubjectInput[] | AttendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSubjectInput | AttendanceCreateOrConnectWithoutSubjectInput[]
    createMany?: AttendanceCreateManySubjectInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutSubjectInput = {
    create?: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput> | EnrollmentCreateWithoutSubjectInput[] | EnrollmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSubjectInput | EnrollmentCreateOrConnectWithoutSubjectInput[]
    createMany?: EnrollmentCreateManySubjectInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type FacultyAnnouncementCreateNestedManyWithoutSubjectInput = {
    create?: XOR<FacultyAnnouncementCreateWithoutSubjectInput, FacultyAnnouncementUncheckedCreateWithoutSubjectInput> | FacultyAnnouncementCreateWithoutSubjectInput[] | FacultyAnnouncementUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: FacultyAnnouncementCreateOrConnectWithoutSubjectInput | FacultyAnnouncementCreateOrConnectWithoutSubjectInput[]
    createMany?: FacultyAnnouncementCreateManySubjectInputEnvelope
    connect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
  }

  export type TimetableCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TimetableCreateWithoutSubjectInput, TimetableUncheckedCreateWithoutSubjectInput> | TimetableCreateWithoutSubjectInput[] | TimetableUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutSubjectInput | TimetableCreateOrConnectWithoutSubjectInput[]
    createMany?: TimetableCreateManySubjectInputEnvelope
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
  }

  export type FacultySubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<FacultySubjectCreateWithoutSubjectInput, FacultySubjectUncheckedCreateWithoutSubjectInput> | FacultySubjectCreateWithoutSubjectInput[] | FacultySubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutSubjectInput | FacultySubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: FacultySubjectCreateManySubjectInputEnvelope
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<AttendanceCreateWithoutSubjectInput, AttendanceUncheckedCreateWithoutSubjectInput> | AttendanceCreateWithoutSubjectInput[] | AttendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSubjectInput | AttendanceCreateOrConnectWithoutSubjectInput[]
    createMany?: AttendanceCreateManySubjectInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput> | EnrollmentCreateWithoutSubjectInput[] | EnrollmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSubjectInput | EnrollmentCreateOrConnectWithoutSubjectInput[]
    createMany?: EnrollmentCreateManySubjectInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type FacultyAnnouncementUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<FacultyAnnouncementCreateWithoutSubjectInput, FacultyAnnouncementUncheckedCreateWithoutSubjectInput> | FacultyAnnouncementCreateWithoutSubjectInput[] | FacultyAnnouncementUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: FacultyAnnouncementCreateOrConnectWithoutSubjectInput | FacultyAnnouncementCreateOrConnectWithoutSubjectInput[]
    createMany?: FacultyAnnouncementCreateManySubjectInputEnvelope
    connect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
  }

  export type TimetableUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TimetableCreateWithoutSubjectInput, TimetableUncheckedCreateWithoutSubjectInput> | TimetableCreateWithoutSubjectInput[] | TimetableUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutSubjectInput | TimetableCreateOrConnectWithoutSubjectInput[]
    createMany?: TimetableCreateManySubjectInputEnvelope
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
  }

  export type FacultySubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<FacultySubjectCreateWithoutSubjectInput, FacultySubjectUncheckedCreateWithoutSubjectInput> | FacultySubjectCreateWithoutSubjectInput[] | FacultySubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutSubjectInput | FacultySubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: FacultySubjectCreateManySubjectInputEnvelope
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
  }

  export type DepartmentUpdateOneWithoutSubjectsNestedInput = {
    create?: XOR<DepartmentCreateWithoutSubjectsInput, DepartmentUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutSubjectsInput
    upsert?: DepartmentUpsertWithoutSubjectsInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutSubjectsInput, DepartmentUpdateWithoutSubjectsInput>, DepartmentUncheckedUpdateWithoutSubjectsInput>
  }

  export type AttendanceUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<AttendanceCreateWithoutSubjectInput, AttendanceUncheckedCreateWithoutSubjectInput> | AttendanceCreateWithoutSubjectInput[] | AttendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSubjectInput | AttendanceCreateOrConnectWithoutSubjectInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSubjectInput | AttendanceUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: AttendanceCreateManySubjectInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSubjectInput | AttendanceUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSubjectInput | AttendanceUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput> | EnrollmentCreateWithoutSubjectInput[] | EnrollmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSubjectInput | EnrollmentCreateOrConnectWithoutSubjectInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutSubjectInput | EnrollmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: EnrollmentCreateManySubjectInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutSubjectInput | EnrollmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutSubjectInput | EnrollmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type FacultyAnnouncementUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<FacultyAnnouncementCreateWithoutSubjectInput, FacultyAnnouncementUncheckedCreateWithoutSubjectInput> | FacultyAnnouncementCreateWithoutSubjectInput[] | FacultyAnnouncementUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: FacultyAnnouncementCreateOrConnectWithoutSubjectInput | FacultyAnnouncementCreateOrConnectWithoutSubjectInput[]
    upsert?: FacultyAnnouncementUpsertWithWhereUniqueWithoutSubjectInput | FacultyAnnouncementUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: FacultyAnnouncementCreateManySubjectInputEnvelope
    set?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    disconnect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    delete?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    connect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    update?: FacultyAnnouncementUpdateWithWhereUniqueWithoutSubjectInput | FacultyAnnouncementUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: FacultyAnnouncementUpdateManyWithWhereWithoutSubjectInput | FacultyAnnouncementUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: FacultyAnnouncementScalarWhereInput | FacultyAnnouncementScalarWhereInput[]
  }

  export type TimetableUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TimetableCreateWithoutSubjectInput, TimetableUncheckedCreateWithoutSubjectInput> | TimetableCreateWithoutSubjectInput[] | TimetableUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutSubjectInput | TimetableCreateOrConnectWithoutSubjectInput[]
    upsert?: TimetableUpsertWithWhereUniqueWithoutSubjectInput | TimetableUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TimetableCreateManySubjectInputEnvelope
    set?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    disconnect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    delete?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    update?: TimetableUpdateWithWhereUniqueWithoutSubjectInput | TimetableUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TimetableUpdateManyWithWhereWithoutSubjectInput | TimetableUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
  }

  export type FacultySubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<FacultySubjectCreateWithoutSubjectInput, FacultySubjectUncheckedCreateWithoutSubjectInput> | FacultySubjectCreateWithoutSubjectInput[] | FacultySubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutSubjectInput | FacultySubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: FacultySubjectUpsertWithWhereUniqueWithoutSubjectInput | FacultySubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: FacultySubjectCreateManySubjectInputEnvelope
    set?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    disconnect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    delete?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    update?: FacultySubjectUpdateWithWhereUniqueWithoutSubjectInput | FacultySubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: FacultySubjectUpdateManyWithWhereWithoutSubjectInput | FacultySubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: FacultySubjectScalarWhereInput | FacultySubjectScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<AttendanceCreateWithoutSubjectInput, AttendanceUncheckedCreateWithoutSubjectInput> | AttendanceCreateWithoutSubjectInput[] | AttendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutSubjectInput | AttendanceCreateOrConnectWithoutSubjectInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutSubjectInput | AttendanceUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: AttendanceCreateManySubjectInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutSubjectInput | AttendanceUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutSubjectInput | AttendanceUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput> | EnrollmentCreateWithoutSubjectInput[] | EnrollmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutSubjectInput | EnrollmentCreateOrConnectWithoutSubjectInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutSubjectInput | EnrollmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: EnrollmentCreateManySubjectInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutSubjectInput | EnrollmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutSubjectInput | EnrollmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type FacultyAnnouncementUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<FacultyAnnouncementCreateWithoutSubjectInput, FacultyAnnouncementUncheckedCreateWithoutSubjectInput> | FacultyAnnouncementCreateWithoutSubjectInput[] | FacultyAnnouncementUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: FacultyAnnouncementCreateOrConnectWithoutSubjectInput | FacultyAnnouncementCreateOrConnectWithoutSubjectInput[]
    upsert?: FacultyAnnouncementUpsertWithWhereUniqueWithoutSubjectInput | FacultyAnnouncementUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: FacultyAnnouncementCreateManySubjectInputEnvelope
    set?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    disconnect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    delete?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    connect?: FacultyAnnouncementWhereUniqueInput | FacultyAnnouncementWhereUniqueInput[]
    update?: FacultyAnnouncementUpdateWithWhereUniqueWithoutSubjectInput | FacultyAnnouncementUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: FacultyAnnouncementUpdateManyWithWhereWithoutSubjectInput | FacultyAnnouncementUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: FacultyAnnouncementScalarWhereInput | FacultyAnnouncementScalarWhereInput[]
  }

  export type TimetableUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TimetableCreateWithoutSubjectInput, TimetableUncheckedCreateWithoutSubjectInput> | TimetableCreateWithoutSubjectInput[] | TimetableUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TimetableCreateOrConnectWithoutSubjectInput | TimetableCreateOrConnectWithoutSubjectInput[]
    upsert?: TimetableUpsertWithWhereUniqueWithoutSubjectInput | TimetableUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TimetableCreateManySubjectInputEnvelope
    set?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    disconnect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    delete?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    connect?: TimetableWhereUniqueInput | TimetableWhereUniqueInput[]
    update?: TimetableUpdateWithWhereUniqueWithoutSubjectInput | TimetableUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TimetableUpdateManyWithWhereWithoutSubjectInput | TimetableUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
  }

  export type FacultySubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<FacultySubjectCreateWithoutSubjectInput, FacultySubjectUncheckedCreateWithoutSubjectInput> | FacultySubjectCreateWithoutSubjectInput[] | FacultySubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: FacultySubjectCreateOrConnectWithoutSubjectInput | FacultySubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: FacultySubjectUpsertWithWhereUniqueWithoutSubjectInput | FacultySubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: FacultySubjectCreateManySubjectInputEnvelope
    set?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    disconnect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    delete?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    connect?: FacultySubjectWhereUniqueInput | FacultySubjectWhereUniqueInput[]
    update?: FacultySubjectUpdateWithWhereUniqueWithoutSubjectInput | FacultySubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: FacultySubjectUpdateManyWithWhereWithoutSubjectInput | FacultySubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: FacultySubjectScalarWhereInput | FacultySubjectScalarWhereInput[]
  }

  export type FacultyCreateNestedOneWithoutFaculty_subjectsInput = {
    create?: XOR<FacultyCreateWithoutFaculty_subjectsInput, FacultyUncheckedCreateWithoutFaculty_subjectsInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutFaculty_subjectsInput
    connect?: FacultyWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutFaculty_subjectsInput = {
    create?: XOR<SubjectCreateWithoutFaculty_subjectsInput, SubjectUncheckedCreateWithoutFaculty_subjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutFaculty_subjectsInput
    connect?: SubjectWhereUniqueInput
  }

  export type FacultyUpdateOneRequiredWithoutFaculty_subjectsNestedInput = {
    create?: XOR<FacultyCreateWithoutFaculty_subjectsInput, FacultyUncheckedCreateWithoutFaculty_subjectsInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutFaculty_subjectsInput
    upsert?: FacultyUpsertWithoutFaculty_subjectsInput
    connect?: FacultyWhereUniqueInput
    update?: XOR<XOR<FacultyUpdateToOneWithWhereWithoutFaculty_subjectsInput, FacultyUpdateWithoutFaculty_subjectsInput>, FacultyUncheckedUpdateWithoutFaculty_subjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutFaculty_subjectsNestedInput = {
    create?: XOR<SubjectCreateWithoutFaculty_subjectsInput, SubjectUncheckedCreateWithoutFaculty_subjectsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutFaculty_subjectsInput
    upsert?: SubjectUpsertWithoutFaculty_subjectsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutFaculty_subjectsInput, SubjectUpdateWithoutFaculty_subjectsInput>, SubjectUncheckedUpdateWithoutFaculty_subjectsInput>
  }

  export type StudentCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEnrollmentsInput
    connect?: StudentWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<SubjectCreateWithoutEnrollmentsInput, SubjectUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutEnrollmentsInput
    connect?: SubjectWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutEnrollmentsInput
    upsert?: StudentUpsertWithoutEnrollmentsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutEnrollmentsInput, StudentUpdateWithoutEnrollmentsInput>, StudentUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type SubjectUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<SubjectCreateWithoutEnrollmentsInput, SubjectUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutEnrollmentsInput
    upsert?: SubjectUpsertWithoutEnrollmentsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutEnrollmentsInput, SubjectUpdateWithoutEnrollmentsInput>, SubjectUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type SubjectCreateNestedOneWithoutTimetableInput = {
    create?: XOR<SubjectCreateWithoutTimetableInput, SubjectUncheckedCreateWithoutTimetableInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTimetableInput
    connect?: SubjectWhereUniqueInput
  }

  export type SubjectUpdateOneWithoutTimetableNestedInput = {
    create?: XOR<SubjectCreateWithoutTimetableInput, SubjectUncheckedCreateWithoutTimetableInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTimetableInput
    upsert?: SubjectUpsertWithoutTimetableInput
    disconnect?: SubjectWhereInput | boolean
    delete?: SubjectWhereInput | boolean
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTimetableInput, SubjectUpdateWithoutTimetableInput>, SubjectUncheckedUpdateWithoutTimetableInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FacultyCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<FacultyCreateWithoutAttendanceInput, FacultyUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutAttendanceInput
    connect?: FacultyWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceInput
    connect?: StudentWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<SubjectCreateWithoutAttendanceInput, SubjectUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutAttendanceInput
    connect?: SubjectWhereUniqueInput
  }

  export type FacultyUpdateOneWithoutAttendanceNestedInput = {
    create?: XOR<FacultyCreateWithoutAttendanceInput, FacultyUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutAttendanceInput
    upsert?: FacultyUpsertWithoutAttendanceInput
    disconnect?: FacultyWhereInput | boolean
    delete?: FacultyWhereInput | boolean
    connect?: FacultyWhereUniqueInput
    update?: XOR<XOR<FacultyUpdateToOneWithWhereWithoutAttendanceInput, FacultyUpdateWithoutAttendanceInput>, FacultyUncheckedUpdateWithoutAttendanceInput>
  }

  export type StudentUpdateOneWithoutAttendanceNestedInput = {
    create?: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceInput
    upsert?: StudentUpsertWithoutAttendanceInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttendanceInput, StudentUpdateWithoutAttendanceInput>, StudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type SubjectUpdateOneWithoutAttendanceNestedInput = {
    create?: XOR<SubjectCreateWithoutAttendanceInput, SubjectUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutAttendanceInput
    upsert?: SubjectUpsertWithoutAttendanceInput
    disconnect?: SubjectWhereInput | boolean
    delete?: SubjectWhereInput | boolean
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutAttendanceInput, SubjectUpdateWithoutAttendanceInput>, SubjectUncheckedUpdateWithoutAttendanceInput>
  }

  export type FacultyCreateNestedOneWithoutFacultyAttendanceInput = {
    create?: XOR<FacultyCreateWithoutFacultyAttendanceInput, FacultyUncheckedCreateWithoutFacultyAttendanceInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutFacultyAttendanceInput
    connect?: FacultyWhereUniqueInput
  }

  export type FacultyUpdateOneRequiredWithoutFacultyAttendanceNestedInput = {
    create?: XOR<FacultyCreateWithoutFacultyAttendanceInput, FacultyUncheckedCreateWithoutFacultyAttendanceInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutFacultyAttendanceInput
    upsert?: FacultyUpsertWithoutFacultyAttendanceInput
    connect?: FacultyWhereUniqueInput
    update?: XOR<XOR<FacultyUpdateToOneWithWhereWithoutFacultyAttendanceInput, FacultyUpdateWithoutFacultyAttendanceInput>, FacultyUncheckedUpdateWithoutFacultyAttendanceInput>
  }

  export type FacultyCreateNestedOneWithoutLeavesInput = {
    create?: XOR<FacultyCreateWithoutLeavesInput, FacultyUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutLeavesInput
    connect?: FacultyWhereUniqueInput
  }

  export type FacultyUpdateOneRequiredWithoutLeavesNestedInput = {
    create?: XOR<FacultyCreateWithoutLeavesInput, FacultyUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutLeavesInput
    upsert?: FacultyUpsertWithoutLeavesInput
    connect?: FacultyWhereUniqueInput
    update?: XOR<XOR<FacultyUpdateToOneWithWhereWithoutLeavesInput, FacultyUpdateWithoutLeavesInput>, FacultyUncheckedUpdateWithoutLeavesInput>
  }

  export type FacultyCreateNestedOneWithoutNotesInput = {
    create?: XOR<FacultyCreateWithoutNotesInput, FacultyUncheckedCreateWithoutNotesInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutNotesInput
    connect?: FacultyWhereUniqueInput
  }

  export type FacultyUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<FacultyCreateWithoutNotesInput, FacultyUncheckedCreateWithoutNotesInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutNotesInput
    upsert?: FacultyUpsertWithoutNotesInput
    connect?: FacultyWhereUniqueInput
    update?: XOR<XOR<FacultyUpdateToOneWithWhereWithoutNotesInput, FacultyUpdateWithoutNotesInput>, FacultyUncheckedUpdateWithoutNotesInput>
  }

  export type DepartmentCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<DepartmentCreateWithoutAnnouncementsInput, DepartmentUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutAnnouncementsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type FacultyCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<FacultyCreateWithoutAnnouncementsInput, FacultyUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutAnnouncementsInput
    connect?: FacultyWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<SubjectCreateWithoutAnnouncementsInput, SubjectUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutAnnouncementsInput
    connect?: SubjectWhereUniqueInput
  }

  export type DepartmentUpdateOneWithoutAnnouncementsNestedInput = {
    create?: XOR<DepartmentCreateWithoutAnnouncementsInput, DepartmentUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutAnnouncementsInput
    upsert?: DepartmentUpsertWithoutAnnouncementsInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutAnnouncementsInput, DepartmentUpdateWithoutAnnouncementsInput>, DepartmentUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type FacultyUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<FacultyCreateWithoutAnnouncementsInput, FacultyUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: FacultyCreateOrConnectWithoutAnnouncementsInput
    upsert?: FacultyUpsertWithoutAnnouncementsInput
    connect?: FacultyWhereUniqueInput
    update?: XOR<XOR<FacultyUpdateToOneWithWhereWithoutAnnouncementsInput, FacultyUpdateWithoutAnnouncementsInput>, FacultyUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type SubjectUpdateOneWithoutAnnouncementsNestedInput = {
    create?: XOR<SubjectCreateWithoutAnnouncementsInput, SubjectUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutAnnouncementsInput
    upsert?: SubjectUpsertWithoutAnnouncementsInput
    disconnect?: SubjectWhereInput | boolean
    delete?: SubjectWhereInput | boolean
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutAnnouncementsInput, SubjectUpdateWithoutAnnouncementsInput>, SubjectUncheckedUpdateWithoutAnnouncementsInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type FacultyCreateWithoutUserInput = {
    faculty_name: string
    email?: string | null
    Department?: DepartmentCreateNestedOneWithoutFacultyInput
    attendance?: AttendanceCreateNestedManyWithoutFacultyInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUncheckedCreateWithoutUserInput = {
    faculty_id?: number
    faculty_name: string
    email?: string | null
    dept_id?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutFacultyInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceUncheckedCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveUncheckedCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteUncheckedCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyCreateOrConnectWithoutUserInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutUserInput, FacultyUncheckedCreateWithoutUserInput>
  }

  export type FacultyCreateManyUserInputEnvelope = {
    data: FacultyCreateManyUserInput | FacultyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutUserInput = {
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
    Department?: DepartmentCreateNestedOneWithoutStudentsInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    stud_id?: number
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
    dept_id?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentCreateManyUserInputEnvelope = {
    data: StudentCreateManyUserInput | StudentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FacultyUpsertWithWhereUniqueWithoutUserInput = {
    where: FacultyWhereUniqueInput
    update: XOR<FacultyUpdateWithoutUserInput, FacultyUncheckedUpdateWithoutUserInput>
    create: XOR<FacultyCreateWithoutUserInput, FacultyUncheckedCreateWithoutUserInput>
  }

  export type FacultyUpdateWithWhereUniqueWithoutUserInput = {
    where: FacultyWhereUniqueInput
    data: XOR<FacultyUpdateWithoutUserInput, FacultyUncheckedUpdateWithoutUserInput>
  }

  export type FacultyUpdateManyWithWhereWithoutUserInput = {
    where: FacultyScalarWhereInput
    data: XOR<FacultyUpdateManyMutationInput, FacultyUncheckedUpdateManyWithoutUserInput>
  }

  export type FacultyScalarWhereInput = {
    AND?: FacultyScalarWhereInput | FacultyScalarWhereInput[]
    OR?: FacultyScalarWhereInput[]
    NOT?: FacultyScalarWhereInput | FacultyScalarWhereInput[]
    faculty_id?: IntFilter<"Faculty"> | number
    user_id?: IntNullableFilter<"Faculty"> | number | null
    faculty_name?: StringFilter<"Faculty"> | string
    email?: StringNullableFilter<"Faculty"> | string | null
    dept_id?: IntNullableFilter<"Faculty"> | number | null
  }

  export type StudentUpsertWithWhereUniqueWithoutUserInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutUserInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateManyWithWhereWithoutUserInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutUserInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    stud_id?: IntFilter<"Student"> | number
    user_id?: IntNullableFilter<"Student"> | number | null
    roll_no?: StringFilter<"Student"> | string
    stud_name?: StringFilter<"Student"> | string
    email?: StringNullableFilter<"Student"> | string | null
    semester?: StringNullableFilter<"Student"> | string | null
    dept_id?: IntNullableFilter<"Student"> | number | null
  }

  export type FacultyCreateWithoutDepartmentInput = {
    faculty_name: string
    email?: string | null
    attendance?: AttendanceCreateNestedManyWithoutFacultyInput
    User?: UserCreateNestedOneWithoutFacultyInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUncheckedCreateWithoutDepartmentInput = {
    faculty_id?: number
    user_id?: number | null
    faculty_name: string
    email?: string | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutFacultyInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceUncheckedCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveUncheckedCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteUncheckedCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyCreateOrConnectWithoutDepartmentInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutDepartmentInput, FacultyUncheckedCreateWithoutDepartmentInput>
  }

  export type FacultyCreateManyDepartmentInputEnvelope = {
    data: FacultyCreateManyDepartmentInput | FacultyCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutDepartmentInput = {
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    User?: UserCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutDepartmentInput = {
    stud_id?: number
    user_id?: number | null
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutDepartmentInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput>
  }

  export type StudentCreateManyDepartmentInputEnvelope = {
    data: StudentCreateManyDepartmentInput | StudentCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type SubjectCreateWithoutDepartmentInput = {
    subject_code: string
    subject_name: string
    semester?: string | null
    credits?: number | null
    attendance?: AttendanceCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentCreateNestedManyWithoutSubjectInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutSubjectInput
    timetable?: TimetableCreateNestedManyWithoutSubjectInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutDepartmentInput = {
    subject_id?: number
    subject_code: string
    subject_name: string
    semester?: string | null
    credits?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSubjectInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutSubjectInput
    timetable?: TimetableUncheckedCreateNestedManyWithoutSubjectInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutDepartmentInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutDepartmentInput, SubjectUncheckedCreateWithoutDepartmentInput>
  }

  export type SubjectCreateManyDepartmentInputEnvelope = {
    data: SubjectCreateManyDepartmentInput | SubjectCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type FacultyAnnouncementCreateWithoutDepartmentInput = {
    target_type: string
    semester?: string | null
    title?: string | null
    message?: string | null
    created_at?: Date | string | null
    Faculty: FacultyCreateNestedOneWithoutAnnouncementsInput
    Subject?: SubjectCreateNestedOneWithoutAnnouncementsInput
  }

  export type FacultyAnnouncementUncheckedCreateWithoutDepartmentInput = {
    announcement_id?: number
    faculty_id: number
    target_type: string
    semester?: string | null
    subject_id?: number | null
    title?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type FacultyAnnouncementCreateOrConnectWithoutDepartmentInput = {
    where: FacultyAnnouncementWhereUniqueInput
    create: XOR<FacultyAnnouncementCreateWithoutDepartmentInput, FacultyAnnouncementUncheckedCreateWithoutDepartmentInput>
  }

  export type FacultyAnnouncementCreateManyDepartmentInputEnvelope = {
    data: FacultyAnnouncementCreateManyDepartmentInput | FacultyAnnouncementCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type FacultyUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: FacultyWhereUniqueInput
    update: XOR<FacultyUpdateWithoutDepartmentInput, FacultyUncheckedUpdateWithoutDepartmentInput>
    create: XOR<FacultyCreateWithoutDepartmentInput, FacultyUncheckedCreateWithoutDepartmentInput>
  }

  export type FacultyUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: FacultyWhereUniqueInput
    data: XOR<FacultyUpdateWithoutDepartmentInput, FacultyUncheckedUpdateWithoutDepartmentInput>
  }

  export type FacultyUpdateManyWithWhereWithoutDepartmentInput = {
    where: FacultyScalarWhereInput
    data: XOR<FacultyUpdateManyMutationInput, FacultyUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type StudentUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutDepartmentInput, StudentUncheckedUpdateWithoutDepartmentInput>
    create: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutDepartmentInput, StudentUncheckedUpdateWithoutDepartmentInput>
  }

  export type StudentUpdateManyWithWhereWithoutDepartmentInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type SubjectUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: SubjectWhereUniqueInput
    update: XOR<SubjectUpdateWithoutDepartmentInput, SubjectUncheckedUpdateWithoutDepartmentInput>
    create: XOR<SubjectCreateWithoutDepartmentInput, SubjectUncheckedCreateWithoutDepartmentInput>
  }

  export type SubjectUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: SubjectWhereUniqueInput
    data: XOR<SubjectUpdateWithoutDepartmentInput, SubjectUncheckedUpdateWithoutDepartmentInput>
  }

  export type SubjectUpdateManyWithWhereWithoutDepartmentInput = {
    where: SubjectScalarWhereInput
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type SubjectScalarWhereInput = {
    AND?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    OR?: SubjectScalarWhereInput[]
    NOT?: SubjectScalarWhereInput | SubjectScalarWhereInput[]
    subject_id?: IntFilter<"Subject"> | number
    subject_code?: StringFilter<"Subject"> | string
    subject_name?: StringFilter<"Subject"> | string
    semester?: StringNullableFilter<"Subject"> | string | null
    dept_id?: IntNullableFilter<"Subject"> | number | null
    credits?: IntNullableFilter<"Subject"> | number | null
  }

  export type FacultyAnnouncementUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: FacultyAnnouncementWhereUniqueInput
    update: XOR<FacultyAnnouncementUpdateWithoutDepartmentInput, FacultyAnnouncementUncheckedUpdateWithoutDepartmentInput>
    create: XOR<FacultyAnnouncementCreateWithoutDepartmentInput, FacultyAnnouncementUncheckedCreateWithoutDepartmentInput>
  }

  export type FacultyAnnouncementUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: FacultyAnnouncementWhereUniqueInput
    data: XOR<FacultyAnnouncementUpdateWithoutDepartmentInput, FacultyAnnouncementUncheckedUpdateWithoutDepartmentInput>
  }

  export type FacultyAnnouncementUpdateManyWithWhereWithoutDepartmentInput = {
    where: FacultyAnnouncementScalarWhereInput
    data: XOR<FacultyAnnouncementUpdateManyMutationInput, FacultyAnnouncementUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type FacultyAnnouncementScalarWhereInput = {
    AND?: FacultyAnnouncementScalarWhereInput | FacultyAnnouncementScalarWhereInput[]
    OR?: FacultyAnnouncementScalarWhereInput[]
    NOT?: FacultyAnnouncementScalarWhereInput | FacultyAnnouncementScalarWhereInput[]
    announcement_id?: IntFilter<"FacultyAnnouncement"> | number
    faculty_id?: IntFilter<"FacultyAnnouncement"> | number
    target_type?: StringFilter<"FacultyAnnouncement"> | string
    semester?: StringNullableFilter<"FacultyAnnouncement"> | string | null
    subject_id?: IntNullableFilter<"FacultyAnnouncement"> | number | null
    dept_id?: IntNullableFilter<"FacultyAnnouncement"> | number | null
    title?: StringNullableFilter<"FacultyAnnouncement"> | string | null
    message?: StringNullableFilter<"FacultyAnnouncement"> | string | null
    created_at?: DateTimeNullableFilter<"FacultyAnnouncement"> | Date | string | null
  }

  export type DepartmentCreateWithoutFacultyInput = {
    dept_name: string
    students?: StudentCreateNestedManyWithoutDepartmentInput
    subjects?: SubjectCreateNestedManyWithoutDepartmentInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutFacultyInput = {
    dept_id?: number
    dept_name: string
    students?: StudentUncheckedCreateNestedManyWithoutDepartmentInput
    subjects?: SubjectUncheckedCreateNestedManyWithoutDepartmentInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutFacultyInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutFacultyInput, DepartmentUncheckedCreateWithoutFacultyInput>
  }

  export type AttendanceCreateWithoutFacultyInput = {
    attendance_date?: Date | string | null
    status: string
    Student?: StudentCreateNestedOneWithoutAttendanceInput
    Subject?: SubjectCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutFacultyInput = {
    attendance_id?: number
    stud_id?: number | null
    subject_id?: number | null
    attendance_date?: Date | string | null
    status: string
  }

  export type AttendanceCreateOrConnectWithoutFacultyInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutFacultyInput, AttendanceUncheckedCreateWithoutFacultyInput>
  }

  export type AttendanceCreateManyFacultyInputEnvelope = {
    data: AttendanceCreateManyFacultyInput | AttendanceCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutFacultyInput = {
    email: string
    password_hash: string
    user_type: string
    is_active?: boolean | null
    created_at?: Date | string | null
    students?: StudentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFacultyInput = {
    user_id?: number
    email: string
    password_hash: string
    user_type: string
    is_active?: boolean | null
    created_at?: Date | string | null
    students?: StudentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFacultyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFacultyInput, UserUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyAnnouncementCreateWithoutFacultyInput = {
    target_type: string
    semester?: string | null
    title?: string | null
    message?: string | null
    created_at?: Date | string | null
    Department?: DepartmentCreateNestedOneWithoutAnnouncementsInput
    Subject?: SubjectCreateNestedOneWithoutAnnouncementsInput
  }

  export type FacultyAnnouncementUncheckedCreateWithoutFacultyInput = {
    announcement_id?: number
    target_type: string
    semester?: string | null
    subject_id?: number | null
    dept_id?: number | null
    title?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type FacultyAnnouncementCreateOrConnectWithoutFacultyInput = {
    where: FacultyAnnouncementWhereUniqueInput
    create: XOR<FacultyAnnouncementCreateWithoutFacultyInput, FacultyAnnouncementUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyAnnouncementCreateManyFacultyInputEnvelope = {
    data: FacultyAnnouncementCreateManyFacultyInput | FacultyAnnouncementCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type FacultyAttendanceCreateWithoutFacultyInput = {
    attendance_date: Date | string
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    leave_date?: Date | string | null
    status: string
    created_at?: Date | string | null
  }

  export type FacultyAttendanceUncheckedCreateWithoutFacultyInput = {
    faculty_attendance_id?: number
    attendance_date: Date | string
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    leave_date?: Date | string | null
    status: string
    created_at?: Date | string | null
  }

  export type FacultyAttendanceCreateOrConnectWithoutFacultyInput = {
    where: FacultyAttendanceWhereUniqueInput
    create: XOR<FacultyAttendanceCreateWithoutFacultyInput, FacultyAttendanceUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyAttendanceCreateManyFacultyInputEnvelope = {
    data: FacultyAttendanceCreateManyFacultyInput | FacultyAttendanceCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type FacultyLeaveCreateWithoutFacultyInput = {
    leave_date: Date | string
    reason?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type FacultyLeaveUncheckedCreateWithoutFacultyInput = {
    leave_id?: number
    leave_date: Date | string
    reason?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type FacultyLeaveCreateOrConnectWithoutFacultyInput = {
    where: FacultyLeaveWhereUniqueInput
    create: XOR<FacultyLeaveCreateWithoutFacultyInput, FacultyLeaveUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyLeaveCreateManyFacultyInputEnvelope = {
    data: FacultyLeaveCreateManyFacultyInput | FacultyLeaveCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type FacultyNoteCreateWithoutFacultyInput = {
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type FacultyNoteUncheckedCreateWithoutFacultyInput = {
    note_id?: number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type FacultyNoteCreateOrConnectWithoutFacultyInput = {
    where: FacultyNoteWhereUniqueInput
    create: XOR<FacultyNoteCreateWithoutFacultyInput, FacultyNoteUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyNoteCreateManyFacultyInputEnvelope = {
    data: FacultyNoteCreateManyFacultyInput | FacultyNoteCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type FacultySubjectCreateWithoutFacultyInput = {
    Subject: SubjectCreateNestedOneWithoutFaculty_subjectsInput
  }

  export type FacultySubjectUncheckedCreateWithoutFacultyInput = {
    subject_id: number
  }

  export type FacultySubjectCreateOrConnectWithoutFacultyInput = {
    where: FacultySubjectWhereUniqueInput
    create: XOR<FacultySubjectCreateWithoutFacultyInput, FacultySubjectUncheckedCreateWithoutFacultyInput>
  }

  export type FacultySubjectCreateManyFacultyInputEnvelope = {
    data: FacultySubjectCreateManyFacultyInput | FacultySubjectCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutFacultyInput = {
    update: XOR<DepartmentUpdateWithoutFacultyInput, DepartmentUncheckedUpdateWithoutFacultyInput>
    create: XOR<DepartmentCreateWithoutFacultyInput, DepartmentUncheckedCreateWithoutFacultyInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutFacultyInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutFacultyInput, DepartmentUncheckedUpdateWithoutFacultyInput>
  }

  export type DepartmentUpdateWithoutFacultyInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
    students?: StudentUpdateManyWithoutDepartmentNestedInput
    subjects?: SubjectUpdateManyWithoutDepartmentNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutFacultyInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
    students?: StudentUncheckedUpdateManyWithoutDepartmentNestedInput
    subjects?: SubjectUncheckedUpdateManyWithoutDepartmentNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutFacultyInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutFacultyInput, AttendanceUncheckedUpdateWithoutFacultyInput>
    create: XOR<AttendanceCreateWithoutFacultyInput, AttendanceUncheckedCreateWithoutFacultyInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutFacultyInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutFacultyInput, AttendanceUncheckedUpdateWithoutFacultyInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutFacultyInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutFacultyInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    attendance_id?: IntFilter<"Attendance"> | number
    stud_id?: IntNullableFilter<"Attendance"> | number | null
    subject_id?: IntNullableFilter<"Attendance"> | number | null
    faculty_id?: IntNullableFilter<"Attendance"> | number | null
    attendance_date?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: StringFilter<"Attendance"> | string
  }

  export type UserUpsertWithoutFacultyInput = {
    update: XOR<UserUpdateWithoutFacultyInput, UserUncheckedUpdateWithoutFacultyInput>
    create: XOR<UserCreateWithoutFacultyInput, UserUncheckedCreateWithoutFacultyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFacultyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFacultyInput, UserUncheckedUpdateWithoutFacultyInput>
  }

  export type UserUpdateWithoutFacultyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFacultyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FacultyAnnouncementUpsertWithWhereUniqueWithoutFacultyInput = {
    where: FacultyAnnouncementWhereUniqueInput
    update: XOR<FacultyAnnouncementUpdateWithoutFacultyInput, FacultyAnnouncementUncheckedUpdateWithoutFacultyInput>
    create: XOR<FacultyAnnouncementCreateWithoutFacultyInput, FacultyAnnouncementUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyAnnouncementUpdateWithWhereUniqueWithoutFacultyInput = {
    where: FacultyAnnouncementWhereUniqueInput
    data: XOR<FacultyAnnouncementUpdateWithoutFacultyInput, FacultyAnnouncementUncheckedUpdateWithoutFacultyInput>
  }

  export type FacultyAnnouncementUpdateManyWithWhereWithoutFacultyInput = {
    where: FacultyAnnouncementScalarWhereInput
    data: XOR<FacultyAnnouncementUpdateManyMutationInput, FacultyAnnouncementUncheckedUpdateManyWithoutFacultyInput>
  }

  export type FacultyAttendanceUpsertWithWhereUniqueWithoutFacultyInput = {
    where: FacultyAttendanceWhereUniqueInput
    update: XOR<FacultyAttendanceUpdateWithoutFacultyInput, FacultyAttendanceUncheckedUpdateWithoutFacultyInput>
    create: XOR<FacultyAttendanceCreateWithoutFacultyInput, FacultyAttendanceUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyAttendanceUpdateWithWhereUniqueWithoutFacultyInput = {
    where: FacultyAttendanceWhereUniqueInput
    data: XOR<FacultyAttendanceUpdateWithoutFacultyInput, FacultyAttendanceUncheckedUpdateWithoutFacultyInput>
  }

  export type FacultyAttendanceUpdateManyWithWhereWithoutFacultyInput = {
    where: FacultyAttendanceScalarWhereInput
    data: XOR<FacultyAttendanceUpdateManyMutationInput, FacultyAttendanceUncheckedUpdateManyWithoutFacultyInput>
  }

  export type FacultyAttendanceScalarWhereInput = {
    AND?: FacultyAttendanceScalarWhereInput | FacultyAttendanceScalarWhereInput[]
    OR?: FacultyAttendanceScalarWhereInput[]
    NOT?: FacultyAttendanceScalarWhereInput | FacultyAttendanceScalarWhereInput[]
    faculty_attendance_id?: IntFilter<"FacultyAttendance"> | number
    faculty_id?: IntFilter<"FacultyAttendance"> | number
    attendance_date?: DateTimeFilter<"FacultyAttendance"> | Date | string
    check_in_time?: DateTimeNullableFilter<"FacultyAttendance"> | Date | string | null
    check_out_time?: DateTimeNullableFilter<"FacultyAttendance"> | Date | string | null
    leave_date?: DateTimeNullableFilter<"FacultyAttendance"> | Date | string | null
    status?: StringFilter<"FacultyAttendance"> | string
    created_at?: DateTimeNullableFilter<"FacultyAttendance"> | Date | string | null
  }

  export type FacultyLeaveUpsertWithWhereUniqueWithoutFacultyInput = {
    where: FacultyLeaveWhereUniqueInput
    update: XOR<FacultyLeaveUpdateWithoutFacultyInput, FacultyLeaveUncheckedUpdateWithoutFacultyInput>
    create: XOR<FacultyLeaveCreateWithoutFacultyInput, FacultyLeaveUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyLeaveUpdateWithWhereUniqueWithoutFacultyInput = {
    where: FacultyLeaveWhereUniqueInput
    data: XOR<FacultyLeaveUpdateWithoutFacultyInput, FacultyLeaveUncheckedUpdateWithoutFacultyInput>
  }

  export type FacultyLeaveUpdateManyWithWhereWithoutFacultyInput = {
    where: FacultyLeaveScalarWhereInput
    data: XOR<FacultyLeaveUpdateManyMutationInput, FacultyLeaveUncheckedUpdateManyWithoutFacultyInput>
  }

  export type FacultyLeaveScalarWhereInput = {
    AND?: FacultyLeaveScalarWhereInput | FacultyLeaveScalarWhereInput[]
    OR?: FacultyLeaveScalarWhereInput[]
    NOT?: FacultyLeaveScalarWhereInput | FacultyLeaveScalarWhereInput[]
    leave_id?: IntFilter<"FacultyLeave"> | number
    faculty_id?: IntFilter<"FacultyLeave"> | number
    leave_date?: DateTimeFilter<"FacultyLeave"> | Date | string
    reason?: StringNullableFilter<"FacultyLeave"> | string | null
    status?: StringNullableFilter<"FacultyLeave"> | string | null
    created_at?: DateTimeNullableFilter<"FacultyLeave"> | Date | string | null
  }

  export type FacultyNoteUpsertWithWhereUniqueWithoutFacultyInput = {
    where: FacultyNoteWhereUniqueInput
    update: XOR<FacultyNoteUpdateWithoutFacultyInput, FacultyNoteUncheckedUpdateWithoutFacultyInput>
    create: XOR<FacultyNoteCreateWithoutFacultyInput, FacultyNoteUncheckedCreateWithoutFacultyInput>
  }

  export type FacultyNoteUpdateWithWhereUniqueWithoutFacultyInput = {
    where: FacultyNoteWhereUniqueInput
    data: XOR<FacultyNoteUpdateWithoutFacultyInput, FacultyNoteUncheckedUpdateWithoutFacultyInput>
  }

  export type FacultyNoteUpdateManyWithWhereWithoutFacultyInput = {
    where: FacultyNoteScalarWhereInput
    data: XOR<FacultyNoteUpdateManyMutationInput, FacultyNoteUncheckedUpdateManyWithoutFacultyInput>
  }

  export type FacultyNoteScalarWhereInput = {
    AND?: FacultyNoteScalarWhereInput | FacultyNoteScalarWhereInput[]
    OR?: FacultyNoteScalarWhereInput[]
    NOT?: FacultyNoteScalarWhereInput | FacultyNoteScalarWhereInput[]
    note_id?: IntFilter<"FacultyNote"> | number
    faculty_id?: IntFilter<"FacultyNote"> | number
    title?: StringNullableFilter<"FacultyNote"> | string | null
    content?: StringNullableFilter<"FacultyNote"> | string | null
    created_at?: DateTimeNullableFilter<"FacultyNote"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"FacultyNote"> | Date | string | null
  }

  export type FacultySubjectUpsertWithWhereUniqueWithoutFacultyInput = {
    where: FacultySubjectWhereUniqueInput
    update: XOR<FacultySubjectUpdateWithoutFacultyInput, FacultySubjectUncheckedUpdateWithoutFacultyInput>
    create: XOR<FacultySubjectCreateWithoutFacultyInput, FacultySubjectUncheckedCreateWithoutFacultyInput>
  }

  export type FacultySubjectUpdateWithWhereUniqueWithoutFacultyInput = {
    where: FacultySubjectWhereUniqueInput
    data: XOR<FacultySubjectUpdateWithoutFacultyInput, FacultySubjectUncheckedUpdateWithoutFacultyInput>
  }

  export type FacultySubjectUpdateManyWithWhereWithoutFacultyInput = {
    where: FacultySubjectScalarWhereInput
    data: XOR<FacultySubjectUpdateManyMutationInput, FacultySubjectUncheckedUpdateManyWithoutFacultyInput>
  }

  export type FacultySubjectScalarWhereInput = {
    AND?: FacultySubjectScalarWhereInput | FacultySubjectScalarWhereInput[]
    OR?: FacultySubjectScalarWhereInput[]
    NOT?: FacultySubjectScalarWhereInput | FacultySubjectScalarWhereInput[]
    faculty_id?: IntFilter<"FacultySubject"> | number
    subject_id?: IntFilter<"FacultySubject"> | number
  }

  export type DepartmentCreateWithoutStudentsInput = {
    dept_name: string
    faculty?: FacultyCreateNestedManyWithoutDepartmentInput
    subjects?: SubjectCreateNestedManyWithoutDepartmentInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutStudentsInput = {
    dept_id?: number
    dept_name: string
    faculty?: FacultyUncheckedCreateNestedManyWithoutDepartmentInput
    subjects?: SubjectUncheckedCreateNestedManyWithoutDepartmentInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutStudentsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
  }

  export type AttendanceCreateWithoutStudentInput = {
    attendance_date?: Date | string | null
    status: string
    Faculty?: FacultyCreateNestedOneWithoutAttendanceInput
    Subject?: SubjectCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    attendance_id?: number
    subject_id?: number | null
    faculty_id?: number | null
    attendance_date?: Date | string | null
    status: string
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutStudentInput = {
    Subject: SubjectCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutStudentInput = {
    subject_id: number
  }

  export type EnrollmentCreateOrConnectWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentCreateManyStudentInputEnvelope = {
    data: EnrollmentCreateManyStudentInput | EnrollmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutStudentsInput = {
    email: string
    password_hash: string
    user_type: string
    is_active?: boolean | null
    created_at?: Date | string | null
    faculty?: FacultyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentsInput = {
    user_id?: number
    email: string
    password_hash: string
    user_type: string
    is_active?: boolean | null
    created_at?: Date | string | null
    faculty?: FacultyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
  }

  export type DepartmentUpsertWithoutStudentsInput = {
    update: XOR<DepartmentUpdateWithoutStudentsInput, DepartmentUncheckedUpdateWithoutStudentsInput>
    create: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutStudentsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutStudentsInput, DepartmentUncheckedUpdateWithoutStudentsInput>
  }

  export type DepartmentUpdateWithoutStudentsInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
    faculty?: FacultyUpdateManyWithoutDepartmentNestedInput
    subjects?: SubjectUpdateManyWithoutDepartmentNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutStudentsInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
    faculty?: FacultyUncheckedUpdateManyWithoutDepartmentNestedInput
    subjects?: SubjectUncheckedUpdateManyWithoutDepartmentNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    stud_id?: IntFilter<"Enrollment"> | number
    subject_id?: IntFilter<"Enrollment"> | number
  }

  export type UserUpsertWithoutStudentsInput = {
    update: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
    create: XOR<UserCreateWithoutStudentsInput, UserUncheckedCreateWithoutStudentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentsInput, UserUncheckedUpdateWithoutStudentsInput>
  }

  export type UserUpdateWithoutStudentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    faculty?: FacultyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    user_type?: StringFieldUpdateOperationsInput | string
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    faculty?: FacultyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DepartmentCreateWithoutSubjectsInput = {
    dept_name: string
    faculty?: FacultyCreateNestedManyWithoutDepartmentInput
    students?: StudentCreateNestedManyWithoutDepartmentInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutSubjectsInput = {
    dept_id?: number
    dept_name: string
    faculty?: FacultyUncheckedCreateNestedManyWithoutDepartmentInput
    students?: StudentUncheckedCreateNestedManyWithoutDepartmentInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutSubjectsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutSubjectsInput, DepartmentUncheckedCreateWithoutSubjectsInput>
  }

  export type AttendanceCreateWithoutSubjectInput = {
    attendance_date?: Date | string | null
    status: string
    Faculty?: FacultyCreateNestedOneWithoutAttendanceInput
    Student?: StudentCreateNestedOneWithoutAttendanceInput
  }

  export type AttendanceUncheckedCreateWithoutSubjectInput = {
    attendance_id?: number
    stud_id?: number | null
    faculty_id?: number | null
    attendance_date?: Date | string | null
    status: string
  }

  export type AttendanceCreateOrConnectWithoutSubjectInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutSubjectInput, AttendanceUncheckedCreateWithoutSubjectInput>
  }

  export type AttendanceCreateManySubjectInputEnvelope = {
    data: AttendanceCreateManySubjectInput | AttendanceCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutSubjectInput = {
    Student: StudentCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutSubjectInput = {
    stud_id: number
  }

  export type EnrollmentCreateOrConnectWithoutSubjectInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput>
  }

  export type EnrollmentCreateManySubjectInputEnvelope = {
    data: EnrollmentCreateManySubjectInput | EnrollmentCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type FacultyAnnouncementCreateWithoutSubjectInput = {
    target_type: string
    semester?: string | null
    title?: string | null
    message?: string | null
    created_at?: Date | string | null
    Department?: DepartmentCreateNestedOneWithoutAnnouncementsInput
    Faculty: FacultyCreateNestedOneWithoutAnnouncementsInput
  }

  export type FacultyAnnouncementUncheckedCreateWithoutSubjectInput = {
    announcement_id?: number
    faculty_id: number
    target_type: string
    semester?: string | null
    dept_id?: number | null
    title?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type FacultyAnnouncementCreateOrConnectWithoutSubjectInput = {
    where: FacultyAnnouncementWhereUniqueInput
    create: XOR<FacultyAnnouncementCreateWithoutSubjectInput, FacultyAnnouncementUncheckedCreateWithoutSubjectInput>
  }

  export type FacultyAnnouncementCreateManySubjectInputEnvelope = {
    data: FacultyAnnouncementCreateManySubjectInput | FacultyAnnouncementCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type TimetableCreateWithoutSubjectInput = {
    day_of_week?: number | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    room_no?: string | null
  }

  export type TimetableUncheckedCreateWithoutSubjectInput = {
    timetable_id?: number
    day_of_week?: number | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    room_no?: string | null
  }

  export type TimetableCreateOrConnectWithoutSubjectInput = {
    where: TimetableWhereUniqueInput
    create: XOR<TimetableCreateWithoutSubjectInput, TimetableUncheckedCreateWithoutSubjectInput>
  }

  export type TimetableCreateManySubjectInputEnvelope = {
    data: TimetableCreateManySubjectInput | TimetableCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type FacultySubjectCreateWithoutSubjectInput = {
    Faculty: FacultyCreateNestedOneWithoutFaculty_subjectsInput
  }

  export type FacultySubjectUncheckedCreateWithoutSubjectInput = {
    faculty_id: number
  }

  export type FacultySubjectCreateOrConnectWithoutSubjectInput = {
    where: FacultySubjectWhereUniqueInput
    create: XOR<FacultySubjectCreateWithoutSubjectInput, FacultySubjectUncheckedCreateWithoutSubjectInput>
  }

  export type FacultySubjectCreateManySubjectInputEnvelope = {
    data: FacultySubjectCreateManySubjectInput | FacultySubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutSubjectsInput = {
    update: XOR<DepartmentUpdateWithoutSubjectsInput, DepartmentUncheckedUpdateWithoutSubjectsInput>
    create: XOR<DepartmentCreateWithoutSubjectsInput, DepartmentUncheckedCreateWithoutSubjectsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutSubjectsInput, DepartmentUncheckedUpdateWithoutSubjectsInput>
  }

  export type DepartmentUpdateWithoutSubjectsInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
    faculty?: FacultyUpdateManyWithoutDepartmentNestedInput
    students?: StudentUpdateManyWithoutDepartmentNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutSubjectsInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
    faculty?: FacultyUncheckedUpdateManyWithoutDepartmentNestedInput
    students?: StudentUncheckedUpdateManyWithoutDepartmentNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutSubjectInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutSubjectInput, AttendanceUncheckedUpdateWithoutSubjectInput>
    create: XOR<AttendanceCreateWithoutSubjectInput, AttendanceUncheckedCreateWithoutSubjectInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutSubjectInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutSubjectInput, AttendanceUncheckedUpdateWithoutSubjectInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutSubjectInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutSubjectInput>
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutSubjectInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutSubjectInput, EnrollmentUncheckedUpdateWithoutSubjectInput>
    create: XOR<EnrollmentCreateWithoutSubjectInput, EnrollmentUncheckedCreateWithoutSubjectInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutSubjectInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutSubjectInput, EnrollmentUncheckedUpdateWithoutSubjectInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutSubjectInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutSubjectInput>
  }

  export type FacultyAnnouncementUpsertWithWhereUniqueWithoutSubjectInput = {
    where: FacultyAnnouncementWhereUniqueInput
    update: XOR<FacultyAnnouncementUpdateWithoutSubjectInput, FacultyAnnouncementUncheckedUpdateWithoutSubjectInput>
    create: XOR<FacultyAnnouncementCreateWithoutSubjectInput, FacultyAnnouncementUncheckedCreateWithoutSubjectInput>
  }

  export type FacultyAnnouncementUpdateWithWhereUniqueWithoutSubjectInput = {
    where: FacultyAnnouncementWhereUniqueInput
    data: XOR<FacultyAnnouncementUpdateWithoutSubjectInput, FacultyAnnouncementUncheckedUpdateWithoutSubjectInput>
  }

  export type FacultyAnnouncementUpdateManyWithWhereWithoutSubjectInput = {
    where: FacultyAnnouncementScalarWhereInput
    data: XOR<FacultyAnnouncementUpdateManyMutationInput, FacultyAnnouncementUncheckedUpdateManyWithoutSubjectInput>
  }

  export type TimetableUpsertWithWhereUniqueWithoutSubjectInput = {
    where: TimetableWhereUniqueInput
    update: XOR<TimetableUpdateWithoutSubjectInput, TimetableUncheckedUpdateWithoutSubjectInput>
    create: XOR<TimetableCreateWithoutSubjectInput, TimetableUncheckedCreateWithoutSubjectInput>
  }

  export type TimetableUpdateWithWhereUniqueWithoutSubjectInput = {
    where: TimetableWhereUniqueInput
    data: XOR<TimetableUpdateWithoutSubjectInput, TimetableUncheckedUpdateWithoutSubjectInput>
  }

  export type TimetableUpdateManyWithWhereWithoutSubjectInput = {
    where: TimetableScalarWhereInput
    data: XOR<TimetableUpdateManyMutationInput, TimetableUncheckedUpdateManyWithoutSubjectInput>
  }

  export type TimetableScalarWhereInput = {
    AND?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
    OR?: TimetableScalarWhereInput[]
    NOT?: TimetableScalarWhereInput | TimetableScalarWhereInput[]
    timetable_id?: IntFilter<"Timetable"> | number
    subject_id?: IntNullableFilter<"Timetable"> | number | null
    day_of_week?: IntNullableFilter<"Timetable"> | number | null
    start_time?: DateTimeNullableFilter<"Timetable"> | Date | string | null
    end_time?: DateTimeNullableFilter<"Timetable"> | Date | string | null
    room_no?: StringNullableFilter<"Timetable"> | string | null
  }

  export type FacultySubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: FacultySubjectWhereUniqueInput
    update: XOR<FacultySubjectUpdateWithoutSubjectInput, FacultySubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<FacultySubjectCreateWithoutSubjectInput, FacultySubjectUncheckedCreateWithoutSubjectInput>
  }

  export type FacultySubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: FacultySubjectWhereUniqueInput
    data: XOR<FacultySubjectUpdateWithoutSubjectInput, FacultySubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type FacultySubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: FacultySubjectScalarWhereInput
    data: XOR<FacultySubjectUpdateManyMutationInput, FacultySubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type FacultyCreateWithoutFaculty_subjectsInput = {
    faculty_name: string
    email?: string | null
    Department?: DepartmentCreateNestedOneWithoutFacultyInput
    attendance?: AttendanceCreateNestedManyWithoutFacultyInput
    User?: UserCreateNestedOneWithoutFacultyInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUncheckedCreateWithoutFaculty_subjectsInput = {
    faculty_id?: number
    user_id?: number | null
    faculty_name: string
    email?: string | null
    dept_id?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutFacultyInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceUncheckedCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveUncheckedCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyCreateOrConnectWithoutFaculty_subjectsInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutFaculty_subjectsInput, FacultyUncheckedCreateWithoutFaculty_subjectsInput>
  }

  export type SubjectCreateWithoutFaculty_subjectsInput = {
    subject_code: string
    subject_name: string
    semester?: string | null
    credits?: number | null
    Department?: DepartmentCreateNestedOneWithoutSubjectsInput
    attendance?: AttendanceCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentCreateNestedManyWithoutSubjectInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutSubjectInput
    timetable?: TimetableCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutFaculty_subjectsInput = {
    subject_id?: number
    subject_code: string
    subject_name: string
    semester?: string | null
    dept_id?: number | null
    credits?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSubjectInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutSubjectInput
    timetable?: TimetableUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutFaculty_subjectsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutFaculty_subjectsInput, SubjectUncheckedCreateWithoutFaculty_subjectsInput>
  }

  export type FacultyUpsertWithoutFaculty_subjectsInput = {
    update: XOR<FacultyUpdateWithoutFaculty_subjectsInput, FacultyUncheckedUpdateWithoutFaculty_subjectsInput>
    create: XOR<FacultyCreateWithoutFaculty_subjectsInput, FacultyUncheckedCreateWithoutFaculty_subjectsInput>
    where?: FacultyWhereInput
  }

  export type FacultyUpdateToOneWithWhereWithoutFaculty_subjectsInput = {
    where?: FacultyWhereInput
    data: XOR<FacultyUpdateWithoutFaculty_subjectsInput, FacultyUncheckedUpdateWithoutFaculty_subjectsInput>
  }

  export type FacultyUpdateWithoutFaculty_subjectsInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneWithoutFacultyNestedInput
    attendance?: AttendanceUpdateManyWithoutFacultyNestedInput
    User?: UserUpdateOneWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateWithoutFaculty_subjectsInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUncheckedUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type SubjectUpsertWithoutFaculty_subjectsInput = {
    update: XOR<SubjectUpdateWithoutFaculty_subjectsInput, SubjectUncheckedUpdateWithoutFaculty_subjectsInput>
    create: XOR<SubjectCreateWithoutFaculty_subjectsInput, SubjectUncheckedCreateWithoutFaculty_subjectsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutFaculty_subjectsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutFaculty_subjectsInput, SubjectUncheckedUpdateWithoutFaculty_subjectsInput>
  }

  export type SubjectUpdateWithoutFaculty_subjectsInput = {
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: DepartmentUpdateOneWithoutSubjectsNestedInput
    attendance?: AttendanceUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUpdateManyWithoutSubjectNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutSubjectNestedInput
    timetable?: TimetableUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutFaculty_subjectsInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutSubjectNestedInput
    timetable?: TimetableUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type StudentCreateWithoutEnrollmentsInput = {
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
    Department?: DepartmentCreateNestedOneWithoutStudentsInput
    attendance?: AttendanceCreateNestedManyWithoutStudentInput
    User?: UserCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutEnrollmentsInput = {
    stud_id?: number
    user_id?: number | null
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
    dept_id?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutEnrollmentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
  }

  export type SubjectCreateWithoutEnrollmentsInput = {
    subject_code: string
    subject_name: string
    semester?: string | null
    credits?: number | null
    Department?: DepartmentCreateNestedOneWithoutSubjectsInput
    attendance?: AttendanceCreateNestedManyWithoutSubjectInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutSubjectInput
    timetable?: TimetableCreateNestedManyWithoutSubjectInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutEnrollmentsInput = {
    subject_id?: number
    subject_code: string
    subject_name: string
    semester?: string | null
    dept_id?: number | null
    credits?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutSubjectInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutSubjectInput
    timetable?: TimetableUncheckedCreateNestedManyWithoutSubjectInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutEnrollmentsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutEnrollmentsInput, SubjectUncheckedCreateWithoutEnrollmentsInput>
  }

  export type StudentUpsertWithoutEnrollmentsInput = {
    update: XOR<StudentUpdateWithoutEnrollmentsInput, StudentUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<StudentCreateWithoutEnrollmentsInput, StudentUncheckedCreateWithoutEnrollmentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutEnrollmentsInput, StudentUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type StudentUpdateWithoutEnrollmentsInput = {
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneWithoutStudentsNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    User?: UserUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutEnrollmentsInput = {
    stud_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubjectUpsertWithoutEnrollmentsInput = {
    update: XOR<SubjectUpdateWithoutEnrollmentsInput, SubjectUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<SubjectCreateWithoutEnrollmentsInput, SubjectUncheckedCreateWithoutEnrollmentsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutEnrollmentsInput, SubjectUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type SubjectUpdateWithoutEnrollmentsInput = {
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: DepartmentUpdateOneWithoutSubjectsNestedInput
    attendance?: AttendanceUpdateManyWithoutSubjectNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutSubjectNestedInput
    timetable?: TimetableUpdateManyWithoutSubjectNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutEnrollmentsInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutSubjectNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutSubjectNestedInput
    timetable?: TimetableUncheckedUpdateManyWithoutSubjectNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateWithoutTimetableInput = {
    subject_code: string
    subject_name: string
    semester?: string | null
    credits?: number | null
    Department?: DepartmentCreateNestedOneWithoutSubjectsInput
    attendance?: AttendanceCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentCreateNestedManyWithoutSubjectInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutSubjectInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTimetableInput = {
    subject_id?: number
    subject_code: string
    subject_name: string
    semester?: string | null
    dept_id?: number | null
    credits?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSubjectInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutSubjectInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTimetableInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTimetableInput, SubjectUncheckedCreateWithoutTimetableInput>
  }

  export type SubjectUpsertWithoutTimetableInput = {
    update: XOR<SubjectUpdateWithoutTimetableInput, SubjectUncheckedUpdateWithoutTimetableInput>
    create: XOR<SubjectCreateWithoutTimetableInput, SubjectUncheckedCreateWithoutTimetableInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTimetableInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTimetableInput, SubjectUncheckedUpdateWithoutTimetableInput>
  }

  export type SubjectUpdateWithoutTimetableInput = {
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: DepartmentUpdateOneWithoutSubjectsNestedInput
    attendance?: AttendanceUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUpdateManyWithoutSubjectNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutSubjectNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTimetableInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutSubjectNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type FacultyCreateWithoutAttendanceInput = {
    faculty_name: string
    email?: string | null
    Department?: DepartmentCreateNestedOneWithoutFacultyInput
    User?: UserCreateNestedOneWithoutFacultyInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUncheckedCreateWithoutAttendanceInput = {
    faculty_id?: number
    user_id?: number | null
    faculty_name: string
    email?: string | null
    dept_id?: number | null
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceUncheckedCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveUncheckedCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteUncheckedCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyCreateOrConnectWithoutAttendanceInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutAttendanceInput, FacultyUncheckedCreateWithoutAttendanceInput>
  }

  export type StudentCreateWithoutAttendanceInput = {
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
    Department?: DepartmentCreateNestedOneWithoutStudentsInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    User?: UserCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutAttendanceInput = {
    stud_id?: number
    user_id?: number | null
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
    dept_id?: number | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAttendanceInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
  }

  export type SubjectCreateWithoutAttendanceInput = {
    subject_code: string
    subject_name: string
    semester?: string | null
    credits?: number | null
    Department?: DepartmentCreateNestedOneWithoutSubjectsInput
    enrollments?: EnrollmentCreateNestedManyWithoutSubjectInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutSubjectInput
    timetable?: TimetableCreateNestedManyWithoutSubjectInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutAttendanceInput = {
    subject_id?: number
    subject_code: string
    subject_name: string
    semester?: string | null
    dept_id?: number | null
    credits?: number | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSubjectInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutSubjectInput
    timetable?: TimetableUncheckedCreateNestedManyWithoutSubjectInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutAttendanceInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutAttendanceInput, SubjectUncheckedCreateWithoutAttendanceInput>
  }

  export type FacultyUpsertWithoutAttendanceInput = {
    update: XOR<FacultyUpdateWithoutAttendanceInput, FacultyUncheckedUpdateWithoutAttendanceInput>
    create: XOR<FacultyCreateWithoutAttendanceInput, FacultyUncheckedCreateWithoutAttendanceInput>
    where?: FacultyWhereInput
  }

  export type FacultyUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: FacultyWhereInput
    data: XOR<FacultyUpdateWithoutAttendanceInput, FacultyUncheckedUpdateWithoutAttendanceInput>
  }

  export type FacultyUpdateWithoutAttendanceInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneWithoutFacultyNestedInput
    User?: UserUpdateOneWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateWithoutAttendanceInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUncheckedUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUncheckedUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type StudentUpsertWithoutAttendanceInput = {
    update: XOR<StudentUpdateWithoutAttendanceInput, StudentUncheckedUpdateWithoutAttendanceInput>
    create: XOR<StudentCreateWithoutAttendanceInput, StudentUncheckedCreateWithoutAttendanceInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttendanceInput, StudentUncheckedUpdateWithoutAttendanceInput>
  }

  export type StudentUpdateWithoutAttendanceInput = {
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneWithoutStudentsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    User?: UserUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttendanceInput = {
    stud_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubjectUpsertWithoutAttendanceInput = {
    update: XOR<SubjectUpdateWithoutAttendanceInput, SubjectUncheckedUpdateWithoutAttendanceInput>
    create: XOR<SubjectCreateWithoutAttendanceInput, SubjectUncheckedCreateWithoutAttendanceInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutAttendanceInput, SubjectUncheckedUpdateWithoutAttendanceInput>
  }

  export type SubjectUpdateWithoutAttendanceInput = {
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: DepartmentUpdateOneWithoutSubjectsNestedInput
    enrollments?: EnrollmentUpdateManyWithoutSubjectNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutSubjectNestedInput
    timetable?: TimetableUpdateManyWithoutSubjectNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutAttendanceInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutSubjectNestedInput
    timetable?: TimetableUncheckedUpdateManyWithoutSubjectNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type FacultyCreateWithoutFacultyAttendanceInput = {
    faculty_name: string
    email?: string | null
    Department?: DepartmentCreateNestedOneWithoutFacultyInput
    attendance?: AttendanceCreateNestedManyWithoutFacultyInput
    User?: UserCreateNestedOneWithoutFacultyInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUncheckedCreateWithoutFacultyAttendanceInput = {
    faculty_id?: number
    user_id?: number | null
    faculty_name: string
    email?: string | null
    dept_id?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutFacultyInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveUncheckedCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteUncheckedCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyCreateOrConnectWithoutFacultyAttendanceInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutFacultyAttendanceInput, FacultyUncheckedCreateWithoutFacultyAttendanceInput>
  }

  export type FacultyUpsertWithoutFacultyAttendanceInput = {
    update: XOR<FacultyUpdateWithoutFacultyAttendanceInput, FacultyUncheckedUpdateWithoutFacultyAttendanceInput>
    create: XOR<FacultyCreateWithoutFacultyAttendanceInput, FacultyUncheckedCreateWithoutFacultyAttendanceInput>
    where?: FacultyWhereInput
  }

  export type FacultyUpdateToOneWithWhereWithoutFacultyAttendanceInput = {
    where?: FacultyWhereInput
    data: XOR<FacultyUpdateWithoutFacultyAttendanceInput, FacultyUncheckedUpdateWithoutFacultyAttendanceInput>
  }

  export type FacultyUpdateWithoutFacultyAttendanceInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneWithoutFacultyNestedInput
    attendance?: AttendanceUpdateManyWithoutFacultyNestedInput
    User?: UserUpdateOneWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateWithoutFacultyAttendanceInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUncheckedUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUncheckedUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyCreateWithoutLeavesInput = {
    faculty_name: string
    email?: string | null
    Department?: DepartmentCreateNestedOneWithoutFacultyInput
    attendance?: AttendanceCreateNestedManyWithoutFacultyInput
    User?: UserCreateNestedOneWithoutFacultyInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUncheckedCreateWithoutLeavesInput = {
    faculty_id?: number
    user_id?: number | null
    faculty_name: string
    email?: string | null
    dept_id?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutFacultyInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceUncheckedCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteUncheckedCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyCreateOrConnectWithoutLeavesInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutLeavesInput, FacultyUncheckedCreateWithoutLeavesInput>
  }

  export type FacultyUpsertWithoutLeavesInput = {
    update: XOR<FacultyUpdateWithoutLeavesInput, FacultyUncheckedUpdateWithoutLeavesInput>
    create: XOR<FacultyCreateWithoutLeavesInput, FacultyUncheckedCreateWithoutLeavesInput>
    where?: FacultyWhereInput
  }

  export type FacultyUpdateToOneWithWhereWithoutLeavesInput = {
    where?: FacultyWhereInput
    data: XOR<FacultyUpdateWithoutLeavesInput, FacultyUncheckedUpdateWithoutLeavesInput>
  }

  export type FacultyUpdateWithoutLeavesInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneWithoutFacultyNestedInput
    attendance?: AttendanceUpdateManyWithoutFacultyNestedInput
    User?: UserUpdateOneWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateWithoutLeavesInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUncheckedUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyCreateWithoutNotesInput = {
    faculty_name: string
    email?: string | null
    Department?: DepartmentCreateNestedOneWithoutFacultyInput
    attendance?: AttendanceCreateNestedManyWithoutFacultyInput
    User?: UserCreateNestedOneWithoutFacultyInput
    announcements?: FacultyAnnouncementCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUncheckedCreateWithoutNotesInput = {
    faculty_id?: number
    user_id?: number | null
    faculty_name: string
    email?: string | null
    dept_id?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutFacultyInput
    announcements?: FacultyAnnouncementUncheckedCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceUncheckedCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveUncheckedCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyCreateOrConnectWithoutNotesInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutNotesInput, FacultyUncheckedCreateWithoutNotesInput>
  }

  export type FacultyUpsertWithoutNotesInput = {
    update: XOR<FacultyUpdateWithoutNotesInput, FacultyUncheckedUpdateWithoutNotesInput>
    create: XOR<FacultyCreateWithoutNotesInput, FacultyUncheckedCreateWithoutNotesInput>
    where?: FacultyWhereInput
  }

  export type FacultyUpdateToOneWithWhereWithoutNotesInput = {
    where?: FacultyWhereInput
    data: XOR<FacultyUpdateWithoutNotesInput, FacultyUncheckedUpdateWithoutNotesInput>
  }

  export type FacultyUpdateWithoutNotesInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneWithoutFacultyNestedInput
    attendance?: AttendanceUpdateManyWithoutFacultyNestedInput
    User?: UserUpdateOneWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateWithoutNotesInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUncheckedUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type DepartmentCreateWithoutAnnouncementsInput = {
    dept_name: string
    faculty?: FacultyCreateNestedManyWithoutDepartmentInput
    students?: StudentCreateNestedManyWithoutDepartmentInput
    subjects?: SubjectCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutAnnouncementsInput = {
    dept_id?: number
    dept_name: string
    faculty?: FacultyUncheckedCreateNestedManyWithoutDepartmentInput
    students?: StudentUncheckedCreateNestedManyWithoutDepartmentInput
    subjects?: SubjectUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutAnnouncementsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutAnnouncementsInput, DepartmentUncheckedCreateWithoutAnnouncementsInput>
  }

  export type FacultyCreateWithoutAnnouncementsInput = {
    faculty_name: string
    email?: string | null
    Department?: DepartmentCreateNestedOneWithoutFacultyInput
    attendance?: AttendanceCreateNestedManyWithoutFacultyInput
    User?: UserCreateNestedOneWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutFacultyInput
  }

  export type FacultyUncheckedCreateWithoutAnnouncementsInput = {
    faculty_id?: number
    user_id?: number | null
    faculty_name: string
    email?: string | null
    dept_id?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutFacultyInput
    facultyAttendance?: FacultyAttendanceUncheckedCreateNestedManyWithoutFacultyInput
    leaves?: FacultyLeaveUncheckedCreateNestedManyWithoutFacultyInput
    notes?: FacultyNoteUncheckedCreateNestedManyWithoutFacultyInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type FacultyCreateOrConnectWithoutAnnouncementsInput = {
    where: FacultyWhereUniqueInput
    create: XOR<FacultyCreateWithoutAnnouncementsInput, FacultyUncheckedCreateWithoutAnnouncementsInput>
  }

  export type SubjectCreateWithoutAnnouncementsInput = {
    subject_code: string
    subject_name: string
    semester?: string | null
    credits?: number | null
    Department?: DepartmentCreateNestedOneWithoutSubjectsInput
    attendance?: AttendanceCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentCreateNestedManyWithoutSubjectInput
    timetable?: TimetableCreateNestedManyWithoutSubjectInput
    faculty_subjects?: FacultySubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutAnnouncementsInput = {
    subject_id?: number
    subject_code: string
    subject_name: string
    semester?: string | null
    dept_id?: number | null
    credits?: number | null
    attendance?: AttendanceUncheckedCreateNestedManyWithoutSubjectInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutSubjectInput
    timetable?: TimetableUncheckedCreateNestedManyWithoutSubjectInput
    faculty_subjects?: FacultySubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutAnnouncementsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutAnnouncementsInput, SubjectUncheckedCreateWithoutAnnouncementsInput>
  }

  export type DepartmentUpsertWithoutAnnouncementsInput = {
    update: XOR<DepartmentUpdateWithoutAnnouncementsInput, DepartmentUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<DepartmentCreateWithoutAnnouncementsInput, DepartmentUncheckedCreateWithoutAnnouncementsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutAnnouncementsInput, DepartmentUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type DepartmentUpdateWithoutAnnouncementsInput = {
    dept_name?: StringFieldUpdateOperationsInput | string
    faculty?: FacultyUpdateManyWithoutDepartmentNestedInput
    students?: StudentUpdateManyWithoutDepartmentNestedInput
    subjects?: SubjectUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutAnnouncementsInput = {
    dept_id?: IntFieldUpdateOperationsInput | number
    dept_name?: StringFieldUpdateOperationsInput | string
    faculty?: FacultyUncheckedUpdateManyWithoutDepartmentNestedInput
    students?: StudentUncheckedUpdateManyWithoutDepartmentNestedInput
    subjects?: SubjectUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type FacultyUpsertWithoutAnnouncementsInput = {
    update: XOR<FacultyUpdateWithoutAnnouncementsInput, FacultyUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<FacultyCreateWithoutAnnouncementsInput, FacultyUncheckedCreateWithoutAnnouncementsInput>
    where?: FacultyWhereInput
  }

  export type FacultyUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: FacultyWhereInput
    data: XOR<FacultyUpdateWithoutAnnouncementsInput, FacultyUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type FacultyUpdateWithoutAnnouncementsInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneWithoutFacultyNestedInput
    attendance?: AttendanceUpdateManyWithoutFacultyNestedInput
    User?: UserUpdateOneWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateWithoutAnnouncementsInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUncheckedUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUncheckedUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type SubjectUpsertWithoutAnnouncementsInput = {
    update: XOR<SubjectUpdateWithoutAnnouncementsInput, SubjectUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<SubjectCreateWithoutAnnouncementsInput, SubjectUncheckedCreateWithoutAnnouncementsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutAnnouncementsInput, SubjectUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type SubjectUpdateWithoutAnnouncementsInput = {
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    Department?: DepartmentUpdateOneWithoutSubjectsNestedInput
    attendance?: AttendanceUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUpdateManyWithoutSubjectNestedInput
    timetable?: TimetableUpdateManyWithoutSubjectNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutAnnouncementsInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput
    timetable?: TimetableUncheckedUpdateManyWithoutSubjectNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type FacultyCreateManyUserInput = {
    faculty_id?: number
    faculty_name: string
    email?: string | null
    dept_id?: number | null
  }

  export type StudentCreateManyUserInput = {
    stud_id?: number
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
    dept_id?: number | null
  }

  export type FacultyUpdateWithoutUserInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneWithoutFacultyNestedInput
    attendance?: AttendanceUpdateManyWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateWithoutUserInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUncheckedUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUncheckedUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateManyWithoutUserInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentUpdateWithoutUserInput = {
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    Department?: DepartmentUpdateOneWithoutStudentsNestedInput
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    stud_id?: IntFieldUpdateOperationsInput | number
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutUserInput = {
    stud_id?: IntFieldUpdateOperationsInput | number
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FacultyCreateManyDepartmentInput = {
    faculty_id?: number
    user_id?: number | null
    faculty_name: string
    email?: string | null
  }

  export type StudentCreateManyDepartmentInput = {
    stud_id?: number
    user_id?: number | null
    roll_no: string
    stud_name: string
    email?: string | null
    semester?: string | null
  }

  export type SubjectCreateManyDepartmentInput = {
    subject_id?: number
    subject_code: string
    subject_name: string
    semester?: string | null
    credits?: number | null
  }

  export type FacultyAnnouncementCreateManyDepartmentInput = {
    announcement_id?: number
    faculty_id: number
    target_type: string
    semester?: string | null
    subject_id?: number | null
    title?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type FacultyUpdateWithoutDepartmentInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: AttendanceUpdateManyWithoutFacultyNestedInput
    User?: UserUpdateOneWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateWithoutDepartmentInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: AttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutFacultyNestedInput
    facultyAttendance?: FacultyAttendanceUncheckedUpdateManyWithoutFacultyNestedInput
    leaves?: FacultyLeaveUncheckedUpdateManyWithoutFacultyNestedInput
    notes?: FacultyNoteUncheckedUpdateManyWithoutFacultyNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type FacultyUncheckedUpdateManyWithoutDepartmentInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUpdateWithoutDepartmentInput = {
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: AttendanceUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    User?: UserUpdateOneWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutDepartmentInput = {
    stud_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    attendance?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutDepartmentInput = {
    stud_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    roll_no?: StringFieldUpdateOperationsInput | string
    stud_name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    semester?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectUpdateWithoutDepartmentInput = {
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUpdateManyWithoutSubjectNestedInput
    announcements?: FacultyAnnouncementUpdateManyWithoutSubjectNestedInput
    timetable?: TimetableUpdateManyWithoutSubjectNestedInput
    faculty_subjects?: FacultySubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutDepartmentInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
    attendance?: AttendanceUncheckedUpdateManyWithoutSubjectNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutSubjectNestedInput
    announcements?: FacultyAnnouncementUncheckedUpdateManyWithoutSubjectNestedInput
    timetable?: TimetableUncheckedUpdateManyWithoutSubjectNestedInput
    faculty_subjects?: FacultySubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateManyWithoutDepartmentInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
    subject_code?: StringFieldUpdateOperationsInput | string
    subject_name?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FacultyAnnouncementUpdateWithoutDepartmentInput = {
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Faculty?: FacultyUpdateOneRequiredWithoutAnnouncementsNestedInput
    Subject?: SubjectUpdateOneWithoutAnnouncementsNestedInput
  }

  export type FacultyAnnouncementUncheckedUpdateWithoutDepartmentInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    faculty_id?: IntFieldUpdateOperationsInput | number
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyAnnouncementUncheckedUpdateManyWithoutDepartmentInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    faculty_id?: IntFieldUpdateOperationsInput | number
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceCreateManyFacultyInput = {
    attendance_id?: number
    stud_id?: number | null
    subject_id?: number | null
    attendance_date?: Date | string | null
    status: string
  }

  export type FacultyAnnouncementCreateManyFacultyInput = {
    announcement_id?: number
    target_type: string
    semester?: string | null
    subject_id?: number | null
    dept_id?: number | null
    title?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type FacultyAttendanceCreateManyFacultyInput = {
    faculty_attendance_id?: number
    attendance_date: Date | string
    check_in_time?: Date | string | null
    check_out_time?: Date | string | null
    leave_date?: Date | string | null
    status: string
    created_at?: Date | string | null
  }

  export type FacultyLeaveCreateManyFacultyInput = {
    leave_id?: number
    leave_date: Date | string
    reason?: string | null
    status?: string | null
    created_at?: Date | string | null
  }

  export type FacultyNoteCreateManyFacultyInput = {
    note_id?: number
    title?: string | null
    content?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type FacultySubjectCreateManyFacultyInput = {
    subject_id: number
  }

  export type AttendanceUpdateWithoutFacultyInput = {
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    Student?: StudentUpdateOneWithoutAttendanceNestedInput
    Subject?: SubjectUpdateOneWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutFacultyInput = {
    attendance_id?: IntFieldUpdateOperationsInput | number
    stud_id?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutFacultyInput = {
    attendance_id?: IntFieldUpdateOperationsInput | number
    stud_id?: NullableIntFieldUpdateOperationsInput | number | null
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type FacultyAnnouncementUpdateWithoutFacultyInput = {
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Department?: DepartmentUpdateOneWithoutAnnouncementsNestedInput
    Subject?: SubjectUpdateOneWithoutAnnouncementsNestedInput
  }

  export type FacultyAnnouncementUncheckedUpdateWithoutFacultyInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyAnnouncementUncheckedUpdateManyWithoutFacultyInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyAttendanceUpdateWithoutFacultyInput = {
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leave_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyAttendanceUncheckedUpdateWithoutFacultyInput = {
    faculty_attendance_id?: IntFieldUpdateOperationsInput | number
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leave_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyAttendanceUncheckedUpdateManyWithoutFacultyInput = {
    faculty_attendance_id?: IntFieldUpdateOperationsInput | number
    attendance_date?: DateTimeFieldUpdateOperationsInput | Date | string
    check_in_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    check_out_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leave_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyLeaveUpdateWithoutFacultyInput = {
    leave_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyLeaveUncheckedUpdateWithoutFacultyInput = {
    leave_id?: IntFieldUpdateOperationsInput | number
    leave_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyLeaveUncheckedUpdateManyWithoutFacultyInput = {
    leave_id?: IntFieldUpdateOperationsInput | number
    leave_date?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyNoteUpdateWithoutFacultyInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyNoteUncheckedUpdateWithoutFacultyInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyNoteUncheckedUpdateManyWithoutFacultyInput = {
    note_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultySubjectUpdateWithoutFacultyInput = {
    Subject?: SubjectUpdateOneRequiredWithoutFaculty_subjectsNestedInput
  }

  export type FacultySubjectUncheckedUpdateWithoutFacultyInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type FacultySubjectUncheckedUpdateManyWithoutFacultyInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceCreateManyStudentInput = {
    attendance_id?: number
    subject_id?: number | null
    faculty_id?: number | null
    attendance_date?: Date | string | null
    status: string
  }

  export type EnrollmentCreateManyStudentInput = {
    subject_id: number
  }

  export type AttendanceUpdateWithoutStudentInput = {
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    Faculty?: FacultyUpdateOneWithoutAttendanceNestedInput
    Subject?: SubjectUpdateOneWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    attendance_id?: IntFieldUpdateOperationsInput | number
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    attendance_id?: IntFieldUpdateOperationsInput | number
    subject_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUpdateWithoutStudentInput = {
    Subject?: SubjectUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutStudentInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentInput = {
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceCreateManySubjectInput = {
    attendance_id?: number
    stud_id?: number | null
    faculty_id?: number | null
    attendance_date?: Date | string | null
    status: string
  }

  export type EnrollmentCreateManySubjectInput = {
    stud_id: number
  }

  export type FacultyAnnouncementCreateManySubjectInput = {
    announcement_id?: number
    faculty_id: number
    target_type: string
    semester?: string | null
    dept_id?: number | null
    title?: string | null
    message?: string | null
    created_at?: Date | string | null
  }

  export type TimetableCreateManySubjectInput = {
    timetable_id?: number
    day_of_week?: number | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    room_no?: string | null
  }

  export type FacultySubjectCreateManySubjectInput = {
    faculty_id: number
  }

  export type AttendanceUpdateWithoutSubjectInput = {
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    Faculty?: FacultyUpdateOneWithoutAttendanceNestedInput
    Student?: StudentUpdateOneWithoutAttendanceNestedInput
  }

  export type AttendanceUncheckedUpdateWithoutSubjectInput = {
    attendance_id?: IntFieldUpdateOperationsInput | number
    stud_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutSubjectInput = {
    attendance_id?: IntFieldUpdateOperationsInput | number
    stud_id?: NullableIntFieldUpdateOperationsInput | number | null
    faculty_id?: NullableIntFieldUpdateOperationsInput | number | null
    attendance_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EnrollmentUpdateWithoutSubjectInput = {
    Student?: StudentUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutSubjectInput = {
    stud_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentUncheckedUpdateManyWithoutSubjectInput = {
    stud_id?: IntFieldUpdateOperationsInput | number
  }

  export type FacultyAnnouncementUpdateWithoutSubjectInput = {
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Department?: DepartmentUpdateOneWithoutAnnouncementsNestedInput
    Faculty?: FacultyUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type FacultyAnnouncementUncheckedUpdateWithoutSubjectInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    faculty_id?: IntFieldUpdateOperationsInput | number
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FacultyAnnouncementUncheckedUpdateManyWithoutSubjectInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    faculty_id?: IntFieldUpdateOperationsInput | number
    target_type?: StringFieldUpdateOperationsInput | string
    semester?: NullableStringFieldUpdateOperationsInput | string | null
    dept_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TimetableUpdateWithoutSubjectInput = {
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimetableUncheckedUpdateWithoutSubjectInput = {
    timetable_id?: IntFieldUpdateOperationsInput | number
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TimetableUncheckedUpdateManyWithoutSubjectInput = {
    timetable_id?: IntFieldUpdateOperationsInput | number
    day_of_week?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room_no?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FacultySubjectUpdateWithoutSubjectInput = {
    Faculty?: FacultyUpdateOneRequiredWithoutFaculty_subjectsNestedInput
  }

  export type FacultySubjectUncheckedUpdateWithoutSubjectInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
  }

  export type FacultySubjectUncheckedUpdateManyWithoutSubjectInput = {
    faculty_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentCountOutputTypeDefaultArgs instead
     */
    export type DepartmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacultyCountOutputTypeDefaultArgs instead
     */
    export type FacultyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacultyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentCountOutputTypeDefaultArgs instead
     */
    export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubjectCountOutputTypeDefaultArgs instead
     */
    export type SubjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentDefaultArgs instead
     */
    export type DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacultyDefaultArgs instead
     */
    export type FacultyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacultyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentDefaultArgs instead
     */
    export type StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubjectDefaultArgs instead
     */
    export type SubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacultySubjectDefaultArgs instead
     */
    export type FacultySubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacultySubjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnrollmentDefaultArgs instead
     */
    export type EnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnrollmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TimetableDefaultArgs instead
     */
    export type TimetableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TimetableDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HolidayDefaultArgs instead
     */
    export type HolidayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HolidayDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceDefaultArgs instead
     */
    export type AttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacultyAttendanceDefaultArgs instead
     */
    export type FacultyAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacultyAttendanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacultyLeaveDefaultArgs instead
     */
    export type FacultyLeaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacultyLeaveDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacultyNoteDefaultArgs instead
     */
    export type FacultyNoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacultyNoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FacultyAnnouncementDefaultArgs instead
     */
    export type FacultyAnnouncementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FacultyAnnouncementDefaultArgs<ExtArgs>

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