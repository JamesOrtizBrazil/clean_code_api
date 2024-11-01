import { LoadSurveyResultController } from './load-survey-result-controller'
import { HttpRequest } from './load-survey-result-controller-protocols'
import { mockLoadSurveyById } from '@/presentation/test'

const makeFakeRequest = (): HttpRequest => ({
  params: {
    surveyId: 'any_id'
  }
})

describe('LoadSurveyResult Controller', () => {
  test('Should call LoadSurveyResult with correct values', async () => {
    const loadSurveyLoadByIdStub = mockLoadSurveyById()
    const sut = new LoadSurveyResultController(loadSurveyLoadByIdStub)
    const loadByIdSpy = jest.spyOn(loadSurveyLoadByIdStub, 'loadById')
    await sut.handle(makeFakeRequest())
    expect(loadByIdSpy).toHaveBeenCalledWith('any_id')
  })
})
