
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  user_id: 'user_id',
  email: 'email',
  password_hash: 'password_hash',
  user_type: 'user_type',
  is_active: 'is_active',
  created_at: 'created_at'
};

exports.Prisma.DepartmentScalarFieldEnum = {
  dept_id: 'dept_id',
  dept_name: 'dept_name'
};

exports.Prisma.FacultyScalarFieldEnum = {
  faculty_id: 'faculty_id',
  user_id: 'user_id',
  faculty_name: 'faculty_name',
  email: 'email',
  dept_id: 'dept_id',
  is_timetable_admin: 'is_timetable_admin'
};

exports.Prisma.StudentScalarFieldEnum = {
  stud_id: 'stud_id',
  user_id: 'user_id',
  roll_no: 'roll_no',
  stud_name: 'stud_name',
  email: 'email',
  semester: 'semester',
  division: 'division',
  dept_id: 'dept_id'
};

exports.Prisma.SubjectScalarFieldEnum = {
  subject_id: 'subject_id',
  subject_code: 'subject_code',
  subject_name: 'subject_name',
  semester: 'semester',
  dept_id: 'dept_id',
  credits: 'credits'
};

exports.Prisma.FacultySubjectScalarFieldEnum = {
  faculty_id: 'faculty_id',
  subject_id: 'subject_id'
};

exports.Prisma.EnrollmentScalarFieldEnum = {
  stud_id: 'stud_id',
  subject_id: 'subject_id'
};

exports.Prisma.ScheduleScalarFieldEnum = {
  timetable_id: 'timetable_id',
  subject_id: 'subject_id',
  day_of_week: 'day_of_week',
  start_time: 'start_time',
  end_time: 'end_time',
  room_no: 'room_no'
};

exports.Prisma.UploadedScheduleScalarFieldEnum = {
  schedule_id: 'schedule_id',
  dept_id: 'dept_id',
  semester: 'semester',
  division: 'division',
  file_url: 'file_url',
  uploaded_by: 'uploaded_by',
  created_at: 'created_at',
  is_active: 'is_active'
};

exports.Prisma.HolidayScalarFieldEnum = {
  holiday_id: 'holiday_id',
  holiday_name: 'holiday_name',
  holiday_date: 'holiday_date',
  year: 'year'
};

exports.Prisma.AttendanceScalarFieldEnum = {
  attendance_id: 'attendance_id',
  stud_id: 'stud_id',
  subject_id: 'subject_id',
  faculty_id: 'faculty_id',
  attendance_date: 'attendance_date',
  status: 'status'
};

exports.Prisma.FacultyAttendanceScalarFieldEnum = {
  faculty_attendance_id: 'faculty_attendance_id',
  faculty_id: 'faculty_id',
  attendance_date: 'attendance_date',
  check_in_time: 'check_in_time',
  check_out_time: 'check_out_time',
  status: 'status',
  created_at: 'created_at'
};

exports.Prisma.FacultyLeaveScalarFieldEnum = {
  leave_id: 'leave_id',
  faculty_id: 'faculty_id',
  leave_date: 'leave_date',
  reason: 'reason',
  status: 'status',
  created_at: 'created_at'
};

exports.Prisma.FacultyNoteScalarFieldEnum = {
  note_id: 'note_id',
  faculty_id: 'faculty_id',
  title: 'title',
  content: 'content',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.FacultyAnnouncementScalarFieldEnum = {
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

exports.Prisma.NotificationScalarFieldEnum = {
  notification_id: 'notification_id',
  user_id: 'user_id',
  title: 'title',
  message: 'message',
  type: 'type',
  is_read: 'is_read',
  created_at: 'created_at'
};

exports.Prisma.Syllabus_completionsScalarFieldEnum = {
  completion_id: 'completion_id',
  subtopic_id: 'subtopic_id',
  faculty_id: 'faculty_id',
  completed_at: 'completed_at'
};

exports.Prisma.Syllabus_packagesScalarFieldEnum = {
  package_id: 'package_id',
  dept_id: 'dept_id',
  semester: 'semester',
  uploaded_by: 'uploaded_by',
  uploaded_at: 'uploaded_at',
  file_url: 'file_url',
  version: 'version',
  is_active: 'is_active',
  notes: 'notes',
  status: 'status',
  error_msg: 'error_msg'
};

exports.Prisma.Syllabus_subtopicsScalarFieldEnum = {
  subtopic_id: 'subtopic_id',
  unit_id: 'unit_id',
  subject_id: 'subject_id',
  subtopic_index: 'subtopic_index',
  title: 'title',
  details: 'details',
  extra: 'extra'
};

exports.Prisma.Syllabus_unitsScalarFieldEnum = {
  unit_id: 'unit_id',
  package_id: 'package_id',
  subject_id: 'subject_id',
  unit_index: 'unit_index',
  title: 'title',
  description: 'description'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  User: 'User',
  Department: 'Department',
  Faculty: 'Faculty',
  Student: 'Student',
  Subject: 'Subject',
  FacultySubject: 'FacultySubject',
  Enrollment: 'Enrollment',
  Schedule: 'Schedule',
  UploadedSchedule: 'UploadedSchedule',
  Holiday: 'Holiday',
  Attendance: 'Attendance',
  FacultyAttendance: 'FacultyAttendance',
  FacultyLeave: 'FacultyLeave',
  FacultyNote: 'FacultyNote',
  FacultyAnnouncement: 'FacultyAnnouncement',
  Notification: 'Notification',
  syllabus_completions: 'syllabus_completions',
  syllabus_packages: 'syllabus_packages',
  syllabus_subtopics: 'syllabus_subtopics',
  syllabus_units: 'syllabus_units'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
