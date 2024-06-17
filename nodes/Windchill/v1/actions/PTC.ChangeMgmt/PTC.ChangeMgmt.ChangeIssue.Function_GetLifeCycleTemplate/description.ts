import { INodeProperties } from "n8n-workflow";

export const PtcChangeMgmtChangeIssueFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
	{
		displayName: 'ChangeIssueId',
		name: 'ChangeIssueId-string(path)',
		description: 'Change Issue ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ChangeIssues('{ChangeIssueId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
