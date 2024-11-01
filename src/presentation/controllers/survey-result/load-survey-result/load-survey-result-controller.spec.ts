import { LoadSurveyResultController } from './load-survey-result-controller'
import { HttpRequest, LoadSurveyById } from './load-survey-result-controller-protocols'
import { mockLoadSurveyById } from '@/presentation/test'

const makeFakeRequest = (): HttpRequest => ({
  params: {
    surveyId: 'any_id'
  }
})

type SutTypes = {
  sut: LoadSurveyResultController
  loadSurveyLoadByIdStub: LoadSurveyById
}

const makeSut = (): SutTypes => {
  const loadSurveyLoadByIdStub = mockLoadSurveyById()
  const sut = new LoadSurveyResultController(loadSurveyLoadByIdStub)
  return {
    sut,
    loadSurveyLoadByIdStub
  }
}

describe('LoadSurveyResult Controller', () => {
  test('Should call LoadSurveyResult with correct values', async () => {
    const { sut, loadSurveyLoadByIdStub } = makeSut()
    const loadByIdSpy = jest.spyOn(loadSurveyLoadByIdStub, 'loadById')
    await sut.handle(makeFakeRequest())
    expect(loadByIdSpy).toHaveBeenCalledWith('any_id')
  })
})
