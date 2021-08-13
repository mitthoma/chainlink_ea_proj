const sourceEnvironmentVariables = [
  { envKey: 'XBTO_ADAPTER_URL', value: 'xbto' },
  { envKey: 'GENESIS_VOLATILITY_ADAPTER_URL', value: 'genesis_volatility' },
  { envKey: 'DXFEED_ADAPTER_URL', value: 'dxfeed' },
]

const assetEnvironmentVariables = [
  { envKey: 'DERIBIT_ADAPTER_URL', value: 'deribit' },
  { envKey: 'OILPRICEAPI_COM_ADAPTER_URL', value: 'oilpriceapi' },
  { envKey: 'DXFEED_ADAPTER_URL', value: 'dxfeed' },
]

function searchEnvironment(environmentVariables) {
  for (const { envKey, value } of environmentVariables) {
    const isSetEnvVar = process.env[envKey]
    if (isSetEnvVar) return value
  }
}

function generateTestPayload() {
  const payload = {
    request: {
      contract: '0x0dEaf87519D434DCF74551B2E907aF18D2304946',
      multiply: 1e8,
      source: searchEnvironment(sourceEnvironmentVariables),
      asset: searchEnvironment(assetEnvironmentVariables),
    },
  }
  return JSON.stringify(payload)
}

module.exports = generateTestPayload()
