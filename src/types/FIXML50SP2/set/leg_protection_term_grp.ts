import { ILegProtectionTermEventNewsSourceGrp } from './leg_protection_term_event_news_source_grp'
import { ILegProtectionTermEventGrp } from './leg_protection_term_event_grp'
import { ILegProtectionTermObligationGrp } from './leg_protection_term_obligation_grp'

export interface ILegProtectionTermGrp {
  UnderlyingProtectionTermNotional?: number// 42069
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingProtectionTermSellerNotifies?: string// 42071
  UnderlyingProtectionTermBuyerNotifies?: string// 42072
  UnderlyingProtectionTermEventBusinessCenter?: string// 42073
  UnderlyingProtectionTermStandardSources?: string// 42074
  UnderlyingProtectionTermEventMinimumSources?: number// 42075
  UnderlyingDividendPeriodXID?: string// 42881
  LegProtectionTermEventNewsSourceGrp?: ILegProtectionTermEventNewsSourceGrp[]
  LegProtectionTermEventGrp?: ILegProtectionTermEventGrp[]
  LegProtectionTermObligationGrp?: ILegProtectionTermObligationGrp[]
}