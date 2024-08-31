import { Test, TestingModule } from '@nestjs/testing';
import { WomenService } from '../src/women/women.service';
import { WomenRepository } from '../src/women/women.repository';
import { CreateWomanDto } from '../src/women/dto/create.woman.dto';
import { UpdateWomanDto } from '../src/women/dto/update.woman.dto';
import { Woman } from '../src/women/woman.entity';

describe('WomenService', () => {
  let service: WomenService;
  let repository: jest.Mocked<Partial<WomenRepository>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WomenService,
        {
          provide: WomenRepository,
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<WomenService>(WomenService);
    repository = module.get(WomenRepository);
  });

  describe('define', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });
  });

  describe('create', () => {
    it('should create a new woman', async () => {
      const createWoman: Woman = {
        name: 'Fernanda M',
        portfolioUrl: '',
        id: 3,
        trabalhoModalidade: 'híbrido',
      };
      const createWomanDto: CreateWomanDto = {
        name: 'Fernanda M',
        portfolioUrl: '',
        id: 3,
        trabalhoModalidade: 'híbrido',
      };
      const savedWoman = { id: 3, ...createWoman };

      repository.create.mockReturnValue(savedWoman);
      repository.save.mockResolvedValue(savedWoman);

      const result = await service.create(createWomanDto);
      expect(repository.create).toHaveBeenCalledWith(createWoman);
      expect(repository.save).toHaveBeenCalledWith(savedWoman);
      expect(result).toEqual(savedWoman);
    });
  });

  describe('findAll', () => {
    it('should return an array of women', async () => {
      const women: Woman[] = [
        {
          name: 'Fernanda M',
          portfolioUrl: '',
          id: 3,
          trabalhoModalidade: 'híbrido',
        },
      ];

      repository.find.mockResolvedValue(women);

      const result = await service.findAll();
      expect(repository.find).toHaveBeenCalled();
      expect(result).toEqual(women);
    });
  });

  describe('findOne', () => {
    it('should return a single woman', async () => {
      const woman: Woman = {
        name: 'Fernanda M',
        portfolioUrl: '',
        id: 3,
        trabalhoModalidade: 'híbrido',
      };

      repository.findOne.mockResolvedValue(woman);

      const result = await service.findOne(1);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(result).toEqual(woman);
    });
  });

  describe('update', () => {
    it('should update a woman', async () => {
      const updateWomanDto: UpdateWomanDto = {
        name: 'Fernanda M',
        id: 1,
      };
      const updatedWoman: Woman = {
        id: 1,
        name: 'Fernanda M',
        portfolioUrl: '',
        trabalhoModalidade: 'híbrido',
      };

      repository.update.mockResolvedValue(undefined);
      repository.findOne.mockResolvedValue(updatedWoman);

      const result = await service.update(1, updateWomanDto);
      expect(repository.update).toHaveBeenCalledWith(1, updateWomanDto);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
      expect(result).toEqual(updatedWoman);
    });
  });

  describe('remove', () => {
    it('should delete a woman', async () => {
      repository.delete.mockResolvedValue(undefined);

      await service.remove(1);
      expect(repository.delete).toHaveBeenCalledWith(1);
    });
  });
});
