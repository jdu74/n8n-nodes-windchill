import * as ActionReassignWorkItems from './Action_ReassignWorkItems';
import * as FunctionGetWorkItemReassignUserListWith from './Function_GetWorkItemReassignUserList_With';
import * as FunctionGetWorkItemReassignUserListWithRestrictReassignToRole from './Function_GetWorkItemReassignUserList_With_RestrictReassignToRole';
import * as GetProjectWorkItems from './GetProjectWorkItems';
import * as GetWorkItem from './GetWorkItem';
import * as GetWorkItems from './GetWorkItems';
import * as PtcWorkflowWorkItemActionCompleteWorkitemWithWorkitemCommentVoteActionAutomateFastTrackVariablesSignatureTokenSubjectNameActivityName from './PTC.Workflow.WorkItem.Action_CompleteWorkitem_With_WorkitemComment_VoteAction_AutomateFastTrack_Variables_SignatureToken_SubjectName_ActivityName';
import * as PtcWorkflowWorkItemActionSaveWorkitemWithWorkitemCommentVoteActionAutomateFastTrackVariables from './PTC.Workflow.WorkItem.Action_SaveWorkitem_With_WorkitemComment_VoteAction_AutomateFastTrack_Variables';
import * as WorkItemActivityGetActivity from './WorkItem.Activity.GetActivity';
import * as WorkItemCompletedByGetUser from './WorkItem.CompletedBy.GetUser';
import * as WorkItemOriginalOwnerGetUser from './WorkItem.OriginalOwner.GetUser';
import * as WorkItemOwnerGetUser from './WorkItem.Owner.GetUser';
import * as WorkItemProcessTemplateGetWorkItemProcessTemplate from './WorkItem.ProcessTemplate.GetWorkItemProcessTemplate';
import * as WorkItemSubjectGetSubject from './WorkItem.Subject.GetSubject';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionReassignWorkItems,
	FunctionGetWorkItemReassignUserListWith,
	FunctionGetWorkItemReassignUserListWithRestrictReassignToRole,
	GetProjectWorkItems,
	GetWorkItem,
	GetWorkItems,
	PtcWorkflowWorkItemActionCompleteWorkitemWithWorkitemCommentVoteActionAutomateFastTrackVariablesSignatureTokenSubjectNameActivityName,
	PtcWorkflowWorkItemActionSaveWorkitemWithWorkitemCommentVoteActionAutomateFastTrackVariables,
	WorkItemActivityGetActivity,
	WorkItemCompletedByGetUser,
	WorkItemOriginalOwnerGetUser,
	WorkItemOwnerGetUser,
	WorkItemProcessTemplateGetWorkItemProcessTemplate,
	WorkItemSubjectGetSubject,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'basePath',
		name: 'basePath',
		type: 'hidden',
		noDataExpression: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.Workflow',
				],
			},
		},
		default: '/Windchill/servlet/odata/v4/Workflow',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.Workflow',
				],
			},
		},
		default: 'GET /GetWorkItemReassignUserList(WorkItems=@WorkItems)',
		options: [
			{
				name: 'Action_ReassignWorkItems',
				value: 'POST /ReassignWorkItems',
				description: 'Reassign the passed in list of workitems to passed in userName - post /ReassignWorkItems',
				action: 'Action_ReassignWorkItems',
			},
			{
				name: 'Function_GetWorkItemReassignUserList_With',
				value: 'GET /GetWorkItemReassignUserList(WorkItems=@WorkItems)',
				description: 'Gets list of Users which are in container team of passed workitem OIDs - get /GetWorkItemReassignUserList(WorkItems=@WorkItems)',
				action: 'Function_GetWorkItemReassignUserList_With',
			},
			{
				name: 'Function_GetWorkItemReassignUserList_With_RestrictReassignToRole',
				value: 'GET /GetWorkItemReassignUserList(WorkItems=@WorkItems,RestrictReassignToRole={RestrictReassignToRole})',
				description: 'Gets list of Users which are in container team of passed workitem OIDs - get /GetWorkItemReassignUserList(WorkItems=@WorkItems,RestrictReassignToRole={RestrictReassignToRole})',
				action: 'Function_GetWorkItemReassignUserList_With_RestrictReassignToRole',
			},
			{
				name: 'GetProjectWorkItems',
				value: 'GET /WorkItems/PTC.Workflow.ProjectWorkItem',
				description: 'Get WorkItems of type ProjectWorkItem - get /WorkItems/PTC.Workflow.ProjectWorkItem',
				action: 'GetProjectWorkItems',
			},
			{
				name: 'GetWorkItem',
				value: "GET /WorkItems('{WorkItemId}')",
				description: "Get WorkItem for a given WorkItemId - get /WorkItems('{WorkItemId}')",
				action: 'GetWorkItem',
			},
			{
				name: 'GetWorkItems',
				value: 'GET /WorkItems',
				description: 'Get WorkItems - get /WorkItems',
				action: 'GetWorkItems',
			},
			{
				name: 'PTC.Workflow.WorkItem.Action_CompleteWorkitem_With_WorkitemComment_VoteAction_AutomateFastTrack_Variables_SignatureToken_SubjectName_ActivityName',
				value: "POST /WorkItems('{WorkItemId}')/PTC.Workflow.CompleteWorkitem",
				description: "Complete workitem. - post /WorkItems('{WorkItemId}')/PTC.Workflow.CompleteWorkitem",
				action: 'PTC.Workflow.WorkItem.Action_CompleteWorkitem_With_WorkitemComment_VoteAction_AutomateFastTrack_Variables_SignatureToken_SubjectName_ActivityName',
			},
			{
				name: 'PTC.Workflow.WorkItem.Action_SaveWorkitem_With_WorkitemComment_VoteAction_AutomateFastTrack_Variables',
				value: "POST /WorkItems('{WorkItemId}')/PTC.Workflow.SaveWorkitem",
				description: "Complete workitem. - post /WorkItems('{WorkItemId}')/PTC.Workflow.SaveWorkitem",
				action: 'PTC.Workflow.WorkItem.Action_SaveWorkitem_With_WorkitemComment_VoteAction_AutomateFastTrack_Variables',
			},
			{
				name: 'WorkItem.Activity.GetActivity',
				value: "GET /WorkItems('{WorkItemId}')/Activity",
				description: "Get Activity - get /WorkItems('{WorkItemId}')/Activity",
				action: 'WorkItem.Activity.GetActivity',
			},
			{
				name: 'WorkItem.CompletedBy.GetUser',
				value: "GET /WorkItems('{WorkItemId}')/CompletedBy",
				description: "Get User - get /WorkItems('{WorkItemId}')/CompletedBy",
				action: 'WorkItem.CompletedBy.GetUser',
			},
			{
				name: 'WorkItem.OriginalOwner.GetUser',
				value: "GET /WorkItems('{WorkItemId}')/OriginalOwner",
				description: "Get User - get /WorkItems('{WorkItemId}')/OriginalOwner",
				action: 'WorkItem.OriginalOwner.GetUser',
			},
			{
				name: 'WorkItem.Owner.GetUser',
				value: "GET /WorkItems('{WorkItemId}')/Owner",
				description: "Get User - get /WorkItems('{WorkItemId}')/Owner",
				action: 'WorkItem.Owner.GetUser',
			},
			{
				name: 'WorkItem.ProcessTemplate.GetWorkItemProcessTemplate',
				value: "GET /WorkItems('{WorkItemId}')/ProcessTemplate",
				description: "Get WorkItemProcessTemplate - get /WorkItems('{WorkItemId}')/ProcessTemplate",
				action: 'WorkItem.ProcessTemplate.GetWorkItemProcessTemplate',
			},
			{
				name: 'WorkItem.Subject.GetSubject',
				value: "GET /WorkItems('{WorkItemId}')/Subject",
				description: "Get Subject - get /WorkItems('{WorkItemId}')/Subject",
				action: 'WorkItem.Subject.GetSubject',
			},
		],
	},
	...ActionReassignWorkItems.description,
	...FunctionGetWorkItemReassignUserListWith.description,
	...FunctionGetWorkItemReassignUserListWithRestrictReassignToRole.description,
	...GetProjectWorkItems.description,
	...GetWorkItem.description,
	...GetWorkItems.description,
	...PtcWorkflowWorkItemActionCompleteWorkitemWithWorkitemCommentVoteActionAutomateFastTrackVariablesSignatureTokenSubjectNameActivityName.description,
	...PtcWorkflowWorkItemActionSaveWorkitemWithWorkitemCommentVoteActionAutomateFastTrackVariables.description,
	...WorkItemActivityGetActivity.description,
	...WorkItemCompletedByGetUser.description,
	...WorkItemOriginalOwnerGetUser.description,
	...WorkItemOwnerGetUser.description,
	...WorkItemProcessTemplateGetWorkItemProcessTemplate.description,
	...WorkItemSubjectGetSubject.description,
];
