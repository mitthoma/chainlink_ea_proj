import { Requester, Validator } from '@chainlink/ea-bootstrap'
import { Config, ExecuteWithConfig, InputParameters } from '@chainlink/types'

// This should be filled in with a lowercase name corresponding to the API endpoint
export const supportedEndpoints = [
  'https://gist.githubusercontent.com/thodges-gh/3bd03660676504478de60c3a17800556/raw/0013f560b97eb1b2481fd4d57f02507c96f0d88f/balances.json',
]

export const endpointResultPaths = {
  example:
    'https://gist.githubusercontent.com/thodges-gh/3bd03660676504478de60c3a17800556/raw/0013f560b97eb1b2481fd4d57f02507c96f0d88f/balances.json',
}

export interface ResponseSchema {
  [address: string]: string
  balance: any
}

const customError = (data: any) => data.Response === 'Error'

export const inputParameters: InputParameters = {
  method: ['method'],
}

export const execute: ExecuteWithConfig<Config> = async (request, _, config) => {
  const validator = new Validator(request, inputParameters)
  if (validator.error) throw validator.error

  const jobRunID = validator.validated.id
  const url =
    'https://gist.githubusercontent.com/thodges-gh/3bd03660676504478de60c3a17800556/raw/0013f560b97eb1b2481fd4d57f02507c96f0d88f/balances.json'
  
  const method = validator.validated.data.method
  const params = {}
  const options = { ...config.api, params, url }
  const response = await Requester.request<ResponseSchema>(options, customError)
  const numAccounts = Object.keys(response.data).length

  if (method == 'sum') {
    let runningTotal = 0
    
    for (let i = 0; i < numAccounts; i++) {
      let currentBalance = Requester.validateResultNumber(response.data, [i, 'balance'])
      runningTotal = runningTotal + currentBalance
    }
    
    const result = runningTotal
    return Requester.success(jobRunID, Requester.withResult(response, result), config.verbose)
    
  } else if (method == 'maximum') {
    let currentHighestBalance = 0
    let highestAddress = 0

    for (let i = 0; i < numAccounts; i++) {
      let currentBalance = Requester.validateResultNumber(response.data, [i, 'balance'])
      if (currentBalance > currentHighestBalance) {
        currentHighestBalance = currentBalance
        highestAddress = i
      }
    }
    
    const result = response.data[highestAddress]
    return Requester.success(jobRunID, Requester.withResult(response, result), config.verbose)
    
  } else if (method == 'minimum') {
    let currentLowestBalance = Requester.validateResultNumber(response.data, [0, 'balance'])
    let lowestAddress = 0

    for (let i = 0; i < numAccounts; i++) {
      let currentBalance = Requester.validateResultNumber(response.data, [i, 'balance'])
      if (currentBalance < currentLowestBalance) {
        currentLowestBalance = currentBalance
        lowestAddress = i
      }
    }

    const result = response.data[lowestAddress]
    return Requester.success(jobRunID, Requester.withResult(response, result), config.verbose)
    
  }
  
  console.log('Please correct the input parameter. The first JSON result was returned.')
  const result = Requester.validateResultNumber(response.data, [0])
  return Requester.success(jobRunID, Requester.withResult(response, result), config.verbose)
  
}
