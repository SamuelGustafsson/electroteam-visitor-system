import http from "../../http-common";
import { RegistrationType } from "./RegistrationType";
import { config } from "./config";

class WiseNetWaveDataService {
  create({ visitor, whoToVisit }: RegistrationType) {
    return http.post(
      `createEvent?source=%22${config.tag}%22&caption=%22${
        visitor.firstname
      }%20${
        visitor.lastname
      }%22&description=%22${`Ska besöka ${whoToVisit.firstname} ${whoToVisit.lastname}`}%22&metadata={%22cameraRefs%22:[%${
        config.camID
      }%22]}`
    );
  }

  //   getAll() {
  //     return http.get("/tutorials");
  //   }

  //   get(id: string) {
  //     return http.get(`/tutorials/${id}`);
  //   }

  //   update(id: string, data: any) {
  //     return http.put(`/tutorials/${id}`, data);
  //   }

  //   delete(id: string) {
  //     return http.delete(`/tutorials/${id}`);
  //   }

  //   deleteAll() {
  //     return http.delete(`/tutorials`);
  //   }

  //   findByTitle(title: string) {
  //     return http.get(`/tutorials?title=${title}`);
  //   }
}

export default new WiseNetWaveDataService();
