import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FtIiwiZW1haWwiOiJzYW1AZ21haWwuY29tIiwicGFzc3dvcmQiOiJzYW0iLCJpYXQiOjE2OTMyOTYzODcsImV4cCI6MTY5MzI5Njk4N30.kUCxSj2D1SCHK1Udc88jzKilaYQk_JgznfV1CpZ8HN0';

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return (
      request(app.getHttpServer())
        .get('/')
        // .set('Authorization', `Bearer ${token}`)
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .expect('Hello World!')
    );
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/todo')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/todo/1')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });

  it('/ (Post)', () => {
    return request(app.getHttpServer())
      .post('/todo')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'john', description: 'sample', status: true })
      .expect(201);
  });
  it('/ (Put)', () => {
    return request(app.getHttpServer())
      .put('/todo/11')
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'john', description: 'sample', status: true })
      .expect(204);
  });
  it('/ (Delete)', () => {
    return request(app.getHttpServer())
      .delete('/todo/10')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);
  });
});
