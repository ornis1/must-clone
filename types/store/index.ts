import { State as ProfileState } from '~/types/store/profile'
import { State as ToolbarState } from '~/types/store/toolbar'
import { State as UserState } from '~/types/store/user'

export type RootState = {
  profile: ProfileState
  toolbar: ToolbarState
  user: UserState
}
