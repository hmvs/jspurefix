import * as path from 'path'
import { AsciiParser } from '../buffer/ascii/ascii-parser'
import { AsciiView } from '../buffer/ascii/ascii-view'
import { ILooseObject } from '../collections/collection'
import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { Ascii } from '../buffer/ascii'
import { JsonHelper } from '../util/json-helper'
import { AsciiMsgTransmitter } from '../transport/ascii/ascii-msg-transmitter'
import { ISessionDescription } from '../transport/session-description'
import { getDefinitions } from '../util/dictionary-definitions'
import { JsFixConfig } from '../config/js-fix-config'
import { Fix44MsgFactory } from '../transport/ascii/fix44-msg-factory'

let definitions: FixDefinitions
let jsonHelper: JsonHelper
let session: AsciiMsgTransmitter
const root: string = path.join(__dirname, '../../data')

beforeAll(async () => {
  const sessionDescription: ISessionDescription = require(path.join(root, 'session/qf-fix44.json'))
  definitions = await getDefinitions(sessionDescription.application.dictionary)
  jsonHelper = new JsonHelper(definitions)
  const config = new JsFixConfig(new Fix44MsgFactory(sessionDescription), definitions, sessionDescription, Ascii.Pipe)
  session = new AsciiMsgTransmitter(config)
})

async function testEncodeDecode (msgType: string, msg: ILooseObject): Promise<ILooseObject> {
    // encode to FIX format from provided object.
  return new Promise(async (resolve, reject) => {
    const parser: AsciiParser = new AsciiParser(definitions, session.encodeStream, Ascii.Pipe)
    parser.on('msg', (msgType: string, view: AsciiView) => {
      resolve(view.toObject())
    })
    parser.on('error', (e: Error) => {
      reject(e)
    })
    session.send(msgType, msg)
  })
}

test('test logon JSON => object => fix => object', async () => {
  const msgType: string = 'A'
  const file: string = path.join(root, 'examples/FIX.4.4/quickfix/logon/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg)
}, 1000)

test('test execution report JSON => object => fix => object', async () => {
  const msgType: string = '8'
  const file: string = path.join(root, 'examples/FIX.4.4/quickfix/execution-report/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg)
}, 2000)

test('test order cxl reject JSON => object => fix => object', async () => {
  const msgType: string = '9'
  const file: string = path.join(root, 'examples/FIX.4.4/quickfix/order-cancel-reject/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg)
}, 1000)

test('test quote request JSON => object => fix => object', async () => {
  const msgType: string = 'R'
  const file: string = path.join(root, 'examples/FIX.4.4/quickfix/quote-request/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg)
}, 1000)

test('test md request JSON => object => fix => object', async () => {
  const msgType: string = 'W'
  const file: string = path.join(root, 'examples/FIX.4.4/quickfix/md-data-snapshot/object.json')
  const msg: ILooseObject = jsonHelper.fromJson(file, msgType)
  await expect(testEncodeDecode(msgType, msg)).resolves.toEqual(msg)
}, 1000)