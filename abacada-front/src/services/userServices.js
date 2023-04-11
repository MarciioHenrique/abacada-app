import api from "../util/api";

export default new class userServices {
    getTeachers(instituicao) {
        return new Promise((resolve, reject) => {
            api.get("/professor?instituicao="+instituicao)
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });      
    }

    getStudents(professor) {
        return new Promise((resolve, reject) => {
            api.get("/aluno?registroProfessor="+professor)
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });
    }

    getTeacher(registro) {
        return new Promise((resolve, reject) => {
            api.get("/professor/"+registro)
                .then(res => resolve(res?.data))
                .then(error => reject(error?.response?.data?.message));
        });
    }

    addTeacher(registro, nome, instituicao) {
        return new Promise((resolve, reject) => {
            api.post("/professor",{
                "registro": registro,
                "nome": nome,
                "instituicao": {
                    "instituicao": instituicao.instituicao,
                    "usuario": {
                        "email": instituicao.usuario.email,
                        "senha": instituicao.usuario.senha
                    }
                }
            })
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });
    }

    addStudent(registro, nome, professor) {
        return new Promise((resolve, reject) => {
            api.post("/aluno",{
                "registro": registro,
                "nome": nome,
                "professor": {
                    "registro": professor.registro,
                    "nome": professor.nome,
                    "instituicao": {
                        "instituicao": professor.instituicao.instituicao,
                        "usuario": {
                            "email": professor.instituicao.usuario.email,
                            "senha": professor.instituicao.usuario.senha
                        }
                    }
                }
            })
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });
    }

};