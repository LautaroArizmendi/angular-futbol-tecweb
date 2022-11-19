import { Team } from "./team";

export interface Player {
    id: number;
    name: string;
    nationality: string;
    goals: number;
    age: number;
    position: string;
    team: Team;
}