import { Challenge } from "../../domain/entities/challenge";
import { Student } from "../../domain/entities/student";
import { InMemoryChallengesRepository } from "../../test/repositories/in-memory-challenges-repository";
import { InMemoryStudentsRepository } from "../../test/repositories/in-memory-students-repository";
import { CreateChallengeSubmission } from "./create-challenge-submission"

describe('Create challenge submission use case', () => {
    it('should be able to create a new challenge submission', async () => {
        const studentRepository = new InMemoryStudentsRepository()
        const challengeRepository = new InMemoryChallengesRepository()
        const sut = new CreateChallengeSubmission(
            studentRepository,
            challengeRepository,
        )

        const student = Student.create({
            nome: "Daniel",
            email: "Daniel@example.com",
        })

        const challenge = Challenge.create({
            title: "Challenge 01",
            instructionsUrl: "http://example.com"
        })

        studentRepository.items.push(student);
        challengeRepository.items.push(challenge);

        const response = await sut.execute({
            studentId: student.id,
            challengeId: challenge.id,
        })

        expect(response).toBeTruthy()
    });
});