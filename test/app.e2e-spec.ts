import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGFtIiwiZW1haWwiOiJwYW1AZ21haWwuY29tIiwicGFzc3dvcmQiOiJwYW0iLCJpYXQiOjE2OTMzMjMxNzEsImV4cCI6MTY5MzMyMzc3MX0.KZMAaa_ZKrTzt6VK-I8Fnsa4ek__Ld9x5jIpVqwHSgI';

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
