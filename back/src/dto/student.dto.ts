export interface StudentCreateDto{
    id :Number
    email:String
    fullName:String

}

export type StudentUpdateDto= Partial<StudentCreateDto>