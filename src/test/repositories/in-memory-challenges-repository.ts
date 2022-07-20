import { ChallengeRepository } from "../../application/repositories/ChallengeRepository";
import { Challenge } from "../../domain/entities/challenge";


export class InMemoryChallengesRepository implements ChallengeRepository {
    public items: Challenge[] = [];

    async findById(id: string): Promise<Challenge | null> {
        const Challenge = this.items.find(Challenge => Challenge.id === id)

        if(!Challenge) {
            return null;
        }

        return Challenge;
    }
}