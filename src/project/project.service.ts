import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
    private usersService: UsersService,
  ) {}
  async create(createProjectDto: CreateProjectDto) {
    const user = await this.usersService.findOne(createProjectDto.user);
    const project = new Project();
    project.title = createProjectDto.title;
    project.description = createProjectDto.description;
    project.user = [user];
    return this.projectRepository.save(project);
  }

  findAll() {
    return this.projectRepository.find({
      relations: {
        user: true,
      },
    });
  }

  findOne(id: number) {
    return this.projectRepository.findOneBy({ id });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    // const partialProject: Partial<Project> = {};
    // if (updateProjectDto.title !== undefined) {
    //   partialProject.title = updateProjectDto.title;
    // }
    // if (updateProjectDto.description !== undefined) {
    //   partialProject.description = updateProjectDto.description;
    // }
    // return this.projectRepository.update(id, partialProject);
  }

  remove(id: number) {
    return this.projectRepository.delete(id);
  }
}
