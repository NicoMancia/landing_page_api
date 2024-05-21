import { PrismaService } from 'src/prisma.service';
import { Prisma, lead } from '@prisma/client';
export declare class LeadService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createLeadDto: lead): Promise<{
        nome: string;
        cognome: string;
        email: string;
        id: number;
        regione: string;
    }>;
    findAll(): Promise<{
        nome: string;
        cognome: string;
        email: string;
        id: number;
        regione: string;
    }[]>;
    findOne(id: number): Promise<{
        nome: string;
        cognome: string;
        email: string;
        id: number;
        regione: string;
    }>;
    update(id: number, updateLeadDto: lead): Promise<{
        nome: string;
        cognome: string;
        email: string;
        id: number;
        regione: string;
    }>;
    remove(id: number): Promise<{
        nome: string;
        cognome: string;
        email: string;
        id: number;
        regione: string;
    }>;
    leads(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.leadWhereUniqueInput;
        where?: Prisma.leadWhereInput;
        orderBy?: Prisma.leadOrderByWithRelationInput;
    }): Promise<lead[]>;
}
