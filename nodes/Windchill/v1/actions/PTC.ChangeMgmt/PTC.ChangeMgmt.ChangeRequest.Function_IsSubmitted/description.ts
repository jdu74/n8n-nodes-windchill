import { INodeProperties } from "n8n-workflow";

export const PtcChangeMgmtChangeRequestFunctionIsSubmittedDescription: INodeProperties[] = [
	{
		displayName: 'ChangeRequestId',
		name: 'ChangeRequestId-string(path)',
		description: 'Change Request ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.IsSubmitted()",
				],
			},
		},
		required: true,
	},
];
