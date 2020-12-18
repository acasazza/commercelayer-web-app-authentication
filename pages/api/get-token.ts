import { NextApiRequest, NextApiResponse } from 'next'
import { getWebappToken } from '@commercelayer/js-auth'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const auth = await getWebappToken({
      clientId: '00MLbZI7lMHF20fGlY_oMdE4rUzb_3e2eOSFO9XMIQw',
      clientSecret: 'ISeVhXf3Nn_KefAH0xylODeOYwWPUeXmlaD3twIGq0Y',
      endpoint: 'https://avengers.commercelayer.co',
      callbackUrl: 'urn:ietf:wg:oauth:2.0:oob',
      scope: 'market:227',
      callbackUrlWithCode:
        'urn:ietf:wg:oauth:2.0:oob?code=q35FevEbk2B8tcubJXphNsPlAkdAfoprT8CiU3R1kvU',
    })
    res.status(200).json({
      success: true,
      accessToken: auth.accessToken,
    })
  } catch (error) {
    res.status(422).json({
      success: false,
      error,
    })
  }
}
