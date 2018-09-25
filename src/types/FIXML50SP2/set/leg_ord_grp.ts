import { IInstrumentLeg } from './instrument_leg'
import { ILegStipulations } from './leg_stipulations'
import { ILegPreAllocGrp } from './leg_pre_alloc_grp'
import { INestedParties } from './nested_parties'

export interface ILegOrdGrp {
  LegOrderQty?: number// 685
  RelatedTradeQuantity?: number// 1860
  LegSwapType?: number// 690
  LegAllocID?: string// 1366
  LegAccount?: string// 2680
  LegClearingAccountType?: number// 1817
  LegPositionEffect?: string// 564
  LegCoveredOrUncovered?: number// 565
  EntitlementRefID?: string// 1885
  InstrumentScopeSettlType?: string// 1557
  LegSettlDate?: Date// 588
  UnderlyingProvisionCashSettlCurrency?: string// 42167
  LegVolatility?: string// 1379
  LegDividendYield?: number// 1381
  LegCurrencyRatio?: string// 1383
  LegExecInst?: string// 1384
  SideShortSaleExemptionReason?: number// 1690
  InstrumentLeg?: IInstrumentLeg
  LegStipulations?: ILegStipulations[]
  LegPreAllocGrp?: ILegPreAllocGrp[]
  NestedParties?: INestedParties[]
}