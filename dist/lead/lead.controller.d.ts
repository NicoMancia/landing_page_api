import { LeadService } from './lead.service';
import { lead } from '@prisma/client';
export declare class LeadController {
    private readonly leadService;
    constructor(leadService: LeadService);
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
    findOne(id: string): Promise<{
        nome: string;
        cognome: string;
        email: string;
        id: number;
        regione: string;
    }>;
    update(id: string, updateLeadDto: lead): Promise<{
        nome: string;
        cognome: string;
        email: string;
        id: number;
        regione: string;
    }>;
    remove(id: string): Promise<{
        nome: string;
        cognome: string;
        email: string;
        id: number;
        regione: string;
    }>;
}
