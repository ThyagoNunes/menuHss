import { prisma } from "../../prisma";
import { 
  PatientsRepository, 
  PatientsRepositoryCreateDate, 
  PatientsRepositoryDeleteData, 
  PatientsRepositoryShowData, 
  PatientsRepositoryUpdateData } 
  from "../patients-repository";

export class PrismaPatientsRepository implements PatientsRepository {
  async index() {
    await prisma.patient.findMany({
    })
  }

  async show({id}: PatientsRepositoryShowData) {
    await prisma.patient.findFirst({
      where: {
        id,
      }
    })
  }

  async create({name, request, nameBed} : PatientsRepositoryCreateDate) {
    await prisma.patient.create({
      data: {
        name, 
        request, 
        nameBed,
      }
    })
  }

  async update({id, name, request, nameBed}: PatientsRepositoryUpdateData) {
    await prisma.patient.update({
      where: {
        id,
      },
      data: {
        name, 
        request, 
        nameBed,
      }
    })
  }

  async delete({id}: PatientsRepositoryDeleteData) {
    await prisma.patient.delete({
      where: {
        id,
      }
    })
  }
}