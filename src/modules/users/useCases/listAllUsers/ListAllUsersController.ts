import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    // Lembrar que para que a listAll funcione, preciso passar pelo header o id de um usuário já transformado em admin.

    try {
      const allUsers = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.json(allUsers);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
