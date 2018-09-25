import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { INestedParties } from './nested_parties'
import { ILegBenchmarkCurveData } from './leg_benchmark_curve_data'

export interface IQuotReqLegsGrp {
  InstrumentLeg?: IInstrumentLeg
  LegOptionRatio?: number// 1017
  LegPrice?: number// 566
  LegQty?: number// 687
  LegOrderQty?: number// 685
  LegSwapType?: number// 690
  LegSettlType?: string// 587
  LegSettlDate?: Date// 588
  LegStipulations?: ILegStipulations[]
  NestedParties?: INestedParties[]
  LegBenchmarkCurveData?: ILegBenchmarkCurveData
  LegRefID?: string// 654
}