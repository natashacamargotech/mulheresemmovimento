import { Test, TestingModule } from '@nestjs/testing';
import { WomenController } from './women.controller';
import { WomenService } from './women.service';
import { CreateWomanDto } from './dto/update.woman.dto';
import { UpdateWomanDto } from './dto/create.woman.dto';
import { Woman } from './woman.entity';

describe('WomenController', () => {
  let controller: WomenController;
  let service: jest.Mocked<Partial<WomenService>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WomenController],
      providers: [
        {
          provide: WomenService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<WomenController>(WomenController);
    service = module.get(WomenService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new woman', async () => {
      const createWomanDto: CreateWomanDto = {
        name: 'Fernanda M',
        portfolioUrl: '',
        id: 3,
        trabalhoModalidade: 'híbrido',
      };
      const createdWoman: Woman = { id: 1, ...createWomanDto };

      service.create.mockResolvedValue(createdWoman);

      const result = await controller.create(createWomanDto);
      expect(service.create).toHaveBeenCalledWith(createWomanDto);
      expect(result).toEqual(createdWoman);
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
          linkedInProfile: '',
        },
      ];

      service.findAll.mockResolvedValue(women);

      const result = await controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual(women);
    });
  });

  describe('findOne', () => {
    it('should return a woman by id', async () => {
      const woman: Woman = {
        name: 'Fernanda M',
        portfolioUrl: '',
        id: 3,
        trabalhoModalidade: 'híbrido',
        linkedInProfile: '',
      };

      service.findOne.mockResolvedValue(woman);

      const result = await controller.findOne(1);
      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(result).toEqual(woman);
    });
  });

  describe('update', () => {
    it('should update a woman by id', async () => {
      const updateWomanDto: UpdateWomanDto = {
        name: 'Fernanda M',
        portfolioUrl: '',
        id: 3,
        trabalhoModalidade: 'híbrido',
      };
      const updatedWoman: Woman = { id: 1, ...updateWomanDto };

      service.update.mockResolvedValue(updatedWoman);

      const result = await controller.update(1, updateWomanDto);
      expect(service.update).toHaveBeenCalledWith(1, updateWomanDto);
      expect(result).toEqual(updatedWoman);
    });
  });

  describe('remove', () => {
    it('should remove a woman by id', async () => {
      service.remove.mockResolvedValue(undefined);

      await controller.remove(1);
      expect(service.remove).toHaveBeenCalledWith(1);
    });
  });
});
