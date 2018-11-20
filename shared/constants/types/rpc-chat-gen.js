// @noflow // not using flow at all
/* eslint-disable */

// This file is auto-generated by client/protocol/Makefile.
// Not enabled: calls need to be turned on in enabled-calls.json
import {call} from 'redux-saga/effects'
import {getEngine as engine, getEngineSaga} from '../../engine/require'

export const chatUiMessageUnboxedState = {
  valid: 1,
  error: 2,
  outbox: 3,
  placeholder: 4,
}

export const commonAssetMetadataType = {
  none: 0,
  image: 1,
  video: 2,
  audio: 3,
}

export const commonAssetTag = {
  primary: 0,
}

export const commonConversationExistence = {
  active: 0,
  archived: 1,
  deleted: 2,
  abandoned: 3,
}

export const commonConversationMemberStatus = {
  active: 0,
  removed: 1,
  left: 2,
  preview: 3,
  reset: 4,
}

export const commonConversationMembersType = {
  kbfs: 0,
  team: 1,
  impteamnative: 2,
  impteamupgrade: 3,
}

export const commonConversationStatus = {
  unfiled: 0,
  favorite: 1,
  ignored: 2,
  blocked: 3,
  muted: 4,
  reported: 5,
}

export const commonGetThreadReason = {
  general: 0,
  push: 1,
  foreground: 2,
  backgroundconvload: 3,
  fixretry: 4,
  prepare: 5,
  searcher: 6,
  indexedSearch: 7,
  kbfsfileactivity: 8,
}

export const commonGlobalAppNotificationSetting = {
  newmessages: 0,
  plaintextmobile: 1,
  plaintextdesktop: 2,
  defaultsoundmobile: 3,
}

export const commonInboxResType = {
  versionhit: 0,
  full: 1,
}

export const commonMessageType = {
  none: 0,
  text: 1,
  attachment: 2,
  edit: 3,
  delete: 4,
  metadata: 5,
  tlfname: 6,
  headline: 7,
  attachmentuploaded: 8,
  join: 9,
  leave: 10,
  system: 11,
  deletehistory: 12,
  reaction: 13,
  sendpayment: 14,
  requestpayment: 15,
  unfurl: 16,
}

export const commonNotificationKind = {
  generic: 0,
  atmention: 1,
}

export const commonRetentionPolicyType = {
  none: 0,
  retain: 1,
  expire: 2,
  inherit: 3,
  ephemeral: 4,
}

export const commonSyncInboxResType = {
  current: 0,
  incremental: 1,
  clear: 2,
}

export const commonTeamType = {
  none: 0,
  simple: 1,
  complex: 2,
}

export const commonTopicType = {
  none: 0,
  chat: 1,
  dev: 2,
  kbfsfileedit: 3,
}

export const localBodyPlaintextVersion = {
  v1: 1,
  v2: 2,
  v3: 3,
  v4: 4,
  v5: 5,
  v6: 6,
  v7: 7,
  v8: 8,
  v9: 9,
  v10: 10,
}

export const localConversationErrorType = {
  permanent: 0,
  missinginfo: 1,
  selfrekeyneeded: 2,
  otherrekeyneeded: 3,
  identify: 4,
  transient: 5,
  none: 6,
}

export const localGetThreadNonblockCbMode = {
  full: 0,
  incremental: 1,
}

export const localGetThreadNonblockPgMode = {
  default: 0,
  server: 1,
}

export const localHeaderPlaintextVersion = {
  v1: 1,
  v2: 2,
  v3: 3,
  v4: 4,
  v5: 5,
  v6: 6,
  v7: 7,
  v8: 8,
  v9: 9,
  v10: 10,
}

export const localMessageSystemType = {
  addedtoteam: 0,
  inviteaddedtoteam: 1,
  complexteam: 2,
  createteam: 3,
  gitpush: 4,
  changeavatar: 5,
}

export const localMessageUnboxedErrorType = {
  misc: 0,
  badversionCritical: 1,
  badversion: 2,
  identify: 3,
  ephemeral: 4,
  pairwiseMissing: 5,
}

export const localOutboxErrorType = {
  misc: 0,
  offline: 1,
  identify: 2,
  toolong: 3,
  duplicate: 4,
  expired: 5,
  toomanyattempts: 6,
  alreadyDeleted: 7,
  uploadfailed: 8,
}

export const localOutboxStateType = {
  sending: 0,
  error: 1,
}

export const localPreviewLocationTyp = {
  url: 0,
  file: 1,
  bytes: 2,
}

export const localUnfurlPromptAction = {
  always: 0,
  never: 1,
  accept: 2,
  notnow: 3,
}

export const notifyChatChatActivitySource = {
  local: 0,
  remote: 1,
}

export const notifyChatChatActivityType = {
  reserved: 0,
  incomingMessage: 1,
  readMessage: 2,
  newConversation: 3,
  setStatus: 4,
  failedMessage: 5,
  membersUpdate: 6,
  setAppNotificationSettings: 7,
  teamtype: 8,
  expunge: 9,
  ephemeralPurge: 10,
  reactionUpdate: 11,
  messagesUpdated: 12,
}

export const notifyChatStaleUpdateType = {
  clear: 0,
  newactivity: 1,
}

export const remoteChannelMention = {
  none: 0,
  all: 1,
  here: 2,
}

export const remoteMessageBoxedVersion = {
  vnone: 0,
  v1: 1,
  v2: 2,
  v3: 3,
  v4: 4,
}

export const remoteSyncAllNotificationType = {
  state: 0,
  incremental: 1,
}

export const remoteSyncAllProtVers = {
  v0: 0,
  v1: 1,
}

export const unfurlUnfurlMode = {
  always: 0,
  never: 1,
  whitelisted: 2,
}

export const unfurlUnfurlType = {
  generic: 0,
  youtube: 1,
}
export const localAddTeamMemberAfterResetRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.addTeamMemberAfterReset', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localCancelPostRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.CancelPost', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localDeleteConversationLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.deleteConversationLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localDownloadFileAttachmentLocalRpcSaga = p => call(getEngineSaga(), {method: 'chat.1.local.DownloadFileAttachmentLocal', params: p.params, incomingCallMap: p.incomingCallMap, customResponseIncomingCallMap: p.customResponseIncomingCallMap, waitingKey: p.waitingKey})
export const localFindConversationsLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.findConversationsLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetGlobalAppNotificationSettingsLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.getGlobalAppNotificationSettingsLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetInboxAndUnboxUILocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.getInboxAndUnboxUILocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetInboxNonblockLocalRpcSaga = p => call(getEngineSaga(), {method: 'chat.1.local.getInboxNonblockLocal', params: p.params, incomingCallMap: p.incomingCallMap, customResponseIncomingCallMap: p.customResponseIncomingCallMap, waitingKey: p.waitingKey})
export const localGetNextAttachmentMessageLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.getNextAttachmentMessageLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetStaticConfigRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.getStaticConfig', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetTLFConversationsLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.getTLFConversationsLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetTeamRetentionLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.getTeamRetentionLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetThreadLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.getThreadLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localGetThreadNonblockRpcSaga = p => call(getEngineSaga(), {method: 'chat.1.local.getThreadNonblock', params: p.params, incomingCallMap: p.incomingCallMap, customResponseIncomingCallMap: p.customResponseIncomingCallMap, waitingKey: p.waitingKey})
export const localGetUploadTempFileRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.getUploadTempFile', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localJoinConversationByIDLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.joinConversationByIDLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localLeaveConversationLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.leaveConversationLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localMakePreviewRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.makePreview', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localMakeUploadTempFileRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.makeUploadTempFile', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localMarkAsReadLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.markAsReadLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localNewConversationLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.newConversationLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localPostDeleteHistoryByAgeRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.postDeleteHistoryByAge', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localPostDeleteNonblockRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.postDeleteNonblock', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localPostEditNonblockRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.postEditNonblock', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localPostFileAttachmentMessageLocalNonblockRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.postFileAttachmentMessageLocalNonblock', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localPostFileAttachmentUploadLocalNonblockRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.postFileAttachmentUploadLocalNonblock', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localPostHeadlineNonblockRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.postHeadlineNonblock', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localPostHeadlineRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.postHeadline', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localPostMetadataRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.postMetadata', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localPostReactionNonblockRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.postReactionNonblock', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localPostTextNonblockRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.postTextNonblock', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localPreviewConversationByIDLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.previewConversationByIDLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localProfileChatSearchRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.profileChatSearch', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localResolveUnfurlPromptRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.resolveUnfurlPrompt', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localRetryPostRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.RetryPost', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localSetAppNotificationSettingsLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.setAppNotificationSettingsLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localSetConvMinWriterRoleLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.setConvMinWriterRoleLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localSetConvRetentionLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.setConvRetentionLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localSetConversationStatusLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.SetConversationStatusLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localSetGlobalAppNotificationSettingsLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.setGlobalAppNotificationSettingsLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localSetTeamRetentionLocalRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.setTeamRetentionLocal', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localUnboxMobilePushNotificationRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.unboxMobilePushNotification', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
export const localUpdateTypingRpcPromise = (params, waitingKey) => new Promise((resolve, reject) => engine()._rpcOutgoing({method: 'chat.1.local.updateTyping', params, callback: (error, result) => (error ? reject(error) : resolve(result)), waitingKey}))
