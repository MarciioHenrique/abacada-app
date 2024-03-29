import api from "../util/api";

export default new class userServices {
    addTeacher(nome, email, instituicao) {
        return new Promise((resolve, reject) => {
            api.post("/professor",{
                "nome": nome,
                "email": email,
                "instituicao": {
                    "id": instituicao.id,
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

    addStudent(nome, heroi, nivel, professor) {
        return new Promise((resolve, reject) => {
            api.post("/aluno",{
                "nome": nome,
                "heroi": {
                    "id": heroi.id,
                    "nome": heroi.nome,
                    "icone": heroi.icone,
                    "banner": heroi.banner
                },
                "nivel": nivel,
                "professor": {
                    "registro": professor.registro,
                    "nome": professor.nome,
                    "email": professor.email,
                    "instituicao": {
                        "id": professor.instituicao.id,
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

    deleteTeacher(professor) {
        return new Promise((resolve, reject) => {
            api.delete("/professor?registro="+professor)
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });
    }

    deleteStudent(aluno) {
        return new Promise((resolve, reject) => {
            api.delete("/aluno?registro="+aluno)
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });
    }

    getJogo(id) {
        return new Promise((resolve, reject) => {
            api.get("/jogo/"+id)
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });
    }

    addHistorico(aluno, jogo) {
        return new Promise((resolve, reject) => {
            api.post("/historico",{
                "aluno": {
                    "registro": aluno.registro,
                    "nome": aluno.nome,
                    "heroi": {
                        "id": aluno.heroi.id,
                        "nome": aluno.heroi.nome,
                        "icone": aluno.heroi.icone,
                        "banner": aluno.heroi.banner
                    },
                    "nivel": aluno.nivel,
                    "professor": {
                        "registro": aluno.professor.registro,
                        "nome": aluno.professor.nome,
                        "email": aluno.professor.email,
                        "instituicao": {
                            "id": aluno.professor.instituicao.id,
                            "instituicao": aluno.professor.instituicao.instituicao,
                            "usuario": {
                                "email": aluno.professor.instituicao.usuario.email,
                                "senha": aluno.professor.instituicao.usuario.senha
                            }
                        }
                    }
                },
                "jogo": {
                    "id": jogo.id,
                    "nome": jogo.nome,
                    "descricao": jogo.descricao,
                    "image": jogo.image,
                    "url": jogo.url,
                    "interno": jogo.interno
                },
                "tempoMin": "",
                "tempoSeg": "",
                "concluido": false
                
            })
                .then(res => resolve(res.data))
                .catch(error => reject(error.response.data.message));
        });
    }
};