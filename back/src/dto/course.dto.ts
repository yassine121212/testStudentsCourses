export interface CourseCreateDto{
    id :Number
    name:string
    availablePlaces :number

}
export type CourseUpdateDto= Partial<CourseCreateDto>