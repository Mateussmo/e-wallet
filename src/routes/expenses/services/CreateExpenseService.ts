import {IRequestCreateDTO, IResponseCreateDTO} from '../dtos/index'

class CreateExpenseService {
  execute({title, description, tag, value}: IRequestCreateDTO): IResponseCreateDTO {
    return {id: 1, title, description, tag, value}
  }
}

export default CreateExpenseService
