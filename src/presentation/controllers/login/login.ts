import { resolve } from "path";
import { MissingParamError } from "../../errors";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { badRequest } from "../../helpers/http-helper";

export class LoginController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }
}

