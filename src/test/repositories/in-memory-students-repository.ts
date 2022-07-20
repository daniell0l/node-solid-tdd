import { StudentRepository } from "../../application/repositories/StudentRepository";
import { Student } from "../../domain/entities/student";


export class InMemoryStudentsRepository implements StudentRepository {
    public items: Student[] = [];

    async findById(id: string): Promise<Student | null> {
        const student = this.items.find(student => student.id === id)

        if(!student) {
            return null;
        }

        return student;
    }
}