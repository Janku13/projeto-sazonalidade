import moment from 'moment'

export const formateDate = (date:string) :string => {
  return moment(date).format('DD/mm/yyyy')
}