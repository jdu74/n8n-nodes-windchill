import { INodeProperties } from "n8n-workflow";

export const PtcChangeMgmtChangeRequestFunctionIsReservedByMeDescription: INodeProperties[] = [
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
					"GET /ChangeRequests('{ChangeRequestId}')/PTC.ChangeMgmt.IsReservedByMe()",
				],
			},
		},
		required: true,
	},
];
