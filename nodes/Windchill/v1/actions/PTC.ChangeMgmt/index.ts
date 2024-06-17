import * as ActionCreateChangeNoticeHierarchy from './Action_CreateChangeNoticeHierarchy';
import * as ActionEditChangeNoticesSecurityLabels from './Action_EditChangeNoticesSecurityLabels';
import * as ActionEditChangeRequestsSecurityLabels from './Action_EditChangeRequestsSecurityLabels';
import * as ActionEditChangeTasksSecurityLabels from './Action_EditChangeTasksSecurityLabels';
import * as ActionEditProblemReportsSecurityLabels from './Action_EditProblemReportsSecurityLabels';
import * as ActionEditVariancesSecurityLabels from './Action_EditVariancesSecurityLabels';
import * as ActionSetPendingEffectivities from './Action_SetPendingEffectivities';
import * as ActionSetStateChangeables from './Action_SetStateChangeables';
import * as ActionSetStateChangeIssues from './Action_SetStateChangeIssues';
import * as ActionSetStateChangeNotices from './Action_SetStateChangeNotices';
import * as ActionSetStateChangeOrders from './Action_SetStateChangeOrders';
import * as ActionSetStateChangeRequests from './Action_SetStateChangeRequests';
import * as ActionSetStateChangeTasks from './Action_SetStateChangeTasks';
import * as ActionSetStateGenericChangeRequests from './Action_SetStateGenericChangeRequests';
import * as ActionSetStateProblemReports from './Action_SetStateProblemReports';
import * as ActionSetStateVariances from './Action_SetStateVariances';
import * as ChangeableAffectedByChangeObjectsGetChangeItem from './Changeable.AffectedByChangeObjects.GetChangeItem';
import * as ChangeableAffectedByChangeObjectsGetChangeItems from './Changeable.AffectedByChangeObjects.GetChangeItems';
import * as ChangeableAffectedByLinksGetAffectsLinkItem from './Changeable.AffectedByLinks.GetAffectsLinkItem';
import * as ChangeableAffectedByLinksGetAffectsLinkItems from './Changeable.AffectedByLinks.GetAffectsLinkItems';
import * as ChangeableAffectedByObjectsGetChangeItem from './Changeable.AffectedByObjects.GetChangeItem';
import * as ChangeableAffectedByObjectsGetChangeItems from './Changeable.AffectedByObjects.GetChangeItems';
import * as ChangeableAffectedByTasksGetChangeItem from './Changeable.AffectedByTasks.GetChangeItem';
import * as ChangeableAffectedByTasksGetChangeItems from './Changeable.AffectedByTasks.GetChangeItems';
import * as ChangeableContextGetContainer from './Changeable.Context.GetContainer';
import * as ChangeableCreatorGetUser from './Changeable.Creator.GetUser';
import * as ChangeableModifierGetUser from './Changeable.Modifier.GetUser';
import * as ChangeableOrganizationGetOrganization from './Changeable.Organization.GetOrganization';
import * as ChangeableResultedByChangeObjectsGetChangeItem from './Changeable.ResultedByChangeObjects.GetChangeItem';
import * as ChangeableResultedByChangeObjectsGetChangeItems from './Changeable.ResultedByChangeObjects.GetChangeItems';
import * as ChangeableResultedByObjectsGetChangeItem from './Changeable.ResultedByObjects.GetChangeItem';
import * as ChangeableResultedByObjectsGetChangeItems from './Changeable.ResultedByObjects.GetChangeItems';
import * as ChangeableResultingByLinksGetResultingLinkItem from './Changeable.ResultingByLinks.GetResultingLinkItem';
import * as ChangeableResultingByLinksGetResultingLinkItems from './Changeable.ResultingByLinks.GetResultingLinkItems';
import * as ChangeableResultingByLinksPostResultingLinkItem from './Changeable.ResultingByLinks.PostResultingLinkItem';
import * as ChangeableResultingByLinksUpdateResultingLinkItem from './Changeable.ResultingByLinks.UpdateResultingLinkItem';
import * as ChangeableRevisionsGetChangeable from './Changeable.Revisions.GetChangeable';
import * as ChangeableRevisionsGetChangeables from './Changeable.Revisions.GetChangeables';
import * as ChangeableUnincorporatedByChangeObjectsGetChangeItem from './Changeable.UnincorporatedByChangeObjects.GetChangeItem';
import * as ChangeableUnincorporatedByChangeObjectsGetChangeItems from './Changeable.UnincorporatedByChangeObjects.GetChangeItems';
import * as ChangeableUnincorporatedByLinksGetUnincorporatedLinkItem from './Changeable.UnincorporatedByLinks.GetUnincorporatedLinkItem';
import * as ChangeableUnincorporatedByLinksGetUnincorporatedLinkItems from './Changeable.UnincorporatedByLinks.GetUnincorporatedLinkItems';
import * as ChangeableUnincorporatedByObjectsGetChangeItem from './Changeable.UnincorporatedByObjects.GetChangeItem';
import * as ChangeableUnincorporatedByObjectsGetChangeItems from './Changeable.UnincorporatedByObjects.GetChangeItems';
import * as ChangeableVersionsGetChangeable from './Changeable.Versions.GetChangeable';
import * as ChangeableVersionsGetChangeables from './Changeable.Versions.GetChangeables';
import * as ChangeIssueAffectedObjectsGetChangeable from './ChangeIssue.AffectedObjects.GetChangeable';
import * as ChangeIssueAffectedObjectsGetChangeables from './ChangeIssue.AffectedObjects.GetChangeables';
import * as ChangeIssueAffectsLinksGetAffectsLinkItem from './ChangeIssue.AffectsLinks.GetAffectsLinkItem';
import * as ChangeIssueAffectsLinksGetAffectsLinkItems from './ChangeIssue.AffectsLinks.GetAffectsLinkItems';
import * as ChangeIssueCiAffectLinksGetReportedAgainstLinkItem from './ChangeIssue.CIAffectLinks.GetReportedAgainstLinkItem';
import * as ChangeIssueCiAffectLinksGetReportedAgainstLinkItems from './ChangeIssue.CIAffectLinks.GetReportedAgainstLinkItems';
import * as ChangeIssueCiAffectLinksPostReportedAgainstLinkItem from './ChangeIssue.CIAffectLinks.PostReportedAgainstLinkItem';
import * as ChangeIssueCiAffectLinksUpdateReportedAgainstLinkItem from './ChangeIssue.CIAffectLinks.UpdateReportedAgainstLinkItem';
import * as ChangeIssueCreatorGetUser from './ChangeIssue.Creator.GetUser';
import * as ChangeIssueModifierGetUser from './ChangeIssue.Modifier.GetUser';
import * as ChangeIssueOrganizationGetOrganization from './ChangeIssue.Organization.GetOrganization';
import * as ChangeIssueProcessLinksGetProcessLinkItem from './ChangeIssue.ProcessLinks.GetProcessLinkItem';
import * as ChangeIssueProcessLinksGetProcessLinkItems from './ChangeIssue.ProcessLinks.GetProcessLinkItems';
import * as ChangeIssueProcessObjectsGetChangeItem from './ChangeIssue.ProcessObjects.GetChangeItem';
import * as ChangeIssueProcessObjectsGetChangeItems from './ChangeIssue.ProcessObjects.GetChangeItems';
import * as ChangeIssueReferenceLinksGetReferenceLinkItem from './ChangeIssue.ReferenceLinks.GetReferenceLinkItem';
import * as ChangeIssueReferenceLinksGetReferenceLinkItems from './ChangeIssue.ReferenceLinks.GetReferenceLinkItems';
import * as ChangeIssueReferenceObjectsGetChangeItem from './ChangeIssue.ReferenceObjects.GetChangeItem';
import * as ChangeIssueReferenceObjectsGetChangeItems from './ChangeIssue.ReferenceObjects.GetChangeItems';
import * as ChangeIssueRevisionsGetChangeItem from './ChangeIssue.Revisions.GetChangeItem';
import * as ChangeIssueRevisionsGetChangeItems from './ChangeIssue.Revisions.GetChangeItems';
import * as ChangeIssueVersionsGetChangeItem from './ChangeIssue.Versions.GetChangeItem';
import * as ChangeIssueVersionsGetChangeItems from './ChangeIssue.Versions.GetChangeItems';
import * as ChangeNoticeAffectedObjectsGetChangeable from './ChangeNotice.AffectedObjects.GetChangeable';
import * as ChangeNoticeAffectedObjectsGetChangeables from './ChangeNotice.AffectedObjects.GetChangeables';
import * as ChangeNoticeAffectsLinksGetAffectsLinkItem from './ChangeNotice.AffectsLinks.GetAffectsLinkItem';
import * as ChangeNoticeAffectsLinksGetAffectsLinkItems from './ChangeNotice.AffectsLinks.GetAffectsLinkItems';
import * as ChangeNoticeAttachmentsDeletePtcContentItem from './ChangeNotice.Attachments.DeletePTC.ContentItem';
import * as ChangeNoticeAttachmentsGetContentItem from './ChangeNotice.Attachments.GetContentItem';
import * as ChangeNoticeAttachmentsGetContentItems from './ChangeNotice.Attachments.GetContentItems';
import * as ChangeNoticeAttachmentsPostContentItem from './ChangeNotice.Attachments.PostContentItem';
import * as ChangeNoticeAttachmentsUpdateContentItem from './ChangeNotice.Attachments.UpdateContentItem';
import * as ChangeNoticeChangeAdministratorIGetPrincipal from './ChangeNotice.ChangeAdministratorI.GetPrincipal';
import * as ChangeNoticeChangeAdministratorIGetPrincipals from './ChangeNotice.ChangeAdministratorI.GetPrincipals';
import * as ChangeNoticeChangeAdministratorIiGetPrincipal from './ChangeNotice.ChangeAdministratorII.GetPrincipal';
import * as ChangeNoticeChangeAdministratorIiGetPrincipals from './ChangeNotice.ChangeAdministratorII.GetPrincipals';
import * as ChangeNoticeCnAffectLinksGetAffectedActivityDataLinkItem from './ChangeNotice.CNAffectLinks.GetAffectedActivityDataLinkItem';
import * as ChangeNoticeCnAffectLinksGetAffectedActivityDataLinkItems from './ChangeNotice.CNAffectLinks.GetAffectedActivityDataLinkItems';
import * as ChangeNoticeCnAffectLinksPostAffectedActivityDataLinkItem from './ChangeNotice.CNAffectLinks.PostAffectedActivityDataLinkItem';
import * as ChangeNoticeCnAffectLinksUpdateAffectedActivityDataLinkItem from './ChangeNotice.CNAffectLinks.UpdateAffectedActivityDataLinkItem';
import * as ChangeNoticeContextGetContainer from './ChangeNotice.Context.GetContainer';
import * as ChangeNoticeCreatorGetUser from './ChangeNotice.Creator.GetUser';
import * as ChangeNoticeFolderGetFolder from './ChangeNotice.Folder.GetFolder';
import * as ChangeNoticeImplementationPlanGetChangeTask from './ChangeNotice.ImplementationPlan.GetChangeTask';
import * as ChangeNoticeImplementationPlanGetChangeTasks from './ChangeNotice.ImplementationPlan.GetChangeTasks';
import * as ChangeNoticeModifierGetUser from './ChangeNotice.Modifier.GetUser';
import * as ChangeNoticeOrganizationGetOrganization from './ChangeNotice.Organization.GetOrganization';
import * as ChangeNoticeProcessLinksGetProcessLinkItem from './ChangeNotice.ProcessLinks.GetProcessLinkItem';
import * as ChangeNoticeProcessLinksGetProcessLinkItems from './ChangeNotice.ProcessLinks.GetProcessLinkItems';
import * as ChangeNoticeProcessObjectsGetChangeItem from './ChangeNotice.ProcessObjects.GetChangeItem';
import * as ChangeNoticeProcessObjectsGetChangeItems from './ChangeNotice.ProcessObjects.GetChangeItems';
import * as ChangeNoticeReferenceLinksGetReferenceLinkItem from './ChangeNotice.ReferenceLinks.GetReferenceLinkItem';
import * as ChangeNoticeReferenceLinksGetReferenceLinkItems from './ChangeNotice.ReferenceLinks.GetReferenceLinkItems';
import * as ChangeNoticeReferenceObjectsGetChangeItem from './ChangeNotice.ReferenceObjects.GetChangeItem';
import * as ChangeNoticeReferenceObjectsGetChangeItems from './ChangeNotice.ReferenceObjects.GetChangeItems';
import * as ChangeNoticeResultingLinksGetResultingLinkItem from './ChangeNotice.ResultingLinks.GetResultingLinkItem';
import * as ChangeNoticeResultingLinksGetResultingLinkItems from './ChangeNotice.ResultingLinks.GetResultingLinkItems';
import * as ChangeNoticeResultingLinksPostResultingLinkItem from './ChangeNotice.ResultingLinks.PostResultingLinkItem';
import * as ChangeNoticeResultingLinksUpdateResultingLinkItem from './ChangeNotice.ResultingLinks.UpdateResultingLinkItem';
import * as ChangeNoticeResultingObjectsGetChangeable from './ChangeNotice.ResultingObjects.GetChangeable';
import * as ChangeNoticeResultingObjectsGetChangeables from './ChangeNotice.ResultingObjects.GetChangeables';
import * as ChangeNoticeRevisionsGetChangeItem from './ChangeNotice.Revisions.GetChangeItem';
import * as ChangeNoticeRevisionsGetChangeItems from './ChangeNotice.Revisions.GetChangeItems';
import * as ChangeNoticeUnincorporatedLinksGetUnincorporatedLinkItem from './ChangeNotice.UnincorporatedLinks.GetUnincorporatedLinkItem';
import * as ChangeNoticeUnincorporatedLinksGetUnincorporatedLinkItems from './ChangeNotice.UnincorporatedLinks.GetUnincorporatedLinkItems';
import * as ChangeNoticeVersionsGetChangeItem from './ChangeNotice.Versions.GetChangeItem';
import * as ChangeNoticeVersionsGetChangeItems from './ChangeNotice.Versions.GetChangeItems';
import * as ChangeOrderAffectedObjectsGetChangeable from './ChangeOrder.AffectedObjects.GetChangeable';
import * as ChangeOrderAffectedObjectsGetChangeables from './ChangeOrder.AffectedObjects.GetChangeables';
import * as ChangeOrderAffectsLinksGetAffectsLinkItem from './ChangeOrder.AffectsLinks.GetAffectsLinkItem';
import * as ChangeOrderAffectsLinksGetAffectsLinkItems from './ChangeOrder.AffectsLinks.GetAffectsLinkItems';
import * as ChangeOrderCnAffectLinksGetAffectedActivityDataLinkItem from './ChangeOrder.CNAffectLinks.GetAffectedActivityDataLinkItem';
import * as ChangeOrderCnAffectLinksGetAffectedActivityDataLinkItems from './ChangeOrder.CNAffectLinks.GetAffectedActivityDataLinkItems';
import * as ChangeOrderCreatorGetUser from './ChangeOrder.Creator.GetUser';
import * as ChangeOrderModifierGetUser from './ChangeOrder.Modifier.GetUser';
import * as ChangeOrderOrganizationGetOrganization from './ChangeOrder.Organization.GetOrganization';
import * as ChangeOrderProcessLinksGetProcessLinkItem from './ChangeOrder.ProcessLinks.GetProcessLinkItem';
import * as ChangeOrderProcessLinksGetProcessLinkItems from './ChangeOrder.ProcessLinks.GetProcessLinkItems';
import * as ChangeOrderProcessObjectsGetChangeItem from './ChangeOrder.ProcessObjects.GetChangeItem';
import * as ChangeOrderProcessObjectsGetChangeItems from './ChangeOrder.ProcessObjects.GetChangeItems';
import * as ChangeOrderReferenceLinksGetReferenceLinkItem from './ChangeOrder.ReferenceLinks.GetReferenceLinkItem';
import * as ChangeOrderReferenceLinksGetReferenceLinkItems from './ChangeOrder.ReferenceLinks.GetReferenceLinkItems';
import * as ChangeOrderReferenceObjectsGetChangeItem from './ChangeOrder.ReferenceObjects.GetChangeItem';
import * as ChangeOrderReferenceObjectsGetChangeItems from './ChangeOrder.ReferenceObjects.GetChangeItems';
import * as ChangeOrderResultingLinksGetResultingLinkItem from './ChangeOrder.ResultingLinks.GetResultingLinkItem';
import * as ChangeOrderResultingLinksGetResultingLinkItems from './ChangeOrder.ResultingLinks.GetResultingLinkItems';
import * as ChangeOrderResultingObjectsGetChangeable from './ChangeOrder.ResultingObjects.GetChangeable';
import * as ChangeOrderResultingObjectsGetChangeables from './ChangeOrder.ResultingObjects.GetChangeables';
import * as ChangeOrderRevisionsGetChangeItem from './ChangeOrder.Revisions.GetChangeItem';
import * as ChangeOrderRevisionsGetChangeItems from './ChangeOrder.Revisions.GetChangeItems';
import * as ChangeOrderUnincorporatedLinksGetUnincorporatedLinkItem from './ChangeOrder.UnincorporatedLinks.GetUnincorporatedLinkItem';
import * as ChangeOrderUnincorporatedLinksGetUnincorporatedLinkItems from './ChangeOrder.UnincorporatedLinks.GetUnincorporatedLinkItems';
import * as ChangeOrderVersionsGetChangeItem from './ChangeOrder.Versions.GetChangeItem';
import * as ChangeOrderVersionsGetChangeItems from './ChangeOrder.Versions.GetChangeItems';
import * as ChangeRequestAffectedObjectsGetChangeable from './ChangeRequest.AffectedObjects.GetChangeable';
import * as ChangeRequestAffectedObjectsGetChangeables from './ChangeRequest.AffectedObjects.GetChangeables';
import * as ChangeRequestAffectsLinksGetAffectsLinkItem from './ChangeRequest.AffectsLinks.GetAffectsLinkItem';
import * as ChangeRequestAffectsLinksGetAffectsLinkItems from './ChangeRequest.AffectsLinks.GetAffectsLinkItems';
import * as ChangeRequestAttachmentsDeletePtcContentItem from './ChangeRequest.Attachments.DeletePTC.ContentItem';
import * as ChangeRequestAttachmentsGetContentItem from './ChangeRequest.Attachments.GetContentItem';
import * as ChangeRequestAttachmentsGetContentItems from './ChangeRequest.Attachments.GetContentItems';
import * as ChangeRequestAttachmentsPostContentItem from './ChangeRequest.Attachments.PostContentItem';
import * as ChangeRequestAttachmentsUpdateContentItem from './ChangeRequest.Attachments.UpdateContentItem';
import * as ChangeRequestChangeAdministratorIGetPrincipal from './ChangeRequest.ChangeAdministratorI.GetPrincipal';
import * as ChangeRequestChangeAdministratorIGetPrincipals from './ChangeRequest.ChangeAdministratorI.GetPrincipals';
import * as ChangeRequestContextGetContainer from './ChangeRequest.Context.GetContainer';
import * as ChangeRequestCrAffectLinksGetRelevantRequestDataLinkItem from './ChangeRequest.CRAffectLinks.GetRelevantRequestDataLinkItem';
import * as ChangeRequestCrAffectLinksGetRelevantRequestDataLinkItems from './ChangeRequest.CRAffectLinks.GetRelevantRequestDataLinkItems';
import * as ChangeRequestCrAffectLinksPostRelevantRequestDataLinkItem from './ChangeRequest.CRAffectLinks.PostRelevantRequestDataLinkItem';
import * as ChangeRequestCrAffectLinksUpdateRelevantRequestDataLinkItem from './ChangeRequest.CRAffectLinks.UpdateRelevantRequestDataLinkItem';
import * as ChangeRequestCreatorGetUser from './ChangeRequest.Creator.GetUser';
import * as ChangeRequestFolderGetFolder from './ChangeRequest.Folder.GetFolder';
import * as ChangeRequestModifierGetUser from './ChangeRequest.Modifier.GetUser';
import * as ChangeRequestOrganizationGetOrganization from './ChangeRequest.Organization.GetOrganization';
import * as ChangeRequestProcessLinksGetProcessLinkItem from './ChangeRequest.ProcessLinks.GetProcessLinkItem';
import * as ChangeRequestProcessLinksGetProcessLinkItems from './ChangeRequest.ProcessLinks.GetProcessLinkItems';
import * as ChangeRequestProcessObjectsGetChangeItem from './ChangeRequest.ProcessObjects.GetChangeItem';
import * as ChangeRequestProcessObjectsGetChangeItems from './ChangeRequest.ProcessObjects.GetChangeItems';
import * as ChangeRequestReferenceLinksGetReferenceLinkItem from './ChangeRequest.ReferenceLinks.GetReferenceLinkItem';
import * as ChangeRequestReferenceLinksGetReferenceLinkItems from './ChangeRequest.ReferenceLinks.GetReferenceLinkItems';
import * as ChangeRequestReferenceObjectsGetChangeItem from './ChangeRequest.ReferenceObjects.GetChangeItem';
import * as ChangeRequestReferenceObjectsGetChangeItems from './ChangeRequest.ReferenceObjects.GetChangeItems';
import * as ChangeRequestRevisionsGetChangeItem from './ChangeRequest.Revisions.GetChangeItem';
import * as ChangeRequestRevisionsGetChangeItems from './ChangeRequest.Revisions.GetChangeItems';
import * as ChangeRequestVersionsGetChangeItem from './ChangeRequest.Versions.GetChangeItem';
import * as ChangeRequestVersionsGetChangeItems from './ChangeRequest.Versions.GetChangeItems';
import * as ChangeTaskAffectedObjectsGetChangeable from './ChangeTask.AffectedObjects.GetChangeable';
import * as ChangeTaskAffectedObjectsGetChangeables from './ChangeTask.AffectedObjects.GetChangeables';
import * as ChangeTaskAffectsLinksGetAffectsLinkItem from './ChangeTask.AffectsLinks.GetAffectsLinkItem';
import * as ChangeTaskAffectsLinksGetAffectsLinkItems from './ChangeTask.AffectsLinks.GetAffectsLinkItems';
import * as ChangeTaskAttachmentsDeletePtcContentItem from './ChangeTask.Attachments.DeletePTC.ContentItem';
import * as ChangeTaskAttachmentsGetContentItem from './ChangeTask.Attachments.GetContentItem';
import * as ChangeTaskAttachmentsGetContentItems from './ChangeTask.Attachments.GetContentItems';
import * as ChangeTaskAttachmentsPostContentItem from './ChangeTask.Attachments.PostContentItem';
import * as ChangeTaskAttachmentsUpdateContentItem from './ChangeTask.Attachments.UpdateContentItem';
import * as ChangeTaskCnAffectLinksGetAffectedActivityDataLinkItem from './ChangeTask.CNAffectLinks.GetAffectedActivityDataLinkItem';
import * as ChangeTaskCnAffectLinksGetAffectedActivityDataLinkItems from './ChangeTask.CNAffectLinks.GetAffectedActivityDataLinkItems';
import * as ChangeTaskCnAffectLinksPostAffectedActivityDataLinkItem from './ChangeTask.CNAffectLinks.PostAffectedActivityDataLinkItem';
import * as ChangeTaskCnAffectLinksUpdateAffectedActivityDataLinkItem from './ChangeTask.CNAffectLinks.UpdateAffectedActivityDataLinkItem';
import * as ChangeTaskContextGetContainer from './ChangeTask.Context.GetContainer';
import * as ChangeTaskCreatorGetUser from './ChangeTask.Creator.GetUser';
import * as ChangeTaskModifierGetUser from './ChangeTask.Modifier.GetUser';
import * as ChangeTaskOrganizationGetOrganization from './ChangeTask.Organization.GetOrganization';
import * as ChangeTaskProcessObjectsGetChangeItem from './ChangeTask.ProcessObjects.GetChangeItem';
import * as ChangeTaskProcessObjectsGetChangeItems from './ChangeTask.ProcessObjects.GetChangeItems';
import * as ChangeTaskReferenceObjectsGetChangeItem from './ChangeTask.ReferenceObjects.GetChangeItem';
import * as ChangeTaskReferenceObjectsGetChangeItems from './ChangeTask.ReferenceObjects.GetChangeItems';
import * as ChangeTaskResultingLinksGetResultingLinkItem from './ChangeTask.ResultingLinks.GetResultingLinkItem';
import * as ChangeTaskResultingLinksGetResultingLinkItems from './ChangeTask.ResultingLinks.GetResultingLinkItems';
import * as ChangeTaskResultingLinksPostResultingLinkItem from './ChangeTask.ResultingLinks.PostResultingLinkItem';
import * as ChangeTaskResultingLinksUpdateResultingLinkItem from './ChangeTask.ResultingLinks.UpdateResultingLinkItem';
import * as ChangeTaskResultingObjectsGetChangeable from './ChangeTask.ResultingObjects.GetChangeable';
import * as ChangeTaskResultingObjectsGetChangeables from './ChangeTask.ResultingObjects.GetChangeables';
import * as ChangeTaskRevisionsGetChangeItem from './ChangeTask.Revisions.GetChangeItem';
import * as ChangeTaskRevisionsGetChangeItems from './ChangeTask.Revisions.GetChangeItems';
import * as ChangeTaskUnincorporatedLinksGetUnincorporatedLinkItem from './ChangeTask.UnincorporatedLinks.GetUnincorporatedLinkItem';
import * as ChangeTaskUnincorporatedLinksGetUnincorporatedLinkItems from './ChangeTask.UnincorporatedLinks.GetUnincorporatedLinkItems';
import * as ChangeTaskVersionsGetChangeItem from './ChangeTask.Versions.GetChangeItem';
import * as ChangeTaskVersionsGetChangeItems from './ChangeTask.Versions.GetChangeItems';
import * as FunctionGetChangeLinkTypeWithChangeObjectTypeContainer from './Function_GetChangeLinkType_With_ChangeObjectType_Container';
import * as GenericChangeRequestAffectedObjectsGetChangeable from './GenericChangeRequest.AffectedObjects.GetChangeable';
import * as GenericChangeRequestAffectedObjectsGetChangeables from './GenericChangeRequest.AffectedObjects.GetChangeables';
import * as GenericChangeRequestAffectsLinksGetAffectsLinkItem from './GenericChangeRequest.AffectsLinks.GetAffectsLinkItem';
import * as GenericChangeRequestAffectsLinksGetAffectsLinkItems from './GenericChangeRequest.AffectsLinks.GetAffectsLinkItems';
import * as GenericChangeRequestCreatorGetUser from './GenericChangeRequest.Creator.GetUser';
import * as GenericChangeRequestModifierGetUser from './GenericChangeRequest.Modifier.GetUser';
import * as GenericChangeRequestOrganizationGetOrganization from './GenericChangeRequest.Organization.GetOrganization';
import * as GenericChangeRequestProcessLinksGetProcessLinkItem from './GenericChangeRequest.ProcessLinks.GetProcessLinkItem';
import * as GenericChangeRequestProcessLinksGetProcessLinkItems from './GenericChangeRequest.ProcessLinks.GetProcessLinkItems';
import * as GenericChangeRequestProcessObjectsGetChangeItem from './GenericChangeRequest.ProcessObjects.GetChangeItem';
import * as GenericChangeRequestProcessObjectsGetChangeItems from './GenericChangeRequest.ProcessObjects.GetChangeItems';
import * as GenericChangeRequestReferenceLinksGetReferenceLinkItem from './GenericChangeRequest.ReferenceLinks.GetReferenceLinkItem';
import * as GenericChangeRequestReferenceLinksGetReferenceLinkItems from './GenericChangeRequest.ReferenceLinks.GetReferenceLinkItems';
import * as GenericChangeRequestReferenceObjectsGetChangeItem from './GenericChangeRequest.ReferenceObjects.GetChangeItem';
import * as GenericChangeRequestReferenceObjectsGetChangeItems from './GenericChangeRequest.ReferenceObjects.GetChangeItems';
import * as GenericChangeRequestRevisionsGetChangeItem from './GenericChangeRequest.Revisions.GetChangeItem';
import * as GenericChangeRequestRevisionsGetChangeItems from './GenericChangeRequest.Revisions.GetChangeItems';
import * as GenericChangeRequestVersionsGetChangeItem from './GenericChangeRequest.Versions.GetChangeItem';
import * as GenericChangeRequestVersionsGetChangeItems from './GenericChangeRequest.Versions.GetChangeItems';
import * as GetChangeable from './GetChangeable';
import * as GetChangeables from './GetChangeables';
import * as GetChangeIssue from './GetChangeIssue';
import * as GetChangeIssues from './GetChangeIssues';
import * as GetChangeNotice from './GetChangeNotice';
import * as GetChangeNotices from './GetChangeNotices';
import * as GetChangeOrder from './GetChangeOrder';
import * as GetChangeOrders from './GetChangeOrders';
import * as GetChangeRequest from './GetChangeRequest';
import * as GetChangeRequests from './GetChangeRequests';
import * as GetChangeTask from './GetChangeTask';
import * as GetChangeTasks from './GetChangeTasks';
import * as GetDeviations from './GetDeviations';
import * as GetGenericChangeRequest from './GetGenericChangeRequest';
import * as GetGenericChangeRequests from './GetGenericChangeRequests';
import * as GetProblemReport from './GetProblemReport';
import * as GetProblemReports from './GetProblemReports';
import * as GetVariance from './GetVariance';
import * as GetVariances from './GetVariances';
import * as GetWaivers from './GetWaivers';
import * as PostChangeNotice from './PostChangeNotice';
import * as PostChangeRequest from './PostChangeRequest';
import * as PostChangeTask from './PostChangeTask';
import * as PostProblemReport from './PostProblemReport';
import * as PostVariance from './PostVariance';
import * as ProblemReportAffectedObjectsGetChangeable from './ProblemReport.AffectedObjects.GetChangeable';
import * as ProblemReportAffectedObjectsGetChangeables from './ProblemReport.AffectedObjects.GetChangeables';
import * as ProblemReportAffectsLinksGetAffectsLinkItem from './ProblemReport.AffectsLinks.GetAffectsLinkItem';
import * as ProblemReportAffectsLinksGetAffectsLinkItems from './ProblemReport.AffectsLinks.GetAffectsLinkItems';
import * as ProblemReportAttachmentsDeletePtcContentItem from './ProblemReport.Attachments.DeletePTC.ContentItem';
import * as ProblemReportAttachmentsGetContentItem from './ProblemReport.Attachments.GetContentItem';
import * as ProblemReportAttachmentsGetContentItems from './ProblemReport.Attachments.GetContentItems';
import * as ProblemReportAttachmentsPostContentItem from './ProblemReport.Attachments.PostContentItem';
import * as ProblemReportAttachmentsUpdateContentItem from './ProblemReport.Attachments.UpdateContentItem';
import * as ProblemReportChangeAdministratorIGetPrincipal from './ProblemReport.ChangeAdministratorI.GetPrincipal';
import * as ProblemReportChangeAdministratorIGetPrincipals from './ProblemReport.ChangeAdministratorI.GetPrincipals';
import * as ProblemReportCiAffectLinksGetReportedAgainstLinkItem from './ProblemReport.CIAffectLinks.GetReportedAgainstLinkItem';
import * as ProblemReportCiAffectLinksGetReportedAgainstLinkItems from './ProblemReport.CIAffectLinks.GetReportedAgainstLinkItems';
import * as ProblemReportCiAffectLinksPostReportedAgainstLinkItem from './ProblemReport.CIAffectLinks.PostReportedAgainstLinkItem';
import * as ProblemReportCiAffectLinksUpdateReportedAgainstLinkItem from './ProblemReport.CIAffectLinks.UpdateReportedAgainstLinkItem';
import * as ProblemReportContextGetContainer from './ProblemReport.Context.GetContainer';
import * as ProblemReportCreatorGetUser from './ProblemReport.Creator.GetUser';
import * as ProblemReportFolderGetFolder from './ProblemReport.Folder.GetFolder';
import * as ProblemReportModifierGetUser from './ProblemReport.Modifier.GetUser';
import * as ProblemReportOrganizationGetOrganization from './ProblemReport.Organization.GetOrganization';
import * as ProblemReportProcessLinksGetProcessLinkItem from './ProblemReport.ProcessLinks.GetProcessLinkItem';
import * as ProblemReportProcessLinksGetProcessLinkItems from './ProblemReport.ProcessLinks.GetProcessLinkItems';
import * as ProblemReportProcessObjectsGetChangeItem from './ProblemReport.ProcessObjects.GetChangeItem';
import * as ProblemReportProcessObjectsGetChangeItems from './ProblemReport.ProcessObjects.GetChangeItems';
import * as ProblemReportReferenceLinksGetReferenceLinkItem from './ProblemReport.ReferenceLinks.GetReferenceLinkItem';
import * as ProblemReportReferenceLinksGetReferenceLinkItems from './ProblemReport.ReferenceLinks.GetReferenceLinkItems';
import * as ProblemReportReferenceObjectsGetChangeItem from './ProblemReport.ReferenceObjects.GetChangeItem';
import * as ProblemReportReferenceObjectsGetChangeItems from './ProblemReport.ReferenceObjects.GetChangeItems';
import * as ProblemReportRevisionsGetChangeItem from './ProblemReport.Revisions.GetChangeItem';
import * as ProblemReportRevisionsGetChangeItems from './ProblemReport.Revisions.GetChangeItems';
import * as ProblemReportVersionsGetChangeItem from './ProblemReport.Versions.GetChangeItem';
import * as ProblemReportVersionsGetChangeItems from './ProblemReport.Versions.GetChangeItems';
import * as PtcChangeMgmtChangeableActionSetStateWith from './PTC.ChangeMgmt.Changeable.Action_SetState_With';
import * as PtcChangeMgmtChangeableFunctionGetLifeCycleTemplate from './PTC.ChangeMgmt.Changeable.Function_GetLifeCycleTemplate';
import * as PtcChangeMgmtChangeableFunctionGetValidStateTransitions from './PTC.ChangeMgmt.Changeable.Function_GetValidStateTransitions';
import * as PtcChangeMgmtChangeIssueActionSetStateWith from './PTC.ChangeMgmt.ChangeIssue.Action_SetState_With';
import * as PtcChangeMgmtChangeIssueFunctionGetLifeCycleTemplate from './PTC.ChangeMgmt.ChangeIssue.Function_GetLifeCycleTemplate';
import * as PtcChangeMgmtChangeIssueFunctionGetValidStateTransitions from './PTC.ChangeMgmt.ChangeIssue.Function_GetValidStateTransitions';
import * as PtcChangeMgmtChangeNoticeActionReserveWith from './PTC.ChangeMgmt.ChangeNotice.Action_Reserve_With';
import * as PtcChangeMgmtChangeNoticeActionSetStateWith from './PTC.ChangeMgmt.ChangeNotice.Action_SetState_With';
import * as PtcChangeMgmtChangeNoticeActionSubmit from './PTC.ChangeMgmt.ChangeNotice.Action_Submit';
import * as PtcChangeMgmtChangeNoticeActionUndoReservation from './PTC.ChangeMgmt.ChangeNotice.Action_UndoReservation';
import * as PtcChangeMgmtChangeNoticeActionUploadStage1ActionWithDelegateName from './PTC.ChangeMgmt.ChangeNotice.Action_UploadStage1Action_With_DelegateName';
import * as PtcChangeMgmtChangeNoticeActionUploadStage3ActionWith from './PTC.ChangeMgmt.ChangeNotice.Action_UploadStage3Action_With';
import * as PtcChangeMgmtChangeNoticeFunctionGetLifeCycleTemplate from './PTC.ChangeMgmt.ChangeNotice.Function_GetLifeCycleTemplate';
import * as PtcChangeMgmtChangeNoticeFunctionGetValidStateTransitions from './PTC.ChangeMgmt.ChangeNotice.Function_GetValidStateTransitions';
import * as PtcChangeMgmtChangeNoticeFunctionIsReservedByMe from './PTC.ChangeMgmt.ChangeNotice.Function_IsReservedByMe';
import * as PtcChangeMgmtChangeNoticeFunctionIsSubmitted from './PTC.ChangeMgmt.ChangeNotice.Function_IsSubmitted';
import * as PtcChangeMgmtChangeOrderActionSetStateWith from './PTC.ChangeMgmt.ChangeOrder.Action_SetState_With';
import * as PtcChangeMgmtChangeOrderFunctionGetLifeCycleTemplate from './PTC.ChangeMgmt.ChangeOrder.Function_GetLifeCycleTemplate';
import * as PtcChangeMgmtChangeOrderFunctionGetValidStateTransitions from './PTC.ChangeMgmt.ChangeOrder.Function_GetValidStateTransitions';
import * as PtcChangeMgmtChangeRequestActionReserveWith from './PTC.ChangeMgmt.ChangeRequest.Action_Reserve_With';
import * as PtcChangeMgmtChangeRequestActionSetStateWith from './PTC.ChangeMgmt.ChangeRequest.Action_SetState_With';
import * as PtcChangeMgmtChangeRequestActionSubmit from './PTC.ChangeMgmt.ChangeRequest.Action_Submit';
import * as PtcChangeMgmtChangeRequestActionUndoReservation from './PTC.ChangeMgmt.ChangeRequest.Action_UndoReservation';
import * as PtcChangeMgmtChangeRequestActionUploadStage1ActionWithDelegateName from './PTC.ChangeMgmt.ChangeRequest.Action_UploadStage1Action_With_DelegateName';
import * as PtcChangeMgmtChangeRequestActionUploadStage3ActionWith from './PTC.ChangeMgmt.ChangeRequest.Action_UploadStage3Action_With';
import * as PtcChangeMgmtChangeRequestFunctionGetLifeCycleTemplate from './PTC.ChangeMgmt.ChangeRequest.Function_GetLifeCycleTemplate';
import * as PtcChangeMgmtChangeRequestFunctionGetValidStateTransitions from './PTC.ChangeMgmt.ChangeRequest.Function_GetValidStateTransitions';
import * as PtcChangeMgmtChangeRequestFunctionIsReservedByMe from './PTC.ChangeMgmt.ChangeRequest.Function_IsReservedByMe';
import * as PtcChangeMgmtChangeRequestFunctionIsSubmitted from './PTC.ChangeMgmt.ChangeRequest.Function_IsSubmitted';
import * as PtcChangeMgmtChangeTaskActionReserveWith from './PTC.ChangeMgmt.ChangeTask.Action_Reserve_With';
import * as PtcChangeMgmtChangeTaskActionSetStateWith from './PTC.ChangeMgmt.ChangeTask.Action_SetState_With';
import * as PtcChangeMgmtChangeTaskActionUndoReservation from './PTC.ChangeMgmt.ChangeTask.Action_UndoReservation';
import * as PtcChangeMgmtChangeTaskActionUploadStage1ActionWithDelegateName from './PTC.ChangeMgmt.ChangeTask.Action_UploadStage1Action_With_DelegateName';
import * as PtcChangeMgmtChangeTaskActionUploadStage3ActionWith from './PTC.ChangeMgmt.ChangeTask.Action_UploadStage3Action_With';
import * as PtcChangeMgmtChangeTaskFunctionGetLifeCycleTemplate from './PTC.ChangeMgmt.ChangeTask.Function_GetLifeCycleTemplate';
import * as PtcChangeMgmtChangeTaskFunctionGetValidStateTransitions from './PTC.ChangeMgmt.ChangeTask.Function_GetValidStateTransitions';
import * as PtcChangeMgmtChangeTaskFunctionIsReservedByMe from './PTC.ChangeMgmt.ChangeTask.Function_IsReservedByMe';
import * as PtcChangeMgmtGenericChangeRequestActionSetStateWith from './PTC.ChangeMgmt.GenericChangeRequest.Action_SetState_With';
import * as PtcChangeMgmtGenericChangeRequestFunctionGetLifeCycleTemplate from './PTC.ChangeMgmt.GenericChangeRequest.Function_GetLifeCycleTemplate';
import * as PtcChangeMgmtGenericChangeRequestFunctionGetValidStateTransitions from './PTC.ChangeMgmt.GenericChangeRequest.Function_GetValidStateTransitions';
import * as PtcChangeMgmtProblemReportActionReserveWith from './PTC.ChangeMgmt.ProblemReport.Action_Reserve_With';
import * as PtcChangeMgmtProblemReportActionSetStateWith from './PTC.ChangeMgmt.ProblemReport.Action_SetState_With';
import * as PtcChangeMgmtProblemReportActionSubmit from './PTC.ChangeMgmt.ProblemReport.Action_Submit';
import * as PtcChangeMgmtProblemReportActionUndoReservation from './PTC.ChangeMgmt.ProblemReport.Action_UndoReservation';
import * as PtcChangeMgmtProblemReportActionUploadStage1ActionWithDelegateName from './PTC.ChangeMgmt.ProblemReport.Action_UploadStage1Action_With_DelegateName';
import * as PtcChangeMgmtProblemReportActionUploadStage3ActionWith from './PTC.ChangeMgmt.ProblemReport.Action_UploadStage3Action_With';
import * as PtcChangeMgmtProblemReportFunctionGetLifeCycleTemplate from './PTC.ChangeMgmt.ProblemReport.Function_GetLifeCycleTemplate';
import * as PtcChangeMgmtProblemReportFunctionGetValidStateTransitions from './PTC.ChangeMgmt.ProblemReport.Function_GetValidStateTransitions';
import * as PtcChangeMgmtProblemReportFunctionIsReservedByMe from './PTC.ChangeMgmt.ProblemReport.Function_IsReservedByMe';
import * as PtcChangeMgmtProblemReportFunctionIsSubmitted from './PTC.ChangeMgmt.ProblemReport.Function_IsSubmitted';
import * as PtcChangeMgmtVarianceActionReserveWith from './PTC.ChangeMgmt.Variance.Action_Reserve_With';
import * as PtcChangeMgmtVarianceActionSetStateWith from './PTC.ChangeMgmt.Variance.Action_SetState_With';
import * as PtcChangeMgmtVarianceActionSubmit from './PTC.ChangeMgmt.Variance.Action_Submit';
import * as PtcChangeMgmtVarianceActionUndoReservation from './PTC.ChangeMgmt.Variance.Action_UndoReservation';
import * as PtcChangeMgmtVarianceActionUploadStage1ActionWithDelegateName from './PTC.ChangeMgmt.Variance.Action_UploadStage1Action_With_DelegateName';
import * as PtcChangeMgmtVarianceActionUploadStage3ActionWith from './PTC.ChangeMgmt.Variance.Action_UploadStage3Action_With';
import * as PtcChangeMgmtVarianceFunctionGetLifeCycleTemplate from './PTC.ChangeMgmt.Variance.Function_GetLifeCycleTemplate';
import * as PtcChangeMgmtVarianceFunctionGetValidStateTransitions from './PTC.ChangeMgmt.Variance.Function_GetValidStateTransitions';
import * as PtcChangeMgmtVarianceFunctionIsReservedByMe from './PTC.ChangeMgmt.Variance.Function_IsReservedByMe';
import * as PtcChangeMgmtVarianceFunctionIsSubmitted from './PTC.ChangeMgmt.Variance.Function_IsSubmitted';
import * as UpdateChangeNotice from './UpdateChangeNotice';
import * as UpdateChangeRequest from './UpdateChangeRequest';
import * as UpdateChangeTask from './UpdateChangeTask';
import * as UpdateProblemReport from './UpdateProblemReport';
import * as UpdateVariance from './UpdateVariance';
import * as VarianceAffectedObjectsGetChangeable from './Variance.AffectedObjects.GetChangeable';
import * as VarianceAffectedObjectsGetChangeables from './Variance.AffectedObjects.GetChangeables';
import * as VarianceAffectsLinksGetAffectsLinkItem from './Variance.AffectsLinks.GetAffectsLinkItem';
import * as VarianceAffectsLinksGetAffectsLinkItems from './Variance.AffectsLinks.GetAffectsLinkItems';
import * as VarianceAttachmentsDeletePtcContentItem from './Variance.Attachments.DeletePTC.ContentItem';
import * as VarianceAttachmentsGetContentItem from './Variance.Attachments.GetContentItem';
import * as VarianceAttachmentsGetContentItems from './Variance.Attachments.GetContentItems';
import * as VarianceAttachmentsPostContentItem from './Variance.Attachments.PostContentItem';
import * as VarianceAttachmentsUpdateContentItem from './Variance.Attachments.UpdateContentItem';
import * as VarianceChangeAdministratorIGetPrincipal from './Variance.ChangeAdministratorI.GetPrincipal';
import * as VarianceChangeAdministratorIGetPrincipals from './Variance.ChangeAdministratorI.GetPrincipals';
import * as VarianceCiAffectLinksGetReportedAgainstLinkItem from './Variance.CIAffectLinks.GetReportedAgainstLinkItem';
import * as VarianceCiAffectLinksGetReportedAgainstLinkItems from './Variance.CIAffectLinks.GetReportedAgainstLinkItems';
import * as VarianceCiAffectLinksPostReportedAgainstLinkItem from './Variance.CIAffectLinks.PostReportedAgainstLinkItem';
import * as VarianceCiAffectLinksUpdateReportedAgainstLinkItem from './Variance.CIAffectLinks.UpdateReportedAgainstLinkItem';
import * as VarianceContextGetContainer from './Variance.Context.GetContainer';
import * as VarianceCreatorGetUser from './Variance.Creator.GetUser';
import * as VarianceFolderGetFolder from './Variance.Folder.GetFolder';
import * as VarianceModifierGetUser from './Variance.Modifier.GetUser';
import * as VarianceOrganizationGetOrganization from './Variance.Organization.GetOrganization';
import * as VarianceProcessLinksGetProcessLinkItem from './Variance.ProcessLinks.GetProcessLinkItem';
import * as VarianceProcessLinksGetProcessLinkItems from './Variance.ProcessLinks.GetProcessLinkItems';
import * as VarianceProcessObjectsGetChangeItem from './Variance.ProcessObjects.GetChangeItem';
import * as VarianceProcessObjectsGetChangeItems from './Variance.ProcessObjects.GetChangeItems';
import * as VarianceReferenceLinksGetReferenceLinkItem from './Variance.ReferenceLinks.GetReferenceLinkItem';
import * as VarianceReferenceLinksGetReferenceLinkItems from './Variance.ReferenceLinks.GetReferenceLinkItems';
import * as VarianceReferenceObjectsGetChangeItem from './Variance.ReferenceObjects.GetChangeItem';
import * as VarianceReferenceObjectsGetChangeItems from './Variance.ReferenceObjects.GetChangeItems';
import * as VarianceRevisionsGetChangeItem from './Variance.Revisions.GetChangeItem';
import * as VarianceRevisionsGetChangeItems from './Variance.Revisions.GetChangeItems';
import * as VarianceVarianceOwnersGetUser from './Variance.VarianceOwners.GetUser';
import * as VarianceVersionsGetChangeItem from './Variance.Versions.GetChangeItem';
import * as VarianceVersionsGetChangeItems from './Variance.Versions.GetChangeItems';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionCreateChangeNoticeHierarchy,
	ActionEditChangeNoticesSecurityLabels,
	ActionEditChangeRequestsSecurityLabels,
	ActionEditChangeTasksSecurityLabels,
	ActionEditProblemReportsSecurityLabels,
	ActionEditVariancesSecurityLabels,
	ActionSetPendingEffectivities,
	ActionSetStateChangeables,
	ActionSetStateChangeIssues,
	ActionSetStateChangeNotices,
	ActionSetStateChangeOrders,
	ActionSetStateChangeRequests,
	ActionSetStateChangeTasks,
	ActionSetStateGenericChangeRequests,
	ActionSetStateProblemReports,
	ActionSetStateVariances,
	ChangeableAffectedByChangeObjectsGetChangeItem,
	ChangeableAffectedByChangeObjectsGetChangeItems,
	ChangeableAffectedByLinksGetAffectsLinkItem,
	ChangeableAffectedByLinksGetAffectsLinkItems,
	ChangeableAffectedByObjectsGetChangeItem,
	ChangeableAffectedByObjectsGetChangeItems,
	ChangeableAffectedByTasksGetChangeItem,
	ChangeableAffectedByTasksGetChangeItems,
	ChangeableContextGetContainer,
	ChangeableCreatorGetUser,
	ChangeableModifierGetUser,
	ChangeableOrganizationGetOrganization,
	ChangeableResultedByChangeObjectsGetChangeItem,
	ChangeableResultedByChangeObjectsGetChangeItems,
	ChangeableResultedByObjectsGetChangeItem,
	ChangeableResultedByObjectsGetChangeItems,
	ChangeableResultingByLinksGetResultingLinkItem,
	ChangeableResultingByLinksGetResultingLinkItems,
	ChangeableResultingByLinksPostResultingLinkItem,
	ChangeableResultingByLinksUpdateResultingLinkItem,
	ChangeableRevisionsGetChangeable,
	ChangeableRevisionsGetChangeables,
	ChangeableUnincorporatedByChangeObjectsGetChangeItem,
	ChangeableUnincorporatedByChangeObjectsGetChangeItems,
	ChangeableUnincorporatedByLinksGetUnincorporatedLinkItem,
	ChangeableUnincorporatedByLinksGetUnincorporatedLinkItems,
	ChangeableUnincorporatedByObjectsGetChangeItem,
	ChangeableUnincorporatedByObjectsGetChangeItems,
	ChangeableVersionsGetChangeable,
	ChangeableVersionsGetChangeables,
	ChangeIssueAffectedObjectsGetChangeable,
	ChangeIssueAffectedObjectsGetChangeables,
	ChangeIssueAffectsLinksGetAffectsLinkItem,
	ChangeIssueAffectsLinksGetAffectsLinkItems,
	ChangeIssueCiAffectLinksGetReportedAgainstLinkItem,
	ChangeIssueCiAffectLinksGetReportedAgainstLinkItems,
	ChangeIssueCiAffectLinksPostReportedAgainstLinkItem,
	ChangeIssueCiAffectLinksUpdateReportedAgainstLinkItem,
	ChangeIssueCreatorGetUser,
	ChangeIssueModifierGetUser,
	ChangeIssueOrganizationGetOrganization,
	ChangeIssueProcessLinksGetProcessLinkItem,
	ChangeIssueProcessLinksGetProcessLinkItems,
	ChangeIssueProcessObjectsGetChangeItem,
	ChangeIssueProcessObjectsGetChangeItems,
	ChangeIssueReferenceLinksGetReferenceLinkItem,
	ChangeIssueReferenceLinksGetReferenceLinkItems,
	ChangeIssueReferenceObjectsGetChangeItem,
	ChangeIssueReferenceObjectsGetChangeItems,
	ChangeIssueRevisionsGetChangeItem,
	ChangeIssueRevisionsGetChangeItems,
	ChangeIssueVersionsGetChangeItem,
	ChangeIssueVersionsGetChangeItems,
	ChangeNoticeAffectedObjectsGetChangeable,
	ChangeNoticeAffectedObjectsGetChangeables,
	ChangeNoticeAffectsLinksGetAffectsLinkItem,
	ChangeNoticeAffectsLinksGetAffectsLinkItems,
	ChangeNoticeAttachmentsDeletePtcContentItem,
	ChangeNoticeAttachmentsGetContentItem,
	ChangeNoticeAttachmentsGetContentItems,
	ChangeNoticeAttachmentsPostContentItem,
	ChangeNoticeAttachmentsUpdateContentItem,
	ChangeNoticeChangeAdministratorIGetPrincipal,
	ChangeNoticeChangeAdministratorIGetPrincipals,
	ChangeNoticeChangeAdministratorIiGetPrincipal,
	ChangeNoticeChangeAdministratorIiGetPrincipals,
	ChangeNoticeCnAffectLinksGetAffectedActivityDataLinkItem,
	ChangeNoticeCnAffectLinksGetAffectedActivityDataLinkItems,
	ChangeNoticeCnAffectLinksPostAffectedActivityDataLinkItem,
	ChangeNoticeCnAffectLinksUpdateAffectedActivityDataLinkItem,
	ChangeNoticeContextGetContainer,
	ChangeNoticeCreatorGetUser,
	ChangeNoticeFolderGetFolder,
	ChangeNoticeImplementationPlanGetChangeTask,
	ChangeNoticeImplementationPlanGetChangeTasks,
	ChangeNoticeModifierGetUser,
	ChangeNoticeOrganizationGetOrganization,
	ChangeNoticeProcessLinksGetProcessLinkItem,
	ChangeNoticeProcessLinksGetProcessLinkItems,
	ChangeNoticeProcessObjectsGetChangeItem,
	ChangeNoticeProcessObjectsGetChangeItems,
	ChangeNoticeReferenceLinksGetReferenceLinkItem,
	ChangeNoticeReferenceLinksGetReferenceLinkItems,
	ChangeNoticeReferenceObjectsGetChangeItem,
	ChangeNoticeReferenceObjectsGetChangeItems,
	ChangeNoticeResultingLinksGetResultingLinkItem,
	ChangeNoticeResultingLinksGetResultingLinkItems,
	ChangeNoticeResultingLinksPostResultingLinkItem,
	ChangeNoticeResultingLinksUpdateResultingLinkItem,
	ChangeNoticeResultingObjectsGetChangeable,
	ChangeNoticeResultingObjectsGetChangeables,
	ChangeNoticeRevisionsGetChangeItem,
	ChangeNoticeRevisionsGetChangeItems,
	ChangeNoticeUnincorporatedLinksGetUnincorporatedLinkItem,
	ChangeNoticeUnincorporatedLinksGetUnincorporatedLinkItems,
	ChangeNoticeVersionsGetChangeItem,
	ChangeNoticeVersionsGetChangeItems,
	ChangeOrderAffectedObjectsGetChangeable,
	ChangeOrderAffectedObjectsGetChangeables,
	ChangeOrderAffectsLinksGetAffectsLinkItem,
	ChangeOrderAffectsLinksGetAffectsLinkItems,
	ChangeOrderCnAffectLinksGetAffectedActivityDataLinkItem,
	ChangeOrderCnAffectLinksGetAffectedActivityDataLinkItems,
	ChangeOrderCreatorGetUser,
	ChangeOrderModifierGetUser,
	ChangeOrderOrganizationGetOrganization,
	ChangeOrderProcessLinksGetProcessLinkItem,
	ChangeOrderProcessLinksGetProcessLinkItems,
	ChangeOrderProcessObjectsGetChangeItem,
	ChangeOrderProcessObjectsGetChangeItems,
	ChangeOrderReferenceLinksGetReferenceLinkItem,
	ChangeOrderReferenceLinksGetReferenceLinkItems,
	ChangeOrderReferenceObjectsGetChangeItem,
	ChangeOrderReferenceObjectsGetChangeItems,
	ChangeOrderResultingLinksGetResultingLinkItem,
	ChangeOrderResultingLinksGetResultingLinkItems,
	ChangeOrderResultingObjectsGetChangeable,
	ChangeOrderResultingObjectsGetChangeables,
	ChangeOrderRevisionsGetChangeItem,
	ChangeOrderRevisionsGetChangeItems,
	ChangeOrderUnincorporatedLinksGetUnincorporatedLinkItem,
	ChangeOrderUnincorporatedLinksGetUnincorporatedLinkItems,
	ChangeOrderVersionsGetChangeItem,
	ChangeOrderVersionsGetChangeItems,
	ChangeRequestAffectedObjectsGetChangeable,
	ChangeRequestAffectedObjectsGetChangeables,
	ChangeRequestAffectsLinksGetAffectsLinkItem,
	ChangeRequestAffectsLinksGetAffectsLinkItems,
	ChangeRequestAttachmentsDeletePtcContentItem,
	ChangeRequestAttachmentsGetContentItem,
	ChangeRequestAttachmentsGetContentItems,
	ChangeRequestAttachmentsPostContentItem,
	ChangeRequestAttachmentsUpdateContentItem,
	ChangeRequestChangeAdministratorIGetPrincipal,
	ChangeRequestChangeAdministratorIGetPrincipals,
	ChangeRequestContextGetContainer,
	ChangeRequestCrAffectLinksGetRelevantRequestDataLinkItem,
	ChangeRequestCrAffectLinksGetRelevantRequestDataLinkItems,
	ChangeRequestCrAffectLinksPostRelevantRequestDataLinkItem,
	ChangeRequestCrAffectLinksUpdateRelevantRequestDataLinkItem,
	ChangeRequestCreatorGetUser,
	ChangeRequestFolderGetFolder,
	ChangeRequestModifierGetUser,
	ChangeRequestOrganizationGetOrganization,
	ChangeRequestProcessLinksGetProcessLinkItem,
	ChangeRequestProcessLinksGetProcessLinkItems,
	ChangeRequestProcessObjectsGetChangeItem,
	ChangeRequestProcessObjectsGetChangeItems,
	ChangeRequestReferenceLinksGetReferenceLinkItem,
	ChangeRequestReferenceLinksGetReferenceLinkItems,
	ChangeRequestReferenceObjectsGetChangeItem,
	ChangeRequestReferenceObjectsGetChangeItems,
	ChangeRequestRevisionsGetChangeItem,
	ChangeRequestRevisionsGetChangeItems,
	ChangeRequestVersionsGetChangeItem,
	ChangeRequestVersionsGetChangeItems,
	ChangeTaskAffectedObjectsGetChangeable,
	ChangeTaskAffectedObjectsGetChangeables,
	ChangeTaskAffectsLinksGetAffectsLinkItem,
	ChangeTaskAffectsLinksGetAffectsLinkItems,
	ChangeTaskAttachmentsDeletePtcContentItem,
	ChangeTaskAttachmentsGetContentItem,
	ChangeTaskAttachmentsGetContentItems,
	ChangeTaskAttachmentsPostContentItem,
	ChangeTaskAttachmentsUpdateContentItem,
	ChangeTaskCnAffectLinksGetAffectedActivityDataLinkItem,
	ChangeTaskCnAffectLinksGetAffectedActivityDataLinkItems,
	ChangeTaskCnAffectLinksPostAffectedActivityDataLinkItem,
	ChangeTaskCnAffectLinksUpdateAffectedActivityDataLinkItem,
	ChangeTaskContextGetContainer,
	ChangeTaskCreatorGetUser,
	ChangeTaskModifierGetUser,
	ChangeTaskOrganizationGetOrganization,
	ChangeTaskProcessObjectsGetChangeItem,
	ChangeTaskProcessObjectsGetChangeItems,
	ChangeTaskReferenceObjectsGetChangeItem,
	ChangeTaskReferenceObjectsGetChangeItems,
	ChangeTaskResultingLinksGetResultingLinkItem,
	ChangeTaskResultingLinksGetResultingLinkItems,
	ChangeTaskResultingLinksPostResultingLinkItem,
	ChangeTaskResultingLinksUpdateResultingLinkItem,
	ChangeTaskResultingObjectsGetChangeable,
	ChangeTaskResultingObjectsGetChangeables,
	ChangeTaskRevisionsGetChangeItem,
	ChangeTaskRevisionsGetChangeItems,
	ChangeTaskUnincorporatedLinksGetUnincorporatedLinkItem,
	ChangeTaskUnincorporatedLinksGetUnincorporatedLinkItems,
	ChangeTaskVersionsGetChangeItem,
	ChangeTaskVersionsGetChangeItems,
	FunctionGetChangeLinkTypeWithChangeObjectTypeContainer,
	GenericChangeRequestAffectedObjectsGetChangeable,
	GenericChangeRequestAffectedObjectsGetChangeables,
	GenericChangeRequestAffectsLinksGetAffectsLinkItem,
	GenericChangeRequestAffectsLinksGetAffectsLinkItems,
	GenericChangeRequestCreatorGetUser,
	GenericChangeRequestModifierGetUser,
	GenericChangeRequestOrganizationGetOrganization,
	GenericChangeRequestProcessLinksGetProcessLinkItem,
	GenericChangeRequestProcessLinksGetProcessLinkItems,
	GenericChangeRequestProcessObjectsGetChangeItem,
	GenericChangeRequestProcessObjectsGetChangeItems,
	GenericChangeRequestReferenceLinksGetReferenceLinkItem,
	GenericChangeRequestReferenceLinksGetReferenceLinkItems,
	GenericChangeRequestReferenceObjectsGetChangeItem,
	GenericChangeRequestReferenceObjectsGetChangeItems,
	GenericChangeRequestRevisionsGetChangeItem,
	GenericChangeRequestRevisionsGetChangeItems,
	GenericChangeRequestVersionsGetChangeItem,
	GenericChangeRequestVersionsGetChangeItems,
	GetChangeable,
	GetChangeables,
	GetChangeIssue,
	GetChangeIssues,
	GetChangeNotice,
	GetChangeNotices,
	GetChangeOrder,
	GetChangeOrders,
	GetChangeRequest,
	GetChangeRequests,
	GetChangeTask,
	GetChangeTasks,
	GetDeviations,
	GetGenericChangeRequest,
	GetGenericChangeRequests,
	GetProblemReport,
	GetProblemReports,
	GetVariance,
	GetVariances,
	GetWaivers,
	PostChangeNotice,
	PostChangeRequest,
	PostChangeTask,
	PostProblemReport,
	PostVariance,
	ProblemReportAffectedObjectsGetChangeable,
	ProblemReportAffectedObjectsGetChangeables,
	ProblemReportAffectsLinksGetAffectsLinkItem,
	ProblemReportAffectsLinksGetAffectsLinkItems,
	ProblemReportAttachmentsDeletePtcContentItem,
	ProblemReportAttachmentsGetContentItem,
	ProblemReportAttachmentsGetContentItems,
	ProblemReportAttachmentsPostContentItem,
	ProblemReportAttachmentsUpdateContentItem,
	ProblemReportChangeAdministratorIGetPrincipal,
	ProblemReportChangeAdministratorIGetPrincipals,
	ProblemReportCiAffectLinksGetReportedAgainstLinkItem,
	ProblemReportCiAffectLinksGetReportedAgainstLinkItems,
	ProblemReportCiAffectLinksPostReportedAgainstLinkItem,
	ProblemReportCiAffectLinksUpdateReportedAgainstLinkItem,
	ProblemReportContextGetContainer,
	ProblemReportCreatorGetUser,
	ProblemReportFolderGetFolder,
	ProblemReportModifierGetUser,
	ProblemReportOrganizationGetOrganization,
	ProblemReportProcessLinksGetProcessLinkItem,
	ProblemReportProcessLinksGetProcessLinkItems,
	ProblemReportProcessObjectsGetChangeItem,
	ProblemReportProcessObjectsGetChangeItems,
	ProblemReportReferenceLinksGetReferenceLinkItem,
	ProblemReportReferenceLinksGetReferenceLinkItems,
	ProblemReportReferenceObjectsGetChangeItem,
	ProblemReportReferenceObjectsGetChangeItems,
	ProblemReportRevisionsGetChangeItem,
	ProblemReportRevisionsGetChangeItems,
	ProblemReportVersionsGetChangeItem,
	ProblemReportVersionsGetChangeItems,
	PtcChangeMgmtChangeableActionSetStateWith,
	PtcChangeMgmtChangeableFunctionGetLifeCycleTemplate,
	PtcChangeMgmtChangeableFunctionGetValidStateTransitions,
	PtcChangeMgmtChangeIssueActionSetStateWith,
	PtcChangeMgmtChangeIssueFunctionGetLifeCycleTemplate,
	PtcChangeMgmtChangeIssueFunctionGetValidStateTransitions,
	PtcChangeMgmtChangeNoticeActionReserveWith,
	PtcChangeMgmtChangeNoticeActionSetStateWith,
	PtcChangeMgmtChangeNoticeActionSubmit,
	PtcChangeMgmtChangeNoticeActionUndoReservation,
	PtcChangeMgmtChangeNoticeActionUploadStage1ActionWithDelegateName,
	PtcChangeMgmtChangeNoticeActionUploadStage3ActionWith,
	PtcChangeMgmtChangeNoticeFunctionGetLifeCycleTemplate,
	PtcChangeMgmtChangeNoticeFunctionGetValidStateTransitions,
	PtcChangeMgmtChangeNoticeFunctionIsReservedByMe,
	PtcChangeMgmtChangeNoticeFunctionIsSubmitted,
	PtcChangeMgmtChangeOrderActionSetStateWith,
	PtcChangeMgmtChangeOrderFunctionGetLifeCycleTemplate,
	PtcChangeMgmtChangeOrderFunctionGetValidStateTransitions,
	PtcChangeMgmtChangeRequestActionReserveWith,
	PtcChangeMgmtChangeRequestActionSetStateWith,
	PtcChangeMgmtChangeRequestActionSubmit,
	PtcChangeMgmtChangeRequestActionUndoReservation,
	PtcChangeMgmtChangeRequestActionUploadStage1ActionWithDelegateName,
	PtcChangeMgmtChangeRequestActionUploadStage3ActionWith,
	PtcChangeMgmtChangeRequestFunctionGetLifeCycleTemplate,
	PtcChangeMgmtChangeRequestFunctionGetValidStateTransitions,
	PtcChangeMgmtChangeRequestFunctionIsReservedByMe,
	PtcChangeMgmtChangeRequestFunctionIsSubmitted,
	PtcChangeMgmtChangeTaskActionReserveWith,
	PtcChangeMgmtChangeTaskActionSetStateWith,
	PtcChangeMgmtChangeTaskActionUndoReservation,
	PtcChangeMgmtChangeTaskActionUploadStage1ActionWithDelegateName,
	PtcChangeMgmtChangeTaskActionUploadStage3ActionWith,
	PtcChangeMgmtChangeTaskFunctionGetLifeCycleTemplate,
	PtcChangeMgmtChangeTaskFunctionGetValidStateTransitions,
	PtcChangeMgmtChangeTaskFunctionIsReservedByMe,
	PtcChangeMgmtGenericChangeRequestActionSetStateWith,
	PtcChangeMgmtGenericChangeRequestFunctionGetLifeCycleTemplate,
	PtcChangeMgmtGenericChangeRequestFunctionGetValidStateTransitions,
	PtcChangeMgmtProblemReportActionReserveWith,
	PtcChangeMgmtProblemReportActionSetStateWith,
	PtcChangeMgmtProblemReportActionSubmit,
	PtcChangeMgmtProblemReportActionUndoReservation,
	PtcChangeMgmtProblemReportActionUploadStage1ActionWithDelegateName,
	PtcChangeMgmtProblemReportActionUploadStage3ActionWith,
	PtcChangeMgmtProblemReportFunctionGetLifeCycleTemplate,
	PtcChangeMgmtProblemReportFunctionGetValidStateTransitions,
	PtcChangeMgmtProblemReportFunctionIsReservedByMe,
	PtcChangeMgmtProblemReportFunctionIsSubmitted,
	PtcChangeMgmtVarianceActionReserveWith,
	PtcChangeMgmtVarianceActionSetStateWith,
	PtcChangeMgmtVarianceActionSubmit,
	PtcChangeMgmtVarianceActionUndoReservation,
	PtcChangeMgmtVarianceActionUploadStage1ActionWithDelegateName,
	PtcChangeMgmtVarianceActionUploadStage3ActionWith,
	PtcChangeMgmtVarianceFunctionGetLifeCycleTemplate,
	PtcChangeMgmtVarianceFunctionGetValidStateTransitions,
	PtcChangeMgmtVarianceFunctionIsReservedByMe,
	PtcChangeMgmtVarianceFunctionIsSubmitted,
	UpdateChangeNotice,
	UpdateChangeRequest,
	UpdateChangeTask,
	UpdateProblemReport,
	UpdateVariance,
	VarianceAffectedObjectsGetChangeable,
	VarianceAffectedObjectsGetChangeables,
	VarianceAffectsLinksGetAffectsLinkItem,
	VarianceAffectsLinksGetAffectsLinkItems,
	VarianceAttachmentsDeletePtcContentItem,
	VarianceAttachmentsGetContentItem,
	VarianceAttachmentsGetContentItems,
	VarianceAttachmentsPostContentItem,
	VarianceAttachmentsUpdateContentItem,
	VarianceChangeAdministratorIGetPrincipal,
	VarianceChangeAdministratorIGetPrincipals,
	VarianceCiAffectLinksGetReportedAgainstLinkItem,
	VarianceCiAffectLinksGetReportedAgainstLinkItems,
	VarianceCiAffectLinksPostReportedAgainstLinkItem,
	VarianceCiAffectLinksUpdateReportedAgainstLinkItem,
	VarianceContextGetContainer,
	VarianceCreatorGetUser,
	VarianceFolderGetFolder,
	VarianceModifierGetUser,
	VarianceOrganizationGetOrganization,
	VarianceProcessLinksGetProcessLinkItem,
	VarianceProcessLinksGetProcessLinkItems,
	VarianceProcessObjectsGetChangeItem,
	VarianceProcessObjectsGetChangeItems,
	VarianceReferenceLinksGetReferenceLinkItem,
	VarianceReferenceLinksGetReferenceLinkItems,
	VarianceReferenceObjectsGetChangeItem,
	VarianceReferenceObjectsGetChangeItems,
	VarianceRevisionsGetChangeItem,
	VarianceRevisionsGetChangeItems,
	VarianceVarianceOwnersGetUser,
	VarianceVersionsGetChangeItem,
	VarianceVersionsGetChangeItems,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'BasePath',
		name: 'basePath',
		default: '/Windchill/servlet/odata/v7/ChangeMgmt',
		type: 'hidden',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
			},
		},
		default: 'GET /ChangeIssues',
		options: [
			{
				name: 'Action_CreateChangeNoticeHierarchy',
				value: 'POST /CreateChangeNoticeHierarchy',
				description: 'Create hierarchy of ChangeNotice with ChangeTasks - post /CreateChangeNoticeHierarchy',
				action: 'Action_CreateChangeNoticeHierarchy',
			},
			{
				name: 'Action_EditChangeNoticesSecurityLabels',
				value: 'POST /EditChangeNoticesSecurityLabels',
				description: 'Execute EditChangeNoticesSecurityLabels - post /EditChangeNoticesSecurityLabels',
				action: 'Action_EditChangeNoticesSecurityLabels',
			},
			{
				name: 'Action_EditChangeRequestsSecurityLabels',
				value: 'POST /EditChangeRequestsSecurityLabels',
				description: 'Execute EditChangeRequestsSecurityLabels - post /EditChangeRequestsSecurityLabels',
				action: 'Action_EditChangeRequestsSecurityLabels',
			},
			{
				name: 'Action_EditChangeTasksSecurityLabels',
				value: 'POST /EditChangeTasksSecurityLabels',
				description: 'Execute EditChangeTasksSecurityLabels - post /EditChangeTasksSecurityLabels',
				action: 'Action_EditChangeTasksSecurityLabels',
			},
			{
				name: 'Action_EditProblemReportsSecurityLabels',
				value: 'POST /EditProblemReportsSecurityLabels',
				description: 'Execute EditProblemReportsSecurityLabels - post /EditProblemReportsSecurityLabels',
				action: 'Action_EditProblemReportsSecurityLabels',
			},
			{
				name: 'Action_EditVariancesSecurityLabels',
				value: 'POST /EditVariancesSecurityLabels',
				description: 'Execute EditVariancesSecurityLabels - post /EditVariancesSecurityLabels',
				action: 'Action_EditVariancesSecurityLabels',
			},
			{
				name: 'Action_SetPendingEffectivities',
				value: 'POST /SetPendingEffectivities',
				description: 'Execute SetPendingEffectivities - post /SetPendingEffectivities',
				action: 'Action_SetPendingEffectivities',
			},
			{
				name: 'Action_SetStateChangeables',
				value: 'POST /SetStateChangeables',
				description: 'Execute SetStateChangeables - post /SetStateChangeables',
				action: 'Action_SetStateChangeables',
			},
			{
				name: 'Action_SetStateChangeIssues',
				value: 'POST /SetStateChangeIssues',
				description: 'Execute SetStateChangeIssues - post /SetStateChangeIssues',
				action: 'Action_SetStateChangeIssues',
			},
			{
				name: 'Action_SetStateChangeNotices',
				value: 'POST /SetStateChangeNotices',
				description: 'Execute SetStateChangeNotices - post /SetStateChangeNotices',
				action: 'Action_SetStateChangeNotices',
			},
			{
				name: 'Action_SetStateChangeOrders',
				value: 'POST /SetStateChangeOrders',
				description: 'Execute SetStateChangeOrders - post /SetStateChangeOrders',
				action: 'Action_SetStateChangeOrders',
			},
			{
				name: 'Action_SetStateChangeRequests',
				value: 'POST /SetStateChangeRequests',
				description: 'Execute SetStateChangeRequests - post /SetStateChangeRequests',
				action: 'Action_SetStateChangeRequests',
			},
			{
				name: 'Action_SetStateChangeTasks',
				value: 'POST /SetStateChangeTasks',
				description: 'Execute SetStateChangeTasks - post /SetStateChangeTasks',
				action: 'Action_SetStateChangeTasks',
			},
			{
				name: 'Action_SetStateGenericChangeRequests',
				value: 'POST /SetStateGenericChangeRequests',
				description: 'Execute SetStateGenericChangeRequests - post /SetStateGenericChangeRequests',
				action: 'Action_SetStateGenericChangeRequests',
			},
			{
				name: 'Action_SetStateProblemReports',
				value: 'POST /SetStateProblemReports',
				description: 'Execute SetStateProblemReports - post /SetStateProblemReports',
				action: 'Action_SetStateProblemReports',
			},
			{
				name: 'Action_SetStateVariances',
				value: 'POST /SetStateVariances',
				description: 'Execute SetStateVariances - post /SetStateVariances',
				action: 'Action_SetStateVariances',
			},
			{
				name: 'Changeable.AffectedByChangeObjects.GetChangeItem',
				value: "GET /Changeables('{ChangeableId}')/AffectedByChangeObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Changeables('{ChangeableId}')/AffectedByChangeObjects('{ChangeItemId}')",
				action: 'Changeable.AffectedByChangeObjects.GetChangeItem',
			},
			{
				name: 'Changeable.AffectedByChangeObjects.GetChangeItems',
				value: "GET /Changeables('{ChangeableId}')/AffectedByChangeObjects",
				description: "Get ChangeItem - get /Changeables('{ChangeableId}')/AffectedByChangeObjects",
				action: 'Changeable.AffectedByChangeObjects.GetChangeItems',
			},
			{
				name: 'Changeable.AffectedByLinks.GetAffectsLinkItem',
				value: "GET /Changeables('{ChangeableId}')/AffectedByLinks('{AffectsLinkItemId}')",
				description: "Get AffectsLinkItem for a given AffectsLinkItemId - get /Changeables('{ChangeableId}')/AffectedByLinks('{AffectsLinkItemId}')",
				action: 'Changeable.AffectedByLinks.GetAffectsLinkItem',
			},
			{
				name: 'Changeable.AffectedByLinks.GetAffectsLinkItems',
				value: "GET /Changeables('{ChangeableId}')/AffectedByLinks",
				description: "Get AffectsLinkItem - get /Changeables('{ChangeableId}')/AffectedByLinks",
				action: 'Changeable.AffectedByLinks.GetAffectsLinkItems',
			},
			{
				name: 'Changeable.AffectedByObjects.GetChangeItem',
				value: "GET /Changeables('{ChangeableId}')/AffectedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Changeables('{ChangeableId}')/AffectedByObjects('{ChangeItemId}')",
				action: 'Changeable.AffectedByObjects.GetChangeItem',
			},
			{
				name: 'Changeable.AffectedByObjects.GetChangeItems',
				value: "GET /Changeables('{ChangeableId}')/AffectedByObjects",
				description: "Get ChangeItem - get /Changeables('{ChangeableId}')/AffectedByObjects",
				action: 'Changeable.AffectedByObjects.GetChangeItems',
			},
			{
				name: 'Changeable.AffectedByTasks.GetChangeItem',
				value: "GET /Changeables('{ChangeableId}')/AffectedByTasks('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Changeables('{ChangeableId}')/AffectedByTasks('{ChangeItemId}')",
				action: 'Changeable.AffectedByTasks.GetChangeItem',
			},
			{
				name: 'Changeable.AffectedByTasks.GetChangeItems',
				value: "GET /Changeables('{ChangeableId}')/AffectedByTasks",
				description: "Get ChangeItem - get /Changeables('{ChangeableId}')/AffectedByTasks",
				action: 'Changeable.AffectedByTasks.GetChangeItems',
			},
			{
				name: 'Changeable.Context.GetContainer',
				value: "GET /Changeables('{ChangeableId}')/Context",
				description: "Get Container - get /Changeables('{ChangeableId}')/Context",
				action: 'Changeable.Context.GetContainer',
			},
			{
				name: 'Changeable.Creator.GetUser',
				value: "GET /Changeables('{ChangeableId}')/Creator",
				description: "Get User - get /Changeables('{ChangeableId}')/Creator",
				action: 'Changeable.Creator.GetUser',
			},
			{
				name: 'Changeable.Modifier.GetUser',
				value: "GET /Changeables('{ChangeableId}')/Modifier",
				description: "Get User - get /Changeables('{ChangeableId}')/Modifier",
				action: 'Changeable.Modifier.GetUser',
			},
			{
				name: 'Changeable.Organization.GetOrganization',
				value: "GET /Changeables('{ChangeableId}')/Organization",
				description: "Get Organization - get /Changeables('{ChangeableId}')/Organization",
				action: 'Changeable.Organization.GetOrganization',
			},
			{
				name: 'Changeable.ResultedByChangeObjects.GetChangeItem',
				value: "GET /Changeables('{ChangeableId}')/ResultedByChangeObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Changeables('{ChangeableId}')/ResultedByChangeObjects('{ChangeItemId}')",
				action: 'Changeable.ResultedByChangeObjects.GetChangeItem',
			},
			{
				name: 'Changeable.ResultedByChangeObjects.GetChangeItems',
				value: "GET /Changeables('{ChangeableId}')/ResultedByChangeObjects",
				description: "Get ChangeItem - get /Changeables('{ChangeableId}')/ResultedByChangeObjects",
				action: 'Changeable.ResultedByChangeObjects.GetChangeItems',
			},
			{
				name: 'Changeable.ResultedByObjects.GetChangeItem',
				value: "GET /Changeables('{ChangeableId}')/ResultedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Changeables('{ChangeableId}')/ResultedByObjects('{ChangeItemId}')",
				action: 'Changeable.ResultedByObjects.GetChangeItem',
			},
			{
				name: 'Changeable.ResultedByObjects.GetChangeItems',
				value: "GET /Changeables('{ChangeableId}')/ResultedByObjects",
				description: "Get ChangeItem - get /Changeables('{ChangeableId}')/ResultedByObjects",
				action: 'Changeable.ResultedByObjects.GetChangeItems',
			},
			{
				name: 'Changeable.ResultingByLinks.GetResultingLinkItem',
				value: "GET /Changeables('{ChangeableId}')/ResultingByLinks('{ResultingLinkItemId}')",
				description: "Get ResultingLinkItem for a given ResultingLinkItemId - get /Changeables('{ChangeableId}')/ResultingByLinks('{ResultingLinkItemId}')",
				action: 'Changeable.ResultingByLinks.GetResultingLinkItem',
			},
			{
				name: 'Changeable.ResultingByLinks.GetResultingLinkItems',
				value: "GET /Changeables('{ChangeableId}')/ResultingByLinks",
				description: "Get ResultingLinkItem - get /Changeables('{ChangeableId}')/ResultingByLinks",
				action: 'Changeable.ResultingByLinks.GetResultingLinkItems',
			},
			{
				name: 'Changeable.ResultingByLinks.PostResultingLinkItem',
				value: "POST /Changeables('{ChangeableId}')/ResultingByLinks",
				description: "Create ResultingLinkItem - post /Changeables('{ChangeableId}')/ResultingByLinks",
				action: 'Changeable.ResultingByLinks.PostResultingLinkItem',
			},
			{
				name: 'Changeable.ResultingByLinks.UpdateResultingLinkItem',
				value: "PATCH /Changeables('{ChangeableId}')/ResultingByLinks('{ResultingLinkItemId}')",
				description: "Update an existing ResultingLinkItem - patch /Changeables('{ChangeableId}')/ResultingByLinks('{ResultingLinkItemId}')",
				action: 'Changeable.ResultingByLinks.UpdateResultingLinkItem',
			},
			{
				name: 'Changeable.Revisions.GetChangeable',
				value: "GET /Changeables('{ChangeableId}')/Revisions('{RevisionsId}')",
				description: "Get Changeable for a given RevisionsId - get /Changeables('{ChangeableId}')/Revisions('{RevisionsId}')",
				action: 'Changeable.Revisions.GetChangeable',
			},
			{
				name: 'Changeable.Revisions.GetChangeables',
				value: "GET /Changeables('{ChangeableId}')/Revisions",
				description: "Get Changeable - get /Changeables('{ChangeableId}')/Revisions",
				action: 'Changeable.Revisions.GetChangeables',
			},
			{
				name: 'Changeable.UnincorporatedByChangeObjects.GetChangeItem',
				value: "GET /Changeables('{ChangeableId}')/UnincorporatedByChangeObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Changeables('{ChangeableId}')/UnincorporatedByChangeObjects('{ChangeItemId}')",
				action: 'Changeable.UnincorporatedByChangeObjects.GetChangeItem',
			},
			{
				name: 'Changeable.UnincorporatedByChangeObjects.GetChangeItems',
				value: "GET /Changeables('{ChangeableId}')/UnincorporatedByChangeObjects",
				description: "Get ChangeItem - get /Changeables('{ChangeableId}')/UnincorporatedByChangeObjects",
				action: 'Changeable.UnincorporatedByChangeObjects.GetChangeItems',
			},
			{
				name: 'Changeable.UnincorporatedByLinks.GetUnincorporatedLinkItem',
				value: "GET /Changeables('{ChangeableId}')/UnincorporatedByLinks('{UnincorporatedLinkItemId}')",
				description: "Get UnincorporatedLinkItem for a given UnincorporatedLinkItemId - get /Changeables('{ChangeableId}')/UnincorporatedByLinks('{UnincorporatedLinkItemId}')",
				action: 'Changeable.UnincorporatedByLinks.GetUnincorporatedLinkItem',
			},
			{
				name: 'Changeable.UnincorporatedByLinks.GetUnincorporatedLinkItems',
				value: "GET /Changeables('{ChangeableId}')/UnincorporatedByLinks",
				description: "Get UnincorporatedLinkItem - get /Changeables('{ChangeableId}')/UnincorporatedByLinks",
				action: 'Changeable.UnincorporatedByLinks.GetUnincorporatedLinkItems',
			},
			{
				name: 'Changeable.UnincorporatedByObjects.GetChangeItem',
				value: "GET /Changeables('{ChangeableId}')/UnincorporatedByObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Changeables('{ChangeableId}')/UnincorporatedByObjects('{ChangeItemId}')",
				action: 'Changeable.UnincorporatedByObjects.GetChangeItem',
			},
			{
				name: 'Changeable.UnincorporatedByObjects.GetChangeItems',
				value: "GET /Changeables('{ChangeableId}')/UnincorporatedByObjects",
				description: "Get ChangeItem - get /Changeables('{ChangeableId}')/UnincorporatedByObjects",
				action: 'Changeable.UnincorporatedByObjects.GetChangeItems',
			},
			{
				name: 'Changeable.Versions.GetChangeable',
				value: "GET /Changeables('{ChangeableId}')/Versions('{VersionsId}')",
				description: "Get Changeable for a given VersionsId - get /Changeables('{ChangeableId}')/Versions('{VersionsId}')",
				action: 'Changeable.Versions.GetChangeable',
			},
			{
				name: 'Changeable.Versions.GetChangeables',
				value: "GET /Changeables('{ChangeableId}')/Versions",
				description: "Get Changeable - get /Changeables('{ChangeableId}')/Versions",
				action: 'Changeable.Versions.GetChangeables',
			},
			{
				name: 'ChangeIssue.AffectedObjects.GetChangeable',
				value: "GET /ChangeIssues('{ChangeIssueId}')/AffectedObjects('{ChangeableId}')",
				description: "Get Changeable for a given ChangeableId - get /ChangeIssues('{ChangeIssueId}')/AffectedObjects('{ChangeableId}')",
				action: 'ChangeIssue.AffectedObjects.GetChangeable',
			},
			{
				name: 'ChangeIssue.AffectedObjects.GetChangeables',
				value: "GET /ChangeIssues('{ChangeIssueId}')/AffectedObjects",
				description: "Get Changeable - get /ChangeIssues('{ChangeIssueId}')/AffectedObjects",
				action: 'ChangeIssue.AffectedObjects.GetChangeables',
			},
			{
				name: 'ChangeIssue.AffectsLinks.GetAffectsLinkItem',
				value: "GET /ChangeIssues('{ChangeIssueId}')/AffectsLinks('{AffectsLinkItemId}')",
				description: "Get AffectsLinkItem for a given AffectsLinkItemId - get /ChangeIssues('{ChangeIssueId}')/AffectsLinks('{AffectsLinkItemId}')",
				action: 'ChangeIssue.AffectsLinks.GetAffectsLinkItem',
			},
			{
				name: 'ChangeIssue.AffectsLinks.GetAffectsLinkItems',
				value: "GET /ChangeIssues('{ChangeIssueId}')/AffectsLinks",
				description: "Get AffectsLinkItem - get /ChangeIssues('{ChangeIssueId}')/AffectsLinks",
				action: 'ChangeIssue.AffectsLinks.GetAffectsLinkItems',
			},
			{
				name: 'ChangeIssue.CIAffectLinks.GetReportedAgainstLinkItem',
				value: "GET /ChangeIssues('{ChangeIssueId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				description: "Get ReportedAgainstLinkItem for a given ReportedAgainstLinkItemId - get /ChangeIssues('{ChangeIssueId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				action: 'ChangeIssue.CIAffectLinks.GetReportedAgainstLinkItem',
			},
			{
				name: 'ChangeIssue.CIAffectLinks.GetReportedAgainstLinkItems',
				value: "GET /ChangeIssues('{ChangeIssueId}')/CIAffectLinks",
				description: "Get ReportedAgainstLinkItem - get /ChangeIssues('{ChangeIssueId}')/CIAffectLinks",
				action: 'ChangeIssue.CIAffectLinks.GetReportedAgainstLinkItems',
			},
			{
				name: 'ChangeIssue.CIAffectLinks.PostReportedAgainstLinkItem',
				value: "POST /ChangeIssues('{ChangeIssueId}')/CIAffectLinks",
				description: "Create ReportedAgainstLinkItem - post /ChangeIssues('{ChangeIssueId}')/CIAffectLinks",
				action: 'ChangeIssue.CIAffectLinks.PostReportedAgainstLinkItem',
			},
			{
				name: 'ChangeIssue.CIAffectLinks.UpdateReportedAgainstLinkItem',
				value: "PATCH /ChangeIssues('{ChangeIssueId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				description: "Update an existing ReportedAgainstLinkItem - patch /ChangeIssues('{ChangeIssueId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				action: 'ChangeIssue.CIAffectLinks.UpdateReportedAgainstLinkItem',
			},
			{
				name: 'ChangeIssue.Creator.GetUser',
				value: "GET /ChangeIssues('{ChangeIssueId}')/Creator",
				description: "Get User - get /ChangeIssues('{ChangeIssueId}')/Creator",
				action: 'ChangeIssue.Creator.GetUser',
			},
			{
				name: 'ChangeIssue.Modifier.GetUser',
				value: "GET /ChangeIssues('{ChangeIssueId}')/Modifier",
				description: "Get User - get /ChangeIssues('{ChangeIssueId}')/Modifier",
				action: 'ChangeIssue.Modifier.GetUser',
			},
			{
				name: 'ChangeIssue.Organization.GetOrganization',
				value: "GET /ChangeIssues('{ChangeIssueId}')/Organization",
				description: "Get Organization - get /ChangeIssues('{ChangeIssueId}')/Organization",
				action: 'ChangeIssue.Organization.GetOrganization',
			},
			{
				name: 'ChangeIssue.ProcessLinks.GetProcessLinkItem',
				value: "GET /ChangeIssues('{ChangeIssueId}')/ProcessLinks('{ProcessLinkItemId}')",
				description: "Get ProcessLinkItem for a given ProcessLinkItemId - get /ChangeIssues('{ChangeIssueId}')/ProcessLinks('{ProcessLinkItemId}')",
				action: 'ChangeIssue.ProcessLinks.GetProcessLinkItem',
			},
			{
				name: 'ChangeIssue.ProcessLinks.GetProcessLinkItems',
				value: "GET /ChangeIssues('{ChangeIssueId}')/ProcessLinks",
				description: "Get ProcessLinkItem - get /ChangeIssues('{ChangeIssueId}')/ProcessLinks",
				action: 'ChangeIssue.ProcessLinks.GetProcessLinkItems',
			},
			{
				name: 'ChangeIssue.ProcessObjects.GetChangeItem',
				value: "GET /ChangeIssues('{ChangeIssueId}')/ProcessObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeIssues('{ChangeIssueId}')/ProcessObjects('{ChangeItemId}')",
				action: 'ChangeIssue.ProcessObjects.GetChangeItem',
			},
			{
				name: 'ChangeIssue.ProcessObjects.GetChangeItems',
				value: "GET /ChangeIssues('{ChangeIssueId}')/ProcessObjects",
				description: "Get ChangeItem - get /ChangeIssues('{ChangeIssueId}')/ProcessObjects",
				action: 'ChangeIssue.ProcessObjects.GetChangeItems',
			},
			{
				name: 'ChangeIssue.ReferenceLinks.GetReferenceLinkItem',
				value: "GET /ChangeIssues('{ChangeIssueId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				description: "Get ReferenceLinkItem for a given ReferenceLinkItemId - get /ChangeIssues('{ChangeIssueId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				action: 'ChangeIssue.ReferenceLinks.GetReferenceLinkItem',
			},
			{
				name: 'ChangeIssue.ReferenceLinks.GetReferenceLinkItems',
				value: "GET /ChangeIssues('{ChangeIssueId}')/ReferenceLinks",
				description: "Get ReferenceLinkItem - get /ChangeIssues('{ChangeIssueId}')/ReferenceLinks",
				action: 'ChangeIssue.ReferenceLinks.GetReferenceLinkItems',
			},
			{
				name: 'ChangeIssue.ReferenceObjects.GetChangeItem',
				value: "GET /ChangeIssues('{ChangeIssueId}')/ReferenceObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeIssues('{ChangeIssueId}')/ReferenceObjects('{ChangeItemId}')",
				action: 'ChangeIssue.ReferenceObjects.GetChangeItem',
			},
			{
				name: 'ChangeIssue.ReferenceObjects.GetChangeItems',
				value: "GET /ChangeIssues('{ChangeIssueId}')/ReferenceObjects",
				description: "Get ChangeItem - get /ChangeIssues('{ChangeIssueId}')/ReferenceObjects",
				action: 'ChangeIssue.ReferenceObjects.GetChangeItems',
			},
			{
				name: 'ChangeIssue.Revisions.GetChangeItem',
				value: "GET /ChangeIssues('{ChangeIssueId}')/Revisions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeIssues('{ChangeIssueId}')/Revisions('{ChangeItemId}')",
				action: 'ChangeIssue.Revisions.GetChangeItem',
			},
			{
				name: 'ChangeIssue.Revisions.GetChangeItems',
				value: "GET /ChangeIssues('{ChangeIssueId}')/Revisions",
				description: "Get ChangeItem - get /ChangeIssues('{ChangeIssueId}')/Revisions",
				action: 'ChangeIssue.Revisions.GetChangeItems',
			},
			{
				name: 'ChangeIssue.Versions.GetChangeItem',
				value: "GET /ChangeIssues('{ChangeIssueId}')/Versions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeIssues('{ChangeIssueId}')/Versions('{ChangeItemId}')",
				action: 'ChangeIssue.Versions.GetChangeItem',
			},
			{
				name: 'ChangeIssue.Versions.GetChangeItems',
				value: "GET /ChangeIssues('{ChangeIssueId}')/Versions",
				description: "Get ChangeItem - get /ChangeIssues('{ChangeIssueId}')/Versions",
				action: 'ChangeIssue.Versions.GetChangeItems',
			},
			{
				name: 'ChangeNotice.AffectedObjects.GetChangeable',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/AffectedObjects('{ChangeableId}')",
				description: "Get Changeable for a given ChangeableId - get /ChangeNotices('{ChangeNoticeId}')/AffectedObjects('{ChangeableId}')",
				action: 'ChangeNotice.AffectedObjects.GetChangeable',
			},
			{
				name: 'ChangeNotice.AffectedObjects.GetChangeables',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/AffectedObjects",
				description: "Get Changeable - get /ChangeNotices('{ChangeNoticeId}')/AffectedObjects",
				action: 'ChangeNotice.AffectedObjects.GetChangeables',
			},
			{
				name: 'ChangeNotice.AffectsLinks.GetAffectsLinkItem',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/AffectsLinks('{AffectsLinkItemId}')",
				description: "Get AffectsLinkItem for a given AffectsLinkItemId - get /ChangeNotices('{ChangeNoticeId}')/AffectsLinks('{AffectsLinkItemId}')",
				action: 'ChangeNotice.AffectsLinks.GetAffectsLinkItem',
			},
			{
				name: 'ChangeNotice.AffectsLinks.GetAffectsLinkItems',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/AffectsLinks",
				description: "Get AffectsLinkItem - get /ChangeNotices('{ChangeNoticeId}')/AffectsLinks",
				action: 'ChangeNotice.AffectsLinks.GetAffectsLinkItems',
			},
			{
				name: 'ChangeNotice.Attachments.DeletePTC.ContentItem',
				value: "DELETE /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
				description: "Delete an existing ContentItem - delete /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
				action: 'ChangeNotice.Attachments.DeletePTC.ContentItem',
			},
			{
				name: 'ChangeNotice.Attachments.GetContentItem',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
				action: 'ChangeNotice.Attachments.GetContentItem',
			},
			{
				name: 'ChangeNotice.Attachments.GetContentItems',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/Attachments",
				description: "Get ContentItem - get /ChangeNotices('{ChangeNoticeId}')/Attachments",
				action: 'ChangeNotice.Attachments.GetContentItems',
			},
			{
				name: 'ChangeNotice.Attachments.PostContentItem',
				value: "POST /ChangeNotices('{ChangeNoticeId}')/Attachments",
				description: "Create ContentItem - post /ChangeNotices('{ChangeNoticeId}')/Attachments",
				action: 'ChangeNotice.Attachments.PostContentItem',
			},
			{
				name: 'ChangeNotice.Attachments.UpdateContentItem',
				value: "PATCH /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
				description: "Update an existing ContentItem - patch /ChangeNotices('{ChangeNoticeId}')/Attachments('{ContentItemId}')",
				action: 'ChangeNotice.Attachments.UpdateContentItem',
			},
			{
				name: 'ChangeNotice.ChangeAdministratorI.GetPrincipal',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ChangeAdministratorI('{PrincipalId}')",
				description: "Get Principal for a given PrincipalId - get /ChangeNotices('{ChangeNoticeId}')/ChangeAdministratorI('{PrincipalId}')",
				action: 'ChangeNotice.ChangeAdministratorI.GetPrincipal',
			},
			{
				name: 'ChangeNotice.ChangeAdministratorI.GetPrincipals',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ChangeAdministratorI",
				description: "Get Principal - get /ChangeNotices('{ChangeNoticeId}')/ChangeAdministratorI",
				action: 'ChangeNotice.ChangeAdministratorI.GetPrincipals',
			},
			{
				name: 'ChangeNotice.ChangeAdministratorII.GetPrincipal',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ChangeAdministratorII('{PrincipalId}')",
				description: "Get Principal for a given PrincipalId - get /ChangeNotices('{ChangeNoticeId}')/ChangeAdministratorII('{PrincipalId}')",
				action: 'ChangeNotice.ChangeAdministratorII.GetPrincipal',
			},
			{
				name: 'ChangeNotice.ChangeAdministratorII.GetPrincipals',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ChangeAdministratorII",
				description: "Get Principal - get /ChangeNotices('{ChangeNoticeId}')/ChangeAdministratorII",
				action: 'ChangeNotice.ChangeAdministratorII.GetPrincipals',
			},
			{
				name: 'ChangeNotice.CNAffectLinks.GetAffectedActivityDataLinkItem',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				description: "Get AffectedActivityDataLinkItem for a given AffectedActivityDataLinkItemId - get /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				action: 'ChangeNotice.CNAffectLinks.GetAffectedActivityDataLinkItem',
			},
			{
				name: 'ChangeNotice.CNAffectLinks.GetAffectedActivityDataLinkItems',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks",
				description: "Get AffectedActivityDataLinkItem - get /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks",
				action: 'ChangeNotice.CNAffectLinks.GetAffectedActivityDataLinkItems',
			},
			{
				name: 'ChangeNotice.CNAffectLinks.PostAffectedActivityDataLinkItem',
				value: "POST /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks",
				description: "Create AffectedActivityDataLinkItem - post /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks",
				action: 'ChangeNotice.CNAffectLinks.PostAffectedActivityDataLinkItem',
			},
			{
				name: 'ChangeNotice.CNAffectLinks.UpdateAffectedActivityDataLinkItem',
				value: "PATCH /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				description: "Update an existing AffectedActivityDataLinkItem - patch /ChangeNotices('{ChangeNoticeId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				action: 'ChangeNotice.CNAffectLinks.UpdateAffectedActivityDataLinkItem',
			},
			{
				name: 'ChangeNotice.Context.GetContainer',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/Context",
				description: "Get Container - get /ChangeNotices('{ChangeNoticeId}')/Context",
				action: 'ChangeNotice.Context.GetContainer',
			},
			{
				name: 'ChangeNotice.Creator.GetUser',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/Creator",
				description: "Get User - get /ChangeNotices('{ChangeNoticeId}')/Creator",
				action: 'ChangeNotice.Creator.GetUser',
			},
			{
				name: 'ChangeNotice.Folder.GetFolder',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/Folder",
				description: "Get Folder - get /ChangeNotices('{ChangeNoticeId}')/Folder",
				action: 'ChangeNotice.Folder.GetFolder',
			},
			{
				name: 'ChangeNotice.ImplementationPlan.GetChangeTask',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ImplementationPlan('{ChangeTaskId}')",
				description: "Get ChangeTask for a given ChangeTaskId - get /ChangeNotices('{ChangeNoticeId}')/ImplementationPlan('{ChangeTaskId}')",
				action: 'ChangeNotice.ImplementationPlan.GetChangeTask',
			},
			{
				name: 'ChangeNotice.ImplementationPlan.GetChangeTasks',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ImplementationPlan",
				description: "Get ChangeTask - get /ChangeNotices('{ChangeNoticeId}')/ImplementationPlan",
				action: 'ChangeNotice.ImplementationPlan.GetChangeTasks',
			},
			{
				name: 'ChangeNotice.Modifier.GetUser',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/Modifier",
				description: "Get User - get /ChangeNotices('{ChangeNoticeId}')/Modifier",
				action: 'ChangeNotice.Modifier.GetUser',
			},
			{
				name: 'ChangeNotice.Organization.GetOrganization',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/Organization",
				description: "Get Organization - get /ChangeNotices('{ChangeNoticeId}')/Organization",
				action: 'ChangeNotice.Organization.GetOrganization',
			},
			{
				name: 'ChangeNotice.ProcessLinks.GetProcessLinkItem',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ProcessLinks('{ProcessLinkItemId}')",
				description: "Get ProcessLinkItem for a given ProcessLinkItemId - get /ChangeNotices('{ChangeNoticeId}')/ProcessLinks('{ProcessLinkItemId}')",
				action: 'ChangeNotice.ProcessLinks.GetProcessLinkItem',
			},
			{
				name: 'ChangeNotice.ProcessLinks.GetProcessLinkItems',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ProcessLinks",
				description: "Get ProcessLinkItem - get /ChangeNotices('{ChangeNoticeId}')/ProcessLinks",
				action: 'ChangeNotice.ProcessLinks.GetProcessLinkItems',
			},
			{
				name: 'ChangeNotice.ProcessObjects.GetChangeItem',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ProcessObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeNotices('{ChangeNoticeId}')/ProcessObjects('{ChangeItemId}')",
				action: 'ChangeNotice.ProcessObjects.GetChangeItem',
			},
			{
				name: 'ChangeNotice.ProcessObjects.GetChangeItems',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ProcessObjects",
				description: "Get ChangeItem - get /ChangeNotices('{ChangeNoticeId}')/ProcessObjects",
				action: 'ChangeNotice.ProcessObjects.GetChangeItems',
			},
			{
				name: 'ChangeNotice.ReferenceLinks.GetReferenceLinkItem',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				description: "Get ReferenceLinkItem for a given ReferenceLinkItemId - get /ChangeNotices('{ChangeNoticeId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				action: 'ChangeNotice.ReferenceLinks.GetReferenceLinkItem',
			},
			{
				name: 'ChangeNotice.ReferenceLinks.GetReferenceLinkItems',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ReferenceLinks",
				description: "Get ReferenceLinkItem - get /ChangeNotices('{ChangeNoticeId}')/ReferenceLinks",
				action: 'ChangeNotice.ReferenceLinks.GetReferenceLinkItems',
			},
			{
				name: 'ChangeNotice.ReferenceObjects.GetChangeItem',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ReferenceObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeNotices('{ChangeNoticeId}')/ReferenceObjects('{ChangeItemId}')",
				action: 'ChangeNotice.ReferenceObjects.GetChangeItem',
			},
			{
				name: 'ChangeNotice.ReferenceObjects.GetChangeItems',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ReferenceObjects",
				description: "Get ChangeItem - get /ChangeNotices('{ChangeNoticeId}')/ReferenceObjects",
				action: 'ChangeNotice.ReferenceObjects.GetChangeItems',
			},
			{
				name: 'ChangeNotice.ResultingLinks.GetResultingLinkItem',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ResultingLinks('{ResultingLinkItemId}')",
				description: "Get ResultingLinkItem for a given ResultingLinkItemId - get /ChangeNotices('{ChangeNoticeId}')/ResultingLinks('{ResultingLinkItemId}')",
				action: 'ChangeNotice.ResultingLinks.GetResultingLinkItem',
			},
			{
				name: 'ChangeNotice.ResultingLinks.GetResultingLinkItems',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ResultingLinks",
				description: "Get ResultingLinkItem - get /ChangeNotices('{ChangeNoticeId}')/ResultingLinks",
				action: 'ChangeNotice.ResultingLinks.GetResultingLinkItems',
			},
			{
				name: 'ChangeNotice.ResultingLinks.PostResultingLinkItem',
				value: "POST /ChangeNotices('{ChangeNoticeId}')/ResultingLinks",
				description: "Create ResultingLinkItem - post /ChangeNotices('{ChangeNoticeId}')/ResultingLinks",
				action: 'ChangeNotice.ResultingLinks.PostResultingLinkItem',
			},
			{
				name: 'ChangeNotice.ResultingLinks.UpdateResultingLinkItem',
				value: "PATCH /ChangeNotices('{ChangeNoticeId}')/ResultingLinks('{ResultingLinkItemId}')",
				description: "Update an existing ResultingLinkItem - patch /ChangeNotices('{ChangeNoticeId}')/ResultingLinks('{ResultingLinkItemId}')",
				action: 'ChangeNotice.ResultingLinks.UpdateResultingLinkItem',
			},
			{
				name: 'ChangeNotice.ResultingObjects.GetChangeable',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ResultingObjects('{ChangeableId}')",
				description: "Get Changeable for a given ChangeableId - get /ChangeNotices('{ChangeNoticeId}')/ResultingObjects('{ChangeableId}')",
				action: 'ChangeNotice.ResultingObjects.GetChangeable',
			},
			{
				name: 'ChangeNotice.ResultingObjects.GetChangeables',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/ResultingObjects",
				description: "Get Changeable - get /ChangeNotices('{ChangeNoticeId}')/ResultingObjects",
				action: 'ChangeNotice.ResultingObjects.GetChangeables',
			},
			{
				name: 'ChangeNotice.Revisions.GetChangeItem',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/Revisions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeNotices('{ChangeNoticeId}')/Revisions('{ChangeItemId}')",
				action: 'ChangeNotice.Revisions.GetChangeItem',
			},
			{
				name: 'ChangeNotice.Revisions.GetChangeItems',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/Revisions",
				description: "Get ChangeItem - get /ChangeNotices('{ChangeNoticeId}')/Revisions",
				action: 'ChangeNotice.Revisions.GetChangeItems',
			},
			{
				name: 'ChangeNotice.UnincorporatedLinks.GetUnincorporatedLinkItem',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/UnincorporatedLinks('{UnincorporatedLinkItemId}')",
				description: "Get UnincorporatedLinkItem for a given UnincorporatedLinkItemId - get /ChangeNotices('{ChangeNoticeId}')/UnincorporatedLinks('{UnincorporatedLinkItemId}')",
				action: 'ChangeNotice.UnincorporatedLinks.GetUnincorporatedLinkItem',
			},
			{
				name: 'ChangeNotice.UnincorporatedLinks.GetUnincorporatedLinkItems',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/UnincorporatedLinks",
				description: "Get UnincorporatedLinkItem - get /ChangeNotices('{ChangeNoticeId}')/UnincorporatedLinks",
				action: 'ChangeNotice.UnincorporatedLinks.GetUnincorporatedLinkItems',
			},
			{
				name: 'ChangeNotice.Versions.GetChangeItem',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/Versions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeNotices('{ChangeNoticeId}')/Versions('{ChangeItemId}')",
				action: 'ChangeNotice.Versions.GetChangeItem',
			},
			{
				name: 'ChangeNotice.Versions.GetChangeItems',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/Versions",
				description: "Get ChangeItem - get /ChangeNotices('{ChangeNoticeId}')/Versions",
				action: 'ChangeNotice.Versions.GetChangeItems',
			},
			{
				name: 'ChangeOrder.AffectedObjects.GetChangeable',
				value: "GET /ChangeOrders('{ChangeOrderId}')/AffectedObjects('{ChangeableId}')",
				description: "Get Changeable for a given ChangeableId - get /ChangeOrders('{ChangeOrderId}')/AffectedObjects('{ChangeableId}')",
				action: 'ChangeOrder.AffectedObjects.GetChangeable',
			},
			{
				name: 'ChangeOrder.AffectedObjects.GetChangeables',
				value: "GET /ChangeOrders('{ChangeOrderId}')/AffectedObjects",
				description: "Get Changeable - get /ChangeOrders('{ChangeOrderId}')/AffectedObjects",
				action: 'ChangeOrder.AffectedObjects.GetChangeables',
			},
			{
				name: 'ChangeOrder.AffectsLinks.GetAffectsLinkItem',
				value: "GET /ChangeOrders('{ChangeOrderId}')/AffectsLinks('{AffectsLinkItemId}')",
				description: "Get AffectsLinkItem for a given AffectsLinkItemId - get /ChangeOrders('{ChangeOrderId}')/AffectsLinks('{AffectsLinkItemId}')",
				action: 'ChangeOrder.AffectsLinks.GetAffectsLinkItem',
			},
			{
				name: 'ChangeOrder.AffectsLinks.GetAffectsLinkItems',
				value: "GET /ChangeOrders('{ChangeOrderId}')/AffectsLinks",
				description: "Get AffectsLinkItem - get /ChangeOrders('{ChangeOrderId}')/AffectsLinks",
				action: 'ChangeOrder.AffectsLinks.GetAffectsLinkItems',
			},
			{
				name: 'ChangeOrder.CNAffectLinks.GetAffectedActivityDataLinkItem',
				value: "GET /ChangeOrders('{ChangeOrderId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				description: "Get AffectedActivityDataLinkItem for a given AffectedActivityDataLinkItemId - get /ChangeOrders('{ChangeOrderId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				action: 'ChangeOrder.CNAffectLinks.GetAffectedActivityDataLinkItem',
			},
			{
				name: 'ChangeOrder.CNAffectLinks.GetAffectedActivityDataLinkItems',
				value: "GET /ChangeOrders('{ChangeOrderId}')/CNAffectLinks",
				description: "Get AffectedActivityDataLinkItem - get /ChangeOrders('{ChangeOrderId}')/CNAffectLinks",
				action: 'ChangeOrder.CNAffectLinks.GetAffectedActivityDataLinkItems',
			},
			{
				name: 'ChangeOrder.Creator.GetUser',
				value: "GET /ChangeOrders('{ChangeOrderId}')/Creator",
				description: "Get User - get /ChangeOrders('{ChangeOrderId}')/Creator",
				action: 'ChangeOrder.Creator.GetUser',
			},
			{
				name: 'ChangeOrder.Modifier.GetUser',
				value: "GET /ChangeOrders('{ChangeOrderId}')/Modifier",
				description: "Get User - get /ChangeOrders('{ChangeOrderId}')/Modifier",
				action: 'ChangeOrder.Modifier.GetUser',
			},
			{
				name: 'ChangeOrder.Organization.GetOrganization',
				value: "GET /ChangeOrders('{ChangeOrderId}')/Organization",
				description: "Get Organization - get /ChangeOrders('{ChangeOrderId}')/Organization",
				action: 'ChangeOrder.Organization.GetOrganization',
			},
			{
				name: 'ChangeOrder.ProcessLinks.GetProcessLinkItem',
				value: "GET /ChangeOrders('{ChangeOrderId}')/ProcessLinks('{ProcessLinkItemId}')",
				description: "Get ProcessLinkItem for a given ProcessLinkItemId - get /ChangeOrders('{ChangeOrderId}')/ProcessLinks('{ProcessLinkItemId}')",
				action: 'ChangeOrder.ProcessLinks.GetProcessLinkItem',
			},
			{
				name: 'ChangeOrder.ProcessLinks.GetProcessLinkItems',
				value: "GET /ChangeOrders('{ChangeOrderId}')/ProcessLinks",
				description: "Get ProcessLinkItem - get /ChangeOrders('{ChangeOrderId}')/ProcessLinks",
				action: 'ChangeOrder.ProcessLinks.GetProcessLinkItems',
			},
			{
				name: 'ChangeOrder.ProcessObjects.GetChangeItem',
				value: "GET /ChangeOrders('{ChangeOrderId}')/ProcessObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeOrders('{ChangeOrderId}')/ProcessObjects('{ChangeItemId}')",
				action: 'ChangeOrder.ProcessObjects.GetChangeItem',
			},
			{
				name: 'ChangeOrder.ProcessObjects.GetChangeItems',
				value: "GET /ChangeOrders('{ChangeOrderId}')/ProcessObjects",
				description: "Get ChangeItem - get /ChangeOrders('{ChangeOrderId}')/ProcessObjects",
				action: 'ChangeOrder.ProcessObjects.GetChangeItems',
			},
			{
				name: 'ChangeOrder.ReferenceLinks.GetReferenceLinkItem',
				value: "GET /ChangeOrders('{ChangeOrderId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				description: "Get ReferenceLinkItem for a given ReferenceLinkItemId - get /ChangeOrders('{ChangeOrderId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				action: 'ChangeOrder.ReferenceLinks.GetReferenceLinkItem',
			},
			{
				name: 'ChangeOrder.ReferenceLinks.GetReferenceLinkItems',
				value: "GET /ChangeOrders('{ChangeOrderId}')/ReferenceLinks",
				description: "Get ReferenceLinkItem - get /ChangeOrders('{ChangeOrderId}')/ReferenceLinks",
				action: 'ChangeOrder.ReferenceLinks.GetReferenceLinkItems',
			},
			{
				name: 'ChangeOrder.ReferenceObjects.GetChangeItem',
				value: "GET /ChangeOrders('{ChangeOrderId}')/ReferenceObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeOrders('{ChangeOrderId}')/ReferenceObjects('{ChangeItemId}')",
				action: 'ChangeOrder.ReferenceObjects.GetChangeItem',
			},
			{
				name: 'ChangeOrder.ReferenceObjects.GetChangeItems',
				value: "GET /ChangeOrders('{ChangeOrderId}')/ReferenceObjects",
				description: "Get ChangeItem - get /ChangeOrders('{ChangeOrderId}')/ReferenceObjects",
				action: 'ChangeOrder.ReferenceObjects.GetChangeItems',
			},
			{
				name: 'ChangeOrder.ResultingLinks.GetResultingLinkItem',
				value: "GET /ChangeOrders('{ChangeOrderId}')/ResultingLinks('{ResultingLinkItemId}')",
				description: "Get ResultingLinkItem for a given ResultingLinkItemId - get /ChangeOrders('{ChangeOrderId}')/ResultingLinks('{ResultingLinkItemId}')",
				action: 'ChangeOrder.ResultingLinks.GetResultingLinkItem',
			},
			{
				name: 'ChangeOrder.ResultingLinks.GetResultingLinkItems',
				value: "GET /ChangeOrders('{ChangeOrderId}')/ResultingLinks",
				description: "Get ResultingLinkItem - get /ChangeOrders('{ChangeOrderId}')/ResultingLinks",
				action: 'ChangeOrder.ResultingLinks.GetResultingLinkItems',
			},
			{
				name: 'ChangeOrder.ResultingObjects.GetChangeable',
				value: "GET /ChangeOrders('{ChangeOrderId}')/ResultingObjects('{ChangeableId}')",
				description: "Get Changeable for a given ChangeableId - get /ChangeOrders('{ChangeOrderId}')/ResultingObjects('{ChangeableId}')",
				action: 'ChangeOrder.ResultingObjects.GetChangeable',
			},
			{
				name: 'ChangeOrder.ResultingObjects.GetChangeables',
				value: "GET /ChangeOrders('{ChangeOrderId}')/ResultingObjects",
				description: "Get Changeable - get /ChangeOrders('{ChangeOrderId}')/ResultingObjects",
				action: 'ChangeOrder.ResultingObjects.GetChangeables',
			},
			{
				name: 'ChangeOrder.Revisions.GetChangeItem',
				value: "GET /ChangeOrders('{ChangeOrderId}')/Revisions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeOrders('{ChangeOrderId}')/Revisions('{ChangeItemId}')",
				action: 'ChangeOrder.Revisions.GetChangeItem',
			},
			{
				name: 'ChangeOrder.Revisions.GetChangeItems',
				value: "GET /ChangeOrders('{ChangeOrderId}')/Revisions",
				description: "Get ChangeItem - get /ChangeOrders('{ChangeOrderId}')/Revisions",
				action: 'ChangeOrder.Revisions.GetChangeItems',
			},
			{
				name: 'ChangeOrder.UnincorporatedLinks.GetUnincorporatedLinkItem',
				value: "GET /ChangeOrders('{ChangeOrderId}')/UnincorporatedLinks('{UnincorporatedLinkItemId}')",
				description: "Get UnincorporatedLinkItem for a given UnincorporatedLinkItemId - get /ChangeOrders('{ChangeOrderId}')/UnincorporatedLinks('{UnincorporatedLinkItemId}')",
				action: 'ChangeOrder.UnincorporatedLinks.GetUnincorporatedLinkItem',
			},
			{
				name: 'ChangeOrder.UnincorporatedLinks.GetUnincorporatedLinkItems',
				value: "GET /ChangeOrders('{ChangeOrderId}')/UnincorporatedLinks",
				description: "Get UnincorporatedLinkItem - get /ChangeOrders('{ChangeOrderId}')/UnincorporatedLinks",
				action: 'ChangeOrder.UnincorporatedLinks.GetUnincorporatedLinkItems',
			},
			{
				name: 'ChangeOrder.Versions.GetChangeItem',
				value: "GET /ChangeOrders('{ChangeOrderId}')/Versions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeOrders('{ChangeOrderId}')/Versions('{ChangeItemId}')",
				action: 'ChangeOrder.Versions.GetChangeItem',
			},
			{
				name: 'ChangeOrder.Versions.GetChangeItems',
				value: "GET /ChangeOrders('{ChangeOrderId}')/Versions",
				description: "Get ChangeItem - get /ChangeOrders('{ChangeOrderId}')/Versions",
				action: 'ChangeOrder.Versions.GetChangeItems',
			},
			{
				name: 'ChangeRequest.AffectedObjects.GetChangeable',
				value: "GET /ChangeRequests('{ChangeRequestId}')/AffectedObjects('{ChangeableId}')",
				description: "Get Changeable for a given ChangeableId - get /ChangeRequests('{ChangeRequestId}')/AffectedObjects('{ChangeableId}')",
				action: 'ChangeRequest.AffectedObjects.GetChangeable',
			},
			{
				name: 'ChangeRequest.AffectedObjects.GetChangeables',
				value: "GET /ChangeRequests('{ChangeRequestId}')/AffectedObjects",
				description: "Get Changeable - get /ChangeRequests('{ChangeRequestId}')/AffectedObjects",
				action: 'ChangeRequest.AffectedObjects.GetChangeables',
			},
			{
				name: 'ChangeRequest.AffectsLinks.GetAffectsLinkItem',
				value: "GET /ChangeRequests('{ChangeRequestId}')/AffectsLinks('{AffectsLinkItemId}')",
				description: "Get AffectsLinkItem for a given AffectsLinkItemId - get /ChangeRequests('{ChangeRequestId}')/AffectsLinks('{AffectsLinkItemId}')",
				action: 'ChangeRequest.AffectsLinks.GetAffectsLinkItem',
			},
			{
				name: 'ChangeRequest.AffectsLinks.GetAffectsLinkItems',
				value: "GET /ChangeRequests('{ChangeRequestId}')/AffectsLinks",
				description: "Get AffectsLinkItem - get /ChangeRequests('{ChangeRequestId}')/AffectsLinks",
				action: 'ChangeRequest.AffectsLinks.GetAffectsLinkItems',
			},
			{
				name: 'ChangeRequest.Attachments.DeletePTC.ContentItem',
				value: "DELETE /ChangeRequests('{ChangeRequestId}')/Attachments('{ContentItemId}')",
				description: "Delete an existing ContentItem - delete /ChangeRequests('{ChangeRequestId}')/Attachments('{ContentItemId}')",
				action: 'ChangeRequest.Attachments.DeletePTC.ContentItem',
			},
			{
				name: 'ChangeRequest.Attachments.GetContentItem',
				value: "GET /ChangeRequests('{ChangeRequestId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /ChangeRequests('{ChangeRequestId}')/Attachments('{ContentItemId}')",
				action: 'ChangeRequest.Attachments.GetContentItem',
			},
			{
				name: 'ChangeRequest.Attachments.GetContentItems',
				value: "GET /ChangeRequests('{ChangeRequestId}')/Attachments",
				description: "Get ContentItem - get /ChangeRequests('{ChangeRequestId}')/Attachments",
				action: 'ChangeRequest.Attachments.GetContentItems',
			},
			{
				name: 'ChangeRequest.Attachments.PostContentItem',
				value: "POST /ChangeRequests('{ChangeRequestId}')/Attachments",
				description: "Create ContentItem - post /ChangeRequests('{ChangeRequestId}')/Attachments",
				action: 'ChangeRequest.Attachments.PostContentItem',
			},
			{
				name: 'ChangeRequest.Attachments.UpdateContentItem',
				value: "PATCH /ChangeRequests('{ChangeRequestId}')/Attachments('{ContentItemId}')",
				description: "Update an existing ContentItem - patch /ChangeRequests('{ChangeRequestId}')/Attachments('{ContentItemId}')",
				action: 'ChangeRequest.Attachments.UpdateContentItem',
			},
			{
				name: 'ChangeRequest.ChangeAdministratorI.GetPrincipal',
				value: "GET /ChangeRequests('{ChangeRequestId}')/ChangeAdministratorI('{PrincipalId}')",
				description: "Get Principal for a given PrincipalId - get /ChangeRequests('{ChangeRequestId}')/ChangeAdministratorI('{PrincipalId}')",
				action: 'ChangeRequest.ChangeAdministratorI.GetPrincipal',
			},
			{
				name: 'ChangeRequest.ChangeAdministratorI.GetPrincipals',
				value: "GET /ChangeRequests('{ChangeRequestId}')/ChangeAdministratorI",
				description: "Get Principal - get /ChangeRequests('{ChangeRequestId}')/ChangeAdministratorI",
				action: 'ChangeRequest.ChangeAdministratorI.GetPrincipals',
			},
			{
				name: 'ChangeRequest.Context.GetContainer',
				value: "GET /ChangeRequests('{ChangeRequestId}')/Context",
				description: "Get Container - get /ChangeRequests('{ChangeRequestId}')/Context",
				action: 'ChangeRequest.Context.GetContainer',
			},
			{
				name: 'ChangeRequest.CRAffectLinks.GetRelevantRequestDataLinkItem',
				value: "GET /ChangeRequests('{ChangeRequestId}')/CRAffectLinks('{RelevantRequestDataLinkItemId}')",
				description: "Get RelevantRequestDataLinkItem for a given RelevantRequestDataLinkItemId - get /ChangeRequests('{ChangeRequestId}')/CRAffectLinks('{RelevantRequestDataLinkItemId}')",
				action: 'ChangeRequest.CRAffectLinks.GetRelevantRequestDataLinkItem',
			},
			{
				name: 'ChangeRequest.CRAffectLinks.GetRelevantRequestDataLinkItems',
				value: "GET /ChangeRequests('{ChangeRequestId}')/CRAffectLinks",
				description: "Get RelevantRequestDataLinkItem - get /ChangeRequests('{ChangeRequestId}')/CRAffectLinks",
				action: 'ChangeRequest.CRAffectLinks.GetRelevantRequestDataLinkItems',
			},
			{
				name: 'ChangeRequest.CRAffectLinks.PostRelevantRequestDataLinkItem',
				value: "POST /ChangeRequests('{ChangeRequestId}')/CRAffectLinks",
				description: "Create RelevantRequestDataLinkItem - post /ChangeRequests('{ChangeRequestId}')/CRAffectLinks",
				action: 'ChangeRequest.CRAffectLinks.PostRelevantRequestDataLinkItem',
			},
			{
				name: 'ChangeRequest.CRAffectLinks.UpdateRelevantRequestDataLinkItem',
				value: "PATCH /ChangeRequests('{ChangeRequestId}')/CRAffectLinks('{RelevantRequestDataLinkItemId}')",
				description: "Update an existing RelevantRequestDataLinkItem - patch /ChangeRequests('{ChangeRequestId}')/CRAffectLinks('{RelevantRequestDataLinkItemId}')",
				action: 'ChangeRequest.CRAffectLinks.UpdateRelevantRequestDataLinkItem',
			},
			{
				name: 'ChangeRequest.Creator.GetUser',
				value: "GET /ChangeRequests('{ChangeRequestId}')/Creator",
				description: "Get User - get /ChangeRequests('{ChangeRequestId}')/Creator",
				action: 'ChangeRequest.Creator.GetUser',
			},
			{
				name: 'ChangeRequest.Folder.GetFolder',
				value: "GET /ChangeRequests('{ChangeRequestId}')/Folder",
				description: "Get Folder - get /ChangeRequests('{ChangeRequestId}')/Folder",
				action: 'ChangeRequest.Folder.GetFolder',
			},
			{
				name: 'ChangeRequest.Modifier.GetUser',
				value: "GET /ChangeRequests('{ChangeRequestId}')/Modifier",
				description: "Get User - get /ChangeRequests('{ChangeRequestId}')/Modifier",
				action: 'ChangeRequest.Modifier.GetUser',
			},
			{
				name: 'ChangeRequest.Organization.GetOrganization',
				value: "GET /ChangeRequests('{ChangeRequestId}')/Organization",
				description: "Get Organization - get /ChangeRequests('{ChangeRequestId}')/Organization",
				action: 'ChangeRequest.Organization.GetOrganization',
			},
			{
				name: 'ChangeRequest.ProcessLinks.GetProcessLinkItem',
				value: "GET /ChangeRequests('{ChangeRequestId}')/ProcessLinks('{ProcessLinkItemId}')",
				description: "Get ProcessLinkItem for a given ProcessLinkItemId - get /ChangeRequests('{ChangeRequestId}')/ProcessLinks('{ProcessLinkItemId}')",
				action: 'ChangeRequest.ProcessLinks.GetProcessLinkItem',
			},
			{
				name: 'ChangeRequest.ProcessLinks.GetProcessLinkItems',
				value: "GET /ChangeRequests('{ChangeRequestId}')/ProcessLinks",
				description: "Get ProcessLinkItem - get /ChangeRequests('{ChangeRequestId}')/ProcessLinks",
				action: 'ChangeRequest.ProcessLinks.GetProcessLinkItems',
			},
			{
				name: 'ChangeRequest.ProcessObjects.GetChangeItem',
				value: "GET /ChangeRequests('{ChangeRequestId}')/ProcessObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeRequests('{ChangeRequestId}')/ProcessObjects('{ChangeItemId}')",
				action: 'ChangeRequest.ProcessObjects.GetChangeItem',
			},
			{
				name: 'ChangeRequest.ProcessObjects.GetChangeItems',
				value: "GET /ChangeRequests('{ChangeRequestId}')/ProcessObjects",
				description: "Get ChangeItem - get /ChangeRequests('{ChangeRequestId}')/ProcessObjects",
				action: 'ChangeRequest.ProcessObjects.GetChangeItems',
			},
			{
				name: 'ChangeRequest.ReferenceLinks.GetReferenceLinkItem',
				value: "GET /ChangeRequests('{ChangeRequestId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				description: "Get ReferenceLinkItem for a given ReferenceLinkItemId - get /ChangeRequests('{ChangeRequestId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				action: 'ChangeRequest.ReferenceLinks.GetReferenceLinkItem',
			},
			{
				name: 'ChangeRequest.ReferenceLinks.GetReferenceLinkItems',
				value: "GET /ChangeRequests('{ChangeRequestId}')/ReferenceLinks",
				description: "Get ReferenceLinkItem - get /ChangeRequests('{ChangeRequestId}')/ReferenceLinks",
				action: 'ChangeRequest.ReferenceLinks.GetReferenceLinkItems',
			},
			{
				name: 'ChangeRequest.ReferenceObjects.GetChangeItem',
				value: "GET /ChangeRequests('{ChangeRequestId}')/ReferenceObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeRequests('{ChangeRequestId}')/ReferenceObjects('{ChangeItemId}')",
				action: 'ChangeRequest.ReferenceObjects.GetChangeItem',
			},
			{
				name: 'ChangeRequest.ReferenceObjects.GetChangeItems',
				value: "GET /ChangeRequests('{ChangeRequestId}')/ReferenceObjects",
				description: "Get ChangeItem - get /ChangeRequests('{ChangeRequestId}')/ReferenceObjects",
				action: 'ChangeRequest.ReferenceObjects.GetChangeItems',
			},
			{
				name: 'ChangeRequest.Revisions.GetChangeItem',
				value: "GET /ChangeRequests('{ChangeRequestId}')/Revisions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeRequests('{ChangeRequestId}')/Revisions('{ChangeItemId}')",
				action: 'ChangeRequest.Revisions.GetChangeItem',
			},
			{
				name: 'ChangeRequest.Revisions.GetChangeItems',
				value: "GET /ChangeRequests('{ChangeRequestId}')/Revisions",
				description: "Get ChangeItem - get /ChangeRequests('{ChangeRequestId}')/Revisions",
				action: 'ChangeRequest.Revisions.GetChangeItems',
			},
			{
				name: 'ChangeRequest.Versions.GetChangeItem',
				value: "GET /ChangeRequests('{ChangeRequestId}')/Versions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeRequests('{ChangeRequestId}')/Versions('{ChangeItemId}')",
				action: 'ChangeRequest.Versions.GetChangeItem',
			},
			{
				name: 'ChangeRequest.Versions.GetChangeItems',
				value: "GET /ChangeRequests('{ChangeRequestId}')/Versions",
				description: "Get ChangeItem - get /ChangeRequests('{ChangeRequestId}')/Versions",
				action: 'ChangeRequest.Versions.GetChangeItems',
			},
			{
				name: 'ChangeTask.AffectedObjects.GetChangeable',
				value: "GET /ChangeTasks('{ChangeTaskId}')/AffectedObjects('{ChangeableId}')",
				description: "Get Changeable for a given ChangeableId - get /ChangeTasks('{ChangeTaskId}')/AffectedObjects('{ChangeableId}')",
				action: 'ChangeTask.AffectedObjects.GetChangeable',
			},
			{
				name: 'ChangeTask.AffectedObjects.GetChangeables',
				value: "GET /ChangeTasks('{ChangeTaskId}')/AffectedObjects",
				description: "Get Changeable - get /ChangeTasks('{ChangeTaskId}')/AffectedObjects",
				action: 'ChangeTask.AffectedObjects.GetChangeables',
			},
			{
				name: 'ChangeTask.AffectsLinks.GetAffectsLinkItem',
				value: "GET /ChangeTasks('{ChangeTaskId}')/AffectsLinks('{AffectsLinkItemId}')",
				description: "Get AffectsLinkItem for a given AffectsLinkItemId - get /ChangeTasks('{ChangeTaskId}')/AffectsLinks('{AffectsLinkItemId}')",
				action: 'ChangeTask.AffectsLinks.GetAffectsLinkItem',
			},
			{
				name: 'ChangeTask.AffectsLinks.GetAffectsLinkItems',
				value: "GET /ChangeTasks('{ChangeTaskId}')/AffectsLinks",
				description: "Get AffectsLinkItem - get /ChangeTasks('{ChangeTaskId}')/AffectsLinks",
				action: 'ChangeTask.AffectsLinks.GetAffectsLinkItems',
			},
			{
				name: 'ChangeTask.Attachments.DeletePTC.ContentItem',
				value: "DELETE /ChangeTasks('{ChangeTaskId}')/Attachments('{ContentItemId}')",
				description: "Delete an existing ContentItem - delete /ChangeTasks('{ChangeTaskId}')/Attachments('{ContentItemId}')",
				action: 'ChangeTask.Attachments.DeletePTC.ContentItem',
			},
			{
				name: 'ChangeTask.Attachments.GetContentItem',
				value: "GET /ChangeTasks('{ChangeTaskId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /ChangeTasks('{ChangeTaskId}')/Attachments('{ContentItemId}')",
				action: 'ChangeTask.Attachments.GetContentItem',
			},
			{
				name: 'ChangeTask.Attachments.GetContentItems',
				value: "GET /ChangeTasks('{ChangeTaskId}')/Attachments",
				description: "Get ContentItem - get /ChangeTasks('{ChangeTaskId}')/Attachments",
				action: 'ChangeTask.Attachments.GetContentItems',
			},
			{
				name: 'ChangeTask.Attachments.PostContentItem',
				value: "POST /ChangeTasks('{ChangeTaskId}')/Attachments",
				description: "Create ContentItem - post /ChangeTasks('{ChangeTaskId}')/Attachments",
				action: 'ChangeTask.Attachments.PostContentItem',
			},
			{
				name: 'ChangeTask.Attachments.UpdateContentItem',
				value: "PATCH /ChangeTasks('{ChangeTaskId}')/Attachments('{ContentItemId}')",
				description: "Update an existing ContentItem - patch /ChangeTasks('{ChangeTaskId}')/Attachments('{ContentItemId}')",
				action: 'ChangeTask.Attachments.UpdateContentItem',
			},
			{
				name: 'ChangeTask.CNAffectLinks.GetAffectedActivityDataLinkItem',
				value: "GET /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				description: "Get AffectedActivityDataLinkItem for a given AffectedActivityDataLinkItemId - get /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				action: 'ChangeTask.CNAffectLinks.GetAffectedActivityDataLinkItem',
			},
			{
				name: 'ChangeTask.CNAffectLinks.GetAffectedActivityDataLinkItems',
				value: "GET /ChangeTasks('{ChangeTaskId}')/CNAffectLinks",
				description: "Get AffectedActivityDataLinkItem - get /ChangeTasks('{ChangeTaskId}')/CNAffectLinks",
				action: 'ChangeTask.CNAffectLinks.GetAffectedActivityDataLinkItems',
			},
			{
				name: 'ChangeTask.CNAffectLinks.PostAffectedActivityDataLinkItem',
				value: "POST /ChangeTasks('{ChangeTaskId}')/CNAffectLinks",
				description: "Create AffectedActivityDataLinkItem - post /ChangeTasks('{ChangeTaskId}')/CNAffectLinks",
				action: 'ChangeTask.CNAffectLinks.PostAffectedActivityDataLinkItem',
			},
			{
				name: 'ChangeTask.CNAffectLinks.UpdateAffectedActivityDataLinkItem',
				value: "PATCH /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				description: "Update an existing AffectedActivityDataLinkItem - patch /ChangeTasks('{ChangeTaskId}')/CNAffectLinks('{AffectedActivityDataLinkItemId}')",
				action: 'ChangeTask.CNAffectLinks.UpdateAffectedActivityDataLinkItem',
			},
			{
				name: 'ChangeTask.Context.GetContainer',
				value: "GET /ChangeTasks('{ChangeTaskId}')/Context",
				description: "Get Container - get /ChangeTasks('{ChangeTaskId}')/Context",
				action: 'ChangeTask.Context.GetContainer',
			},
			{
				name: 'ChangeTask.Creator.GetUser',
				value: "GET /ChangeTasks('{ChangeTaskId}')/Creator",
				description: "Get User - get /ChangeTasks('{ChangeTaskId}')/Creator",
				action: 'ChangeTask.Creator.GetUser',
			},
			{
				name: 'ChangeTask.Modifier.GetUser',
				value: "GET /ChangeTasks('{ChangeTaskId}')/Modifier",
				description: "Get User - get /ChangeTasks('{ChangeTaskId}')/Modifier",
				action: 'ChangeTask.Modifier.GetUser',
			},
			{
				name: 'ChangeTask.Organization.GetOrganization',
				value: "GET /ChangeTasks('{ChangeTaskId}')/Organization",
				description: "Get Organization - get /ChangeTasks('{ChangeTaskId}')/Organization",
				action: 'ChangeTask.Organization.GetOrganization',
			},
			{
				name: 'ChangeTask.ProcessObjects.GetChangeItem',
				value: "GET /ChangeTasks('{ChangeTaskId}')/ProcessObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeTasks('{ChangeTaskId}')/ProcessObjects('{ChangeItemId}')",
				action: 'ChangeTask.ProcessObjects.GetChangeItem',
			},
			{
				name: 'ChangeTask.ProcessObjects.GetChangeItems',
				value: "GET /ChangeTasks('{ChangeTaskId}')/ProcessObjects",
				description: "Get ChangeItem - get /ChangeTasks('{ChangeTaskId}')/ProcessObjects",
				action: 'ChangeTask.ProcessObjects.GetChangeItems',
			},
			{
				name: 'ChangeTask.ReferenceObjects.GetChangeItem',
				value: "GET /ChangeTasks('{ChangeTaskId}')/ReferenceObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeTasks('{ChangeTaskId}')/ReferenceObjects('{ChangeItemId}')",
				action: 'ChangeTask.ReferenceObjects.GetChangeItem',
			},
			{
				name: 'ChangeTask.ReferenceObjects.GetChangeItems',
				value: "GET /ChangeTasks('{ChangeTaskId}')/ReferenceObjects",
				description: "Get ChangeItem - get /ChangeTasks('{ChangeTaskId}')/ReferenceObjects",
				action: 'ChangeTask.ReferenceObjects.GetChangeItems',
			},
			{
				name: 'ChangeTask.ResultingLinks.GetResultingLinkItem',
				value: "GET /ChangeTasks('{ChangeTaskId}')/ResultingLinks('{ResultingLinkItemId}')",
				description: "Get ResultingLinkItem for a given ResultingLinkItemId - get /ChangeTasks('{ChangeTaskId}')/ResultingLinks('{ResultingLinkItemId}')",
				action: 'ChangeTask.ResultingLinks.GetResultingLinkItem',
			},
			{
				name: 'ChangeTask.ResultingLinks.GetResultingLinkItems',
				value: "GET /ChangeTasks('{ChangeTaskId}')/ResultingLinks",
				description: "Get ResultingLinkItem - get /ChangeTasks('{ChangeTaskId}')/ResultingLinks",
				action: 'ChangeTask.ResultingLinks.GetResultingLinkItems',
			},
			{
				name: 'ChangeTask.ResultingLinks.PostResultingLinkItem',
				value: "POST /ChangeTasks('{ChangeTaskId}')/ResultingLinks",
				description: "Create ResultingLinkItem - post /ChangeTasks('{ChangeTaskId}')/ResultingLinks",
				action: 'ChangeTask.ResultingLinks.PostResultingLinkItem',
			},
			{
				name: 'ChangeTask.ResultingLinks.UpdateResultingLinkItem',
				value: "PATCH /ChangeTasks('{ChangeTaskId}')/ResultingLinks('{ResultingLinkItemId}')",
				description: "Update an existing ResultingLinkItem - patch /ChangeTasks('{ChangeTaskId}')/ResultingLinks('{ResultingLinkItemId}')",
				action: 'ChangeTask.ResultingLinks.UpdateResultingLinkItem',
			},
			{
				name: 'ChangeTask.ResultingObjects.GetChangeable',
				value: "GET /ChangeTasks('{ChangeTaskId}')/ResultingObjects('{ChangeableId}')",
				description: "Get Changeable for a given ChangeableId - get /ChangeTasks('{ChangeTaskId}')/ResultingObjects('{ChangeableId}')",
				action: 'ChangeTask.ResultingObjects.GetChangeable',
			},
			{
				name: 'ChangeTask.ResultingObjects.GetChangeables',
				value: "GET /ChangeTasks('{ChangeTaskId}')/ResultingObjects",
				description: "Get Changeable - get /ChangeTasks('{ChangeTaskId}')/ResultingObjects",
				action: 'ChangeTask.ResultingObjects.GetChangeables',
			},
			{
				name: 'ChangeTask.Revisions.GetChangeItem',
				value: "GET /ChangeTasks('{ChangeTaskId}')/Revisions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeTasks('{ChangeTaskId}')/Revisions('{ChangeItemId}')",
				action: 'ChangeTask.Revisions.GetChangeItem',
			},
			{
				name: 'ChangeTask.Revisions.GetChangeItems',
				value: "GET /ChangeTasks('{ChangeTaskId}')/Revisions",
				description: "Get ChangeItem - get /ChangeTasks('{ChangeTaskId}')/Revisions",
				action: 'ChangeTask.Revisions.GetChangeItems',
			},
			{
				name: 'ChangeTask.UnincorporatedLinks.GetUnincorporatedLinkItem',
				value: "GET /ChangeTasks('{ChangeTaskId}')/UnincorporatedLinks('{UnincorporatedLinkItemId}')",
				description: "Get UnincorporatedLinkItem for a given UnincorporatedLinkItemId - get /ChangeTasks('{ChangeTaskId}')/UnincorporatedLinks('{UnincorporatedLinkItemId}')",
				action: 'ChangeTask.UnincorporatedLinks.GetUnincorporatedLinkItem',
			},
			{
				name: 'ChangeTask.UnincorporatedLinks.GetUnincorporatedLinkItems',
				value: "GET /ChangeTasks('{ChangeTaskId}')/UnincorporatedLinks",
				description: "Get UnincorporatedLinkItem - get /ChangeTasks('{ChangeTaskId}')/UnincorporatedLinks",
				action: 'ChangeTask.UnincorporatedLinks.GetUnincorporatedLinkItems',
			},
			{
				name: 'ChangeTask.Versions.GetChangeItem',
				value: "GET /ChangeTasks('{ChangeTaskId}')/Versions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ChangeTasks('{ChangeTaskId}')/Versions('{ChangeItemId}')",
				action: 'ChangeTask.Versions.GetChangeItem',
			},
			{
				name: 'ChangeTask.Versions.GetChangeItems',
				value: "GET /ChangeTasks('{ChangeTaskId}')/Versions",
				description: "Get ChangeItem - get /ChangeTasks('{ChangeTaskId}')/Versions",
				action: 'ChangeTask.Versions.GetChangeItems',
			},
			{
				name: 'Function_GetChangeLinkType_With_ChangeObjectType_Container',
				value: "GET /GetChangeLinkType(LinkBaseType='{LinkBaseType}',ChangeObjectType='{ChangeObjectType}',Container='{Container}')",
				description: "Gets the valid change link entity type name for affected or resulting or hanging links as per relationship constraint. - get /GetChangeLinkType(LinkBaseType='{LinkBaseType}',ChangeObjectType='{ChangeObjectType}',Container='{Container}')",
				action: 'Function_GetChangeLinkType_With_ChangeObjectType_Container',
			},
			{
				name: 'GenericChangeRequest.AffectedObjects.GetChangeable',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/AffectedObjects('{ChangeableId}')",
				description: "Get Changeable for a given ChangeableId - get /GenericChangeRequests('{GenericChangeRequestId}')/AffectedObjects('{ChangeableId}')",
				action: 'GenericChangeRequest.AffectedObjects.GetChangeable',
			},
			{
				name: 'GenericChangeRequest.AffectedObjects.GetChangeables',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/AffectedObjects",
				description: "Get Changeable - get /GenericChangeRequests('{GenericChangeRequestId}')/AffectedObjects",
				action: 'GenericChangeRequest.AffectedObjects.GetChangeables',
			},
			{
				name: 'GenericChangeRequest.AffectsLinks.GetAffectsLinkItem',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/AffectsLinks('{AffectsLinkItemId}')",
				description: "Get AffectsLinkItem for a given AffectsLinkItemId - get /GenericChangeRequests('{GenericChangeRequestId}')/AffectsLinks('{AffectsLinkItemId}')",
				action: 'GenericChangeRequest.AffectsLinks.GetAffectsLinkItem',
			},
			{
				name: 'GenericChangeRequest.AffectsLinks.GetAffectsLinkItems',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/AffectsLinks",
				description: "Get AffectsLinkItem - get /GenericChangeRequests('{GenericChangeRequestId}')/AffectsLinks",
				action: 'GenericChangeRequest.AffectsLinks.GetAffectsLinkItems',
			},
			{
				name: 'GenericChangeRequest.Creator.GetUser',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/Creator",
				description: "Get User - get /GenericChangeRequests('{GenericChangeRequestId}')/Creator",
				action: 'GenericChangeRequest.Creator.GetUser',
			},
			{
				name: 'GenericChangeRequest.Modifier.GetUser',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/Modifier",
				description: "Get User - get /GenericChangeRequests('{GenericChangeRequestId}')/Modifier",
				action: 'GenericChangeRequest.Modifier.GetUser',
			},
			{
				name: 'GenericChangeRequest.Organization.GetOrganization',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/Organization",
				description: "Get Organization - get /GenericChangeRequests('{GenericChangeRequestId}')/Organization",
				action: 'GenericChangeRequest.Organization.GetOrganization',
			},
			{
				name: 'GenericChangeRequest.ProcessLinks.GetProcessLinkItem',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/ProcessLinks('{ProcessLinkItemId}')",
				description: "Get ProcessLinkItem for a given ProcessLinkItemId - get /GenericChangeRequests('{GenericChangeRequestId}')/ProcessLinks('{ProcessLinkItemId}')",
				action: 'GenericChangeRequest.ProcessLinks.GetProcessLinkItem',
			},
			{
				name: 'GenericChangeRequest.ProcessLinks.GetProcessLinkItems',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/ProcessLinks",
				description: "Get ProcessLinkItem - get /GenericChangeRequests('{GenericChangeRequestId}')/ProcessLinks",
				action: 'GenericChangeRequest.ProcessLinks.GetProcessLinkItems',
			},
			{
				name: 'GenericChangeRequest.ProcessObjects.GetChangeItem',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/ProcessObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /GenericChangeRequests('{GenericChangeRequestId}')/ProcessObjects('{ChangeItemId}')",
				action: 'GenericChangeRequest.ProcessObjects.GetChangeItem',
			},
			{
				name: 'GenericChangeRequest.ProcessObjects.GetChangeItems',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/ProcessObjects",
				description: "Get ChangeItem - get /GenericChangeRequests('{GenericChangeRequestId}')/ProcessObjects",
				action: 'GenericChangeRequest.ProcessObjects.GetChangeItems',
			},
			{
				name: 'GenericChangeRequest.ReferenceLinks.GetReferenceLinkItem',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				description: "Get ReferenceLinkItem for a given ReferenceLinkItemId - get /GenericChangeRequests('{GenericChangeRequestId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				action: 'GenericChangeRequest.ReferenceLinks.GetReferenceLinkItem',
			},
			{
				name: 'GenericChangeRequest.ReferenceLinks.GetReferenceLinkItems',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/ReferenceLinks",
				description: "Get ReferenceLinkItem - get /GenericChangeRequests('{GenericChangeRequestId}')/ReferenceLinks",
				action: 'GenericChangeRequest.ReferenceLinks.GetReferenceLinkItems',
			},
			{
				name: 'GenericChangeRequest.ReferenceObjects.GetChangeItem',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/ReferenceObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /GenericChangeRequests('{GenericChangeRequestId}')/ReferenceObjects('{ChangeItemId}')",
				action: 'GenericChangeRequest.ReferenceObjects.GetChangeItem',
			},
			{
				name: 'GenericChangeRequest.ReferenceObjects.GetChangeItems',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/ReferenceObjects",
				description: "Get ChangeItem - get /GenericChangeRequests('{GenericChangeRequestId}')/ReferenceObjects",
				action: 'GenericChangeRequest.ReferenceObjects.GetChangeItems',
			},
			{
				name: 'GenericChangeRequest.Revisions.GetChangeItem',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/Revisions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /GenericChangeRequests('{GenericChangeRequestId}')/Revisions('{ChangeItemId}')",
				action: 'GenericChangeRequest.Revisions.GetChangeItem',
			},
			{
				name: 'GenericChangeRequest.Revisions.GetChangeItems',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/Revisions",
				description: "Get ChangeItem - get /GenericChangeRequests('{GenericChangeRequestId}')/Revisions",
				action: 'GenericChangeRequest.Revisions.GetChangeItems',
			},
			{
				name: 'GenericChangeRequest.Versions.GetChangeItem',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/Versions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /GenericChangeRequests('{GenericChangeRequestId}')/Versions('{ChangeItemId}')",
				action: 'GenericChangeRequest.Versions.GetChangeItem',
			},
			{
				name: 'GenericChangeRequest.Versions.GetChangeItems',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/Versions",
				description: "Get ChangeItem - get /GenericChangeRequests('{GenericChangeRequestId}')/Versions",
				action: 'GenericChangeRequest.Versions.GetChangeItems',
			},
			{
				name: 'GetChangeable',
				value: "GET /Changeables('{ChangeableId}')",
				description: "Get Changeable for a given ChangeableId - get /Changeables('{ChangeableId}')",
				action: 'GetChangeable',
			},
			{
				name: 'GetChangeables',
				value: 'GET /Changeables',
				description: 'Get Changeables - get /Changeables',
				action: 'GetChangeables',
			},
			{
				name: 'GetChangeIssue',
				value: "GET /ChangeIssues('{ChangeIssueId}')",
				description: "Get ChangeIssue for a given ChangeIssueId - get /ChangeIssues('{ChangeIssueId}')",
				action: 'GetChangeIssue',
			},
			{
				name: 'GetChangeIssues',
				value: 'GET /ChangeIssues',
				description: 'Get ChangeIssues - get /ChangeIssues',
				action: 'GetChangeIssues',
			},
			{
				name: 'GetChangeNotice',
				value: "GET /ChangeNotices('{ChangeNoticeId}')",
				description: "Get ChangeNotice for a given ChangeNoticeId - get /ChangeNotices('{ChangeNoticeId}')",
				action: 'GetChangeNotice',
			},
			{
				name: 'GetChangeNotices',
				value: 'GET /ChangeNotices',
				description: 'Get ChangeNotices - get /ChangeNotices',
				action: 'GetChangeNotices',
			},
			{
				name: 'GetChangeOrder',
				value: "GET /ChangeOrders('{ChangeOrderId}')",
				description: "Get ChangeOrder for a given ChangeOrderId - get /ChangeOrders('{ChangeOrderId}')",
				action: 'GetChangeOrder',
			},
			{
				name: 'GetChangeOrders',
				value: 'GET /ChangeOrders',
				description: 'Get ChangeOrders - get /ChangeOrders',
				action: 'GetChangeOrders',
			},
			{
				name: 'GetChangeRequest',
				value: "GET /ChangeRequests('{ChangeRequestId}')",
				description: "Get ChangeRequest for a given ChangeRequestId - get /ChangeRequests('{ChangeRequestId}')",
				action: 'GetChangeRequest',
			},
			{
				name: 'GetChangeRequests',
				value: 'GET /ChangeRequests',
				description: 'Get ChangeRequests - get /ChangeRequests',
				action: 'GetChangeRequests',
			},
			{
				name: 'GetChangeTask',
				value: "GET /ChangeTasks('{ChangeTaskId}')",
				description: "Get ChangeTask for a given ChangeTaskId - get /ChangeTasks('{ChangeTaskId}')",
				action: 'GetChangeTask',
			},
			{
				name: 'GetChangeTasks',
				value: 'GET /ChangeTasks',
				description: 'Get ChangeTasks - get /ChangeTasks',
				action: 'GetChangeTasks',
			},
			{
				name: 'GetDeviations',
				value: 'GetDeviations',
				description: 'Get ChangeIssues of type Deviation - get /ChangeIssues/PTC.ChangeMgmt.Deviation',
				action: 'GetDeviations',
			},
			{
				name: 'GetGenericChangeRequest',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')",
				description: "Get GenericChangeRequest for a given GenericChangeRequestId - get /GenericChangeRequests('{GenericChangeRequestId}')",
				action: 'GetGenericChangeRequest',
			},
			{
				name: 'GetGenericChangeRequests',
				value: 'GET /GenericChangeRequests',
				description: 'Get GenericChangeRequests - get /GenericChangeRequests',
				action: 'GetGenericChangeRequests',
			},
			{
				name: 'GetProblemReport',
				value: "GET /ProblemReports('{ProblemReportId}')",
				description: "Get ProblemReport for a given ProblemReportId - get /ProblemReports('{ProblemReportId}')",
				action: 'GetProblemReport',
			},
			{
				name: 'GetProblemReports',
				value: 'GET /ProblemReports',
				description: 'Get ProblemReports - get /ProblemReports',
				action: 'GetProblemReports',
			},
			{
				name: 'GetVariance',
				value: "GET /Variances('{VarianceId}')",
				description: "Get Variance for a given VarianceId - get /Variances('{VarianceId}')",
				action: 'GetVariance',
			},
			{
				name: 'GetVariances',
				value: 'GET /Variances',
				description: 'Get Variances - get /Variances',
				action: 'GetVariances',
			},
			{
				name: 'GetWaivers',
				value: 'GetWaivers',
				description: 'Get ChangeIssues of type Waiver - get /ChangeIssues/PTC.ChangeMgmt.Waiver',
				action: 'GetWaivers',
			},
			{
				name: 'PostChangeNotice',
				value: 'POST /ChangeNotices',
				description: 'Create ChangeNotice - post /ChangeNotices',
				action: 'PostChangeNotice',
			},
			{
				name: 'PostChangeRequest',
				value: 'POST /ChangeRequests',
				description: 'Create ChangeRequest - post /ChangeRequests',
				action: 'PostChangeRequest',
			},
			{
				name: 'PostChangeTask',
				value: 'POST /ChangeTasks',
				description: 'Create ChangeTask - post /ChangeTasks',
				action: 'PostChangeTask',
			},
			{
				name: 'PostProblemReport',
				value: 'POST /ProblemReports',
				description: 'Create ProblemReport - post /ProblemReports',
				action: 'PostProblemReport',
			},
			{
				name: 'PostVariance',
				value: 'POST /Variances',
				description: 'Create Variance - post /Variances',
				action: 'PostVariance',
			},
			{
				name: 'ProblemReport.AffectedObjects.GetChangeable',
				value: "GET /ProblemReports('{ProblemReportId}')/AffectedObjects('{ChangeableId}')",
				description: "Get Changeable for a given ChangeableId - get /ProblemReports('{ProblemReportId}')/AffectedObjects('{ChangeableId}')",
				action: 'ProblemReport.AffectedObjects.GetChangeable',
			},
			{
				name: 'ProblemReport.AffectedObjects.GetChangeables',
				value: "GET /ProblemReports('{ProblemReportId}')/AffectedObjects",
				description: "Get Changeable - get /ProblemReports('{ProblemReportId}')/AffectedObjects",
				action: 'ProblemReport.AffectedObjects.GetChangeables',
			},
			{
				name: 'ProblemReport.AffectsLinks.GetAffectsLinkItem',
				value: "GET /ProblemReports('{ProblemReportId}')/AffectsLinks('{AffectsLinkItemId}')",
				description: "Get AffectsLinkItem for a given AffectsLinkItemId - get /ProblemReports('{ProblemReportId}')/AffectsLinks('{AffectsLinkItemId}')",
				action: 'ProblemReport.AffectsLinks.GetAffectsLinkItem',
			},
			{
				name: 'ProblemReport.AffectsLinks.GetAffectsLinkItems',
				value: "GET /ProblemReports('{ProblemReportId}')/AffectsLinks",
				description: "Get AffectsLinkItem - get /ProblemReports('{ProblemReportId}')/AffectsLinks",
				action: 'ProblemReport.AffectsLinks.GetAffectsLinkItems',
			},
			{
				name: 'ProblemReport.Attachments.DeletePTC.ContentItem',
				value: "DELETE /ProblemReports('{ProblemReportId}')/Attachments('{ContentItemId}')",
				description: "Delete an existing ContentItem - delete /ProblemReports('{ProblemReportId}')/Attachments('{ContentItemId}')",
				action: 'ProblemReport.Attachments.DeletePTC.ContentItem',
			},
			{
				name: 'ProblemReport.Attachments.GetContentItem',
				value: "GET /ProblemReports('{ProblemReportId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /ProblemReports('{ProblemReportId}')/Attachments('{ContentItemId}')",
				action: 'ProblemReport.Attachments.GetContentItem',
			},
			{
				name: 'ProblemReport.Attachments.GetContentItems',
				value: "GET /ProblemReports('{ProblemReportId}')/Attachments",
				description: "Get ContentItem - get /ProblemReports('{ProblemReportId}')/Attachments",
				action: 'ProblemReport.Attachments.GetContentItems',
			},
			{
				name: 'ProblemReport.Attachments.PostContentItem',
				value: "POST /ProblemReports('{ProblemReportId}')/Attachments",
				description: "Create ContentItem - post /ProblemReports('{ProblemReportId}')/Attachments",
				action: 'ProblemReport.Attachments.PostContentItem',
			},
			{
				name: 'ProblemReport.Attachments.UpdateContentItem',
				value: "PATCH /ProblemReports('{ProblemReportId}')/Attachments('{ContentItemId}')",
				description: "Update an existing ContentItem - patch /ProblemReports('{ProblemReportId}')/Attachments('{ContentItemId}')",
				action: 'ProblemReport.Attachments.UpdateContentItem',
			},
			{
				name: 'ProblemReport.ChangeAdministratorI.GetPrincipal',
				value: "GET /ProblemReports('{ProblemReportId}')/ChangeAdministratorI('{PrincipalId}')",
				description: "Get Principal for a given PrincipalId - get /ProblemReports('{ProblemReportId}')/ChangeAdministratorI('{PrincipalId}')",
				action: 'ProblemReport.ChangeAdministratorI.GetPrincipal',
			},
			{
				name: 'ProblemReport.ChangeAdministratorI.GetPrincipals',
				value: "GET /ProblemReports('{ProblemReportId}')/ChangeAdministratorI",
				description: "Get Principal - get /ProblemReports('{ProblemReportId}')/ChangeAdministratorI",
				action: 'ProblemReport.ChangeAdministratorI.GetPrincipals',
			},
			{
				name: 'ProblemReport.CIAffectLinks.GetReportedAgainstLinkItem',
				value: "GET /ProblemReports('{ProblemReportId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				description: "Get ReportedAgainstLinkItem for a given ReportedAgainstLinkItemId - get /ProblemReports('{ProblemReportId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				action: 'ProblemReport.CIAffectLinks.GetReportedAgainstLinkItem',
			},
			{
				name: 'ProblemReport.CIAffectLinks.GetReportedAgainstLinkItems',
				value: "GET /ProblemReports('{ProblemReportId}')/CIAffectLinks",
				description: "Get ReportedAgainstLinkItem - get /ProblemReports('{ProblemReportId}')/CIAffectLinks",
				action: 'ProblemReport.CIAffectLinks.GetReportedAgainstLinkItems',
			},
			{
				name: 'ProblemReport.CIAffectLinks.PostReportedAgainstLinkItem',
				value: "POST /ProblemReports('{ProblemReportId}')/CIAffectLinks",
				description: "Create ReportedAgainstLinkItem - post /ProblemReports('{ProblemReportId}')/CIAffectLinks",
				action: 'ProblemReport.CIAffectLinks.PostReportedAgainstLinkItem',
			},
			{
				name: 'ProblemReport.CIAffectLinks.UpdateReportedAgainstLinkItem',
				value: "PATCH /ProblemReports('{ProblemReportId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				description: "Update an existing ReportedAgainstLinkItem - patch /ProblemReports('{ProblemReportId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				action: 'ProblemReport.CIAffectLinks.UpdateReportedAgainstLinkItem',
			},
			{
				name: 'ProblemReport.Context.GetContainer',
				value: "GET /ProblemReports('{ProblemReportId}')/Context",
				description: "Get Container - get /ProblemReports('{ProblemReportId}')/Context",
				action: 'ProblemReport.Context.GetContainer',
			},
			{
				name: 'ProblemReport.Creator.GetUser',
				value: "GET /ProblemReports('{ProblemReportId}')/Creator",
				description: "Get User - get /ProblemReports('{ProblemReportId}')/Creator",
				action: 'ProblemReport.Creator.GetUser',
			},
			{
				name: 'ProblemReport.Folder.GetFolder',
				value: "GET /ProblemReports('{ProblemReportId}')/Folder",
				description: "Get Folder - get /ProblemReports('{ProblemReportId}')/Folder",
				action: 'ProblemReport.Folder.GetFolder',
			},
			{
				name: 'ProblemReport.Modifier.GetUser',
				value: "GET /ProblemReports('{ProblemReportId}')/Modifier",
				description: "Get User - get /ProblemReports('{ProblemReportId}')/Modifier",
				action: 'ProblemReport.Modifier.GetUser',
			},
			{
				name: 'ProblemReport.Organization.GetOrganization',
				value: "GET /ProblemReports('{ProblemReportId}')/Organization",
				description: "Get Organization - get /ProblemReports('{ProblemReportId}')/Organization",
				action: 'ProblemReport.Organization.GetOrganization',
			},
			{
				name: 'ProblemReport.ProcessLinks.GetProcessLinkItem',
				value: "GET /ProblemReports('{ProblemReportId}')/ProcessLinks('{ProcessLinkItemId}')",
				description: "Get ProcessLinkItem for a given ProcessLinkItemId - get /ProblemReports('{ProblemReportId}')/ProcessLinks('{ProcessLinkItemId}')",
				action: 'ProblemReport.ProcessLinks.GetProcessLinkItem',
			},
			{
				name: 'ProblemReport.ProcessLinks.GetProcessLinkItems',
				value: "GET /ProblemReports('{ProblemReportId}')/ProcessLinks",
				description: "Get ProcessLinkItem - get /ProblemReports('{ProblemReportId}')/ProcessLinks",
				action: 'ProblemReport.ProcessLinks.GetProcessLinkItems',
			},
			{
				name: 'ProblemReport.ProcessObjects.GetChangeItem',
				value: "GET /ProblemReports('{ProblemReportId}')/ProcessObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ProblemReports('{ProblemReportId}')/ProcessObjects('{ChangeItemId}')",
				action: 'ProblemReport.ProcessObjects.GetChangeItem',
			},
			{
				name: 'ProblemReport.ProcessObjects.GetChangeItems',
				value: "GET /ProblemReports('{ProblemReportId}')/ProcessObjects",
				description: "Get ChangeItem - get /ProblemReports('{ProblemReportId}')/ProcessObjects",
				action: 'ProblemReport.ProcessObjects.GetChangeItems',
			},
			{
				name: 'ProblemReport.ReferenceLinks.GetReferenceLinkItem',
				value: "GET /ProblemReports('{ProblemReportId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				description: "Get ReferenceLinkItem for a given ReferenceLinkItemId - get /ProblemReports('{ProblemReportId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				action: 'ProblemReport.ReferenceLinks.GetReferenceLinkItem',
			},
			{
				name: 'ProblemReport.ReferenceLinks.GetReferenceLinkItems',
				value: "GET /ProblemReports('{ProblemReportId}')/ReferenceLinks",
				description: "Get ReferenceLinkItem - get /ProblemReports('{ProblemReportId}')/ReferenceLinks",
				action: 'ProblemReport.ReferenceLinks.GetReferenceLinkItems',
			},
			{
				name: 'ProblemReport.ReferenceObjects.GetChangeItem',
				value: "GET /ProblemReports('{ProblemReportId}')/ReferenceObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ProblemReports('{ProblemReportId}')/ReferenceObjects('{ChangeItemId}')",
				action: 'ProblemReport.ReferenceObjects.GetChangeItem',
			},
			{
				name: 'ProblemReport.ReferenceObjects.GetChangeItems',
				value: "GET /ProblemReports('{ProblemReportId}')/ReferenceObjects",
				description: "Get ChangeItem - get /ProblemReports('{ProblemReportId}')/ReferenceObjects",
				action: 'ProblemReport.ReferenceObjects.GetChangeItems',
			},
			{
				name: 'ProblemReport.Revisions.GetChangeItem',
				value: "GET /ProblemReports('{ProblemReportId}')/Revisions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ProblemReports('{ProblemReportId}')/Revisions('{ChangeItemId}')",
				action: 'ProblemReport.Revisions.GetChangeItem',
			},
			{
				name: 'ProblemReport.Revisions.GetChangeItems',
				value: "GET /ProblemReports('{ProblemReportId}')/Revisions",
				description: "Get ChangeItem - get /ProblemReports('{ProblemReportId}')/Revisions",
				action: 'ProblemReport.Revisions.GetChangeItems',
			},
			{
				name: 'ProblemReport.Versions.GetChangeItem',
				value: "GET /ProblemReports('{ProblemReportId}')/Versions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /ProblemReports('{ProblemReportId}')/Versions('{ChangeItemId}')",
				action: 'ProblemReport.Versions.GetChangeItem',
			},
			{
				name: 'ProblemReport.Versions.GetChangeItems',
				value: "GET /ProblemReports('{ProblemReportId}')/Versions",
				description: "Get ChangeItem - get /ProblemReports('{ProblemReportId}')/Versions",
				action: 'ProblemReport.Versions.GetChangeItems',
			},
			{
				name: 'PTC.ChangeMgmt.Changeable.Action_SetState_With',
				value: "POST /Changeables('{ChangeableId}')/PTC.ChangeMgmt.SetState",
				description: "Execute SetState - post /Changeables('{ChangeableId}')/PTC.ChangeMgmt.SetState",
				action: 'PTC.ChangeMgmt.Changeable.Action_SetState_With',
			},
			{
				name: 'PTC.ChangeMgmt.Changeable.Function_GetLifeCycleTemplate',
				value: "GET /Changeables('{ChangeableId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /Changeables('{ChangeableId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ChangeMgmt.Changeable.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ChangeMgmt.Changeable.Function_GetValidStateTransitions',
				value: "GET /Changeables('{ChangeableId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /Changeables('{ChangeableId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				action: 'PTC.ChangeMgmt.Changeable.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeIssue.Action_SetState_With',
				value: "POST /ChangeIssues('{ChangeIssueId}')/PTC.ChangeMgmt.SetState",
				description: "Execute SetState - post /ChangeIssues('{ChangeIssueId}')/PTC.ChangeMgmt.SetState",
				action: 'PTC.ChangeMgmt.ChangeIssue.Action_SetState_With',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeIssue.Function_GetLifeCycleTemplate',
				value: "GET /ChangeIssues('{ChangeIssueId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /ChangeIssues('{ChangeIssueId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ChangeMgmt.ChangeIssue.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeIssue.Function_GetValidStateTransitions',
				value: "GET /ChangeIssues('{ChangeIssueId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /ChangeIssues('{ChangeIssueId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				action: 'PTC.ChangeMgmt.ChangeIssue.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeNotice.Action_Reserve_With',
				value: "POST /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.Reserve",
				description: "Execute Reserve - post /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.Reserve",
				action: 'PTC.ChangeMgmt.ChangeNotice.Action_Reserve_With',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeNotice.Action_SetState_With',
				value: "POST /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.SetState",
				description: "Execute SetState - post /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.SetState",
				action: 'PTC.ChangeMgmt.ChangeNotice.Action_SetState_With',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeNotice.Action_Submit',
				value: "POST /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.Submit",
				description: "Execute Submit - post /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.Submit",
				action: 'PTC.ChangeMgmt.ChangeNotice.Action_Submit',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeNotice.Action_UndoReservation',
				value: "POST /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.UndoReservation",
				description: "Execute UndoReservation - post /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.UndoReservation",
				action: 'PTC.ChangeMgmt.ChangeNotice.Action_UndoReservation',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeNotice.Action_UploadStage1Action_With_DelegateName',
				value: "POST /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.UploadStage1Action",
				description: "upload stage 1 bound action - post /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.UploadStage1Action",
				action: 'PTC.ChangeMgmt.ChangeNotice.Action_UploadStage1Action_With_DelegateName',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeNotice.Action_UploadStage3Action_With',
				value: "POST /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.UploadStage3Action",
				description: "upload stage 3 bound action - post /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.UploadStage3Action",
				action: 'PTC.ChangeMgmt.ChangeNotice.Action_UploadStage3Action_With',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeNotice.Function_GetLifeCycleTemplate',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ChangeMgmt.ChangeNotice.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeNotice.Function_GetValidStateTransitions',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				action: 'PTC.ChangeMgmt.ChangeNotice.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeNotice.Function_IsReservedByMe',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.IsReservedByMe()",
				description: "Execute IsReservedByMe - get /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.IsReservedByMe()",
				action: 'PTC.ChangeMgmt.ChangeNotice.Function_IsReservedByMe',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeNotice.Function_IsSubmitted',
				value: "GET /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.IsSubmitted()",
				description: "Execute IsSubmitted - get /ChangeNotices('{ChangeNoticeId}')/PTC.ChangeMgmt.IsSubmitted()",
				action: 'PTC.ChangeMgmt.ChangeNotice.Function_IsSubmitted',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeOrder.Action_SetState_With',
				value: "POST /ChangeOrders('{ChangeOrderId}')/PTC.ChangeMgmt.SetState",
				description: "Execute SetState - post /ChangeOrders('{ChangeOrderId}')/PTC.ChangeMgmt.SetState",
				action: 'PTC.ChangeMgmt.ChangeOrder.Action_SetState_With',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeOrder.Function_GetLifeCycleTemplate',
				value: "GET /ChangeOrders('{ChangeOrderId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /ChangeOrders('{ChangeOrderId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ChangeMgmt.ChangeOrder.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeOrder.Function_GetValidStateTransitions',
				value: "GET /ChangeOrders('{ChangeOrderId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /ChangeOrders('{ChangeOrderId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				action: 'PTC.ChangeMgmt.ChangeOrder.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeRequest.Action_Reserve_With',
				value: "POST /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.Reserve",
				description: "Execute Reserve - post /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.Reserve",
				action: 'PTC.ChangeMgmt.ChangeRequest.Action_Reserve_With',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeRequest.Action_SetState_With',
				value: "POST /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.SetState",
				description: "Execute SetState - post /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.SetState",
				action: 'PTC.ChangeMgmt.ChangeRequest.Action_SetState_With',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeRequest.Action_Submit',
				value: "POST /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.Submit",
				description: "Execute Submit - post /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.Submit",
				action: 'PTC.ChangeMgmt.ChangeRequest.Action_Submit',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeRequest.Action_UndoReservation',
				value: "POST /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.UndoReservation",
				description: "Execute UndoReservation - post /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.UndoReservation",
				action: 'PTC.ChangeMgmt.ChangeRequest.Action_UndoReservation',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeRequest.Action_UploadStage1Action_With_DelegateName',
				value: "POST /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.UploadStage1Action",
				description: "upload stage 1 bound action - post /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.UploadStage1Action",
				action: 'PTC.ChangeMgmt.ChangeRequest.Action_UploadStage1Action_With_DelegateName',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeRequest.Action_UploadStage3Action_With',
				value: "POST /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.UploadStage3Action",
				description: "upload stage 3 bound action - post /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.UploadStage3Action",
				action: 'PTC.ChangeMgmt.ChangeRequest.Action_UploadStage3Action_With',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeRequest.Function_GetLifeCycleTemplate',
				value: "GET /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ChangeMgmt.ChangeRequest.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeRequest.Function_GetValidStateTransitions',
				value: "GET /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				action: 'PTC.ChangeMgmt.ChangeRequest.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeRequest.Function_IsReservedByMe',
				value: "GET /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.IsReservedByMe()",
				description: "Execute IsReservedByMe - get /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.IsReservedByMe()",
				action: 'PTC.ChangeMgmt.ChangeRequest.Function_IsReservedByMe',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeRequest.Function_IsSubmitted',
				value: "GET /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.IsSubmitted()",
				description: "Execute IsSubmitted - get /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.IsSubmitted()",
				action: 'PTC.ChangeMgmt.ChangeRequest.Function_IsSubmitted',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeTask.Action_Reserve_With',
				value: "POST /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.Reserve",
				description: "Execute Reserve - post /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.Reserve",
				action: 'PTC.ChangeMgmt.ChangeTask.Action_Reserve_With',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeTask.Action_SetState_With',
				value: "POST /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.SetState",
				description: "Execute SetState - post /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.SetState",
				action: 'PTC.ChangeMgmt.ChangeTask.Action_SetState_With',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeTask.Action_UndoReservation',
				value: "POST /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.UndoReservation",
				description: "Execute UndoReservation - post /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.UndoReservation",
				action: 'PTC.ChangeMgmt.ChangeTask.Action_UndoReservation',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeTask.Action_UploadStage1Action_With_DelegateName',
				value: "POST /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.UploadStage1Action",
				description: "upload stage 1 bound action - post /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.UploadStage1Action",
				action: 'PTC.ChangeMgmt.ChangeTask.Action_UploadStage1Action_With_DelegateName',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeTask.Action_UploadStage3Action_With',
				value: "POST /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.UploadStage3Action",
				description: "upload stage 3 bound action - post /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.UploadStage3Action",
				action: 'PTC.ChangeMgmt.ChangeTask.Action_UploadStage3Action_With',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeTask.Function_GetLifeCycleTemplate',
				value: "GET /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ChangeMgmt.ChangeTask.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeTask.Function_GetValidStateTransitions',
				value: "GET /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				action: 'PTC.ChangeMgmt.ChangeTask.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ChangeMgmt.ChangeTask.Function_IsReservedByMe',
				value: "GET /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.IsReservedByMe()",
				description: "Execute IsReservedByMe - get /ChangeTasks('{ChangeTaskId}')/PTC.ChangeMgmt.IsReservedByMe()",
				action: 'PTC.ChangeMgmt.ChangeTask.Function_IsReservedByMe',
			},
			{
				name: 'PTC.ChangeMgmt.GenericChangeRequest.Action_SetState_With',
				value: "POST /GenericChangeRequests('{GenericChangeRequestId}')/PTC.ChangeMgmt.SetState",
				description: "Execute SetState - post /GenericChangeRequests('{GenericChangeRequestId}')/PTC.ChangeMgmt.SetState",
				action: 'PTC.ChangeMgmt.GenericChangeRequest.Action_SetState_With',
			},
			{
				name: 'PTC.ChangeMgmt.GenericChangeRequest.Function_GetLifeCycleTemplate',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /GenericChangeRequests('{GenericChangeRequestId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ChangeMgmt.GenericChangeRequest.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ChangeMgmt.GenericChangeRequest.Function_GetValidStateTransitions',
				value: "GET /GenericChangeRequests('{GenericChangeRequestId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /GenericChangeRequests('{GenericChangeRequestId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				action: 'PTC.ChangeMgmt.GenericChangeRequest.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ChangeMgmt.ProblemReport.Action_Reserve_With',
				value: "POST /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.Reserve",
				description: "Execute Reserve - post /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.Reserve",
				action: 'PTC.ChangeMgmt.ProblemReport.Action_Reserve_With',
			},
			{
				name: 'PTC.ChangeMgmt.ProblemReport.Action_SetState_With',
				value: "POST /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.SetState",
				description: "Execute SetState - post /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.SetState",
				action: 'PTC.ChangeMgmt.ProblemReport.Action_SetState_With',
			},
			{
				name: 'PTC.ChangeMgmt.ProblemReport.Action_Submit',
				value: "POST /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.Submit",
				description: "Execute Submit - post /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.Submit",
				action: 'PTC.ChangeMgmt.ProblemReport.Action_Submit',
			},
			{
				name: 'PTC.ChangeMgmt.ProblemReport.Action_UndoReservation',
				value: "POST /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.UndoReservation",
				description: "Execute UndoReservation - post /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.UndoReservation",
				action: 'PTC.ChangeMgmt.ProblemReport.Action_UndoReservation',
			},
			{
				name: 'PTC.ChangeMgmt.ProblemReport.Action_UploadStage1Action_With_DelegateName',
				value: "POST /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.UploadStage1Action",
				description: "upload stage 1 bound action - post /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.UploadStage1Action",
				action: 'PTC.ChangeMgmt.ProblemReport.Action_UploadStage1Action_With_DelegateName',
			},
			{
				name: 'PTC.ChangeMgmt.ProblemReport.Action_UploadStage3Action_With',
				value: "POST /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.UploadStage3Action",
				description: "upload stage 3 bound action - post /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.UploadStage3Action",
				action: 'PTC.ChangeMgmt.ProblemReport.Action_UploadStage3Action_With',
			},
			{
				name: 'PTC.ChangeMgmt.ProblemReport.Function_GetLifeCycleTemplate',
				value: "GET /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ChangeMgmt.ProblemReport.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ChangeMgmt.ProblemReport.Function_GetValidStateTransitions',
				value: "GET /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				action: 'PTC.ChangeMgmt.ProblemReport.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ChangeMgmt.ProblemReport.Function_IsReservedByMe',
				value: "GET /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.IsReservedByMe()",
				description: "Execute IsReservedByMe - get /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.IsReservedByMe()",
				action: 'PTC.ChangeMgmt.ProblemReport.Function_IsReservedByMe',
			},
			{
				name: 'PTC.ChangeMgmt.ProblemReport.Function_IsSubmitted',
				value: "GET /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.IsSubmitted()",
				description: "Execute IsSubmitted - get /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.IsSubmitted()",
				action: 'PTC.ChangeMgmt.ProblemReport.Function_IsSubmitted',
			},
			{
				name: 'PTC.ChangeMgmt.Variance.Action_Reserve_With',
				value: "POST /Variances('{VarianceId}')/PTC.ChangeMgmt.Reserve",
				description: "Execute Reserve - post /Variances('{VarianceId}')/PTC.ChangeMgmt.Reserve",
				action: 'PTC.ChangeMgmt.Variance.Action_Reserve_With',
			},
			{
				name: 'PTC.ChangeMgmt.Variance.Action_SetState_With',
				value: "POST /Variances('{VarianceId}')/PTC.ChangeMgmt.SetState",
				description: "Execute SetState - post /Variances('{VarianceId}')/PTC.ChangeMgmt.SetState",
				action: 'PTC.ChangeMgmt.Variance.Action_SetState_With',
			},
			{
				name: 'PTC.ChangeMgmt.Variance.Action_Submit',
				value: "POST /Variances('{VarianceId}')/PTC.ChangeMgmt.Submit",
				description: "Execute Submit - post /Variances('{VarianceId}')/PTC.ChangeMgmt.Submit",
				action: 'PTC.ChangeMgmt.Variance.Action_Submit',
			},
			{
				name: 'PTC.ChangeMgmt.Variance.Action_UndoReservation',
				value: "POST /Variances('{VarianceId}')/PTC.ChangeMgmt.UndoReservation",
				description: "Execute UndoReservation - post /Variances('{VarianceId}')/PTC.ChangeMgmt.UndoReservation",
				action: 'PTC.ChangeMgmt.Variance.Action_UndoReservation',
			},
			{
				name: 'PTC.ChangeMgmt.Variance.Action_UploadStage1Action_With_DelegateName',
				value: "POST /Variances('{VarianceId}')/PTC.ChangeMgmt.UploadStage1Action",
				description: "upload stage 1 bound action - post /Variances('{VarianceId}')/PTC.ChangeMgmt.UploadStage1Action",
				action: 'PTC.ChangeMgmt.Variance.Action_UploadStage1Action_With_DelegateName',
			},
			{
				name: 'PTC.ChangeMgmt.Variance.Action_UploadStage3Action_With',
				value: "POST /Variances('{VarianceId}')/PTC.ChangeMgmt.UploadStage3Action",
				description: "upload stage 3 bound action - post /Variances('{VarianceId}')/PTC.ChangeMgmt.UploadStage3Action",
				action: 'PTC.ChangeMgmt.Variance.Action_UploadStage3Action_With',
			},
			{
				name: 'PTC.ChangeMgmt.Variance.Function_GetLifeCycleTemplate',
				value: "GET /Variances('{VarianceId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				description: "Execute GetLifeCycleTemplate - get /Variances('{VarianceId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				action: 'PTC.ChangeMgmt.Variance.Function_GetLifeCycleTemplate',
			},
			{
				name: 'PTC.ChangeMgmt.Variance.Function_GetValidStateTransitions',
				value: "GET /Variances('{VarianceId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				description: "Execute GetValidStateTransitions - get /Variances('{VarianceId}')/PTC.ChangeMgmt.GetValidStateTransitions()",
				action: 'PTC.ChangeMgmt.Variance.Function_GetValidStateTransitions',
			},
			{
				name: 'PTC.ChangeMgmt.Variance.Function_IsReservedByMe',
				value: "GET /Variances('{VarianceId}')/PTC.ChangeMgmt.IsReservedByMe()",
				description: "Execute IsReservedByMe - get /Variances('{VarianceId}')/PTC.ChangeMgmt.IsReservedByMe()",
				action: 'PTC.ChangeMgmt.Variance.Function_IsReservedByMe',
			},
			{
				name: 'PTC.ChangeMgmt.Variance.Function_IsSubmitted',
				value: "GET /Variances('{VarianceId}')/PTC.ChangeMgmt.IsSubmitted()",
				description: "Execute IsSubmitted - get /Variances('{VarianceId}')/PTC.ChangeMgmt.IsSubmitted()",
				action: 'PTC.ChangeMgmt.Variance.Function_IsSubmitted',
			},
			{
				name: 'UpdateChangeNotice',
				value: "PATCH /ChangeNotices('{ChangeNoticeId}')",
				description: "Update an existing ChangeNotice - patch /ChangeNotices('{ChangeNoticeId}')",
				action: 'UpdateChangeNotice',
			},
			{
				name: 'UpdateChangeRequest',
				value: "PATCH /ChangeRequests('{ChangeRequestId}')",
				description: "Update an existing ChangeRequest - patch /ChangeRequests('{ChangeRequestId}')",
				action: 'UpdateChangeRequest',
			},
			{
				name: 'UpdateChangeTask',
				value: "PATCH /ChangeTasks('{ChangeTaskId}')",
				description: "Update an existing ChangeTask - patch /ChangeTasks('{ChangeTaskId}')",
				action: 'UpdateChangeTask',
			},
			{
				name: 'UpdateProblemReport',
				value: "PATCH /ProblemReports('{ProblemReportId}')",
				description: "Update an existing ProblemReport - patch /ProblemReports('{ProblemReportId}')",
				action: 'UpdateProblemReport',
			},
			{
				name: 'UpdateVariance',
				value: "PATCH /Variances('{VarianceId}')",
				description: "Update an existing Variance - patch /Variances('{VarianceId}')",
				action: 'UpdateVariance',
			},
			{
				name: 'Variance.AffectedObjects.GetChangeable',
				value: "GET /Variances('{VarianceId}')/AffectedObjects('{ChangeableId}')",
				description: "Get Changeable for a given ChangeableId - get /Variances('{VarianceId}')/AffectedObjects('{ChangeableId}')",
				action: 'Variance.AffectedObjects.GetChangeable',
			},
			{
				name: 'Variance.AffectedObjects.GetChangeables',
				value: "GET /Variances('{VarianceId}')/AffectedObjects",
				description: "Get Changeable - get /Variances('{VarianceId}')/AffectedObjects",
				action: 'Variance.AffectedObjects.GetChangeables',
			},
			{
				name: 'Variance.AffectsLinks.GetAffectsLinkItem',
				value: "GET /Variances('{VarianceId}')/AffectsLinks('{AffectsLinkItemId}')",
				description: "Get AffectsLinkItem for a given AffectsLinkItemId - get /Variances('{VarianceId}')/AffectsLinks('{AffectsLinkItemId}')",
				action: 'Variance.AffectsLinks.GetAffectsLinkItem',
			},
			{
				name: 'Variance.AffectsLinks.GetAffectsLinkItems',
				value: "GET /Variances('{VarianceId}')/AffectsLinks",
				description: "Get AffectsLinkItem - get /Variances('{VarianceId}')/AffectsLinks",
				action: 'Variance.AffectsLinks.GetAffectsLinkItems',
			},
			{
				name: 'Variance.Attachments.DeletePTC.ContentItem',
				value: "DELETE /Variances('{VarianceId}')/Attachments('{ContentItemId}')",
				description: "Delete an existing ContentItem - delete /Variances('{VarianceId}')/Attachments('{ContentItemId}')",
				action: 'Variance.Attachments.DeletePTC.ContentItem',
			},
			{
				name: 'Variance.Attachments.GetContentItem',
				value: "GET /Variances('{VarianceId}')/Attachments('{ContentItemId}')",
				description: "Get ContentItem for a given ContentItemId - get /Variances('{VarianceId}')/Attachments('{ContentItemId}')",
				action: 'Variance.Attachments.GetContentItem',
			},
			{
				name: 'Variance.Attachments.GetContentItems',
				value: "GET /Variances('{VarianceId}')/Attachments",
				description: "Get ContentItem - get /Variances('{VarianceId}')/Attachments",
				action: 'Variance.Attachments.GetContentItems',
			},
			{
				name: 'Variance.Attachments.PostContentItem',
				value: "POST /Variances('{VarianceId}')/Attachments",
				description: "Create ContentItem - post /Variances('{VarianceId}')/Attachments",
				action: 'Variance.Attachments.PostContentItem',
			},
			{
				name: 'Variance.Attachments.UpdateContentItem',
				value: "PATCH /Variances('{VarianceId}')/Attachments('{ContentItemId}')",
				description: "Update an existing ContentItem - patch /Variances('{VarianceId}')/Attachments('{ContentItemId}')",
				action: 'Variance.Attachments.UpdateContentItem',
			},
			{
				name: 'Variance.ChangeAdministratorI.GetPrincipal',
				value: "GET /Variances('{VarianceId}')/ChangeAdministratorI('{PrincipalId}')",
				description: "Get Principal for a given PrincipalId - get /Variances('{VarianceId}')/ChangeAdministratorI('{PrincipalId}')",
				action: 'Variance.ChangeAdministratorI.GetPrincipal',
			},
			{
				name: 'Variance.ChangeAdministratorI.GetPrincipals',
				value: "GET /Variances('{VarianceId}')/ChangeAdministratorI",
				description: "Get Principal - get /Variances('{VarianceId}')/ChangeAdministratorI",
				action: 'Variance.ChangeAdministratorI.GetPrincipals',
			},
			{
				name: 'Variance.CIAffectLinks.GetReportedAgainstLinkItem',
				value: "GET /Variances('{VarianceId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				description: "Get ReportedAgainstLinkItem for a given ReportedAgainstLinkItemId - get /Variances('{VarianceId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				action: 'Variance.CIAffectLinks.GetReportedAgainstLinkItem',
			},
			{
				name: 'Variance.CIAffectLinks.GetReportedAgainstLinkItems',
				value: "GET /Variances('{VarianceId}')/CIAffectLinks",
				description: "Get ReportedAgainstLinkItem - get /Variances('{VarianceId}')/CIAffectLinks",
				action: 'Variance.CIAffectLinks.GetReportedAgainstLinkItems',
			},
			{
				name: 'Variance.CIAffectLinks.PostReportedAgainstLinkItem',
				value: "POST /Variances('{VarianceId}')/CIAffectLinks",
				description: "Create ReportedAgainstLinkItem - post /Variances('{VarianceId}')/CIAffectLinks",
				action: 'Variance.CIAffectLinks.PostReportedAgainstLinkItem',
			},
			{
				name: 'Variance.CIAffectLinks.UpdateReportedAgainstLinkItem',
				value: "PATCH /Variances('{VarianceId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				description: "Update an existing ReportedAgainstLinkItem - patch /Variances('{VarianceId}')/CIAffectLinks('{ReportedAgainstLinkItemId}')",
				action: 'Variance.CIAffectLinks.UpdateReportedAgainstLinkItem',
			},
			{
				name: 'Variance.Context.GetContainer',
				value: "GET /Variances('{VarianceId}')/Context",
				description: "Get Container - get /Variances('{VarianceId}')/Context",
				action: 'Variance.Context.GetContainer',
			},
			{
				name: 'Variance.Creator.GetUser',
				value: "GET /Variances('{VarianceId}')/Creator",
				description: "Get User - get /Variances('{VarianceId}')/Creator",
				action: 'Variance.Creator.GetUser',
			},
			{
				name: 'Variance.Folder.GetFolder',
				value: "GET /Variances('{VarianceId}')/Folder",
				description: "Get Folder - get /Variances('{VarianceId}')/Folder",
				action: 'Variance.Folder.GetFolder',
			},
			{
				name: 'Variance.Modifier.GetUser',
				value: "GET /Variances('{VarianceId}')/Modifier",
				description: "Get User - get /Variances('{VarianceId}')/Modifier",
				action: 'Variance.Modifier.GetUser',
			},
			{
				name: 'Variance.Organization.GetOrganization',
				value: "GET /Variances('{VarianceId}')/Organization",
				description: "Get Organization - get /Variances('{VarianceId}')/Organization",
				action: 'Variance.Organization.GetOrganization',
			},
			{
				name: 'Variance.ProcessLinks.GetProcessLinkItem',
				value: "GET /Variances('{VarianceId}')/ProcessLinks('{ProcessLinkItemId}')",
				description: "Get ProcessLinkItem for a given ProcessLinkItemId - get /Variances('{VarianceId}')/ProcessLinks('{ProcessLinkItemId}')",
				action: 'Variance.ProcessLinks.GetProcessLinkItem',
			},
			{
				name: 'Variance.ProcessLinks.GetProcessLinkItems',
				value: "GET /Variances('{VarianceId}')/ProcessLinks",
				description: "Get ProcessLinkItem - get /Variances('{VarianceId}')/ProcessLinks",
				action: 'Variance.ProcessLinks.GetProcessLinkItems',
			},
			{
				name: 'Variance.ProcessObjects.GetChangeItem',
				value: "GET /Variances('{VarianceId}')/ProcessObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Variances('{VarianceId}')/ProcessObjects('{ChangeItemId}')",
				action: 'Variance.ProcessObjects.GetChangeItem',
			},
			{
				name: 'Variance.ProcessObjects.GetChangeItems',
				value: "GET /Variances('{VarianceId}')/ProcessObjects",
				description: "Get ChangeItem - get /Variances('{VarianceId}')/ProcessObjects",
				action: 'Variance.ProcessObjects.GetChangeItems',
			},
			{
				name: 'Variance.ReferenceLinks.GetReferenceLinkItem',
				value: "GET /Variances('{VarianceId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				description: "Get ReferenceLinkItem for a given ReferenceLinkItemId - get /Variances('{VarianceId}')/ReferenceLinks('{ReferenceLinkItemId}')",
				action: 'Variance.ReferenceLinks.GetReferenceLinkItem',
			},
			{
				name: 'Variance.ReferenceLinks.GetReferenceLinkItems',
				value: "GET /Variances('{VarianceId}')/ReferenceLinks",
				description: "Get ReferenceLinkItem - get /Variances('{VarianceId}')/ReferenceLinks",
				action: 'Variance.ReferenceLinks.GetReferenceLinkItems',
			},
			{
				name: 'Variance.ReferenceObjects.GetChangeItem',
				value: "GET /Variances('{VarianceId}')/ReferenceObjects('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Variances('{VarianceId}')/ReferenceObjects('{ChangeItemId}')",
				action: 'Variance.ReferenceObjects.GetChangeItem',
			},
			{
				name: 'Variance.ReferenceObjects.GetChangeItems',
				value: "GET /Variances('{VarianceId}')/ReferenceObjects",
				description: "Get ChangeItem - get /Variances('{VarianceId}')/ReferenceObjects",
				action: 'Variance.ReferenceObjects.GetChangeItems',
			},
			{
				name: 'Variance.Revisions.GetChangeItem',
				value: "GET /Variances('{VarianceId}')/Revisions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Variances('{VarianceId}')/Revisions('{ChangeItemId}')",
				action: 'Variance.Revisions.GetChangeItem',
			},
			{
				name: 'Variance.Revisions.GetChangeItems',
				value: "GET /Variances('{VarianceId}')/Revisions",
				description: "Get ChangeItem - get /Variances('{VarianceId}')/Revisions",
				action: 'Variance.Revisions.GetChangeItems',
			},
			{
				name: 'Variance.VarianceOwners.GetUser',
				value: "GET /Variances('{VarianceId}')/VarianceOwners",
				description: "Get User - get /Variances('{VarianceId}')/VarianceOwners",
				action: 'Variance.VarianceOwners.GetUser',
			},
			{
				name: 'Variance.Versions.GetChangeItem',
				value: "GET /Variances('{VarianceId}')/Versions('{ChangeItemId}')",
				description: "Get ChangeItem for a given ChangeItemId - get /Variances('{VarianceId}')/Versions('{ChangeItemId}')",
				action: 'Variance.Versions.GetChangeItem',
			},
			{
				name: 'Variance.Versions.GetChangeItems',
				value: "GET /Variances('{VarianceId}')/Versions",
				description: "Get ChangeItem - get /Variances('{VarianceId}')/Versions",
				action: 'Variance.Versions.GetChangeItems',
			},
		],
	},
	...ActionCreateChangeNoticeHierarchy.description,
	...ActionEditChangeNoticesSecurityLabels.description,
	...ActionEditChangeRequestsSecurityLabels.description,
	...ActionEditChangeTasksSecurityLabels.description,
	...ActionEditProblemReportsSecurityLabels.description,
	...ActionEditVariancesSecurityLabels.description,
	...ActionSetPendingEffectivities.description,
	...ActionSetStateChangeables.description,
	...ActionSetStateChangeIssues.description,
	...ActionSetStateChangeNotices.description,
	...ActionSetStateChangeOrders.description,
	...ActionSetStateChangeRequests.description,
	...ActionSetStateChangeTasks.description,
	...ActionSetStateGenericChangeRequests.description,
	...ActionSetStateProblemReports.description,
	...ActionSetStateVariances.description,
	...ChangeableAffectedByChangeObjectsGetChangeItem.description,
	...ChangeableAffectedByChangeObjectsGetChangeItems.description,
	...ChangeableAffectedByLinksGetAffectsLinkItem.description,
	...ChangeableAffectedByLinksGetAffectsLinkItems.description,
	...ChangeableAffectedByObjectsGetChangeItem.description,
	...ChangeableAffectedByObjectsGetChangeItems.description,
	...ChangeableAffectedByTasksGetChangeItem.description,
	...ChangeableAffectedByTasksGetChangeItems.description,
	...ChangeableContextGetContainer.description,
	...ChangeableCreatorGetUser.description,
	...ChangeableModifierGetUser.description,
	...ChangeableOrganizationGetOrganization.description,
	...ChangeableResultedByChangeObjectsGetChangeItem.description,
	...ChangeableResultedByChangeObjectsGetChangeItems.description,
	...ChangeableResultedByObjectsGetChangeItem.description,
	...ChangeableResultedByObjectsGetChangeItems.description,
	...ChangeableResultingByLinksGetResultingLinkItem.description,
	...ChangeableResultingByLinksGetResultingLinkItems.description,
	...ChangeableResultingByLinksPostResultingLinkItem.description,
	...ChangeableResultingByLinksUpdateResultingLinkItem.description,
	...ChangeableRevisionsGetChangeable.description,
	...ChangeableRevisionsGetChangeables.description,
	...ChangeableUnincorporatedByChangeObjectsGetChangeItem.description,
	...ChangeableUnincorporatedByChangeObjectsGetChangeItems.description,
	...ChangeableUnincorporatedByLinksGetUnincorporatedLinkItem.description,
	...ChangeableUnincorporatedByLinksGetUnincorporatedLinkItems.description,
	...ChangeableUnincorporatedByObjectsGetChangeItem.description,
	...ChangeableUnincorporatedByObjectsGetChangeItems.description,
	...ChangeableVersionsGetChangeable.description,
	...ChangeableVersionsGetChangeables.description,
	...ChangeIssueAffectedObjectsGetChangeable.description,
	...ChangeIssueAffectedObjectsGetChangeables.description,
	...ChangeIssueAffectsLinksGetAffectsLinkItem.description,
	...ChangeIssueAffectsLinksGetAffectsLinkItems.description,
	...ChangeIssueCiAffectLinksGetReportedAgainstLinkItem.description,
	...ChangeIssueCiAffectLinksGetReportedAgainstLinkItems.description,
	...ChangeIssueCiAffectLinksPostReportedAgainstLinkItem.description,
	...ChangeIssueCiAffectLinksUpdateReportedAgainstLinkItem.description,
	...ChangeIssueCreatorGetUser.description,
	...ChangeIssueModifierGetUser.description,
	...ChangeIssueOrganizationGetOrganization.description,
	...ChangeIssueProcessLinksGetProcessLinkItem.description,
	...ChangeIssueProcessLinksGetProcessLinkItems.description,
	...ChangeIssueProcessObjectsGetChangeItem.description,
	...ChangeIssueProcessObjectsGetChangeItems.description,
	...ChangeIssueReferenceLinksGetReferenceLinkItem.description,
	...ChangeIssueReferenceLinksGetReferenceLinkItems.description,
	...ChangeIssueReferenceObjectsGetChangeItem.description,
	...ChangeIssueReferenceObjectsGetChangeItems.description,
	...ChangeIssueRevisionsGetChangeItem.description,
	...ChangeIssueRevisionsGetChangeItems.description,
	...ChangeIssueVersionsGetChangeItem.description,
	...ChangeIssueVersionsGetChangeItems.description,
	...ChangeNoticeAffectedObjectsGetChangeable.description,
	...ChangeNoticeAffectedObjectsGetChangeables.description,
	...ChangeNoticeAffectsLinksGetAffectsLinkItem.description,
	...ChangeNoticeAffectsLinksGetAffectsLinkItems.description,
	...ChangeNoticeAttachmentsDeletePtcContentItem.description,
	...ChangeNoticeAttachmentsGetContentItem.description,
	...ChangeNoticeAttachmentsGetContentItems.description,
	...ChangeNoticeAttachmentsPostContentItem.description,
	...ChangeNoticeAttachmentsUpdateContentItem.description,
	...ChangeNoticeChangeAdministratorIGetPrincipal.description,
	...ChangeNoticeChangeAdministratorIGetPrincipals.description,
	...ChangeNoticeChangeAdministratorIiGetPrincipal.description,
	...ChangeNoticeChangeAdministratorIiGetPrincipals.description,
	...ChangeNoticeCnAffectLinksGetAffectedActivityDataLinkItem.description,
	...ChangeNoticeCnAffectLinksGetAffectedActivityDataLinkItems.description,
	...ChangeNoticeCnAffectLinksPostAffectedActivityDataLinkItem.description,
	...ChangeNoticeCnAffectLinksUpdateAffectedActivityDataLinkItem.description,
	...ChangeNoticeContextGetContainer.description,
	...ChangeNoticeCreatorGetUser.description,
	...ChangeNoticeFolderGetFolder.description,
	...ChangeNoticeImplementationPlanGetChangeTask.description,
	...ChangeNoticeImplementationPlanGetChangeTasks.description,
	...ChangeNoticeModifierGetUser.description,
	...ChangeNoticeOrganizationGetOrganization.description,
	...ChangeNoticeProcessLinksGetProcessLinkItem.description,
	...ChangeNoticeProcessLinksGetProcessLinkItems.description,
	...ChangeNoticeProcessObjectsGetChangeItem.description,
	...ChangeNoticeProcessObjectsGetChangeItems.description,
	...ChangeNoticeReferenceLinksGetReferenceLinkItem.description,
	...ChangeNoticeReferenceLinksGetReferenceLinkItems.description,
	...ChangeNoticeReferenceObjectsGetChangeItem.description,
	...ChangeNoticeReferenceObjectsGetChangeItems.description,
	...ChangeNoticeResultingLinksGetResultingLinkItem.description,
	...ChangeNoticeResultingLinksGetResultingLinkItems.description,
	...ChangeNoticeResultingLinksPostResultingLinkItem.description,
	...ChangeNoticeResultingLinksUpdateResultingLinkItem.description,
	...ChangeNoticeResultingObjectsGetChangeable.description,
	...ChangeNoticeResultingObjectsGetChangeables.description,
	...ChangeNoticeRevisionsGetChangeItem.description,
	...ChangeNoticeRevisionsGetChangeItems.description,
	...ChangeNoticeUnincorporatedLinksGetUnincorporatedLinkItem.description,
	...ChangeNoticeUnincorporatedLinksGetUnincorporatedLinkItems.description,
	...ChangeNoticeVersionsGetChangeItem.description,
	...ChangeNoticeVersionsGetChangeItems.description,
	...ChangeOrderAffectedObjectsGetChangeable.description,
	...ChangeOrderAffectedObjectsGetChangeables.description,
	...ChangeOrderAffectsLinksGetAffectsLinkItem.description,
	...ChangeOrderAffectsLinksGetAffectsLinkItems.description,
	...ChangeOrderCnAffectLinksGetAffectedActivityDataLinkItem.description,
	...ChangeOrderCnAffectLinksGetAffectedActivityDataLinkItems.description,
	...ChangeOrderCreatorGetUser.description,
	...ChangeOrderModifierGetUser.description,
	...ChangeOrderOrganizationGetOrganization.description,
	...ChangeOrderProcessLinksGetProcessLinkItem.description,
	...ChangeOrderProcessLinksGetProcessLinkItems.description,
	...ChangeOrderProcessObjectsGetChangeItem.description,
	...ChangeOrderProcessObjectsGetChangeItems.description,
	...ChangeOrderReferenceLinksGetReferenceLinkItem.description,
	...ChangeOrderReferenceLinksGetReferenceLinkItems.description,
	...ChangeOrderReferenceObjectsGetChangeItem.description,
	...ChangeOrderReferenceObjectsGetChangeItems.description,
	...ChangeOrderResultingLinksGetResultingLinkItem.description,
	...ChangeOrderResultingLinksGetResultingLinkItems.description,
	...ChangeOrderResultingObjectsGetChangeable.description,
	...ChangeOrderResultingObjectsGetChangeables.description,
	...ChangeOrderRevisionsGetChangeItem.description,
	...ChangeOrderRevisionsGetChangeItems.description,
	...ChangeOrderUnincorporatedLinksGetUnincorporatedLinkItem.description,
	...ChangeOrderUnincorporatedLinksGetUnincorporatedLinkItems.description,
	...ChangeOrderVersionsGetChangeItem.description,
	...ChangeOrderVersionsGetChangeItems.description,
	...ChangeRequestAffectedObjectsGetChangeable.description,
	...ChangeRequestAffectedObjectsGetChangeables.description,
	...ChangeRequestAffectsLinksGetAffectsLinkItem.description,
	...ChangeRequestAffectsLinksGetAffectsLinkItems.description,
	...ChangeRequestAttachmentsDeletePtcContentItem.description,
	...ChangeRequestAttachmentsGetContentItem.description,
	...ChangeRequestAttachmentsGetContentItems.description,
	...ChangeRequestAttachmentsPostContentItem.description,
	...ChangeRequestAttachmentsUpdateContentItem.description,
	...ChangeRequestChangeAdministratorIGetPrincipal.description,
	...ChangeRequestChangeAdministratorIGetPrincipals.description,
	...ChangeRequestContextGetContainer.description,
	...ChangeRequestCrAffectLinksGetRelevantRequestDataLinkItem.description,
	...ChangeRequestCrAffectLinksGetRelevantRequestDataLinkItems.description,
	...ChangeRequestCrAffectLinksPostRelevantRequestDataLinkItem.description,
	...ChangeRequestCrAffectLinksUpdateRelevantRequestDataLinkItem.description,
	...ChangeRequestCreatorGetUser.description,
	...ChangeRequestFolderGetFolder.description,
	...ChangeRequestModifierGetUser.description,
	...ChangeRequestOrganizationGetOrganization.description,
	...ChangeRequestProcessLinksGetProcessLinkItem.description,
	...ChangeRequestProcessLinksGetProcessLinkItems.description,
	...ChangeRequestProcessObjectsGetChangeItem.description,
	...ChangeRequestProcessObjectsGetChangeItems.description,
	...ChangeRequestReferenceLinksGetReferenceLinkItem.description,
	...ChangeRequestReferenceLinksGetReferenceLinkItems.description,
	...ChangeRequestReferenceObjectsGetChangeItem.description,
	...ChangeRequestReferenceObjectsGetChangeItems.description,
	...ChangeRequestRevisionsGetChangeItem.description,
	...ChangeRequestRevisionsGetChangeItems.description,
	...ChangeRequestVersionsGetChangeItem.description,
	...ChangeRequestVersionsGetChangeItems.description,
	...ChangeTaskAffectedObjectsGetChangeable.description,
	...ChangeTaskAffectedObjectsGetChangeables.description,
	...ChangeTaskAffectsLinksGetAffectsLinkItem.description,
	...ChangeTaskAffectsLinksGetAffectsLinkItems.description,
	...ChangeTaskAttachmentsDeletePtcContentItem.description,
	...ChangeTaskAttachmentsGetContentItem.description,
	...ChangeTaskAttachmentsGetContentItems.description,
	...ChangeTaskAttachmentsPostContentItem.description,
	...ChangeTaskAttachmentsUpdateContentItem.description,
	...ChangeTaskCnAffectLinksGetAffectedActivityDataLinkItem.description,
	...ChangeTaskCnAffectLinksGetAffectedActivityDataLinkItems.description,
	...ChangeTaskCnAffectLinksPostAffectedActivityDataLinkItem.description,
	...ChangeTaskCnAffectLinksUpdateAffectedActivityDataLinkItem.description,
	...ChangeTaskContextGetContainer.description,
	...ChangeTaskCreatorGetUser.description,
	...ChangeTaskModifierGetUser.description,
	...ChangeTaskOrganizationGetOrganization.description,
	...ChangeTaskProcessObjectsGetChangeItem.description,
	...ChangeTaskProcessObjectsGetChangeItems.description,
	...ChangeTaskReferenceObjectsGetChangeItem.description,
	...ChangeTaskReferenceObjectsGetChangeItems.description,
	...ChangeTaskResultingLinksGetResultingLinkItem.description,
	...ChangeTaskResultingLinksGetResultingLinkItems.description,
	...ChangeTaskResultingLinksPostResultingLinkItem.description,
	...ChangeTaskResultingLinksUpdateResultingLinkItem.description,
	...ChangeTaskResultingObjectsGetChangeable.description,
	...ChangeTaskResultingObjectsGetChangeables.description,
	...ChangeTaskRevisionsGetChangeItem.description,
	...ChangeTaskRevisionsGetChangeItems.description,
	...ChangeTaskUnincorporatedLinksGetUnincorporatedLinkItem.description,
	...ChangeTaskUnincorporatedLinksGetUnincorporatedLinkItems.description,
	...ChangeTaskVersionsGetChangeItem.description,
	...ChangeTaskVersionsGetChangeItems.description,
	...FunctionGetChangeLinkTypeWithChangeObjectTypeContainer.description,
	...GenericChangeRequestAffectedObjectsGetChangeable.description,
	...GenericChangeRequestAffectedObjectsGetChangeables.description,
	...GenericChangeRequestAffectsLinksGetAffectsLinkItem.description,
	...GenericChangeRequestAffectsLinksGetAffectsLinkItems.description,
	...GenericChangeRequestCreatorGetUser.description,
	...GenericChangeRequestModifierGetUser.description,
	...GenericChangeRequestOrganizationGetOrganization.description,
	...GenericChangeRequestProcessLinksGetProcessLinkItem.description,
	...GenericChangeRequestProcessLinksGetProcessLinkItems.description,
	...GenericChangeRequestProcessObjectsGetChangeItem.description,
	...GenericChangeRequestProcessObjectsGetChangeItems.description,
	...GenericChangeRequestReferenceLinksGetReferenceLinkItem.description,
	...GenericChangeRequestReferenceLinksGetReferenceLinkItems.description,
	...GenericChangeRequestReferenceObjectsGetChangeItem.description,
	...GenericChangeRequestReferenceObjectsGetChangeItems.description,
	...GenericChangeRequestRevisionsGetChangeItem.description,
	...GenericChangeRequestRevisionsGetChangeItems.description,
	...GenericChangeRequestVersionsGetChangeItem.description,
	...GenericChangeRequestVersionsGetChangeItems.description,
	...GetChangeable.description,
	...GetChangeables.description,
	...GetChangeIssue.description,
	...GetChangeIssues.description,
	...GetChangeNotice.description,
	...GetChangeNotices.description,
	...GetChangeOrder.description,
	...GetChangeOrders.description,
	...GetChangeRequest.description,
	...GetChangeRequests.description,
	...GetChangeTask.description,
	...GetChangeTasks.description,
	...GetDeviations.description,
	...GetGenericChangeRequest.description,
	...GetGenericChangeRequests.description,
	...GetProblemReport.description,
	...GetProblemReports.description,
	...GetVariance.description,
	...GetVariances.description,
	...GetWaivers.description,
	...PostChangeNotice.description,
	...PostChangeRequest.description,
	...PostChangeTask.description,
	...PostProblemReport.description,
	...PostVariance.description,
	...ProblemReportAffectedObjectsGetChangeable.description,
	...ProblemReportAffectedObjectsGetChangeables.description,
	...ProblemReportAffectsLinksGetAffectsLinkItem.description,
	...ProblemReportAffectsLinksGetAffectsLinkItems.description,
	...ProblemReportAttachmentsDeletePtcContentItem.description,
	...ProblemReportAttachmentsGetContentItem.description,
	...ProblemReportAttachmentsGetContentItems.description,
	...ProblemReportAttachmentsPostContentItem.description,
	...ProblemReportAttachmentsUpdateContentItem.description,
	...ProblemReportChangeAdministratorIGetPrincipal.description,
	...ProblemReportChangeAdministratorIGetPrincipals.description,
	...ProblemReportCiAffectLinksGetReportedAgainstLinkItem.description,
	...ProblemReportCiAffectLinksGetReportedAgainstLinkItems.description,
	...ProblemReportCiAffectLinksPostReportedAgainstLinkItem.description,
	...ProblemReportCiAffectLinksUpdateReportedAgainstLinkItem.description,
	...ProblemReportContextGetContainer.description,
	...ProblemReportCreatorGetUser.description,
	...ProblemReportFolderGetFolder.description,
	...ProblemReportModifierGetUser.description,
	...ProblemReportOrganizationGetOrganization.description,
	...ProblemReportProcessLinksGetProcessLinkItem.description,
	...ProblemReportProcessLinksGetProcessLinkItems.description,
	...ProblemReportProcessObjectsGetChangeItem.description,
	...ProblemReportProcessObjectsGetChangeItems.description,
	...ProblemReportReferenceLinksGetReferenceLinkItem.description,
	...ProblemReportReferenceLinksGetReferenceLinkItems.description,
	...ProblemReportReferenceObjectsGetChangeItem.description,
	...ProblemReportReferenceObjectsGetChangeItems.description,
	...ProblemReportRevisionsGetChangeItem.description,
	...ProblemReportRevisionsGetChangeItems.description,
	...ProblemReportVersionsGetChangeItem.description,
	...ProblemReportVersionsGetChangeItems.description,
	...PtcChangeMgmtChangeableActionSetStateWith.description,
	...PtcChangeMgmtChangeableFunctionGetLifeCycleTemplate.description,
	...PtcChangeMgmtChangeableFunctionGetValidStateTransitions.description,
	...PtcChangeMgmtChangeIssueActionSetStateWith.description,
	...PtcChangeMgmtChangeIssueFunctionGetLifeCycleTemplate.description,
	...PtcChangeMgmtChangeIssueFunctionGetValidStateTransitions.description,
	...PtcChangeMgmtChangeNoticeActionReserveWith.description,
	...PtcChangeMgmtChangeNoticeActionSetStateWith.description,
	...PtcChangeMgmtChangeNoticeActionSubmit.description,
	...PtcChangeMgmtChangeNoticeActionUndoReservation.description,
	...PtcChangeMgmtChangeNoticeActionUploadStage1ActionWithDelegateName.description,
	...PtcChangeMgmtChangeNoticeActionUploadStage3ActionWith.description,
	...PtcChangeMgmtChangeNoticeFunctionGetLifeCycleTemplate.description,
	...PtcChangeMgmtChangeNoticeFunctionGetValidStateTransitions.description,
	...PtcChangeMgmtChangeNoticeFunctionIsReservedByMe.description,
	...PtcChangeMgmtChangeNoticeFunctionIsSubmitted.description,
	...PtcChangeMgmtChangeOrderActionSetStateWith.description,
	...PtcChangeMgmtChangeOrderFunctionGetLifeCycleTemplate.description,
	...PtcChangeMgmtChangeOrderFunctionGetValidStateTransitions.description,
	...PtcChangeMgmtChangeRequestActionReserveWith.description,
	...PtcChangeMgmtChangeRequestActionSetStateWith.description,
	...PtcChangeMgmtChangeRequestActionSubmit.description,
	...PtcChangeMgmtChangeRequestActionUndoReservation.description,
	...PtcChangeMgmtChangeRequestActionUploadStage1ActionWithDelegateName.description,
	...PtcChangeMgmtChangeRequestActionUploadStage3ActionWith.description,
	...PtcChangeMgmtChangeRequestFunctionGetLifeCycleTemplate.description,
	...PtcChangeMgmtChangeRequestFunctionGetValidStateTransitions.description,
	...PtcChangeMgmtChangeRequestFunctionIsReservedByMe.description,
	...PtcChangeMgmtChangeRequestFunctionIsSubmitted.description,
	...PtcChangeMgmtChangeTaskActionReserveWith.description,
	...PtcChangeMgmtChangeTaskActionSetStateWith.description,
	...PtcChangeMgmtChangeTaskActionUndoReservation.description,
	...PtcChangeMgmtChangeTaskActionUploadStage1ActionWithDelegateName.description,
	...PtcChangeMgmtChangeTaskActionUploadStage3ActionWith.description,
	...PtcChangeMgmtChangeTaskFunctionGetLifeCycleTemplate.description,
	...PtcChangeMgmtChangeTaskFunctionGetValidStateTransitions.description,
	...PtcChangeMgmtChangeTaskFunctionIsReservedByMe.description,
	...PtcChangeMgmtGenericChangeRequestActionSetStateWith.description,
	...PtcChangeMgmtGenericChangeRequestFunctionGetLifeCycleTemplate.description,
	...PtcChangeMgmtGenericChangeRequestFunctionGetValidStateTransitions.description,
	...PtcChangeMgmtProblemReportActionReserveWith.description,
	...PtcChangeMgmtProblemReportActionSetStateWith.description,
	...PtcChangeMgmtProblemReportActionSubmit.description,
	...PtcChangeMgmtProblemReportActionUndoReservation.description,
	...PtcChangeMgmtProblemReportActionUploadStage1ActionWithDelegateName.description,
	...PtcChangeMgmtProblemReportActionUploadStage3ActionWith.description,
	...PtcChangeMgmtProblemReportFunctionGetLifeCycleTemplate.description,
	...PtcChangeMgmtProblemReportFunctionGetValidStateTransitions.description,
	...PtcChangeMgmtProblemReportFunctionIsReservedByMe.description,
	...PtcChangeMgmtProblemReportFunctionIsSubmitted.description,
	...PtcChangeMgmtVarianceActionReserveWith.description,
	...PtcChangeMgmtVarianceActionSetStateWith.description,
	...PtcChangeMgmtVarianceActionSubmit.description,
	...PtcChangeMgmtVarianceActionUndoReservation.description,
	...PtcChangeMgmtVarianceActionUploadStage1ActionWithDelegateName.description,
	...PtcChangeMgmtVarianceActionUploadStage3ActionWith.description,
	...PtcChangeMgmtVarianceFunctionGetLifeCycleTemplate.description,
	...PtcChangeMgmtVarianceFunctionGetValidStateTransitions.description,
	...PtcChangeMgmtVarianceFunctionIsReservedByMe.description,
	...PtcChangeMgmtVarianceFunctionIsSubmitted.description,
	...UpdateChangeNotice.description,
	...UpdateChangeRequest.description,
	...UpdateChangeTask.description,
	...UpdateProblemReport.description,
	...UpdateVariance.description,
	...VarianceAffectedObjectsGetChangeable.description,
	...VarianceAffectedObjectsGetChangeables.description,
	...VarianceAffectsLinksGetAffectsLinkItem.description,
	...VarianceAffectsLinksGetAffectsLinkItems.description,
	...VarianceAttachmentsDeletePtcContentItem.description,
	...VarianceAttachmentsGetContentItem.description,
	...VarianceAttachmentsGetContentItems.description,
	...VarianceAttachmentsPostContentItem.description,
	...VarianceAttachmentsUpdateContentItem.description,
	...VarianceChangeAdministratorIGetPrincipal.description,
	...VarianceChangeAdministratorIGetPrincipals.description,
	...VarianceCiAffectLinksGetReportedAgainstLinkItem.description,
	...VarianceCiAffectLinksGetReportedAgainstLinkItems.description,
	...VarianceCiAffectLinksPostReportedAgainstLinkItem.description,
	...VarianceCiAffectLinksUpdateReportedAgainstLinkItem.description,
	...VarianceContextGetContainer.description,
	...VarianceCreatorGetUser.description,
	...VarianceFolderGetFolder.description,
	...VarianceModifierGetUser.description,
	...VarianceOrganizationGetOrganization.description,
	...VarianceProcessLinksGetProcessLinkItem.description,
	...VarianceProcessLinksGetProcessLinkItems.description,
	...VarianceProcessObjectsGetChangeItem.description,
	...VarianceProcessObjectsGetChangeItems.description,
	...VarianceReferenceLinksGetReferenceLinkItem.description,
	...VarianceReferenceLinksGetReferenceLinkItems.description,
	...VarianceReferenceObjectsGetChangeItem.description,
	...VarianceReferenceObjectsGetChangeItems.description,
	...VarianceRevisionsGetChangeItem.description,
	...VarianceRevisionsGetChangeItems.description,
	...VarianceVarianceOwnersGetUser.description,
	...VarianceVersionsGetChangeItem.description,
	...VarianceVersionsGetChangeItems.description,
];
