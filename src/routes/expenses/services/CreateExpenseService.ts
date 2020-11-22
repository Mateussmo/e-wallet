import {IRequestDTO, IResponseDTO} from '../dtos/index'

class CreateExpenseService {
  execute({title, description, tag, value}: IRequestDTO): IResponseDTO {
    return {id: 1, title, description, tag, value}
  }
}

export default CreateExpenseService
