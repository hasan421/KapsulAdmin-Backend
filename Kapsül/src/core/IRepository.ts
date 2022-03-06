import { GenericResponse } from "./generic-response";

/**
 * Veritabanına veri ekleme, güncelleme ve okuma gibi CRUD (Create Read Update Delete) işlemlerimiz için oluşturmuş olduğumuz
 *  kodların tekrar kullanılabilirliğini sağlamaktır.
 *@param T - IGenericeResponse sınıfından türemiş bir sınıfı temsil etmektedir
 */
export interface IRepository<T> {
  GetAll(): Promise<GenericResponse<T[]>>;
  
  Create(entity: T): Promise<GenericResponse<Number>>;

  Update(entity: T): Promise<GenericResponse<Number>>;

  Delete(entity: T): Promise<GenericResponse<Number>>;
}
