import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeadService } from './lead.service';
import { lead } from '@prisma/client';

@Controller('lead')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post()
  async create(@Body() createLeadDto: lead) {
    console.log(createLeadDto);
    return this.leadService.create(createLeadDto);
  }

  @Get()
  async findAll() {
    return this.leadService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.leadService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLeadDto: lead) {
    return this.leadService.update(+id, updateLeadDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.leadService.remove(+id);
  }
}
