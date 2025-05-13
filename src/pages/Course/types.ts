export type Classification = "all" | "technical" | "business" | "softSkills";
export type Department = "all" | "java" | ".net" | "sap";
export type ParticipantGroups = Array<string>;

export interface Course {
  id: string;
  name: string;
  department: Department;
  classification: Classification;
  participantGroups: ParticipantGroups;
  numberOfParticipants: number;
}

export interface Option {
  label: string;
  value: string;
}
