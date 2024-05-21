import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, lead } from '@prisma/client';

@Injectable()
export class LeadService {
  constructor(private prisma: PrismaService) {}

  async create(createLeadDto: lead) {
    return await this.prisma.lead.create({
      data: createLeadDto,
    });
  }

  async findAll() {
    return await this.prisma.lead.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.lead.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateLeadDto: lead) {
    return await this.prisma.lead.update({
      where: {
        id,
      },
      data: updateLeadDto,
    });  
  }

  async remove(id: number) {
    return await this.prisma.lead.delete({
      where: {
        id,
      },
    });
  }

  //funzione per orendere i leads che gli vengono passati
  async leads(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.leadWhereUniqueInput;
    where?: Prisma.leadWhereInput;
    orderBy?: Prisma.leadOrderByWithRelationInput;
  }): Promise<lead[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.lead.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
