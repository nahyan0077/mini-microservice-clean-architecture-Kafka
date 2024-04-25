import { IUseCases } from "./IUseCases";
import { IRepositories } from "./iRepositories";

export interface IDependencies {
  repositories: IRepositories;
  useCases: IUseCases;
}
