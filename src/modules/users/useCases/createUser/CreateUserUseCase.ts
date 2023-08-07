import { User } from "@prisma/client"
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateUserUseCase {
    async execute({ name, email, password }: CreateUserDTO): Promise<User> {
        //Check if user already exists
        const userAlredyExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if (userAlredyExists) {
            throw new AppError("User already exists")
        }
        //Create user
        const user = await prisma.user.create({
            data:{
                name: name,
                email: email,
                password: password
            }
        });

        return user;
    }
}