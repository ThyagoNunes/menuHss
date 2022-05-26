import { PatientsRepository } from "../repositories/patients-repository";

interface DeletePatientUseCaseRequest { 
  id: string, 
}

export class DeletePatientUseCase {
  constructor(
    private patientsRepository: PatientsRepository
  ){}

  async delete({id}: DeletePatientUseCaseRequest) {
    const patientDeleted = await this.patientsRepository.delete({id})

    return patientDeleted
  }
}