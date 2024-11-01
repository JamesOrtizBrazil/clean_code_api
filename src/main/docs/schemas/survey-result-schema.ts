export const surveyResultSchema = {
  type: 'object',
  properties: {
    surverId: {
      type: 'string'
    },
    question: {
      type: 'string'
    },
    answers: {
      type: 'array',
      items: {
        $ref: '#/schemas/surveyResultAnswer'
      }
    },
    date: {
      type: 'string'
    }
  },
  required: ['surverId', 'question', 'answers', 'date']
}
