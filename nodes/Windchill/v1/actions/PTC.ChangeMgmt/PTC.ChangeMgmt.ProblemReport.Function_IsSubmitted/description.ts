import { INodeProperties } from "n8n-workflow";

export const PtcChangeMgmtProblemReportFunctionIsSubmittedDescription: INodeProperties[] = [
	{
		displayName: 'ProblemReportId',
		name: 'ProblemReportId-string(path)',
		description: 'Problem Report ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /ProblemReports('{ProblemReportId}')/PTC.ChangeMgmt.IsSubmitted()",
				],
			},
		},
		required: true,
	},
];
